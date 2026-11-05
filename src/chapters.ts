import { ChapterInfo, ReelSection } from './types';

export const chapters: ChapterInfo[] = [
  {
    id: 'hook',
    number: '01/08',
    title: 'THE AI CALLING DREAM',
    tag: 'HOOK',
    startFrame: 0,
    endFrame: 450,
    accentColor: '#00f0ff',
  },
  {
    id: 'android_wall',
    number: '02/08',
    title: 'THE ANDROID SECURITY WALL',
    tag: 'SYSTEM RESTRICTION',
    startFrame: 450,
    endFrame: 3240,
    accentColor: '#ef4444',
  },
  {
    id: 'regulations',
    number: '03/08',
    title: 'TELECOM REGULATIONS & DLT',
    tag: 'REGULATORY BOUNDARY',
    startFrame: 3240,
    endFrame: 4440,
    accentColor: '#f59e0b',
  },
  {
    id: 'cloud_telephony',
    number: '04/08',
    title: 'CLOUD TELEPHONY ARCHITECTURE',
    tag: 'THE REAL SOLUTION',
    startFrame: 4440,
    endFrame: 6540,
    accentColor: '#10b981',
  },
  {
    id: 'pipeline',
    number: '05/08',
    title: 'THE 3-STAGE VOICE PIPELINE',
    tag: 'CORE ENGINE',
    startFrame: 6540,
    endFrame: 8700,
    accentColor: '#3b82f6',
  },
  {
    id: 'challenges',
    number: '06/08',
    title: 'LATENCY, NOISE & BARGE-IN',
    tag: 'THE REAL ENGINEERING',
    startFrame: 8700,
    endFrame: 9840,
    accentColor: '#ec4899',
  },
  {
    id: 'app_functions',
    number: '07/08',
    title: 'ANDROID 16 APP FUNCTIONS & MCP',
    tag: 'THE FUTURE',
    startFrame: 9840,
    endFrame: 11100,
    accentColor: '#a855f7',
  },
  {
    id: 'outro',
    number: '08/08',
    title: 'WOULD YOU TRUST AN AI CALLER?',
    tag: 'YOUR THOUGHTS',
    startFrame: 11100,
    endFrame: 11701,
    accentColor: '#00f0ff',
  },
];

export const getCurrentChapter = (frame: number): ChapterInfo => {
  for (const ch of chapters) {
    if (frame >= ch.startFrame && frame < ch.endFrame) {
      return ch;
    }
  }
  return chapters[chapters.length - 1];
};
