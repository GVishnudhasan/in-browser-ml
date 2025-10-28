import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Sparkles, Zap, Heart } from 'lucide-react';

const EmptyState = ({ theme }) => {
  if (!theme) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="card empty-state"
      style={{ 
        borderColor: theme.borderColor + '50',
        background: theme.cardBg
      }}
    >
      <div className="empty-icon" style={{ background: theme.tertiary }}>
        <Sun size={32} color={theme.primary} />
      </div>
      <h3>Your Personalized Feed Awaits</h3>
      <p>Start typing to let our AI understand your mood and curate the perfect content for you.</p>
      <div className="features-list">
        <div className="feature">
          <Sparkles size={16} />
          <span>Real-time emotion detection</span>
        </div>
        <div className="feature">
          <Zap size={16} />
          <span>Instant personalization</span>
        </div>
        <div className="feature">
          <Heart size={16} />
          <span>Privacy-first on-device AI</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EmptyState;
