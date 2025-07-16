import React, { useState } from 'react';
import './App.css';

// Import components
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import VideosTab from './components/VideosTab';
import PostsTab from './components/PostsTab';
import PriceCardTab from './components/PriceCardTab';
import ProductsTab from './components/ProductsTab';

// Import types and data
import { TabType } from './types';
import { profileData } from './data/profileData';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('videos');
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen max-w-md mx-auto">
      {/* Profile Section (top 30% of screen) */}
      <div className="profile-section pb-4">
        {/* New Profile Header with all required information */}
        <ProfileHeader 
          profilePic={profileData.profilePic}
          name={profileData.name}
          handle={profileData.handle}
          about={profileData.about}
          youtubeHandle="@creator_youtube"
          youtubeSubscribers={profileData.youtubeStats.subscribers}
          youtubePosts={profileData.youtubeStats.posts}
          followers={profileData.instagramStats.followers}
          following={profileData.instagramStats.following}
          posts={profileData.instagramStats.posts}
          lastPostDate={profileData.lastActive}
          website={profileData.promoUrl.replace('https://', '')}
        />
      </div>
      
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Tab Content - YouTube Shorts style with bleeding edge rectangular cards */}
      <div className="p-2">
        {activeTab === 'videos' && <VideosTab videos={profileData.videos} />}
        {activeTab === 'posts' && <PostsTab />}
        {activeTab === 'priceCard' && <PriceCardTab />}
        {activeTab === 'products' && <ProductsTab />}
      </div>
    </div>
  );
}

export default App;
