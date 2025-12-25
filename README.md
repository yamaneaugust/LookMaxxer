# LookMaxxer - AI-Powered Fitness Goal Tracker

A fitness app that helps users achieve their body goals through AI-powered food recognition and progress tracking.

## Features

- 🎯 **Goal Setting** - Set personalized fitness goals (weight loss, muscle gain, etc.)
- 📸 **AI Food Recognition** - Take photos of meals for automatic calorie tracking
- 📊 **Calorie Tracker** - Track daily nutrition and macros
- 🖼️ **Progress Photos** - Upload photos to visualize your transformation
- 🤖 **AI Progress Analysis** - Get AI feedback on your body composition changes
- 📈 **Dashboard** - View stats, graphs, and progress over time

## Tech Stack

- **Mobile App:** React Native + Expo + TypeScript (iOS & Android)
- **Backend:** Node.js + Express + TypeScript
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **AI:** Anthropic Claude API (Haiku model)
- **Nutrition Data:** USDA FoodData Central API

## Project Structure

```
LookMaxxer/
├── mobile/          # React Native app (iOS & Android)
│   ├── src/
│   │   ├── screens/      # App screens
│   │   ├── navigation/   # Navigation setup
│   │   ├── components/   # Reusable components
│   │   ├── services/     # API services
│   │   └── types/        # TypeScript types
│   └── App.tsx
├── server/          # Express backend API
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Expo Go app on your phone (free from App Store/Google Play)
- Mac computer (for iOS development)
- Anthropic API key (get at console.anthropic.com)
- Supabase account (free at supabase.com)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd LookMaxxer
```

2. Install dependencies
```bash
# Install mobile app dependencies
cd mobile
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables
   - Copy `mobile/.env.example` to `mobile/.env`
   - Copy `server/.env.example` to `server/.env`
   - Add your Anthropic API key and Supabase credentials

4. Run the app
```bash
# Terminal 1 - Run backend API
cd server
npm run dev

# Terminal 2 - Run mobile app
cd mobile
npx expo start
```

5. **Scan the QR code** with the Expo Go app on your phone to run the app!

## Budget-Friendly Architecture

- **Claude API Cost:** ~$1-10/month (scales with users)
- **Hosting:** $0/month (free tiers)
- **Database:** $0/month (Supabase free tier)
- **Total:** ~$1-10/month ✅

## API Cost Estimates

- 10 users: ~$1/month
- 50 users: ~$5/month
- 100 users: ~$10/month

## License

MIT License - see LICENSE file
