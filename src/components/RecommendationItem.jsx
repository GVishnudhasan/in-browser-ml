import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';
import { BookOpen, Video, Music } from 'lucide-react';

const ICON_MAP = {
  'article': BookOpen,
  'video': Video,
  'audio': Music,
};

const RecommendationItem = ({ item, index, theme }) => {
  if (!item || !theme) return null;
  
  const Icon = ICON_MAP[item.type] || BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="recommendation-item"
      whileHover={{ 
        scale: 1.02,
        borderColor: theme.primary 
      }}
      style={{ borderColor: theme.borderColor + '40' }}
    >
      <div className="item-type-badge" style={{ background: theme.tertiary }}>
        <Icon size={16} color={theme.primary} />
        <span>{item.type}</span>
      </div>
      <div className="item-content">
        <h3>{item.title}</h3>
        <div className="item-meta">
          <span className="category">{item.category}</span>
          <span className="time">
            <Clock size={12} />
            {item.time}
          </span>
        </div>
      </div>
      <CheckCircle size={20} className="check-icon" color={theme.primary} />
    </motion.div>
  );
};

export default RecommendationItem;
