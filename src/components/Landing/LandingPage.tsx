import React from 'react';
import { ArrowRight, Bot, Zap, Shield, Globe } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="flex-1 overflow-auto">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Your AI Assistant for Blockchain & Crypto
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Get instant answers to your blockchain questions, analyze smart contracts, and stay updated with market insights.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <span>Try ChainGPT Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ChainGPT?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bot className="w-8 h-8 text-blue-500" />}
              title="AI-Powered Analysis"
              description="Get instant, accurate answers to your blockchain and cryptocurrency questions."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-green-500" />}
              title="Smart Contract Security"
              description="Analyze smart contracts for vulnerabilities and best practices."
            />
            <FeatureCard
              icon={<Globe className="w-8 h-8 text-purple-500" />}
              title="Market Intelligence"
              description="Stay updated with real-time market insights and trends."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">
            Join thousands of users who trust ChainGPT for their blockchain needs.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors inline-flex items-center space-x-2"
          >
            <Zap className="w-5 h-5" />
            <span>Launch ChainGPT</span>
          </button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}