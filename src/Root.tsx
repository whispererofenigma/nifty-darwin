import React from 'react';
import { Composition } from 'remotion';
import { PhoneAIAgentReel } from './PhoneAIAgentReel';
import { PhoneAIAgentHook } from './PhoneAIAgentHook';

export const Root: React.FC = () => {
  return (
    <>
      {/* Full 6m30s In-Depth Master Instagram Reel */}
      <Composition
        id="PhoneAIAgentReel"
        component={PhoneAIAgentReel}
        durationInFrames={11701}
        fps={30}
        width={1080}
        height={1920}
      />

      {/* 60s Fast Hook Viral Reel */}
      <Composition
        id="PhoneAIAgentHook"
        component={PhoneAIAgentHook}
        durationInFrames={1800}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
