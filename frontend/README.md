# GestureVoice

A professional, Apple-style frontend for a gesture recognition web application built with Next.js, React, and Tailwind CSS.

## Features

- **Modern Design**: Apple-inspired UI with glassmorphism effects and smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Animations**: Framer Motion animations for smooth user experience
- **Professional Typography**: Inter font family for clean, readable text
- **Multiple Pages**: Complete navigation with Home, Gestures, Guide, About, and Contact pages

## Pages

### Home Page (`/`)
- Hero section with compelling call-to-action
- "What is GestureVoice?" explanation section
- 3-step process overview (Gather, Train, Export)
- Input types showcase (Images, Sounds, Poses)

### Gestures Page (`/gestures`)
- Choose gesture type selection
- 3 Mac-style glass cards: Static Gestures, Dynamic Gestures, Both
- Hover animations and "Coming Soon!" alerts

### Guide Page (`/guide`)
- Comprehensive gesture table with meanings
- Step-by-step instructions with pro tips
- Best practices (Do's and Don'ts)

### About Page (`/about`)
- Mission statement and company story
- Team member profiles
- Company values and vision

### Contact Page (`/contact`)
- Glassmorphism contact form
- Contact information cards
- FAQ section and social links

## Tech Stack

- **Frontend**: Next.js 15 with React 18
- **Styling**: Tailwind CSS with custom CSS variables
- **Animations**: Framer Motion for smooth interactions
- **Typography**: Inter font family
- **Images**: High-quality Unsplash images
- **Icons**: Emoji icons for visual appeal

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
```bash
npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Authentication (Google Login)

Set the following environment variables (e.g. in a `.env.local` at the project root):

```bash
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate_a_strong_random_string
```

Create Google OAuth credentials for a Web application and add the authorized redirect URI:

```
http://localhost:3000/api/auth/callback/google
```

Login/Logout are available in the navbar. After login, your profile avatar and name appear with a Sign out button.

## Design Features

- **Color Scheme**: White, gray, and blue accent (#181f8a)
- **Glassmorphism**: Translucent cards with backdrop blur effects
- **Smooth Animations**: Hover effects, page transitions, and scroll animations
- **Apple-Style**: Clean, minimal design with rounded corners and soft shadows
- **Responsive**: Mobile-first approach with breakpoints for all screen sizes

## Components

- `Navigation.tsx`: Fixed navigation bar with active link highlighting
- `Footer.tsx`: Comprehensive footer with social links
- `MainLayout.tsx`: Wrapper component with navigation and footer
- `Card.tsx`: Reusable card component with hover animations

## Functionality

- Active navigation highlighting
- Smooth scroll animations
- Form submission with alerts
- Responsive design
- Hover and click animations
- Professional loading states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.