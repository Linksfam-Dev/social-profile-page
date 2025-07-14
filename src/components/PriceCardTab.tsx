import React from 'react';

const PriceCardTab: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-800 rounded-lg p-5">
        <h2 className="text-xl font-bold mb-4 text-center">Content Creator Pricing</h2>
        
        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Basic Shoutout</h3>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">$99</span>
            </div>
            <p className="text-gray-400 text-sm">15-second mention in a video</p>
          </div>
          
          <div className="border-b border-gray-700 pb-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Featured Content</h3>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">$249</span>
            </div>
            <p className="text-gray-400 text-sm">30-second dedicated segment</p>
          </div>
          
          <div className="border-b border-gray-700 pb-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Brand Partnership</h3>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">$499</span>
            </div>
            <p className="text-gray-400 text-sm">Full video collaboration with brand messaging</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Custom Campaign</h3>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Contact</span>
            </div>
            <p className="text-gray-400 text-sm">Customized marketing solutions for your needs</p>
          </div>
        </div>
        
        <button className="w-full bg-white text-black font-semibold py-3 rounded-lg mt-6">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PriceCardTab;
