import { Button } from '@mantine/core';
import { useDiscordText } from '../utils/DiscordTextContext';
import { formatDiscordText } from '../utils/colorConverter';
import React from 'react';

function CopyButton() {
  const {
    text,
    selectedText,
    textColor,
    bgColor,
    isBold,
    isUnderline
  } = useDiscordText();

  const handleCopy = async () => {
    const textToFormat = selectedText || text;
    const formattedText = formatDiscordText(
      textToFormat,
      textColor,
      bgColor,
      isBold,
      isUnderline
    );
    
    try {
      await navigator.clipboard.writeText(formattedText);
      alert('Text copied! Now paste in Discord');
    } catch (err) {
      alert(formattedText); 
    }
  };

  return (
    <Button
      fullWidth
      size="lg"
      onClick={handleCopy}
      className="mt-4"
    >
      Copy text as Discord formatted
    </Button>
  );
}

export default CopyButton;