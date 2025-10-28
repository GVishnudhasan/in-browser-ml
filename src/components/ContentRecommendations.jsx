import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain } from 'lucide-react';
import RecommendationItem from './RecommendationItem';

const ContentRecommendations = ({ theme, recommendations, latency }) => {
  if (!recommendations || !Array.isArray(recommendations) || !theme) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="card content-card"
      style={{
        background: theme.cardBg,
        borderColor: theme.borderColor + '30'
      }}
    >
      <div className="content-header" style={{ borderBottomColor: theme.borderColor + '20' }}>
        <div className="header-icon" style={{ background: theme.tertiary }}>
          <Sparkles size={20} color={theme.primary} />
        </div>
        <div>
          <h2>Recommended for You</h2>
          <p>Curated content based on your current mood</p>
        </div>
      </div>

      <div className="recommendations-list">
        {recommendations.map((item, idx) => (
          <RecommendationItem
            key={idx}
            item={item}
            index={idx}
            theme={theme}
          />
        ))}
      </div>

      <div className="content-footer" style={{ borderTopColor: theme.borderColor + '20' }}>
        <div className="analysis-indicator" style={{ 
          borderColor: theme.borderColor + '30',
          color: theme.primary,
          background: theme.tertiary + '40'
        }}>
          <Brain size={16} color={theme.primary} />
          <span>In-browser ML inference • {Math.round(latency || 0)}ms</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentRecommendations;
