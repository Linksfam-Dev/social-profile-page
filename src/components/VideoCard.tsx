import React from 'react';

type VideoCardProps = {
  id: number;
  thumbnail: string;
  title: string;
  views: string;
  duration?: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ thumbnail, title, views, duration = '03:24' }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-40 object-cover" />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-1 py-0.5 text-xs">
          {duration}
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{views}</p>
      </div>
    </div>
  );
};

export default VideoCard;
