import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          LookMaxxer
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          AI-Powered Fitness Goal Tracker
        </p>
        <p className="text-lg mb-12 text-blue-50 max-w-2xl mx-auto">
          Take photos of your meals for instant calorie tracking. Upload progress photos
          and get AI-powered feedback on your transformation journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/onboarding')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors border-2 border-white"
          >
            Sign In
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">📸</div>
            <h3 className="font-semibold text-xl mb-2">AI Food Recognition</h3>
            <p className="text-blue-100">Snap a photo of your meal and get instant calorie estimates</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-semibold text-xl mb-2">Track Progress</h3>
            <p className="text-blue-100">Monitor your nutrition, weight, and body measurements</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="font-semibold text-xl mb-2">AI Insights</h3>
            <p className="text-blue-100">Get personalized feedback on your progress photos</p>
          </div>
        </div>
      </div>
    </div>
  );
}
