import React from 'react';

type ProfileHeaderProps = {
  profilePic: string;
  name: string;
  handle: string;
  about: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profilePic, name, handle, about }) => {
  return (
    <div className="flex items-center p-4">
      <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
        <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="text-gray-400">{handle}</p>
        <p className="text-sm mt-1">{about}</p>
      </div>
      
      <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
        Subscribe
      </button>
    </div>
  );
};

export default ProfileHeader;
