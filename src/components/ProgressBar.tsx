import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { getCurrentChapter } from '../chapters';

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const chapter = getCurrentChapter(frame);

  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: 'clamp',
  });

  const totalSecs = Math.floor(durationInFrames / fps);
  const curSecs = Math.floor(frame / fps);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: '50px 48px 24px 48px',
        zIndex: 50,
      }}
    >
      {/* Top Thin Progress Line */}
      <div
        style={{
          width: '100%',
          height: '6px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '3px',
          overflow: 'hidden',
          marginBottom: '28px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: `linear-gradient(90deg, #00f0ff, ${chapter.accentColor})`,
            boxShadow: `0 0 14px ${chapter.accentColor}`,
            borderRadius: '3px',
          }}
        />
      </div>

      {/* Header Info Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left: Chapter Number & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              backgroundColor: `${chapter.accentColor}22`,
              border: `1px solid ${chapter.accentColor}88`,
              color: chapter.accentColor,
              fontSize: '18px',
              fontWeight: 800,
              letterSpacing: '1px',
              boxShadow: `0 0 10px ${chapter.accentColor}33`,
            }}
          >
            {chapter.number}
          </div>
          <div>
            <div
              style={{
                color: '#ffffff',
                fontSize: '22px',
                fontWeight: 800,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              }}
            >
              {chapter.title}
            </div>
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              {chapter.tag}
            </div>
          </div>
        </div>

        {/* Right: Time Readout */}
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '8px 18px',
            borderRadius: '16px',
            color: '#e2e8f0',
            fontFamily: 'monospace',
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '0.5px',
          }}
        >
          {formatTime(curSecs)} / {formatTime(totalSecs)}
        </div>
      </div>
    </div>
  );
};
