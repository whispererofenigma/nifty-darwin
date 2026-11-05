import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface AudioVisualizerProps {
  color?: string;
  barCount?: number;
  height?: number;
  isActive?: boolean;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = ({
  color = '#00f0ff',
  barCount = 36,
  height = 90,
  isActive = true,
}) => {
  const frame = useCurrentFrame();

  const bars = Array.from({ length: barCount }, (_, i) => {
    // Generate organic pseudo-frequency response
    const speed = 0.25;
    const offset = i * 0.35;
    const wave1 = Math.sin(frame * speed + offset);
    const wave2 = Math.cos(frame * speed * 1.6 - offset * 0.8);
    const wave3 = Math.sin(frame * speed * 0.8 + offset * 1.4);

    let rawVal = Math.abs(wave1 * 0.45 + wave2 * 0.35 + wave3 * 0.2);

    // Give middle bars a higher natural amplitude (human vocal formant curve)
    const bellCurve = Math.sin((i / (barCount - 1)) * Math.PI);
    rawVal = rawVal * (0.4 + 0.6 * bellCurve);

    if (!isActive) {
      rawVal = 0.08 + 0.04 * Math.sin(frame * 0.1 + i);
    }

    const barHeight = Math.max(6, Math.min(height, rawVal * height));

    return (
      <div
        key={i}
        style={{
          width: '5px',
          height: `${barHeight}px`,
          backgroundColor: color,
          borderRadius: '3px',
          boxShadow: `0 0 8px ${color}88`,
          transition: 'height 0.05s ease',
          opacity: interpolate(barHeight, [6, height], [0.35, 1.0]),
        }}
      />
    );
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        height: `${height}px`,
        width: '100%',
      }}
    >
      {bars}
    </div>
  );
};
