import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { Background } from './components/Background';
import { ProgressBar } from './components/ProgressBar';
import { PhoneHUD } from './components/PhoneHUD';
import { SubtitlesOverlay } from './components/SubtitlesOverlay';
import { FooterTicker } from './components/FooterTicker';
import { SoundEffects } from './components/SoundEffects';

export const PhoneAIAgentHook: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#070a12', overflow: 'hidden' }}>
      {/* Voiceover Track (starts at 0) */}
      <Audio src={staticFile('voiceover.mp3')} volume={1.0} />

      {/* Layered Sound Effects & Music */}
      <SoundEffects />

      {/* Dynamic Background */}
      <Background />

      {/* Top Header */}
      <ProgressBar />

      {/* Phone HUD */}
      <PhoneHUD />

      {/* High-Impact Subtitles */}
      <SubtitlesOverlay />

      {/* Bottom Technical Ticker */}
      <FooterTicker />
    </AbsoluteFill>
  );
};
