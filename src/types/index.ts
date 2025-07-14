export type TabType = 'videos' | 'posts' | 'priceCard' | 'products';

export interface Video {
  id: number;
  thumbnail: string;
  title: string;
  views: string;
  duration?: string;
}

export interface ProfileData {
  profilePic: string;
  name: string;
  handle: string;
  about: string;
  youtubeStats: {
    subscribers: string;
    posts: string;
  };
  instagramStats: {
    following: string;
    followers: string;
    posts: string;
  };
  lastActive: string;
  promoUrl: string;
  videos: Video[];
}
