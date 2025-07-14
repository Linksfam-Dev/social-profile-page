import { ProfileData } from '../types';

// Mock data for the profile
export const profileData: ProfileData = {
  profilePic: 'https://via.placeholder.com/100',
  name: 'Creator Name',
  handle: '@creator_handle',
  about: 'Content creator | Influencer | Web Developer',
  youtubeStats: {
    subscribers: '121K',
    posts: '159'
  },
  instagramStats: {
    following: '745',
    followers: '26.1K',
    posts: '160'
  },
  lastActive: '2 hours ago',
  promoUrl: 'https://creator-website.com',
  videos: [
    { id: 1, thumbnail: 'https://via.placeholder.com/300x180', title: "Don't try this at home", views: '99K views' },
    { id: 2, thumbnail: 'https://via.placeholder.com/300x180', title: "Creator's Sweet Words", views: '33K views' },
    { id: 3, thumbnail: 'https://via.placeholder.com/300x180', title: "Never hesitates", views: '69K views' },
    { id: 4, thumbnail: 'https://via.placeholder.com/300x180', title: "Indians reveal their identity", views: '120K views' },
    { id: 5, thumbnail: 'https://via.placeholder.com/300x180', title: "Heartfelt gesture", views: '45K views' },
    { id: 6, thumbnail: 'https://via.placeholder.com/300x180', title: "They Trolled Her Smile", views: '78K views' },
  ]
};
