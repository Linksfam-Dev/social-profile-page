import React from 'react';
import { TabType } from '../types';

interface TabNavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-t border-gray-700">
      <div className="flex">
        <button 
          className={`flex-1 py-2.5 text-center ${activeTab === 'videos' ? 'text-white border-b border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('videos')}
        >
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Videos</span>
          </div>
        </button>
        <button 
          className={`flex-1 py-2.5 text-center ${activeTab === 'posts' ? 'text-white border-b border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('posts')}
        >
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
            </svg>
            <span className="text-xs">Posts</span>
          </div>
        </button>
        <button 
          className={`flex-1 py-2.5 text-center ${activeTab === 'priceCard' ? 'text-white border-b border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('priceCard')}
        >
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span className="text-xs">Pricing</span>
          </div>
        </button>
        <button 
          className={`flex-1 py-2.5 text-center ${activeTab === 'products' ? 'text-white border-b border-white' : 'text-gray-400'}`}
          onClick={() => setActiveTab('products')}
        >
          <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-xs">Products</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
