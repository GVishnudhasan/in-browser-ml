export const CONTENT_RECOMMENDATIONS = {
  joy: [
    { type: 'article', title: 'The Science of Happiness', category: 'Wellness', time: '5 min' },
    { type: 'video', title: 'Creativity Boost Techniques', category: 'Productivity', time: '12 min' },
    { type: 'audio', title: 'Upbeat Productivity Playlist', category: 'Music', time: '60 min' },
  ],
  curiosity: [
    { type: 'article', title: 'Exploring New Technologies in 2024', category: 'Tech', time: '8 min' },
    { type: 'video', title: 'Recent Breakthroughs in AI', category: 'Education', time: '15 min' },
    { type: 'article', title: '10 Things You Didn\'t Know About Web Development', category: 'Programming', time: '6 min' },
  ],
  excitement: [
    { type: 'video', title: 'Latest Tech Product Launches', category: 'News', time: '10 min' },
    { type: 'article', title: 'Breaking: Innovations in Browser ML', category: 'Tech', time: '7 min' },
    { type: 'audio', title: 'High-Energy Work Focus Mix', category: 'Music', time: '45 min' },
  ],
  optimism: [
    { type: 'article', title: 'Future of AI in Everyday Life', category: 'Tech', time: '8 min' },
    { type: 'video', title: 'Success Stories in Tech Industry', category: 'Inspiration', time: '14 min' },
    { type: 'article', title: 'Building Resilience in Your Career', category: 'Career', time: '6 min' },
  ],
  sadness: [
    { type: 'article', title: 'Coping Strategies for Difficult Times', category: 'Wellness', time: '5 min' },
    { type: 'audio', title: 'Calming and Reflective Music', category: 'Music', time: '50 min' },
    { type: 'article', title: 'The Power of Rest and Recovery', category: 'Wellness', time: '7 min' },
  ],
  anger: [
    { type: 'article', title: 'Channeling Energy into Productivity', category: 'Productivity', time: '6 min' },
    { type: 'video', title: 'Meditation for High Intensity Days', category: 'Wellness', time: '12 min' },
    { type: 'article', title: 'Problem-Solving Under Pressure', category: 'Skills', time: '8 min' },
  ],
  fear: [
    { type: 'article', title: 'Building Confidence in Uncertain Times', category: 'Career', time: '7 min' },
    { type: 'video', title: 'Facing Challenges with Growth Mindset', category: 'Education', time: '11 min' },
    { type: 'article', title: 'Stress Management Techniques', category: 'Wellness', time: '5 min' },
  ],
  neutral: [
    { type: 'article', title: 'Latest Tech Industry News', category: 'News', time: '6 min' },
    { type: 'video', title: 'Weekly Tech Roundup', category: 'News', time: '15 min' },
    { type: 'article', title: 'Productivity Tips for Developers', category: 'Programming', time: '5 min' },
  ],
};

const DEFAULT_RECOMMENDATIONS = [
  { type: 'article', title: 'In-Browser Machine Learning Guide', category: 'Tech', time: '8 min' },
  { type: 'video', title: 'Building AI-Powered Web Apps', category: 'Education', time: '12 min' },
  { type: 'article', title: 'Privacy-First AI Applications', category: 'Tech', time: '6 min' },
];

export const getRecommendations = (emotion) => {
  return CONTENT_RECOMMENDATIONS[emotion] || DEFAULT_RECOMMENDATIONS;
};

