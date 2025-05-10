import React from 'react';
import { BookOpen, ShoppingBag, Pencil, Award, Search, Home, User, MessageSquare } from 'lucide-react';
import ExploreCard from './ExploreCard';
import CategoryButton from './CategoryButton';

interface HomePanelProps {
  onChatOpen: () => void;
  onProfileOpen: () => void;
  onExploreOpen: () => void;   // Add Explore Open Prop
  onLibraryOpen: () => void;   // Add Library Open Prop
}

const HomePanel: React.FC<HomePanelProps> = ({ onChatOpen, onProfileOpen, onExploreOpen, onLibraryOpen }) => {
  return (
    <div className="flex h-full bg-[#0c0920] text-white animate-fadeIn">
      <div className="w-80 border-r border-[#1d1d42] p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
            <span className="text-white font-medium text-lg">KP</span>
          </div>
          <div>
            <p className="text-gray-400">Welcome back,</p>
            <h2 className="font-semibold text-lg">Kartik Pundir</h2>
          </div>
        </div>

        <nav className="space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1a1a2e] text-white">
            <Home size={20} />
            <span>Home</span>
          </button>
          <button
            onClick={onExploreOpen}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#1a1a2e] hover:text-white transition-colors"
          >
            <Search size={20} />
            <span>Explore</span>
          </button>
          <button
            onClick={onLibraryOpen} 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#1a1a2e] hover:text-white transition-colors"
          >
            <BookOpen size={20} />
            <span>Library</span>
          </button>
          <button 
            onClick={onProfileOpen}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-[#1a1a2e] hover:text-white transition-colors"
          >
            <User size={20} />
            <span>Profile</span>
          </button>
        </nav>

        <div className="mt-8 bg-[#1e3a8a] rounded-xl p-6 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-blue-400/20 blur-xl"></div>
          <h3 className="font-semibold text-lg mb-2">Premium Chat</h3>
          <p className="text-blue-200 mb-4">Unlock your AI chatbot & get all premium features!</p>
          <button className="bg-white/10 hover:bg-white/20 text-white py-2 px-6 rounded-full transition-all">
            Upgrade plan
          </button>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-8">Explore</h1>
          
          <div className="flex gap-3 mb-8">
            <CategoryButton label="All Type" isActive />
            <CategoryButton label="Image" />
            <CategoryButton label="Video" />
            <CategoryButton label="Writing" />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <ExploreCard 
              icon={BookOpen}
              title="Article & Blogs" 
              description="Detailed articles with helpful tips to write better content."
              color="bg-orange-500"
            />
            <ExploreCard 
              icon={Award}
              title="Marketing" 
              description="Creating ads with unique and appealing titles that work."
              color="bg-blue-500"
            />
            <ExploreCard 
              icon={ShoppingBag}
              title="Ecommerce" 
              description="Authentic product descriptions that sell."
              color="bg-purple-500"
            />
            <ExploreCard 
              icon={Pencil}
              title="Writing" 
              description="Build a compelling story from scratch with AI."
              color="bg-green-500"
            />
          </div>

          <button 
            onClick={onChatOpen}
            className="fixed bottom-12 right-12 bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-full flex items-center gap-3 text-white font-medium shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 transition-all transform hover:scale-105 active:scale-95"
          >
            <MessageSquare size={24} />
            <span>New Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePanel;
