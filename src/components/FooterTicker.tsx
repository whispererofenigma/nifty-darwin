import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import {
  Bot,
  Cloud,
  Cpu,
  Lock,
  MessageCircle,
  ShieldCheck,
  Timer,
  Zap,
} from 'lucide-react';
import { getCurrentChapter } from '../chapters';

export const FooterTicker: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chapter = getCurrentChapter(frame, fps);

  const getTickerData = () => {
    switch (chapter.id) {
      case 'android_wall':
        return {
          icon: <Lock size={18} color={chapter.accentColor} />,
          text: 'OS LIMITATION: android.permission.CAPTURE_AUDIO_OUTPUT (SYSTEM_ONLY)',
        };
      case 'regulations':
        return {
          icon: <ShieldCheck size={18} color={chapter.accentColor} />,
          text: 'TRAI TELECOM MANDATE: DLT PLATFORM REGISTRATION & 140/1600 SERIES',
        };
      case 'cloud_telephony':
        return {
          icon: <Cloud size={18} color={chapter.accentColor} />,
          text: 'EXOTEL AGENTSTREAM: FULL-DUPLEX WEBSOCKET • 100MS RAW PCM 8KHZ',
        };
      case 'pipeline':
        return {
          icon: <Zap size={18} color={chapter.accentColor} />,
          text: '3-STAGE ENGINE: SARVAM SAARAS STT ➔ LLM TOOL CALL ➔ BULBUL TTS',
        };
      case 'challenges':
        return {
          icon: <Timer size={18} color={chapter.accentColor} />,
          text: 'CRITICAL LATENCY BUDGET: < 400MS TURN-TAKING • BARGE-IN INTERRUPTION',
        };
      case 'app_functions':
        return {
          icon: <Cpu size={18} color={chapter.accentColor} />,
          text: 'ANDROID 16 APP FUNCTIONS • JETPACK PLATFORM TOOL PROTOCOL',
        };
      case 'outro':
        return {
          icon: <MessageCircle size={18} color={chapter.accentColor} />,
          text: 'WOULD YOU TRUST AN AI CALLER? SHARE YOUR THOUGHTS BELOW!',
        };
      case 'hook':
      default:
        return {
          icon: <Bot size={18} color={chapter.accentColor} />,
          text: 'THE CHALLENGE: REAL-TIME AI TELEPHONY AGENTS ON MOBILE',
        };
    }
  };

  const { icon, text } = getTickerData();

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
          backgroundColor: 'rgba(10, 15, 26, 0.90)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${chapter.accentColor}44`,
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 15px ${chapter.accentColor}22`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>{icon}</div>
          <div
            style={{
              color: '#e2e8f0',
              fontFamily: 'monospace',
              fontSize: '16px',
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            {text}
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
