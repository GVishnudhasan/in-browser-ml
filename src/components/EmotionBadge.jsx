import React from 'react';
import { motion } from 'framer-motion';

const EmotionBadge = ({ mood, theme }) => {
  if (!mood || !theme) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="emotion-insights"
      style={{ borderTopColor: theme.borderColor + '20' }}
    >
      <div className="insight-label" style={{ color: theme.primary }}>
        Detected Mood
      </div>
      <div className="mood-badge" style={{ background: theme.primary }}>
        {mood}
      </div>
    </motion.div>
  );
};

export default EmotionBadge;
