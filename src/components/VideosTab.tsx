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
    <div className="grid grid-cols-2 gap-2">
      {videos.map(video => (
        <VideoCard 
          key={video.id} 
          id={video.id}
          thumbnail={video.thumbnail} 
          title={video.title} 
          views={video.views}
          duration={video.duration}
        />
      ))}
    </div>
  );
};

export default VideosTab;
