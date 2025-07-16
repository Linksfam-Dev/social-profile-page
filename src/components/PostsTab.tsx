import React from 'react';

const PostsTab: React.FC = () => {
  return (
    <div className="flex flex-col gap-1 -mx-2">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="w-full mb-3 relative">
          {/* 9:16 aspect ratio container for vertical posts */}
          <div className="relative pb-[177.77%]">
            <img 
              src={`https://via.placeholder.com/1080x1920?text=Post+${item}`} 
              alt={`Post ${item}`} 
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            
            {/* Instagram Reel icon */}
            <div className="absolute top-2 right-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <linearGradient id="insta-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFDD55" />
                  <stop offset="50%" stopColor="#FF543E" />
                  <stop offset="100%" stopColor="#C837AB" />
                </linearGradient>
                <circle cx="12" cy="12" r="12" fill="url(#insta-gradient)" />
                <path d="M16 12L10 16V8L16 12Z" fill="white" />
              </svg>
            </div>
            
            {/* Gradient overlay for text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
            
            {/* Post caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
              <p className="text-sm font-medium truncate">Instagram Post #{item}</p>
              <p className="text-xs opacity-80">View post details</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsTab;
