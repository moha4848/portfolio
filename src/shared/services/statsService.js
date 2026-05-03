// Simple stats service using localStorage to simulate real-time tracking
// In a production environment, this would call a real backend API

const STATS_KEY = 'portfolio_stats_v1';
const MESSAGES_KEY = 'portfolio_messages_v1';

const initialStats = {
  views: 1284,
  projectClicks: 432,
  cvDownloads: 89,
  visitorCountry: 'Morocco',
  visitorFlag: '🇲🇦',
  lastUpdated: new Date().toISOString()
};

export const statsService = {
  // Initialize stats if they don't exist
  init: () => {
    if (!localStorage.getItem(STATS_KEY)) {
      localStorage.setItem(STATS_KEY, JSON.stringify(initialStats));
    }
    if (!localStorage.getItem(MESSAGES_KEY)) {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify([]));
    }
  },

  // Track a page view and detect country
  trackView: async () => {
    const stats = JSON.parse(localStorage.getItem(STATS_KEY) || JSON.stringify(initialStats));
    stats.views += 1;
    stats.lastUpdated = new Date().toISOString();
    
    try {
      const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
      const data = await res.json();
      if (data.country) {
        stats.visitorCountry = data.country;
        stats.visitorFlag = data.country_code; // We'll convert this to emoji in UI
      }
    } catch (e) {
      console.warn("Could not detect country:", e);
    }
    
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  },

  // Track a project click
  trackProjectClick: () => {
    const stats = JSON.parse(localStorage.getItem(STATS_KEY) || JSON.stringify(initialStats));
    stats.projectClicks += 1;
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  },

  // Track a CV download
  trackCVDownload: () => {
    const stats = JSON.parse(localStorage.getItem(STATS_KEY) || JSON.stringify(initialStats));
    stats.cvDownloads += 1;
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  },

  // Get all stats
  getStats: () => {
    return JSON.parse(localStorage.getItem(STATS_KEY) || JSON.stringify(initialStats));
  },

  // Save a message from the contact form
  saveMessage: (message) => {
    const messages = JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]');
    const newMessage = {
      id: Date.now(),
      date: new Date().toISOString(),
      ...message
    };
    messages.unshift(newMessage); // Add to the beginning
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    return newMessage;
  },

  // Get all messages
  getMessages: () => {
    return JSON.parse(localStorage.getItem(MESSAGES_KEY) || '[]');
  }
};
