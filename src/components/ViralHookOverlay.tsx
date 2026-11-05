import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { AlertCircle, Flame } from 'lucide-react';

export const ViralHookOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Active during first 3.8 seconds (frames 0 to fps * 3.8)
  const duration = Math.round(fps * 3.8);
  if (frame > duration) {
    return null;
  }

  // Pop in at frame 0
  const popSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 180 },
  });

  // Fade out smoothly between (duration - 25) and duration
  const opacity = interpolate(
    frame,
    [0, 10, duration - 25, duration],
    [0, 1, 1, 0],
    { extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        position: 'absolute',
        top: '120px',
        left: '48px',
        right: '48px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 60,
        opacity,
        transform: `scale(${popSpring})`,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '20px',
          backgroundColor: '#ef4444',
          color: '#ffffff',
          fontWeight: 900,
          fontSize: '15px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)',
          marginBottom: '10px',
        }}
      >
        <Flame size={18} color="#ffffff" />
        <span>Tech Breakdown</span>
      </div>

      <div
        style={{
          backgroundColor: 'rgba(5, 8, 16, 0.94)',
          backdropFilter: 'blur(20px)',
          border: '2px solid #00f0ff',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 240, 255, 0.35)',
          borderRadius: '26px',
          padding: '20px 28px',
          textAlign: 'center',
          maxWidth: '920px',
        }}
      >
        <div
          style={{
            color: '#00f0ff',
            fontSize: '15px',
            fontWeight: 800,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}
        >
          Sound-Off Briefing
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: '32px',
            fontWeight: 900,
            lineHeight: '1.2',
            letterSpacing: '-0.5px',
            textTransform: 'uppercase',
          }}
        >
          Can AI Answer Your Phone Calls?
        </div>
        <div
          style={{
            color: '#cbd5e1',
            fontSize: '17px',
            fontWeight: 600,
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <AlertCircle size={18} color="#ef4444" />
          <span>Day 1: We Hit The Android Security Wall.</span>
        </div>
      </div>
    </div>
  );
};
