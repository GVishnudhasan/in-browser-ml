import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

import { useEmotionAnalysis } from './hooks/useEmotionAnalysis';
import { useTheme } from './hooks/useTheme';
import { useContentRecommendations } from './hooks/useContentRecommendations';
import { useMoodContext } from './hooks/useMoodContext';

import Header from './components/Header';
import InputCard from './components/InputCard';
import ContentRecommendations from './components/ContentRecommendations';
import EmptyState from './components/EmptyState';
import Footer from './components/Footer';

function App() {
  const {
    text,
    dominantEmotion,
    isAnalyzing,
    latency,
    handleTextChange,
    checkModelStatus,
  } = useEmotionAnalysis();

  const theme = useTheme(dominantEmotion);
  const recommendations = useContentRecommendations(dominantEmotion);
  const userMood = useMoodContext(dominantEmotion);

  // Check model status periodically
  useEffect(() => {
    const timerID = setInterval(checkModelStatus, 1000);
    return () => clearInterval(timerID);
  }, [checkModelStatus]);

  return (
    <div 
      className="App"
      style={{
        background: theme.bgGradient,
        minHeight: '100vh',
        transition: 'background 0.6s ease-in-out',
      }}
    >
      <motion.header 
        className="App-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header 
          theme={theme}
          dominantEmotion={dominantEmotion}
          text={text || ''}
          latency={latency}
        />

        <div className="main-content">
          <div className="left-column">
            <InputCard
              text={text || ''}
              theme={theme}
              dominantEmotion={dominantEmotion}
              isAnalyzing={isAnalyzing}
              mood={userMood}
              handleTextChange={handleTextChange}
            />
          </div>

          <div className="right-column">
            <AnimatePresence mode="wait">
              {dominantEmotion && text && text.length > 0 ? (
                <ContentRecommendations
                  key={dominantEmotion}
                  theme={theme}
                  recommendations={recommendations}
                  latency={latency}
                />
              ) : (
                <EmptyState key="empty" theme={theme} />
              )}
            </AnimatePresence>
          </div>
        </div>

        <Footer theme={theme} />
      </motion.header>
    </div>
  );
}

export default App;
