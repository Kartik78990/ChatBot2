import React from 'react';
import {LucideIcon } from 'lucide-react';

interface ExploreCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const ExploreCard: React.FC<ExploreCardProps> = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-[#1a1a2e] p-6 rounded-xl hover:bg-[#2d2d54] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/10 group">
      <div className={`w-14 h-14 ${color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={28} className="text-white" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default ExploreCard;