import React from 'react';

interface UserInfoProps {
  lastActive: string;
  promoUrl: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ lastActive, promoUrl }) => {
  return (
    <div className="px-4 py-1">
      {/* Last active status with dot indicator */}
      <div className="flex items-center mb-1">
        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
        <p className="text-xs text-gray-400">Active {lastActive}</p>
      </div>
      
      {/* Promo URL with link styling */}
      <a href={promoUrl} className="text-xs text-blue-400 hover:underline block truncate">
        {promoUrl}
      </a>
    </div>
  );
};

export default UserInfo;
