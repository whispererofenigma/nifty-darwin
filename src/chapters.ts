import { ChapterInfo, ReelSection } from './types';

export const chapters: ChapterInfo[] = [
  {
    id: 'hook',
    number: '01/08',
    title: 'THE AI CALLING DREAM',
    tag: 'HOOK',
    startSec: 0,
    endSec: 15,
    accentColor: '#00f0ff',
  },
  {
    id: 'android_wall',
    number: '02/08',
    title: 'THE ANDROID SECURITY WALL',
    tag: 'SYSTEM RESTRICTION',
    startSec: 15,
    endSec: 108,
    accentColor: '#ef4444',
  },
  {
    id: 'regulations',
    number: '03/08',
    title: 'TELECOM REGULATIONS & DLT',
    tag: 'REGULATORY BOUNDARY',
    startSec: 108,
    endSec: 148,
    accentColor: '#f59e0b',
  },
  {
    id: 'cloud_telephony',
    number: '04/08',
    title: 'CLOUD TELEPHONY ARCHITECTURE',
    tag: 'THE REAL SOLUTION',
    startSec: 148,
    endSec: 218,
    accentColor: '#10b981',
  },
  {
    id: 'pipeline',
    number: '05/08',
    title: 'THE 3-STAGE VOICE PIPELINE',
    tag: 'CORE ENGINE',
    startSec: 218,
    endSec: 290,
    accentColor: '#3b82f6',
  },
  {
    id: 'challenges',
    number: '06/08',
    title: 'LATENCY, NOISE & BARGE-IN',
    tag: 'THE REAL ENGINEERING',
    startSec: 290,
    endSec: 328,
    accentColor: '#ec4899',
  },
  {
    id: 'app_functions',
    number: '07/08',
    title: 'ANDROID 16 APP FUNCTIONS & MCP',
    tag: 'THE FUTURE',
    startSec: 328,
    endSec: 370,
    accentColor: '#a855f7',
  },
  {
    id: 'outro',
    number: '08/08',
    title: 'WOULD YOU TRUST AN AI CALLER?',
    tag: 'YOUR THOUGHTS',
    startSec: 370,
    endSec: 390.034,
    accentColor: '#00f0ff',
  },
];

export const getCurrentChapter = (frame: number, fps: number = 60): ChapterInfo => {
  const currentSec = frame / fps;
  for (const ch of chapters) {
    if (currentSec >= ch.startSec && currentSec < ch.endSec) {
      return ch;
    }
  }
  return chapters[chapters.length - 1];
};
