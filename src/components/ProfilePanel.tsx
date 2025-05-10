import React from 'react';
import { ArrowLeft, Settings, Bell, Shield, CreditCard, HelpCircle, LogOut } from 'lucide-react';

interface ProfilePanelProps {
  onBackClick: () => void;
}

const ProfilePanel: React.FC<ProfilePanelProps> = ({ onBackClick }) => {
  return (
    <div className="flex h-full bg-[#0c0920] text-white animate-fadeIn">
      <div className="flex-1 flex flex-col max-w-5xl mx-auto">
        <div className="flex items-center justify-between p-6 border-b border-[#1d1d42]">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBackClick}
              className="p-2 rounded-lg hover:bg-[#1d1d42] transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-semibold">Profile</h2>
          </div>
          <button className="p-2 rounded-lg hover:bg-[#1d1d42] transition-colors">
            <Settings size={24} className="text-gray-400" />
          </button>
        </div>

        <div className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-3xl font-medium">KP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">Kartik Pundir</h1>
                <p className="text-gray-400">kartikpundir1704@gmail.com</p>
              </div>
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#1a1a2e] hover:bg-[#1d1d42] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Bell size={24} className="text-purple-400" />
                  </div>
                  <span>Notifications</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#1a1a2e] hover:bg-[#1d1d42] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Shield size={24} className="text-blue-400" />
                  </div>
                  <span>Privacy & Security</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#1a1a2e] hover:bg-[#1d1d42] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <CreditCard size={24} className="text-green-400" />
                  </div>
                  <span>Payment Methods</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#1a1a2e] hover:bg-[#1d1d42] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-orange-500/20">
                    <HelpCircle size={24} className="text-orange-400" />
                  </div>
                  <span>Help & Support</span>
                </div>
                <span className="text-gray-400">→</span>
              </button>

              <button className="w-full flex items-center justify-between p-4 rounded-xl bg-[#1a1a2e] hover:bg-[#1d1d42] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <LogOut size={24} className="text-red-400" />
                  </div>
                  <span className="text-red-400">Log Out</span>
                </div>
                <span className="text-red-400">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePanel