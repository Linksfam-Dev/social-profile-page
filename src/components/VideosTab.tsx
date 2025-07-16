import React from 'react';
import VideoCard from './VideoCard';

type Video = {
  id: number;
  thumbnail: string;
  title: string;
  views: string;
  duration?: string;
};

type VideosTabProps = {
  videos: Video[];
};

const VideosTab: React.FC<VideosTabProps> = ({ videos }) => {
  return (
    <div className="flex flex-col gap-1 -mx-2">
      {/* Full-width bleeding edge rectangular layout */}
      {videos.map(video => (
        <div key={video.id} className="w-full mb-3">
          <VideoCard 
            id={video.id}
            thumbnail={video.thumbnail} 
            title={video.title} 
            views={video.views}
            duration={video.duration}
          />
        </div>
      ))}
    </div>
  );
};

export default VideosTab;
