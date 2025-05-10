import React, { useState } from 'react';
import { BookOpen, Grid, List, Search, Filter, Clock,ArrowLeft, Star, BookMarked, Folder } from 'lucide-react';
import ContentCard from './ContentCard';  
import SearchBar from './SearchBar';

interface ExplorePanelProps {
    onBackClick: () => void;
}

const LibraryPanel: React.FC<ExplorePanelProps> = ({onBackClick}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCollection, setActiveCollection] = useState('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="h-full flex-1 p-8 overflow-y-auto animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
            <button
              onClick={onBackClick}
              className="p-2 rounded-lg hover:bg-[#1d1d42] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-semibold">Library</h2>
          </div>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="col-span-1">
            <div className="bg-[#1a1a2e] rounded-xl p-5">
              <h3 className="font-semibold text-lg mb-4">Collections</h3>
              
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveCollection('all')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeCollection === 'all' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:bg-[#2d2d54] hover:text-white'
                  }`}
                >
                  <BookMarked size={18} />
                  <span>All Saved</span>
                  <span className="ml-auto bg-[#10101e] px-2 py-1 rounded-md text-xs">42</span>
                </button>
                
                <button 
                  onClick={() => setActiveCollection('recent')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeCollection === 'recent' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:bg-[#2d2d54] hover:text-white'
                  }`}
                >
                  <Clock size={18} />
                  <span>Recently Added</span>
                  <span className="ml-auto bg-[#10101e] px-2 py-1 rounded-md text-xs">12</span>
                </button>
                
                <button 
                  onClick={() => setActiveCollection('favorites')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeCollection === 'favorites' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:bg-[#2d2d54] hover:text-white'
                  }`}
                >
                  <Star size={18} />
                  <span>Favorites</span>
                  <span className="ml-auto bg-[#10101e] px-2 py-1 rounded-md text-xs">8</span>
                </button>
              </div>

              <h3 className="font-semibold text-lg mt-6 mb-3">Your Folders</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveCollection('ai-research')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeCollection === 'ai-research' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:bg-[#2d2d54] hover:text-white'
                  }`}
                >
                  <Folder size={18} />
                  <span>AI Research</span>
                  <span className="ml-auto bg-[#10101e] px-2 py-1 rounded-md text-xs">16</span>
                </button>
                
                <button 
                  onClick={() => setActiveCollection('tutorials')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeCollection === 'tutorials' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:bg-[#2d2d54] hover:text-white'
                  }`}
                >
                  <Folder size={18} />
                  <span>Tutorials</span>
                  <span className="ml-auto bg-[#10101e] px-2 py-1 rounded-md text-xs">7</span>
                </button>
                
                <button 
                  onClick={() => setActiveCollection('inspiration')} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeCollection === 'inspiration' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:bg-[#2d2d54] hover:text-white'
                  }`}
                >
                  <Folder size={18} />
                  <span>Inspiration</span>
                  <span className="ml-auto bg-[#10101e] px-2 py-1 rounded-md text-xs">11</span>
                </button>
                
                <button className="w-full flex items-center justify-center text-blue-400 hover:text-blue-300 px-4 py-3 rounded-lg transition-colors">
                  <span>+ Create New Folder</span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">
                {activeCollection === 'all' && 'All Saved Items'}
                {activeCollection === 'recent' && 'Recently Added'}
                {activeCollection === 'favorites' && 'Favorites'}
                {activeCollection === 'ai-research' && 'AI Research'}
                {activeCollection === 'tutorials' && 'Tutorials'}
                {activeCollection === 'inspiration' && 'Inspiration'}
              </h3>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid size={18} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#2d2d54] text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  <List size={18} />
                </button>
                <button className="p-2 rounded text-gray-400 hover:text-white">
                  <Filter size={18} />
                </button>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContentCard 
                  title="Creating Stunning Visuals with AI"
                  description="Transform your design workflow with these AI techniques."
                  category="Tutorial"
                  imageUrl="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  author="Jessica Chen"
                  date="1 week ago"
                  readTime="8 min read"
                  saved={true}
                />
                <ContentCard 
                  title="Ethics in AI Development"
                  description="Exploring the ethical considerations of AI advancement."
                  category="Article"
                  imageUrl="https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  author="Sophia Williams"
                  date="3 days ago"
                  readTime="7 min read"
                  saved={true}
                />
                <ContentCard 
                  title="The Future of Generative AI"
                  description="What to expect in the next wave of AI innovation."
                  category="Research"
                  imageUrl="https://images.pexels.com/photos/8438951/pexels-photo-8438951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  author="Michael Torres"
                  date="5 days ago"
                  readTime="9 min read"
                  saved={true}
                />
                <ContentCard 
                  title="AI Tools for Content Creators"
                  description="Boost your productivity with these essential AI tools."
                  category="Guide"
                  imageUrl="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  author="Priya Sharma"
                  date="2 weeks ago"
                  readTime="11 min read"
                  saved={true}
                />
              </div>
            ) : (
              <div className="space-y-4">
                {[
                  {
                    title: "Creating Stunning Visuals with AI",
                    description: "Transform your design workflow with these AI techniques.",
                    category: "Tutorial",
                    author: "Jessica Chen",
                    date: "1 week ago"
                  },
                  {
                    title: "Ethics in AI Development",
                    description: "Exploring the ethical considerations of AI advancement.",
                    category: "Article",
                    author: "Sophia Williams",
                    date: "3 days ago"
                  },
                  {
                    title: "The Future of Generative AI",
                    description: "What to expect in the next wave of AI innovation.",
                    category: "Research",
                    author: "Michael Torres",
                    date: "5 days ago"
                  },
                  {
                    title: "AI Tools for Content Creators",
                    description: "Boost your productivity with these essential AI tools.",
                    category: "Guide",
                    author: "Priya Sharma",
                    date: "2 weeks ago"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-[#1a1a2e] rounded-lg hover:bg-[#2d2d54] transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs px-2 py-0.5 bg-[#10101e] rounded-full">{item.category}</span>
                        <span className="text-gray-400 text-xs">{item.date}</span>
                      </div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                      <div className="text-xs text-gray-500 mt-2">By {item.author}</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="p-2 rounded-full hover:bg-[#10101e] text-gray-400 hover:text-white transition-colors">
                        <Star size={16} className="text-yellow-500" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-[#10101e] text-gray-400 hover:text-white transition-colors">
                        <BookMarked size={16} className="text-blue-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPanel;