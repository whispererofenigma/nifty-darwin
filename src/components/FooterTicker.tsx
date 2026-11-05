import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  Bot,
  Brain,
  Cloud,
  Cpu,
  Layers,
  Lock,
  MessageCircle,
  Mic,
  Network,
  PhoneCall,
  PhoneForwarded,
  Radio,
  Server,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Timer,
  Volume2,
  Zap,
} from 'lucide-react';
import { getCurrentChapter } from '../chapters';

export const FooterTicker: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chapter = getCurrentChapter(frame, fps);

  const getTickerData = () => {
    switch (chapter.id) {
      case 's01_hook':
        return {
          icon: <PhoneCall size={18} color={chapter.accentColor} />,
          text: 'THE GOAL: AUTONOMOUS AI AGENT CONVERSING ON CELLULAR CALLS',
        };
      case 's02_hit_wall':
        return {
          icon: <AlertOctagon size={18} color={chapter.accentColor} />,
          text: 'DAY 1 ROADBLOCK: OS-LEVEL CALL AUDIO ACCESS DENIED',
        };
      case 's03_obvious_plan':
        return {
          icon: <Layers size={18} color={chapter.accentColor} />,
          text: 'CLIENT ARCHITECTURE: SIM DETECT ➔ RECORD ➔ AI INFERENCE ➔ SPEAKER',
        };
      case 's04_misleading_apis':
        return {
          icon: <AlertTriangle size={18} color={chapter.accentColor} />,
          text: 'API AUDIT: CallScreening & InCallService CANNOT CAPTURE CALL AUDIO',
        };
      case 's05_forbidden_permission':
        return {
          icon: <Lock size={18} color={chapter.accentColor} />,
          text: 'PERMISSION DENIED: CAPTURE_AUDIO_OUTPUT (SYSTEM SIGNATURE ONLY)',
        };
      case 's06_accessibility_door':
        return {
          icon: <ShieldAlert size={18} color={chapter.accentColor} />,
          text: 'POLICY BAN: GOOGLE PLAY ACCESS SERVICE CALL RECORDING CLOSED (2022)',
        };
      case 's07_default_monopoly':
        return {
          icon: <Lock size={18} color={chapter.accentColor} />,
          text: 'APP GATEKEEPING: CALL LOG & SMS RESTRICTED TO DEFAULT DIALERS',
        };
      case 's08_trai_regulations':
        return {
          icon: <ShieldCheck size={18} color={chapter.accentColor} />,
          text: 'TRAI TELECOM RULES: DLT PORTAL REGISTRATION & 140 / 1600 SERIES',
        };
      case 's09_three_boundaries':
        return {
          icon: <AlertOctagon size={18} color={chapter.accentColor} />,
          text: 'TRIPLE BARRIER: ANDROID SANDBOX • GOOGLE PLAY • TELECOM NETWORKS',
        };
      case 's10_cloud_pivot':
        return {
          icon: <PhoneForwarded size={18} color={chapter.accentColor} />,
          text: 'ARCHITECTURAL PIVOT: TELECOM CALL FORWARDING TO CLOUD PBX',
        };
      case 's11_exotel_stream':
        return {
          icon: <Server size={18} color={chapter.accentColor} />,
          text: 'EXOTEL AGENTSTREAM: FULL-DUPLEX WSS • 100MS RAW PCM • 8 KHZ',
        };
      case 's12_duplex_voicebot':
        return {
          icon: <Cloud size={18} color={chapter.accentColor} />,
          text: 'RESPONSIBILITY SPLIT: PROVIDER RELAYS RAW AUDIO • WE RUN THE AI CORE',
        };
      case 's13_streaming_stt':
        return {
          icon: <Mic size={18} color={chapter.accentColor} />,
          text: 'JOB 1: SARVAM SAARAS STREAMING STT • HINDI / ENGLISH CODE-SWITCHING',
        };
      case 's14_llm_reasoning':
        return {
          icon: <Brain size={18} color={chapter.accentColor} />,
          text: 'JOB 2: STREAMING LLM • CONTEXT REASONING & EXTERNAL TOOL INVOCATION',
        };
      case 's15_tts_orchestration':
        return {
          icon: <Volume2 size={18} color={chapter.accentColor} />,
          text: 'JOB 3: SARVAM BULBUL TTS • LOW-LATENCY AUDIO STREAM VIA VAPI / PIPECAT',
        };
      case 's16_latency_gap':
        return {
          icon: <Timer size={18} color={chapter.accentColor} />,
          text: 'CONVERSATIONAL LATENCY BUDGET: HUMANS LEAVE ONLY < 300MS BETWEEN TURNS',
        };
      case 's17_barge_in':
        return {
          icon: <Radio size={18} color={chapter.accentColor} />,
          text: 'BARGE-IN DETECTION: INSTANT SPEECH INTERRUPTION & NOISY LINE RECOVERY',
        };
      case 's18_anti_ivr':
        return {
          icon: <Bot size={18} color={chapter.accentColor} />,
          text: 'THE GOAL: NOT A STATIC IVR TREE • TRUE ADAPTIVE HUMAN-LIKE AGENT',
        };
      case 's19_app_functions':
        return {
          icon: <Cpu size={18} color={chapter.accentColor} />,
          text: 'ANDROID 16 APP FUNCTIONS: JETPACK STANDARDIZED ON-DEVICE TOOL CALLS',
        };
      case 's20_mcp_tools':
        return {
          icon: <Network size={18} color={chapter.accentColor} />,
          text: 'MODEL CONTEXT PROTOCOL (MCP): CONNECTING CALENDAR, TASKS & CONTACTS',
        };
      case 's21_the_verdict':
        return {
          icon: <MessageCircle size={18} color={chapter.accentColor} />,
          text: 'COMMUNITY POLL: WOULD YOU LET AN AI HANDLE YOUR PHONE CALLS?',
        };
      case 's22_send_prompt_outro':
        return {
          icon: <Share2 size={18} color={chapter.accentColor} />,
          text: 'TAP SHARE: SEND THIS TO AN ANDROID DEV BUILDING AI VOICE AGENTS',
        };
      default:
        return {
          icon: <Zap size={18} color={chapter.accentColor} />,
          text: 'REAL-TIME AI VOICE AGENT TELEPHONY ARCHITECTURE',
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
          backgroundColor: 'rgba(10, 15, 26, 0.92)',
          backdropFilter: 'blur(16px)',
          border: `1px solid ${chapter.accentColor}44`,
          boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 15px ${chapter.accentColor}22`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>{icon}</div>
          <div
            style={{
              color: '#e2e8f0',
              fontFamily: 'monospace',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '0.4px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {text}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexShrink: 0,
            paddingLeft: '16px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: chapter.accentColor,
              boxShadow: `0 0 8px ${chapter.accentColor}`,
            }}
          />
          <span
            style={{
              color: chapter.accentColor,
              fontFamily: 'monospace',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '1px',
            }}
          >
            LIVE
          </span>
        </div>
      </div>
    </div>
  );
};
