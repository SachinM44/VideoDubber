import { Textarea } from '@mantine/core';
import { useDiscordText } from '../utils/DiscordTextContext';
import React from 'react';
function TextEditor() {
  const { text, setText, setSelectedText } = useDiscordText();

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleSelect = (event) => {
    const selectedText = event.target.value.substring(
      event.target.selectionStart,
      event.target.selectionEnd
    );
    setSelectedText(selectedText);
  };

  return (
    <Textarea
      value={text}
      onChange={(event) => handleTextChange(event.currentTarget.value)}
      onSelect={handleSelect}
      placeholder="Type your message here..."
      minRows={4}
      styles={{
        input: {
          backgroundColor: '#2C2F33',
          color: 'white',
          fontSize: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          '&:focus': {
            borderColor: '#5c7cfa'
          }
        }
      }}
      className="w-full"
    />
  );
}

export default TextEditor;