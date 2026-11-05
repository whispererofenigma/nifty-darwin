import React from 'react';
import { Composition } from 'remotion';
import { PhoneAIAgentReel } from './PhoneAIAgentReel';
import { PhoneAIAgentHook } from './PhoneAIAgentHook';

export const Root: React.FC = () => {
  return (
    <>
      {/* Full 6m 30s Master Instagram Reel @ 60 FPS (23,402 frames) */}
      <Composition
        id="PhoneAIAgentReel"
        component={PhoneAIAgentReel}
        durationInFrames={23402}
        fps={60}
        width={1080}
        height={1920}
      />

      {/* 60s Fast Hook Viral Reel @ 60 FPS (3,600 frames) */}
      <Composition
        id="PhoneAIAgentHook"
        component={PhoneAIAgentHook}
        durationInFrames={3600}
        fps={60}
        width={1080}
        height={1920}
      />
    </>
  );
};
