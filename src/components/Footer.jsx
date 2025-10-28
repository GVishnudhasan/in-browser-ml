import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ theme }) => {
  if (!theme) return null;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="footer"
      style={{ 
        background: theme.headerBg,
        borderTopColor: theme.borderColor + '40'
      }}
    >
      <p>
        Powered by{" "}
        <a 
          href="https://ai.googleblog.com/2021/10/goemotions-dataset-for-fine-grained.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: theme.primary }}
        >
          GoEmotions Dataset
        </a>
        {" • "}
        <a 
          href="https://github.com/jobergum/browser-ml-inference" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: theme.primary }}
        >
          GitHub
        </a>
      </p>
    </motion.footer>
  );
};

export default Footer;
