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

- **Frontend:** React + Vite + TypeScript
- **Backend:** Node.js + Express + TypeScript
- **Database:** Supabase (PostgreSQL + Auth + Storage)
- **AI:** Anthropic Claude API (Haiku model)
- **Nutrition Data:** USDA FoodData Central API

## Project Structure

```
LookMaxxer/
├── client/          # React frontend
├── server/          # Express backend
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Anthropic API key
- Supabase account (free)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd LookMaxxer
```

2. Install dependencies
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables (see `.env.example` in client and server folders)

4. Run the development servers
```bash
# Terminal 1 - Run backend
cd server
npm run dev

# Terminal 2 - Run frontend
cd client
npm run dev
```

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
