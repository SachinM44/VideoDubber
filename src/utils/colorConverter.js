// src/utils/colorConverter.js
export const convertToANSI = (color, isBackground = false) => {
    const colorMap = {
      red: isBackground ? '41' : '31',
      green: isBackground ? '42' : '32',
      yellow: isBackground ? '43' : '33',
      blue: isBackground ? '44' : '34',
      magenta: isBackground ? '45' : '35',
      cyan: isBackground ? '46' : '36',
      white: isBackground ? '47' : '37',
    };
  
    return colorMap[color] || (isBackground ? '40' : '30');
  };
  
  export const formatDiscordText = (text, color, bgColor, isBold, isUnderline) => {
    let formattedText = '\u001b[0m';
  
    if (color) formattedText += `\u001b[${convertToANSI(color)}m`;
    if (bgColor) formattedText += `\u001b[${convertToANSI(bgColor, true)}m`;
    if (isBold) formattedText += '\u001b[1m';
    if (isUnderline) formattedText += '\u001b[4m';
  
    formattedText += text + '\u001b[0m';
    return formattedText;
  };