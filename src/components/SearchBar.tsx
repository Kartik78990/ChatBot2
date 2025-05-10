import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };
  
  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`relative w-full max-w-md transition-all duration-300 ${
        isFocused ? 'ring-2 ring-purple-500/50' : ''
      }`}
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search content..."
          className="w-full bg-[#1a1a2e] text-white rounded-full py-2 pl-10 pr-10 focus:outline-none"
        />
        <Search 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>
      {isFocused && query.length > 0 && (
        <div className="absolute z-10 mt-2 w-full bg-[#1a1a2e] rounded-lg shadow-lg border border-[#2d2d54] py-2 animate-fadeIn">
          <div className="px-3 py-1 text-xs text-gray-400">Suggestions</div>
          {['ai research', 'machine learning', 'neural networks', 'prompt engineering']
            .filter(suggestion => suggestion.includes(query.toLowerCase()))
            .map((suggestion, index) => (
              <button
                key={index}
                type="button"
                className="w-full text-left px-3 py-2 hover:bg-[#2d2d54] text-sm transition-colors"
                onClick={() => {
                  setQuery(suggestion);
                  onSearch(suggestion);
                }}
              >
                {suggestion}
              </button>
            ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;