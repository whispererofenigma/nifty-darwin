import React from 'react';
import { AbsoluteFill, Audio, staticFile } from 'remotion';
import { Background } from './components/Background';
import { ProgressBar } from './components/ProgressBar';
import { PhoneHUD } from './components/PhoneHUD';
import { SubtitlesOverlay } from './components/SubtitlesOverlay';
import { FooterTicker } from './components/FooterTicker';
import { SoundEffects } from './components/SoundEffects';
import { ViralHookOverlay } from './components/ViralHookOverlay';

export const PhoneAIAgentReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: '#070a12', overflow: 'hidden' }}>
      {/* Primary Voiceover Track */}
      <Audio src={staticFile('voiceover.mp3')} volume={1.0} />

      {/* Layered Sound Effects & Music */}
      <SoundEffects />

      {/* Dynamic Cyberpunk Background with AI Imagery */}
      <Background />

      {/* 3-Second Sound-Off Hook Headline Overlay */}
      <ViralHookOverlay />

      {/* Top Progress & Chapter Bar */}
      <ProgressBar />

      {/* 3D Floating Phone Interface HUD */}
      <PhoneHUD />

      {/* High-Energy Subtitles */}
      <SubtitlesOverlay />

      {/* Bottom Technical Ticker */}
      <FooterTicker />
    </AbsoluteFill>
  );
};
