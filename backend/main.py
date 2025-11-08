from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import cv2
import mediapipe as mp
import copy
import itertools
from tensorflow import keras
import numpy as np
import pandas as pd
import string
import base64
import io
from PIL import Image
import uvicorn


app = FastAPI(
    title="Indian Sign Language Detection API",
    description="Real-time hand sign recognition API",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Loading model...")
model = keras.models.load_model("model.h5")
print("Model loaded successfully!")

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    model_complexity=0,
    max_num_hands=2,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)

# Define alphabet classes (1-9 and A-Z)
alphabet = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
alphabet += list(string.ascii_uppercase)



class PredictionRequest(BaseModel):
    image: str  # Base64 encoded image


class PredictionResponse(BaseModel):
    prediction: str
    confidence: float
    category: str


class ModelInfo(BaseModel):
    total_classes: int
    classes: list[str]
    model_loaded: bool
    api_version: str



def calc_landmark_list(image: np.ndarray, landmarks) -> list:
    """Calculate landmark coordinates from MediaPipe results"""
    image_width, image_height = image.shape[1], image.shape[0]
    landmark_point = []

    for _, landmark in enumerate(landmarks.landmark):
        landmark_x = min(int(landmark.x * image_width), image_width - 1)
        landmark_y = min(int(landmark.y * image_height), image_height - 1)
        landmark_point.append([landmark_x, landmark_y])

    return landmark_point


def pre_process_landmark(landmark_list: list) -> list:
    """Preprocess landmarks to relative and normalized coordinates"""
    temp_landmark_list = copy.deepcopy(landmark_list)

    # Convert to relative coordinates
    base_x, base_y = 0, 0
    for index, landmark_point in enumerate(temp_landmark_list):
        if index == 0:
            base_x, base_y = landmark_point[0], landmark_point[1]

        temp_landmark_list[index][0] = temp_landmark_list[index][0] - base_x
        temp_landmark_list[index][1] = temp_landmark_list[index][1] - base_y

    # Convert to a one-dimensional list
    temp_landmark_list = list(itertools.chain.from_iterable(temp_landmark_list))

    # Normalization
    max_value = max(list(map(abs, temp_landmark_list)))

    def normalize_(n):
        return n / max_value if max_value != 0 else 0

    temp_landmark_list = list(map(normalize_, temp_landmark_list))

    return temp_landmark_list


# API Routes
@app.get("/")
async def root():
    return {"backend": "running" }






@app.post("/predict", response_model=PredictionResponse)
async def predict_sign(request: PredictionRequest):
    """
    Predict hand sign from base64 encoded image
    
    Args:
        request: PredictionRequest with base64 encoded image
        
    Returns:
        PredictionResponse with prediction, confidence, and category
    """
    try:
        # Decode base64 image
        base64_str = request.image.split(',')[1] if ',' in request.image else request.image
        image_bytes = base64.b64decode(base64_str)
        
        # Convert to numpy array
        image = Image.open(io.BytesIO(image_bytes))
        image = np.array(image)
        
        # Convert RGB to BGR for OpenCV
        if len(image.shape) == 3 and image.shape[2] == 3:
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        elif len(image.shape) == 3 and image.shape[2] == 4:
            image = cv2.cvtColor(image, cv2.COLOR_RGBA2BGR)
        
        # Process with MediaPipe
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = hands.process(image_rgb)
        
        if not results.multi_hand_landmarks:
            return PredictionResponse(
                prediction="No hand detected",
                confidence=0.0,
                category="none"
            )
        
        # Process the first detected hand
        hand_landmarks = results.multi_hand_landmarks[0]
        landmark_list = calc_landmark_list(image, hand_landmarks)
        pre_processed_landmark_list = pre_process_landmark(landmark_list)
        
        # Create DataFrame for prediction
        df = pd.DataFrame(pre_processed_landmark_list).transpose()
        
        # Make prediction
        predictions = model.predict(df, verbose=0)
        predicted_classes = np.argmax(predictions, axis=1)
        confidence = float(predictions[0][predicted_classes[0]])
        
        # Get the predicted label
        label = alphabet[predicted_classes[0]]
        
        # Determine category
        category = 'number' if label.isdigit() else 'letter'
        
        return PredictionResponse(
            prediction=label,
            confidence=confidence,
            category=category
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")


@app.get("/model-info")
async def get_model_info():
    """
    Get information about the model and available classes
    
    Returns:
        Model info including available classes
    """
    return {
        "total_classes": len(alphabet),
        "numbers": [c for c in alphabet if c.isdigit()],
        "alphabets": [c for c in alphabet if c.isalpha()],
        "daily_actions": [],  # No daily actions in this model
        "model_loaded": True
    }


if __name__ == "__main__":
    uvicorn.run(
        app,
        host="0.0.0.0",
        port=8000,
        log_level="info"
    )

