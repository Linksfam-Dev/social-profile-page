import React from 'react';

type TabType = 'videos' | 'posts' | 'priceCard' | 'products';

type TabNavigationProps = {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-t border-gray-800">
      <div className="flex">
        <button 
          className={`flex-1 py-3 text-center ${activeTab === 'videos' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
        <button 
          className={`flex-1 py-3 text-center ${activeTab === 'posts' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </button>
        <button 
          className={`flex-1 py-3 text-center ${activeTab === 'priceCard' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('priceCard')}
        >
          Price Card
        </button>
        <button 
          className={`flex-1 py-3 text-center ${activeTab === 'products' ? 'text-white border-b-2 border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
