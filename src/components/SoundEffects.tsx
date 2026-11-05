import React from 'react';
import { Audio, Loop, Sequence, staticFile, useVideoConfig } from 'remotion';

export const SoundEffects: React.FC = () => {
  const { fps } = useVideoConfig();
  const toFrames = (sec: number) => Math.round(sec * fps);

  return (
    <>
      {/* Background Ambient Cyber Loop (ducked at 12% so voice is crystal clear) */}
      <Loop durationInFrames={toFrames(32)}>
        <Audio src={staticFile('bg_ambient.mp3')} volume={0.12} />
      </Loop>

      {/* Ringtone at hook (0s - 3.5s) */}
      <Sequence from={0} durationInFrames={toFrames(3.5)}>
        <Audio src={staticFile('ringtone.mp3')} volume={0.35} />
      </Sequence>

      {/* Glitch SFX at "hit a wall" (~11.5s) */}
      <Sequence from={toFrames(11.5)} durationInFrames={toFrames(0.7)}>
        <Audio src={staticFile('glitch.mp3')} volume={0.45} />
      </Sequence>

      {/* Chapter 2 Whoosh (14.8s) */}
      <Sequence from={toFrames(14.8)} durationInFrames={toFrames(0.8)}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Glitch at "reserved for system components" (74.3s) */}
      <Sequence from={toFrames(74.3)} durationInFrames={toFrames(0.7)}>
        <Audio src={staticFile('glitch.mp3')} volume={0.4} />
      </Sequence>

      {/* Glitch at "shut that door too" (91.3s) */}
      <Sequence from={toFrames(91.3)} durationInFrames={toFrames(0.7)}>
        <Audio src={staticFile('glitch.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 3 Whoosh (Regulations at 107.8s) */}
      <Sequence from={toFrames(107.8)} durationInFrames={toFrames(0.8)}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 4 Ping & Whoosh (Cloud Telephony Solution at 147.8s) */}
      <Sequence from={toFrames(147.8)} durationInFrames={toFrames(0.8)}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
        <Audio src={staticFile('ping.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 5 Whoosh (3-Stage Pipeline at 217.8s) */}
      <Sequence from={toFrames(217.8)} durationInFrames={toFrames(0.8)}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Ping at Sarvam Saaras STT (235.6s) */}
      <Sequence from={toFrames(235.6)} durationInFrames={toFrames(0.7)}>
        <Audio src={staticFile('ping.mp3')} volume={0.35} />
      </Sequence>

      {/* Chapter 6 Whoosh (Challenges & Latency at 289.8s) */}
      <Sequence from={toFrames(289.8)} durationInFrames={toFrames(0.8)}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 7 Whoosh & Ping (Android 16 App Functions at 327.8s) */}
      <Sequence from={toFrames(327.8)} durationInFrames={toFrames(0.8)}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
        <Audio src={staticFile('ping.mp3')} volume={0.4} />
      </Sequence>

      {/* Outro Ping (369.8s) */}
      <Sequence from={toFrames(369.8)} durationInFrames={toFrames(0.8)}>
        <Audio src={staticFile('ping.mp3')} volume={0.45} />
      </Sequence>
    </>
  );
};
