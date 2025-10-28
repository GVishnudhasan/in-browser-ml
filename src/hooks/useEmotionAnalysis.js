import { useState, useCallback } from 'react';
import { inference } from '../inference';
import { columnNames } from '../inference';
import { modelDownloadInProgress } from '../inference';

export const useEmotionAnalysis = () => {
  const [state, setState] = useState({
    text: '',
    data: columnNames,
    latency: 0.0,
    downloading: modelDownloadInProgress(),
    dominantEmotion: null,
    isAnalyzing: false,
    userMood: null,
  });

  const analyzeEmotion = useCallback(async (text) => {
    if (!text || text.trim().length === 0) {
      setState({
        data: columnNames,
        latency: 0.0,
        dominantEmotion: null,
        isAnalyzing: false,
        userMood: null,
      });
      return;
    }

    setState(prev => ({ ...prev, isAnalyzing: true }));

    try {
      const result = await inference(text);
      const topEmotion = result[1][1] ? result[1][1][0] : null;
      const emotionName = topEmotion ? topEmotion.split(' ')[0] : null;
      
      setState(prev => ({
        ...prev,
        data: result[1],
        latency: result[0],
        dominantEmotion: emotionName,
        isAnalyzing: false,
      }));
    } catch (error) {
      console.error('Error analyzing emotion:', error);
      setState(prev => ({ ...prev, isAnalyzing: false }));
    }
  }, []);

  const handleTextChange = useCallback((text) => {
    setState(prev => ({ ...prev, text }));
    analyzeEmotion(text);
  }, [analyzeEmotion]);

  const checkModelStatus = useCallback(() => {
    const downloading = modelDownloadInProgress();
    setState(prev => ({ ...prev, downloading }));
  }, []);

  return {
    ...state,
    handleTextChange,
    checkModelStatus,
  };
};

