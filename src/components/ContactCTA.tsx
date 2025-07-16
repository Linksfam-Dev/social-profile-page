import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex space-x-2">
        <button className="flex-1 bg-gray-800 py-1.5 rounded-md text-white text-sm font-medium">
          Message
        </button>
        <button className="flex-1 bg-gray-800 py-1.5 rounded-md text-white text-sm font-medium">
          Email
        </button>
        <button className="bg-gray-800 py-1.5 px-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ContactCTA;
