import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Zap, Sparkles } from 'lucide-react';
import { modelDownloadInProgress } from '../inference';

const Header = ({ theme, dominantEmotion, text, latency }) => {
  const textValue = text || '';
  const textLength = textValue.length;
  
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="app-header-section"
      style={{ 
        background: theme.headerBg,
        borderBottomColor: theme.borderColor + '40'
      }}
    >
      <div className="logo-section">
        <div className="logo" style={{ background: theme.primary }}>
          <Brain size={28} color="white" />
        </div>
        <div className="logo-text">
          <h1>Personalized Feed</h1>
          <span className="tagline">AI-Powered Content Curation</span>
        </div>
      </div>
      
      <div className="stats-section">
        {dominantEmotion && textLength > 0 && (
          <div 
            className="stat-item emotion-theme-indicator"
            style={{ 
              background: theme.primary + '15',
              color: theme.primary,
              border: `1px solid ${theme.primary}30`
            }}
          >
            <Sparkles size={16} />
            <span>{theme.name} Mode</span>
          </div>
        )}
        {latency > 0 && (
          <div className="stat-item">
            <Activity size={16} />
            <span>{latency}ms</span>
          </div>
        )}
        {modelDownloadInProgress() && (
          <div className="stat-item downloading">
            <Zap size={16} />
            <span>Loading Model...</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
