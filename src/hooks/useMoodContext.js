import { useMemo } from 'react';
import { EMOTION_MOOD_MAPPING } from '../constants/emotionMoodMapping';

export const useMoodContext = (emotion) => {
  const moodContext = useMemo(() => {
    return EMOTION_MOOD_MAPPING[emotion] || 'Exploring & Open';
  }, [emotion]);

  return moodContext;
};

