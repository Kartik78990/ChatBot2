import React from 'react';

const BotIllustration: React.FC = () => {
  return (
    <div className="relative w-48 h-48 mx-auto mb-6">
      <div className="absolute w-full h-full rounded-full bg-purple-500/10 animate-pulse"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Bot head */}
          <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Bot eyes */}
            <div className="absolute top-1/4 left-1/4 w-6 h-8 bg-[#140e34] rounded-full transform -rotate-12 overflow-hidden">
              <div className="w-3 h-3 bg-blue-300 rounded-full absolute top-1 left-1.5 shadow-[0_0_10px_2px_rgba(147,197,253,0.7)]"></div>
            </div>
            <div className="absolute top-1/4 right-1/4 w-6 h-8 bg-[#140e34] rounded-full transform rotate-12 overflow-hidden">
              <div className="w-3 h-3 bg-blue-300 rounded-full absolute top-1 right-1.5 shadow-[0_0_10px_2px_rgba(147,197,253,0.7)]"></div>
            </div>
          </div>
          
          {/* Bot body */}
          <div className="w-28 h-32 mt-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            
            {/* Bot arms */}
            <div className="absolute -left-8 top-6 w-10 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full transform rotate-12"></div>
            <div className="absolute -right-8 top-6 w-10 h-16 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full transform -rotate-12"></div>
            
            {/* Bot legs */}
            <div className="absolute -left-2 bottom-1 w-8 h-14 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full transform rotate-12 -translate-y-3"></div>
            <div className="absolute -right-2 bottom-1 w-8 h-14 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full transform -rotate-12 -translate-y-3"></div>
          </div>
        </div>
      </div>
      <div className="absolute -inset-4 bg-purple-500/5 rounded-full filter blur-xl"></div>
      <div className="absolute -inset-8 bg-purple-500/5 rounded-full filter blur-xl"></div>
    </div>
  );
};

export default BotIllustration;