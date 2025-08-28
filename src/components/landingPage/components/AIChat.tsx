import React, { useRef } from 'react';
import { Zap, ChevronRight } from 'lucide-react';

const AIChat: React.FC = () => {
  const suggestedQuestions = [
    "What is vehicle risk scoring?",
    "How accurate is AI valuation?",
    "Best practices for fintech integration"
  ];

  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="ai-chat" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Video */}
      <video
        ref={backgroundVideoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://ironbook-blogs.s3.ap-southeast-1.amazonaws.com/assests/website-assests/8084614-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay to darken the video and improve text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Content Wrapper for Chat Layout */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center"> {/* Adjusted max-w and added text-center */}
        {/* The section title and description are now centered */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Vehicle Intelligence Chat
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto"> {/* Added mx-auto to center paragraph */}
            Ask our AI assistant anything about vehicle verification, risk assessment, or market insights.
          </p>
        </div>
        
        {/* Chat Interface - now takes full width on large screens */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Chakra AI Assistant</h3>
              <p className="text-sm text-gray-300">Ready to help with vehicle insights</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold text-white">AI</span>
              </div>
              <div className="bg-white/20 rounded-lg p-3 max-w-md">
                <p className="text-white">Hello! I can help you with vehicle verification questions, risk analysis, and market insights. What would you like to know?</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask a question..."
              className="flex-1 px-4 py-3 bg-white/10 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-400"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center"> {/* Added justify-center for suggested questions */}
            {suggestedQuestions.map((question, index) => (
              <button 
                key={index}
                className="text-sm bg-white/10 text-gray-200 px-3 py-2 rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                {question}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AIChat;