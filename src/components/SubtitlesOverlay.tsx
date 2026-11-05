import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { SubtitleCue } from '../types';
import { subtitles } from '../subtitles';

const HIGHLIGHT_KEYWORDS = new Set([
  'AI',
  'ANDROID',
  'CALL',
  'CALLS',
  'PHONE',
  'CAPTURE_AUDIO_OUTPUT',
  'ACCESSIBILITY',
  'GOOGLE',
  'PLAY',
  'TRAI',
  'DLT',
  '140',
  '1600',
  'EXOTEL',
  'WEBSOCKET',
  'PCM',
  '8 KHZ',
  'SARVAM',
  'SAARAS',
  'BULBUL',
  'ELEVENLABS',
  'VAPI',
  'PIPECAT',
  'NODE.JS',
  'BARGE-IN',
  'LATENCY',
  'APP',
  'FUNCTIONS',
  'MCP',
  'MODEL',
  'PROTOCOL',
  'WALL',
  'BLOCKED',
  'PERMISSIONS',
  'VOICEBOT',
  'CALENDAR',
  'COMMENTS',
]);

export const SubtitlesOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find active cue
  const activeCue: SubtitleCue | undefined = subtitles.find(
    (cue) => frame >= cue.startFrame && frame <= cue.endFrame
  );

  if (!activeCue) {
    return null;
  }

  const cueDuration = Math.max(1, activeCue.endFrame - activeCue.startFrame);
  const progressInCue = (frame - activeCue.startFrame) / cueDuration;

  // Spring pop-in for the active cue
  const popSpring = spring({
    frame: frame - activeCue.startFrame,
    fps,
    config: { damping: 12, stiffness: 180 },
  });

  const words = activeCue.text.split(' ');
  const activeWordIndex = Math.min(
    words.length - 1,
    Math.floor(progressInCue * words.length)
  );

  return (
    <div
      style={{
        position: 'absolute',
        top: '1130px',
        left: '50px',
        right: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 40,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          transform: `scale(${popSpring})`,
          maxWidth: '980px',
          padding: '24px 36px',
          borderRadius: '30px',
          backgroundColor: 'rgba(8, 12, 22, 0.90)',
          backdropFilter: 'blur(24px)',
          border: '2px solid rgba(255, 255, 255, 0.15)',
          boxShadow:
            '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 240, 255, 0.25)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px 14px',
          textAlign: 'center',
        }}
      >
        {words.map((word, idx) => {
          const cleanWord = word.replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, '').toUpperCase();
          const isKeyword = HIGHLIGHT_KEYWORDS.has(cleanWord);
          const isSpoken = idx <= activeWordIndex;
          const isCurrentWord = idx === activeWordIndex;

          let color = '#ffffff';
          let bgColor = 'transparent';
          let textShadow = '0 2px 12px rgba(0,0,0,0.9)';
          let transform = 'scale(1)';

          if (isCurrentWord) {
            transform = 'scale(1.15)';
            if (isKeyword) {
              bgColor = '#fbbf24';
              color = '#000000';
              textShadow = 'none';
            } else {
              bgColor = '#00f0ff';
              color = '#000000';
              textShadow = 'none';
            }
          } else if (isSpoken) {
            if (isKeyword) {
              color = '#fef08a';
              textShadow = '0 0 16px rgba(254, 240, 138, 0.8)';
            } else {
              color = '#ffffff';
            }
          } else {
            color = 'rgba(255, 255, 255, 0.45)';
          }

          return (
            <span
              key={`${activeCue.id}-${idx}`}
              style={{
                display: 'inline-block',
                fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontWeight: 900,
                fontSize: '38px',
                lineHeight: '1.2',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                color,
                backgroundColor: bgColor,
                padding: bgColor !== 'transparent' ? '4px 12px' : '0 2px',
                borderRadius: '12px',
                transform,
                transition: 'transform 0.08s ease, background-color 0.08s ease',
                textShadow,
              }}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
