import React from 'react';

type VideoCardProps = {
  id: number;
  thumbnail: string;
  title: string;
  views: string;
  duration?: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, title, views, duration }) => {
  return (
    <div className="relative overflow-hidden w-full dark:bg-black bg-white dark:text-white text-black">
      {/* 9:16 aspect ratio container for vertical video - no border radius for bleeding edge */}
      <div className="relative pb-[177.77%]">
        {/* Full-bleed image */}
        <img 
          src={thumbnail} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
        
        {/* YouTube Shorts icon */}
        <div className="absolute top-2 right-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="#FF0000" />
            <path d="M16 12L10 16V8L16 12Z" fill="white" />
          </svg>
        </div>
        
        {/* Duration badge */}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-1 py-0.5 text-xs text-white">
            {duration}
          </div>
        )}
        
        {/* Gradient overlay for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Video title and views - positioned at the bottom over gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
          <h3 className="text-sm font-medium truncate">{title}</h3>
          <p className="text-xs opacity-80">{views} views</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
