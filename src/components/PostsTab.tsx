import React from 'react';

const PostsTab: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-1">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="aspect-square bg-gray-800 rounded overflow-hidden">
          <img 
            src={`https://via.placeholder.com/300x300?text=Post+${item}`} 
            alt={`Post ${item}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PostsTab;
