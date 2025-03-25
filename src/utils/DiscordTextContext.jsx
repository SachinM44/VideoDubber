// src/utils/DiscordTextContext.jsx
import { createContext, useContext, useState } from 'react';
import React from 'react';
const DiscordTextContext = createContext();

export function DiscordTextProvider({ children }) {
  const [text, setText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [textColor, setTextColor] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const value = {
    text,
    setText,
    selectedText,
    setSelectedText,
    textColor,
    setTextColor,
    bgColor,
    setBgColor,
    isBold,
    setIsBold,
    isUnderline,
    setIsUnderline
  };

  return (
    <DiscordTextContext.Provider value={value}>
      {children}
    </DiscordTextContext.Provider>
  );
}

export const useDiscordText = () => {
  const context = useContext(DiscordTextContext);
  if (!context) {
    throw new Error('useDiscordText must be used within a DiscordTextProvider');
  }
  return context;
};