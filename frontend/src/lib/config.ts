export const getBackendUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
  return url.replace(/\/$/, "");
};


