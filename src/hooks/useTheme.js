import { useMemo } from 'react';
import { EMOTION_THEMES } from '../constants/emotionThemes';

export const useTheme = (emotion) => {
  const theme = useMemo(() => {
    return EMOTION_THEMES[emotion] || EMOTION_THEMES.neutral;
  }, [emotion]);

  return theme;
};

