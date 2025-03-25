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

    if (!textToFormat || textToFormat.trim() === '') {
      alert('Please enter some text first!');
      return;
    }

    const hasFormatting = textColor || bgColor || isBold || isUnderline;
    if (!hasFormatting) {
      alert('Please apply some formatting (color, background, bold, or underline) first!');
      return;
    }

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

  const isDisabled = !text || text.trim() === '' || 
    !(textColor || bgColor || isBold || isUnderline);

  return (
    <Button
      fullWidth
      size="lg"
      onClick={handleCopy}
      className="mt-4"
      disabled={isDisabled}
      style={{
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? 'not-allowed' : 'pointer'
      }}
    >
      {isDisabled ? 'Add text and formatting first' : 'Copy text as Discord formatted'}
    </Button>
  );
}

export default CopyButton;