import React from 'react';

const SimpleDemoPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-6">
        Social Media Profile Page Demo
      </h1>
      
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-500 rounded-full mr-4"></div>
          <div>
            <h2 className="text-xl font-bold">Creator Name</h2>
            <p className="text-gray-400">@creator_handle</p>
          </div>
        </div>
        <p className="text-gray-300 mb-4">Content creator | Influencer | Web Developer</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Subscribe
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold mb-2">YouTube Stats</h3>
          <p>Subscribers: 121K</p>
          <p>Posts: 159</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="font-bold mb-2">Instagram Stats</h3>
          <p>Followers: 26.1K</p>
          <p>Following: 745</p>
          <p>Posts: 160</p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <p className="mb-2">Last Active: 2 hours ago</p>
        <p>Website: <a href="#" className="text-blue-400 underline">creator-website.com</a></p>
      </div>
      
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-6">
        Contact Creator
      </button>
    </div>
  );
};

export default SimpleDemoPage;
