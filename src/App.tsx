import React, { useState } from "react";
import WelcomePanel from "./components/WelcomePanel";
import HomePanel from "./components/HomePanel";
import ChatPanel from "./components/ChatPanel";
import ProfilePanel from "./components/ProfilePanel";
import ExplorePanel from './components/ExplorePanel';
import LibraryPanel from './components/LibraryPanel';

function App() {
  const [currentPanel, setCurrentPanel] = useState<
    "welcome" | "home" | "chat" | "explore" | "library" | "profile"
  >("welcome");

  const handleGetStarted = () => {
    setCurrentPanel("home");
  };

  const handleChatOpen = () => {
    setCurrentPanel("chat");
  };

  const handleProfileOpen = () => {
    setCurrentPanel("profile");
  };

  const handleExploreOpen = () => {
    setCurrentPanel("explore");
  };

  const handleLibraryOpen = () => {
    setCurrentPanel("library");
  };

  const handleBackClick = () => {
    setCurrentPanel("home");
  };

  return (
    
      <div className="h-screen bg-[#0c0920] relative">
        {currentPanel === "welcome" && (
          <WelcomePanel onGetStarted={handleGetStarted} />
        )}

        {currentPanel === "home" && (
          <HomePanel
            onChatOpen={handleChatOpen}
            onProfileOpen={handleProfileOpen}
            onExploreOpen={handleExploreOpen} 
            onLibraryOpen={handleLibraryOpen}  
          />
        )}

        {currentPanel === "chat" && (
          <ChatPanel onBackClick={handleBackClick} />
        )}

        {currentPanel === "explore" && (
          <ExplorePanel onBackClick={handleBackClick}/>
        )}

        {currentPanel === "library" && (
          <LibraryPanel onBackClick={handleBackClick}/>
        )}

        {currentPanel === "profile" && (
          <ProfilePanel onBackClick={handleBackClick} />
        )}
      </div>
  );
}

export default App;
