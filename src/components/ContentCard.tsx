import React, { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

interface ContentCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  saved: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  category,
  imageUrl,
  author,
  date,
  readTime,
  saved: initialSaved
}) => {
  const [saved, setSaved] = useState(initialSaved);
  const [isHovered, setIsHovered] = useState(false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };

  return (
    <div 
      className="bg-[#1a1a2e] rounded-xl overflow-hidden group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-700/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0920] to-transparent opacity-60"></div>
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium py-1 px-3 bg-purple-600/80 rounded-full text-white">{category}</span>
        </div>
        <button 
          onClick={toggleSave}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            saved 
              ? 'bg-purple-600/90 text-white' 
              : 'bg-black/30 text-white hover:bg-purple-600/80'
          } transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{author}</span>
          <div className="flex items-center gap-3">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;