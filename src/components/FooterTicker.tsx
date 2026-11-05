import React from 'react';
import { useCurrentFrame } from 'remotion';
import { getCurrentChapter } from '../chapters';

export const FooterTicker: React.FC = () => {
  const frame = useCurrentFrame();
  const chapter = getCurrentChapter(frame);

  const tickerMessages: Record<string, string> = {
    hook: '🤖 THE CHALLENGE: REAL-TIME AI TELEPHONY AGENTS ON MOBILE',
    android_wall: '🔒 OS LIMITATION: android.permission.CAPTURE_AUDIO_OUTPUT (SYSTEM_ONLY)',
    regulations: '🇮🇳 TRAI TELECOM MANDATE: DLT PLATFORM REGISTRATION & 140/1600 SERIES',
    cloud_telephony: '☁️ EXOTEL AGENTSTREAM: FULL-DUPLEX WEBSOCKET • 100MS RAW PCM 8KHZ',
    pipeline: '⚡ 3-STAGE ENGINE: SARVAM SAARAS STT ➔ LLM TOOL CALL ➔ BULBUL TTS',
    challenges: '⏱️ CRITICAL LATENCY BUDGET: < 400MS TURN-TAKING • BARGE-IN INTERRUPTION',
    app_functions: '🚀 ANDROID 16 APP FUNCTIONS • JETPACK PLATFORM TOOL PROTOCOL',
    outro: '💬 WOULD YOU TRUST AN AI CALLER? SHARE YOUR THOUGHTS BELOW!',
  };

  const message = tickerMessages[chapter.id] || tickerMessages.hook;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '80px',
        left: '48px',
        right: '48px',
        zIndex: 45,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderRadius: '20px',
          backgroundColor: 'rgba(10, 15, 26, 0.85)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${chapter.accentColor}44`,
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 15px ${chapter.accentColor}22`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: chapter.accentColor,
              boxShadow: `0 0 10px ${chapter.accentColor}`,
            }}
          />
          <div
            style={{
              color: '#e2e8f0',
              fontFamily: 'monospace',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            {message}
          </div>
        </div>

        <div
          style={{
            color: chapter.accentColor,
            fontFamily: 'monospace',
            fontSize: '14px',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: '8px',
            backgroundColor: `${chapter.accentColor}18`,
          }}
        >
          LIVE
        </div>
      </div>
    </div>
  );
};
