import React from 'react';
import { Audio, Loop, Sequence, staticFile } from 'remotion';

export const SoundEffects: React.FC = () => {
  return (
    <>
      {/* Background Ambient Cyber Loop (ducked at 12% so voice is crystal clear) */}
      <Loop durationInFrames={960}>
        <Audio src={staticFile('bg_ambient.mp3')} volume={0.12} />
      </Loop>

      {/* Ringtone at hook (0s - 3.5s) */}
      <Sequence from={0} durationInFrames={105}>
        <Audio src={staticFile('ringtone.mp3')} volume={0.35} />
      </Sequence>

      {/* Glitch SFX at "hit a wall" */}
      <Sequence from={345} durationInFrames={20}>
        <Audio src={staticFile('glitch.mp3')} volume={0.45} />
      </Sequence>

      {/* Chapter 2 Whoosh */}
      <Sequence from={445} durationInFrames={25}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Glitch at "reserved for system components" */}
      <Sequence from={2230} durationInFrames={20}>
        <Audio src={staticFile('glitch.mp3')} volume={0.4} />
      </Sequence>

      {/* Glitch at "shut that door too" */}
      <Sequence from={2740} durationInFrames={20}>
        <Audio src={staticFile('glitch.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 3 Whoosh (Regulations) */}
      <Sequence from={3235} durationInFrames={25}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 4 Ping & Whoosh (Cloud Telephony Solution) */}
      <Sequence from={4435} durationInFrames={25}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
        <Audio src={staticFile('ping.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 5 Whoosh (3-Stage Pipeline) */}
      <Sequence from={6535} durationInFrames={25}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Ping at Sarvam Saaras STT */}
      <Sequence from={7070} durationInFrames={20}>
        <Audio src={staticFile('ping.mp3')} volume={0.35} />
      </Sequence>

      {/* Chapter 6 Whoosh (Challenges & Latency) */}
      <Sequence from={8695} durationInFrames={25}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
      </Sequence>

      {/* Chapter 7 Whoosh & Ping (Android 16 App Functions) */}
      <Sequence from={9835} durationInFrames={25}>
        <Audio src={staticFile('whoosh.mp3')} volume={0.4} />
        <Audio src={staticFile('ping.mp3')} volume={0.4} />
      </Sequence>

      {/* Outro Ping */}
      <Sequence from={11095} durationInFrames={25}>
        <Audio src={staticFile('ping.mp3')} volume={0.45} />
      </Sequence>
    </>
  );
};
