import React, { useState } from "react";
import { Search, Filter, ArrowUpDown, ArrowLeft, Bookmark } from "lucide-react";
import CategoryButton from "./CategoryButton";
import ContentCard from "./ContentCard";
import SearchBar from "./SearchBar";

interface ExplorePanelProps {
  onBackClick: () => void;
}

const ExplorePanel: React.FC<ExplorePanelProps> = ({ onBackClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className=" p-8 overflow-y-auto h-full animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className=" flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackClick}
              className="p-2 rounded-lg hover:bg-[#1d1d42] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-semibold">Explore</h2>
          </div>
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <CategoryButton
            label="All"
            isActive={activeCategory === "All"}
            onClick={() => setActiveCategory("All")}
          />
          <CategoryButton
            label="Articles"
            isActive={activeCategory === "Articles"}
            onClick={() => setActiveCategory("Articles")}
          />
          <CategoryButton
            label="Images"
            isActive={activeCategory === "Images"}
            onClick={() => setActiveCategory("Images")}
          />
          <CategoryButton
            label="Videos"
            isActive={activeCategory === "Videos"}
            onClick={() => setActiveCategory("Videos")}
          />
          <CategoryButton
            label="Writing"
            isActive={activeCategory === "Writing"}
            onClick={() => setActiveCategory("Writing")}
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="text-gray-400 text-sm">
            {searchQuery ? `Results for "${searchQuery}"` : "Trending content"}
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-white text-sm transition-colors">
              <ArrowUpDown size={16} />
              <span>Sort</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            title="How to Master AI Prompting"
            description="Learn the art of creating effective prompts for AI systems."
            category="Article"
            imageUrl="https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            author="Alex Morgan"
            date="3 days ago"
            readTime="5 min read"
            saved={false}
          />
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
            title="The Future of AI in Healthcare"
            description="How artificial intelligence is revolutionizing patient care."
            category="Research"
            imageUrl="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            author="Dr. Mark Wilson"
            date="2 days ago"
            readTime="12 min read"
            saved={false}
          />
          <ContentCard
            title="Building Your First Neural Network"
            description="A step-by-step guide to creating your own neural network."
            category="Tutorial"
            imageUrl="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            author="Ryan Zhang"
            date="5 days ago"
            readTime="15 min read"
            saved={false}
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
            title="Optimizing LLM Performance"
            description="Advanced techniques to improve large language model efficiency."
            category="Technical"
            imageUrl="https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            author="James Peterson"
            date="1 day ago"
            readTime="10 min read"
            saved={false}
          />
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-purple-600/20 to-blue-500/20 border border-purple-500/30 hover:from-purple-600/30 hover:to-blue-500/30 text-white py-3 px-6 rounded-full transition-all transform hover:scale-105">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePanel;
