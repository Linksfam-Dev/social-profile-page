import React, { useState } from 'react';
import './App.css';

// Import components
import ProfileHeader from './components/ProfileHeader';
import YoutubeStats from './components/YoutubeStats';
import InstagramStats from './components/InstagramStats';
import UserInfo from './components/UserInfo';
import ContactCTA from './components/ContactCTA';
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

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Profile Section (30-35% of screen) */}
      <div className="profile-section pb-4">
        {/* Header with profile pic, name, handle */}
        <ProfileHeader 
          profilePic={profileData.profilePic}
          name={profileData.name}
          handle={profileData.handle}
          about={profileData.about}
        />
        
        {/* Stats Section */}
        <div className="flex justify-between px-4 py-2">
          {/* YouTube Stats */}
          <YoutubeStats 
            subscribers={profileData.youtubeStats.subscribers}
            posts={profileData.youtubeStats.posts}
          />
          
          {/* Instagram Stats */}
          <InstagramStats
            following={profileData.instagramStats.following}
            followers={profileData.instagramStats.followers}
            posts={profileData.instagramStats.posts}
          />
        </div>
        
        {/* Last active & Promo URL */}
        <UserInfo
          lastActive={profileData.lastActive}
          promoUrl={profileData.promoUrl}
        />
        
        {/* Contact CTA */}
        <ContactCTA />
      </div>
      
      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Tab Content */}
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
