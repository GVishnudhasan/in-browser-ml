import { useMemo } from 'react';
import { getRecommendations } from '../constants/contentRecommendations';

export const useContentRecommendations = (emotion) => {
  const recommendations = useMemo(() => {
    return getRecommendations(emotion);
  }, [emotion]);

  return recommendations;
};

