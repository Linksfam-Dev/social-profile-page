import React, { useState } from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  profilePic: string;
  name: string;
  handle: string;
  about: string;
  youtubeHandle?: string;
  youtubeSubscribers?: string | number;
  youtubePosts?: string | number;
  followers?: string | number;
  following?: string | number;
  posts?: string | number;
  lastPostDate?: string;
  website?: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ 
  profilePic, 
  name, 
  handle, 
  about,
  youtubeHandle = '@youtubechannel',
  youtubeSubscribers = 0,
  youtubePosts = 0,
  followers = 0,
  following = 0,
  posts = 0,
  lastPostDate = '2 days ago',
  website = 'www.example.com'
}) => {
  const [bioExpanded, setBioExpanded] = useState(false);
  const truncatedAbout = about.length > 120 && !bioExpanded ? about.substring(0, 120) + '...' : about;

  return (
    <div className="flex flex-col w-full pb-2 dark:bg-black bg-white dark:text-white text-black">
      {/* Top section with profile pic */}
      <div className="flex items-start px-4 py-2">
        {/* Left side - profile pic and name */}
        <div className="flex flex-col items-center mr-4">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-md font-bold mt-2 text-center">{name}</h1>
        </div>
        
        {/* Right side - Social handles and stats side by side */}
        <div className="flex-1">
          {/* Top row with handles side by side */}
          <div className="flex justify-between mb-2">
            {/* Instagram handle */}
            <div className="flex items-center">
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="dark:text-white text-black">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-sm dark:text-gray-400 text-gray-600">{handle}</span>
            </div>
            
            {/* YouTube handle */}
            <div className="flex items-center">
              <div className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <span className="text-sm dark:text-gray-400 text-gray-600">{youtubeHandle}</span>
            </div>
          </div>
          
          {/* Stats row side by side */}
          <div className="flex justify-between mb-3">
            {/* Instagram stats */}
            <div className="flex space-x-3">
              <div>
                <p className="text-xs dark:text-gray-400 text-gray-600">Posts</p>
                <p className="text-sm font-medium">{typeof posts === 'number' ? posts.toLocaleString() : posts}</p>
              </div>
              <div>
                <p className="text-xs dark:text-gray-400 text-gray-600">Followers</p>
                <p className="text-sm font-medium">{typeof followers === 'number' ? followers.toLocaleString() : followers}</p>
              </div>
              <div>
                <p className="text-xs dark:text-gray-400 text-gray-600">Following</p>
                <p className="text-sm font-medium">{typeof following === 'number' ? following.toLocaleString() : following}</p>
              </div>
            </div>
            
            {/* YouTube stats */}
            <div className="flex space-x-3">
              <div>
                <p className="text-xs dark:text-gray-400 text-gray-600">Subscribers</p>
                <p className="text-sm font-medium">{typeof youtubeSubscribers === 'number' ? youtubeSubscribers.toLocaleString() : youtubeSubscribers}</p>
              </div>
              <div>
                <p className="text-xs dark:text-gray-400 text-gray-600">Posts</p>
                <p className="text-sm font-medium">{typeof youtubePosts === 'number' ? youtubePosts.toLocaleString() : youtubePosts}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Last post date */}
      <div className="px-4 mt-1">
        <p className="text-xs text-gray-400">Last post: {lastPostDate}</p>
      </div>
      
      {/* Bio section with Read More */}
      <div className="px-4 mt-2">
        <p className="text-sm">{truncatedAbout}</p>
        {about.length > 120 && (
          <button 
            className="text-blue-400 text-xs font-medium mt-1"
            onClick={() => setBioExpanded(!bioExpanded)}
          >
            {bioExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      
      {/* Website and Message CTA */}
      <div className="flex justify-between items-center px-4 mt-2">
        <a href={`https://${website}`} className="text-blue-400 text-sm hover:underline">{website}</a>
        
        <div className="flex space-x-2">
          {/* WhatsApp icon */}
          <button className="bg-gray-800 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
          
          {/* Email icon */}
          <button className="bg-gray-800 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
