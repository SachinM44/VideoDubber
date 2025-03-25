
function nodesToANSI(text, color, bgColor, isBold, isUnderline) {
    const states = [{ fg: 2, bg: 2, st: 2 }]; 
    let formattedText = '';
  
    formattedText += text;
  
    const newState = { ...states[0] };
    
    if (isBold) newState.st = 1;
    if (isUnderline) newState.st = 4;
    if (color) {
      newState.fg = {
        'red': 31,
        'green': 32,
        'yellow': 33,
        'blue': 34,
        'magenta': 35,
        'cyan': 36,
        'white': 37
      }[color] || 30;
    }
    if (bgColor) {
      newState.bg = {
        'black': 40,
        'red': 41,
        'green': 42,
        'yellow': 43,
        'blue': 44,
        'magenta': 45,
        'cyan': 46,
        'white': 47
      }[bgColor] || 40;
    }
  
    // Format exactly like the original
    if (newState.st !== 2) formattedText += `\x1b[${newState.st}m`;
    if (newState.fg !== 2) formattedText += `\x1b[${newState.fg}m`;
    if (newState.bg !== 2) formattedText += `\x1b[${newState.bg}m`;
    
    formattedText += '\x1b[0m';
    
    return formattedText;
  }
  
  export const formatDiscordText = (text, color, bgColor, isBold, isUnderline) => {
    
    return '```ansi\n' + nodesToANSI(text, color, bgColor, isBold, isUnderline) + '\n```';
  };