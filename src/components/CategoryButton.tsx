import React from 'react';

interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  label, 
  isActive = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-5 rounded-full text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md shadow-purple-900/30' 
          : 'bg-[#1a1a2e] text-gray-400 hover:text-white hover:bg-[#2d2d54]'
      }`}
    >
      {label}
    </button>
  );
};

export default CategoryButton;