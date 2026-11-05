export interface SubtitleCue {
  id: number;
  startSec: number;
  endSec: number;
  startFrame: number;
  endFrame: number;
  text: string;
  section: string;
}

export type ReelSection =
  | 'hook'
  | 'android_wall'
  | 'regulations'
  | 'cloud_telephony'
  | 'pipeline'
  | 'challenges'
  | 'app_functions'
  | 'outro';

export interface ChapterInfo {
  id: ReelSection;
  number: string;
  title: string;
  tag: string;
  startSec: number;
  endSec: number;
  accentColor: string;
}
