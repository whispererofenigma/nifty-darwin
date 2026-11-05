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
  | 's01_hook'
  | 's02_hit_wall'
  | 's03_obvious_plan'
  | 's04_misleading_apis'
  | 's05_forbidden_permission'
  | 's06_accessibility_door'
  | 's07_default_monopoly'
  | 's08_trai_regulations'
  | 's09_three_boundaries'
  | 's10_cloud_pivot'
  | 's11_exotel_stream'
  | 's12_duplex_voicebot'
  | 's13_streaming_stt'
  | 's14_llm_reasoning'
  | 's15_tts_orchestration'
  | 's16_latency_gap'
  | 's17_barge_in'
  | 's18_anti_ivr'
  | 's19_app_functions'
  | 's20_mcp_tools'
  | 's21_the_verdict'
  | 's22_send_prompt_outro';

export interface ChapterInfo {
  id: ReelSection;
  number: string;
  title: string;
  tag: string;
  startSec: number;
  endSec: number;
  accentColor: string;
}
