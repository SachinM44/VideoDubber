import { Group } from '@mantine/core';
import { useDiscordText } from '../utils/DiscordTextContext';
import React from 'react';
   function ColorPicker({ type }) {
   const { setTextColor, setBgColor, textColor, bgColor } = useDiscordText();

    const colors = [
    { name: 'red', hex: '#ff4136' },
    { name: 'green', hex: '#2ecc40' },
    { name: 'yellow', hex: '#ffdc00' },
    { name: 'blue', hex: '#0074d9' },
    { name: 'magenta', hex: '#f012be' },
    { name: 'cyan', hex: '#7fdbff' },
    { name: 'white', hex: '#ffffff' }
  ];

  const handleColorClick = (colorName) => {
    if (type === 'foreground') {
      setTextColor(colorName);
    } else {
      setBgColor(colorName);
    }
  };

  const isSelected = (colorName) => {
    return (type === 'foreground' ? textColor : bgColor) === colorName;
  };

  return (
    <Group>
      {colors.map((color) => (
        <div
          key={color.name}
          onClick={() => handleColorClick(color.name)}
          className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-200 ${
            isSelected(color.name) ? 'ring-2 ring-white ring-offset-2 ring-offset-[#25262b] scale-110' : 'hover:scale-110'
          }`}
          style={{
            backgroundColor: color.hex,
            border: '2px solid rgba(255,255,255,0.1)'
          }}
        />
      ))}
    </Group>
  );
}

export default ColorPicker;