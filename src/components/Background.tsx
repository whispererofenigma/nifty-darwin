import React from 'react';
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { getCurrentChapter } from '../chapters';

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chapter = getCurrentChapter(frame, fps);

  // Smooth subtle slow pan / zoom
  const loopFrames = fps * 30; // 30s cycle
  const scale = interpolate(frame % loopFrames, [0, loopFrames], [1.0, 1.08]);

  return (
    <AbsoluteFill style={{ backgroundColor: '#070a12', overflow: 'hidden' }}>
      {/* Background visual switching based on chapter */}
      {chapter.id === 'hook' && (
        <AbsoluteFill style={{ opacity: 0.35, transform: `scale(${scale})` }}>
          <Img
            src={staticFile('hero_ai_phone.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      )}

      {chapter.id === 'android_wall' && (
        <AbsoluteFill style={{ opacity: 0.32, transform: `scale(${scale})` }}>
          <Img
            src={staticFile('android_security.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      )}

      {chapter.id === 'regulations' && (
        <AbsoluteFill style={{ opacity: 0.36, transform: `scale(${scale})` }}>
          <Img
            src={staticFile('telecom_dlt.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      )}

      {chapter.id === 'cloud_telephony' && (
        <AbsoluteFill style={{ opacity: 0.36, transform: `scale(${scale})` }}>
          <Img
            src={staticFile('cloud_telephony.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      )}

      {(chapter.id === 'pipeline' || chapter.id === 'challenges') && (
        <AbsoluteFill style={{ opacity: 0.35, transform: `scale(${scale})` }}>
          <Img
            src={staticFile('cloud_telephony.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      )}

      {(chapter.id === 'app_functions' || chapter.id === 'outro') && (
        <AbsoluteFill style={{ opacity: 0.38, transform: `scale(${scale})` }}>
          <Img
            src={staticFile('agent_future.jpg')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </AbsoluteFill>
      )}

      {/* Cyberpunk Grid Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.8,
        }}
      />

      {/* Radial Gradient Glows */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${chapter.accentColor}26 0%, transparent 70%)`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />

      {/* Dark Vignette to keep content legible */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(4, 7, 14, 0.88) 100%)',
        }}
      />
    </AbsoluteFill>
  );
};
