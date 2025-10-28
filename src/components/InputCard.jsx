import React from 'react';
import { Activity } from 'lucide-react';
import EmotionBadge from './EmotionBadge';

const InputCard = ({ text, theme, dominantEmotion, isAnalyzing, mood, handleTextChange }) => {
  const textValue = text || '';
  const textLength = textValue.length;

  return (
    <div 
      className="card input-card"
      style={{
        background: theme.cardBg,
        borderColor: theme.borderColor + '30'
      }}
    >
      <div className="card-header" style={{ borderBottomColor: theme.borderColor + '20' }}>
        <h2>Share Your Thoughts</h2>
        <p>Tell me how you're feeling, and I'll personalize your content experience</p>
      </div>
      
      <textarea
        rows="8"
        className="App-textarea"
        placeholder="e.g., I'm excited about learning new ML techniques for web development..."
        value={textValue}
        onChange={(e) => handleTextChange && handleTextChange(e.target.value)}
        style={{
          borderColor: dominantEmotion ? theme.borderColor : '#e2e8f0',
          background: theme.cardBg,
        }}
      />
      
      {isAnalyzing && (
        <div className="analyzing-indicator">
          <Activity size={18} className="spinning" />
          <span>Analyzing your sentiment...</span>
        </div>
      )}

      {textLength > 0 && !isAnalyzing && dominantEmotion && (
        <EmotionBadge mood={mood} theme={theme} />
      )}
    </div>
  );
};

export default InputCard;
