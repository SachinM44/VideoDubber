// src/App.jsx
import { MantineProvider } from '@mantine/core';
import TextEditor from './components/TextEditor';
import ColorPicker from './components/ColorPicker';
import FormattingTools from './components/FormattingTools';
import CopyButton from './components/CopyButton';
import { DiscordTextProvider } from './utils/DiscordTextContext';
import React from 'react';
function App() {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        primaryColor: 'blue',
      }}
    >
      <DiscordTextProvider>
        <div className="min-h-screen bg-[#1a1b1e]">
          <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">
              Discord Text Generator
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-8 bg-[#25262b] p-6 rounded-lg shadow-xl">
              <FormattingTools />
              
              <div className="space-y-6">
                <div className="w-full">
                  <h2 className="text-lg mb-3 text-white font-medium">FG (Text Color)</h2>
                  <ColorPicker type="foreground" />
                </div>
                <div className="w-full">
                  <h2 className="text-lg mb-3 text-white font-medium">BG (Background Color)</h2>
                  <ColorPicker type="background" />
                </div>
              </div>
              
              <TextEditor />
              <CopyButton />
            </div>
          </main>
        </div>
      </DiscordTextProvider>
    </MantineProvider>
  );
}

export default App;