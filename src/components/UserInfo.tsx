import React from 'react';

type UserInfoProps = {
  lastActive: string;
  promoUrl: string;
};

const UserInfo: React.FC<UserInfoProps> = ({ lastActive, promoUrl }) => {
  return (
    <div className="px-4 py-2">
      <p className="text-sm text-gray-400">Last active: {lastActive}</p>
      <p className="text-sm text-blue-400">{promoUrl}</p>
    </div>
  );
};

export default UserInfo;
