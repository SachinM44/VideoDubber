// src/components/FormattingTools.jsx
import { Button, Group } from '@mantine/core';
import { useDiscordText } from '../utils/DiscordTextContext';
import React from 'react';
function FormattingTools() {
  const {
    setTextColor,
    setBgColor,
    setIsBold,
    setIsUnderline,
    isBold,
    isUnderline
  } = useDiscordText();

  const handleReset = () => {
    setTextColor('');
    setBgColor('');
    setIsBold(false);
    setIsUnderline(false);
  };

  return (
    <Group>
      <Button
        variant="filled"
        color="gray"
        onClick={handleReset}
        className="hover:bg-gray-600"
      >
        Reset All
      </Button>
      <Button
        variant={isBold ? "filled" : "outline"}
        color="gray"
        onClick={() => setIsBold(!isBold)}
        className="hover:bg-gray-600"
      >
        Bold
      </Button>
      <Button
        variant={isUnderline ? "filled" : "outline"}
        color="gray"
        onClick={() => setIsUnderline(!isUnderline)}
        className="hover:bg-gray-600"
      >
        Line
      </Button>
    </Group>
  );
}

export default FormattingTools;