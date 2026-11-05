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

  // Dynamic slow cinematic pan / zoom cycle
  const loopFrames = fps * 20; // 20s cycle
  const scale = interpolate(frame % loopFrames, [0, loopFrames], [1.0, 1.07]);

  const getBackgroundImage = () => {
    switch (chapter.id) {
      case 's01_hook':
      case 's02_hit_wall':
      case 's03_obvious_plan':
        return 'hero_ai_phone.jpg';

      case 's04_misleading_apis':
      case 's05_forbidden_permission':
      case 's06_accessibility_door':
      case 's07_default_monopoly':
        return 'android_security.jpg';

      case 's08_trai_regulations':
      case 's09_three_boundaries':
        return 'telecom_dlt.jpg';

      case 's10_cloud_pivot':
      case 's11_exotel_stream':
      case 's12_duplex_voicebot':
      case 's13_streaming_stt':
      case 's14_llm_reasoning':
      case 's15_tts_orchestration':
      case 's16_latency_gap':
      case 's17_barge_in':
        return 'cloud_telephony.jpg';

      case 's18_anti_ivr':
      case 's19_app_functions':
      case 's20_mcp_tools':
      case 's21_the_verdict':
      case 's22_send_prompt_outro':
      default:
        return 'agent_future.jpg';
    }
  };

  const currentBg = getBackgroundImage();

  return (
    <AbsoluteFill style={{ backgroundColor: '#070a12', overflow: 'hidden' }}>
      <AbsoluteFill style={{ opacity: 0.35, transform: `scale(${scale})` }}>
        <Img
          src={staticFile(currentBg)}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AbsoluteFill>

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
