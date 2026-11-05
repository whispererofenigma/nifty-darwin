import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  Bot,
  Brain,
  Calendar,
  CheckCircle2,
  Cloud,
  Cpu,
  Database,
  Layers,
  Lock,
  MessageCircle,
  MessageSquareQuote,
  Mic,
  Network,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOff,
  Radio,
  RefreshCw,
  Server,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Timer,
  Volume2,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import { getCurrentChapter } from '../chapters';
import { AudioVisualizer } from './AudioVisualizer';

export const PhoneHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chapter = getCurrentChapter(frame, fps);

  // Floating oscillation normalized to time in seconds
  const currentSec = frame / fps;
  const translateY = Math.sin(currentSec * 2.2) * 6;
  const rotateZ = Math.sin(currentSec * 1.1) * 0.6;

  // Chapter transition spring
  const chapterStartFrame = Math.round(chapter.startSec * fps);
  const chapterFrame = frame - chapterStartFrame;
  const enterSpring = spring({
    frame: chapterFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <div
      style={{
        position: 'absolute',
        top: '220px',
        left: '50%',
        transform: `translateX(-50%) translateY(${translateY}px) rotate(${rotateZ}deg) scale(${enterSpring})`,
        width: '560px',
        height: '840px',
        borderRadius: '52px',
        backgroundColor: 'rgba(11, 16, 28, 0.90)',
        backdropFilter: 'blur(30px)',
        border: `2px solid ${chapter.accentColor}55`,
        boxShadow: `0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px ${chapter.accentColor}33`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 20,
      }}
    >
      {/* Top Punch Hole & Speaker Dynamic Island */}
      <div
        style={{
          width: '100%',
          height: '42px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '12px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '120px',
            height: '24px',
            backgroundColor: '#000000',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: chapter.accentColor,
              boxShadow: `0 0 6px ${chapter.accentColor}`,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '4px',
              borderRadius: '2px',
              backgroundColor: 'rgba(255,255,255,0.25)',
            }}
          />
        </div>
      </div>

      {/* Screen Body Content Depending on 22 Scenes */}
      <div
        style={{
          flex: 1,
          padding: '20px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        {/* ============================================================ */}
        {/* SCENE 01: THE HOOK (0 - 11.5s) */}
        {/* ============================================================ */}
        {chapter.id === 's01_hook' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '100%',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#00f0ff',
                  fontSize: '14px',
                  fontWeight: 800,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Incoming Cellular Call
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '32px',
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                }}
              >
                Autonomous AI Agent
              </div>
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '16px',
                  marginTop: '4px',
                }}
              >
                Answering on your behalf...
              </div>
            </div>

            {/* Glowing Avatar */}
            <div
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 100%)',
                padding: '4px',
                boxShadow: '0 0 40px rgba(0, 240, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  backgroundColor: '#0b101c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Bot size={60} color="#00f0ff" strokeWidth={2.2} />
              </div>
            </div>

            <div style={{ width: '100%', padding: '0 10px' }}>
              <AudioVisualizer color="#00f0ff" barCount={28} height={55} />
            </div>

            {/* Accept / Reject Call Actions */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)',
                }}
              >
                <X size={32} color="#ffffff" strokeWidth={3} />
              </div>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 0.6)',
                }}
              >
                <PhoneCall size={32} color="#ffffff" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 02: DAY 1 HIT A WALL (11.5 - 18.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's02_hit_wall' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                style={{
                  color: '#ef4444',
                  fontSize: '14px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                Day 1 Milestone Check
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '32px',
                  fontWeight: 900,
                }}
              >
                WE HIT A WALL
              </div>
            </div>

            <div
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '32px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '2px solid #ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 45px rgba(239, 68, 68, 0.5)',
              }}
            >
              <AlertOctagon size={64} color="#ef4444" strokeWidth={2.4} />
            </div>

            <div
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '20px',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                border: '1.5px solid #ef4444',
                textAlign: 'left',
              }}
            >
              <div style={{ color: '#ef4444', fontWeight: 900, fontSize: '15px', marginBottom: '4px' }}>
                AUDIO TAP REJECTED
              </div>
              <div style={{ color: '#e2e8f0', fontSize: '14px', lineHeight: '1.4' }}>
                Direct cellular call stream ingestion is physically blocked at the Android OS kernel boundary.
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#ef4444" barCount={26} height={35} isActive={false} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 03: THE CLIENT APP PLAN (18.0 - 34.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's03_obvious_plan' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#22c55e',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                The Obvious Proposal
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                The On-Device App Plan
              </div>
            </div>

            {/* 5-step Client Architecture Pipeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { icon: <Radio size={18} color="#22c55e" />, step: '1', text: 'Detect incoming SIM call' },
                { icon: <PhoneIncoming size={18} color="#22c55e" />, step: '2', text: 'Answer automatically' },
                { icon: <Mic size={18} color="#22c55e" />, step: '3', text: 'Capture both audio channels' },
                { icon: <Brain size={18} color="#22c55e" />, step: '4', text: 'Stream audio to AI model' },
                { icon: <Volume2 size={18} color="#22c55e" />, step: '5', text: 'Play AI reply back to caller' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '9px 14px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      color: '#000',
                      fontWeight: 900,
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {item.step}
                  </div>
                  <div style={{ flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ color: '#f1f5f9', fontSize: '13.5px', fontWeight: 600 }}>{item.text}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                textAlign: 'center',
                padding: '8px 12px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: '#94a3b8',
                fontSize: '13px',
              }}
            >
              On paper, it sounds simple. But does Android allow it?
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#22c55e" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 04: CALLSCREENING & INCALL SERVICES (34.0 - 54.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's04_misleading_apis' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#f59e0b',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Android Call APIs Audit
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                The Misleading Services
              </div>
            </div>

            {/* Card 1: CallScreeningService */}
            <div
              style={{
                padding: '14px 16px',
                borderRadius: '18px',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                border: '1.5px solid #f59e0b',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#fbbf24', fontWeight: 800, fontSize: '15px' }}>
                  CallScreeningService
                </span>
                <span
                  style={{
                    backgroundColor: '#10b981',
                    color: '#000',
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  ALLOWED
                </span>
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '13px' }}>
                Can identify caller number, silence ringtone, or reject call.
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#f87171',
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                <XCircle size={16} color="#ef4444" />
                <span>Audio Stream: NO ACCESS</span>
              </div>
            </div>

            {/* Card 2: InCallService */}
            <div
              style={{
                padding: '14px 16px',
                borderRadius: '18px',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                border: '1.5px solid #f59e0b',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#fbbf24', fontWeight: 800, fontSize: '15px' }}>
                  InCallService
                </span>
                <span
                  style={{
                    backgroundColor: '#10b981',
                    color: '#000',
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  ALLOWED
                </span>
              </div>
              <div style={{ color: '#cbd5e1', fontSize: '13px' }}>
                Provides default dialer in-call management and UI screen.
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#f87171',
                  fontWeight: 700,
                  fontSize: '13px',
                }}
              >
                <XCircle size={16} color="#ef4444" />
                <span>Audio Stream: NO ACCESS</span>
              </div>
            </div>

            <div
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                fontSize: '13px',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              Neither hands a normal app cellular call audio!
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#f59e0b" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 05: CAPTURE_AUDIO_OUTPUT (54.0 - 72.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's05_forbidden_permission' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#dc2626',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                The System Lock
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Forbidden Permission
              </div>
            </div>

            {/* Android Manifest Code Block */}
            <div
              style={{
                padding: '16px 18px',
                borderRadius: '18px',
                backgroundColor: '#05070d',
                border: '1.5px solid #dc2626',
                fontFamily: 'monospace',
                fontSize: '13px',
                color: '#e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ color: '#64748b' }}>&lt;!-- Android Audio Sources --&gt;</div>
              <div style={{ color: '#38bdf8' }}>AudioSource.VOICE_UPLINK</div>
              <div style={{ color: '#38bdf8' }}>AudioSource.VOICE_DOWNLINK</div>
              <div style={{ color: '#38bdf8' }}>AudioSource.VOICE_CALL</div>
              <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
              <div style={{ color: '#ef4444', fontWeight: 800 }}>
                android.permission
                <br />
                .CAPTURE_AUDIO_OUTPUT
              </div>
            </div>

            {/* Security Notice */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '16px',
                backgroundColor: 'rgba(220, 38, 38, 0.15)',
                border: '1px solid #dc2626',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <Lock size={36} color="#ef4444" strokeWidth={2.4} style={{ flexShrink: 0 }} />
              <div>
                <div style={{ color: '#ef4444', fontWeight: 900, fontSize: '15px' }}>
                  SIGNATURE / SYSTEM ONLY
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '13px', marginTop: '2px' }}>
                  Strictly not available to third-party apps on Google Play.
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#dc2626" barCount={26} height={35} isActive={false} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 06: ACCESSIBILITY BAN 2022 (72.0 - 93.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's06_accessibility_door' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#ea580c',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                The Workaround Loophole
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                2022 Policy Shutdown
              </div>
            </div>

            {/* Timeline */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderLeft: '4px solid #f59e0b',
                }}
              >
                <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: '13px' }}>2019 • Android 10</div>
                <div style={{ color: '#e2e8f0', fontSize: '13px' }}>
                  Native call recording APIs blocked by default.
                </div>
              </div>

              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  borderLeft: '4px solid #38bdf8',
                }}
              >
                <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '13px' }}>2020-2021 • Workaround</div>
                <div style={{ color: '#e2e8f0', fontSize: '13px' }}>
                  Apps used Accessibility Service to tap call audio.
                </div>
              </div>

              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(234, 88, 12, 0.15)',
                  borderLeft: '4px solid #ea580c',
                  border: '1px solid #ea580c',
                }}
              >
                <div style={{ color: '#ea580c', fontWeight: 900, fontSize: '14px' }}>
                  May 2022 • Google Play Policy
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '13px', marginTop: '2px' }}>
                  Accessibility API is NOT for recording call audio. Apps removed.
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: 'rgba(234, 88, 12, 0.12)',
              }}
            >
              <ShieldAlert size={22} color="#ea580c" />
              <span style={{ color: '#fed7aa', fontSize: '12.5px', fontWeight: 600 }}>
                Google Play policy slammed this last door shut permanently.
              </span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#ea580c" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 07: DEFAULT MONOPOLY (93.0 - 108.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's07_default_monopoly' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#9333ea',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Google Play Policy Gate
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                The Default App Gate
              </div>
            </div>

            {/* Exclusive App Gatekeeper Slots */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(147, 51, 234, 0.12)',
                  border: '1px solid #9333ea',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <Smartphone size={24} color="#c084fc" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px' }}>
                    Default Phone Handler
                  </div>
                  <div style={{ color: '#c084fc', fontSize: '12.5px' }}>
                    Only default dialer can access call logs
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(147, 51, 234, 0.12)',
                  border: '1px solid #9333ea',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <MessageCircle size={24} color="#c084fc" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px' }}>
                    Default SMS Handler
                  </div>
                  <div style={{ color: '#c084fc', fontSize: '12.5px' }}>
                    Only default messaging app can read SMS
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(147, 51, 234, 0.12)',
                  border: '1px solid #9333ea',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <Bot size={24} color="#c084fc" />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px' }}>
                    Default Assistant App
                  </div>
                  <div style={{ color: '#c084fc', fontSize: '12.5px' }}>
                    System reserved role on device
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                fontSize: '13px',
                fontWeight: 700,
                textAlign: 'center',
              }}
            >
              Non-default 3rd party apps are strictly rejected on submission.
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#9333ea" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 08: TRAI REGULATIONS (108.0 - 129.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's08_trai_regulations' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#d97706',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                India Telecom Framework
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                TRAI &amp; DLT Rules
              </div>
            </div>

            {/* DLT Compliance Badge */}
            <div
              style={{
                padding: '12px 18px',
                borderRadius: '18px',
                backgroundColor: 'rgba(217, 119, 6, 0.15)',
                border: '1.5px solid #d97706',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <ShieldCheck size={36} color="#d97706" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ color: '#fbbf24', fontWeight: 900, fontSize: '15px' }}>
                  DLT MANDATORY PLATFORM
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '12.5px' }}>
                  Blockchain registry for commercial &amp; automated voices
                </div>
              </div>
            </div>

            {/* Designated Number Series */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#d97706',
                    color: '#000',
                    fontWeight: 900,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                >
                  140
                </div>
                <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>
                  Promotional Calling Series
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#10b981',
                    color: '#000',
                    fontWeight: 900,
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontSize: '15px',
                  }}
                >
                  1600
                </div>
                <div style={{ color: '#ffffff', fontSize: '14px', fontWeight: 700 }}>
                  Service &amp; Transactional Series
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '10px 14px',
                borderRadius: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#f87171',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <AlertTriangle size={18} color="#f87171" />
              <span>Standard 10-digit SIM numbers are OUT!</span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#d97706" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 09: THREE BOUNDARIES (129.0 - 142.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's09_three_boundaries' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                style={{
                  color: '#f43f5e',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Not A Bug • A Hard Boundary
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                The 3-Sided Fortress
              </div>
            </div>

            {/* Triple Barrier Diagram */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  border: '1.5px solid #f43f5e',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Smartphone size={24} color="#f43f5e" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '14px' }}>1. Operating System</div>
                  <div style={{ color: '#fda4af', fontSize: '12px' }}>Kernel-level audio sandbox protection</div>
                </div>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  border: '1.5px solid #f43f5e',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <ShieldAlert size={24} color="#f43f5e" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '14px' }}>2. Google Play Store</div>
                  <div style={{ color: '#fda4af', fontSize: '12px' }}>Policy enforcement on call recording</div>
                </div>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(244, 63, 94, 0.12)',
                  border: '1.5px solid #f43f5e',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Radio size={24} color="#f43f5e" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '14px' }}>3. Telecom Network</div>
                  <div style={{ color: '#fda4af', fontSize: '12px' }}>TRAI regulations &amp; DLT number scrutiny</div>
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#f43f5e" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 10: CLOUD PIVOT (142.0 - 160.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's10_cloud_pivot' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#06b6d4',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                The Architectural Pivot
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Cloud Telephony Ingestion
              </div>
            </div>

            {/* Call Forwarding Diagram */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 14px',
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                borderRadius: '20px',
                border: '1.5px solid #06b6d4',
              }}
            >
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Smartphone size={32} color="#06b6d4" />
                <div style={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>Owner SIM</div>
                <div style={{ color: '#06b6d4', fontSize: '11px' }}>Busy / Unanswered</div>
              </div>
              <PhoneForwarded size={22} color="#06b6d4" />
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Cloud size={32} color="#06b6d4" />
                <div style={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>Cloud PBX</div>
                <div style={{ color: '#06b6d4', fontSize: '11px' }}>Authorized Provider</div>
              </div>
              <ArrowRight size={20} color="#06b6d4" />
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Server size={32} color="#06b6d4" />
                <div style={{ color: '#e2e8f0', fontSize: '12px', fontWeight: 700, marginTop: '4px' }}>AI Server</div>
                <div style={{ color: '#06b6d4', fontSize: '11px' }}>WebSocket Link</div>
              </div>
            </div>

            <div
              style={{
                padding: '12px 16px',
                borderRadius: '16px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#cbd5e1',
                fontSize: '13.5px',
                lineHeight: '1.4',
              }}
            >
              If audio cannot come out of the phone, <strong>the call arrives in the cloud</strong> via authorized telephony routing.
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#06b6d4" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 11: EXOTEL STREAM (160.0 - 178.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's11_exotel_stream' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#10b981',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Indian Telephony In Action
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Exotel AgentStream
              </div>
            </div>

            {/* Exotel Live Stream Specs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>Connection:</span>
                <span style={{ color: '#10b981', fontFamily: 'monospace', fontWeight: 800 }}>
                  WebSocket (WSS)
                </span>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>Payload:</span>
                <span style={{ color: '#10b981', fontFamily: 'monospace', fontWeight: 800 }}>
                  Raw PCM Audio
                </span>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>Chunk Size:</span>
                <span style={{ color: '#10b981', fontFamily: 'monospace', fontWeight: 800 }}>
                  ~100 Milliseconds
                </span>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '14px' }}>Audio Quality:</span>
                <span style={{ color: '#00f0ff', fontFamily: 'monospace', fontWeight: 800 }}>
                  8 kHz Telephone Band
                </span>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#10b981" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 12: DUPLEX VOICEBOT (178.0 - 198.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's12_duplex_voicebot' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#0284c7',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Full-Duplex Architecture
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Provider vs AI Core Split
              </div>
            </div>

            {/* Division of Responsibilities */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(2, 132, 199, 0.12)',
                  border: '1px solid #0284c7',
                }}
              >
                <div style={{ color: '#38bdf8', fontWeight: 800, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Cloud size={18} color="#38bdf8" />
                  <span>Exotel VoiceBot Relay</span>
                </div>
                <div style={{ color: '#cbd5e1', fontSize: '12.5px', marginTop: '4px' }}>
                  Only relays raw audio bytes. Zero STT. Zero AI voice synthesis.
                </div>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(0, 240, 255, 0.12)',
                  border: '1.5px solid #00f0ff',
                }}
              >
                <div style={{ color: '#00f0ff', fontWeight: 900, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={18} color="#00f0ff" />
                  <span>Our Server (The Intelligence)</span>
                </div>
                <div style={{ color: '#cbd5e1', fontSize: '12.5px', marginTop: '4px' }}>
                  Transcribes audio, reasons with LLM, streams synthetic reply back down the socket.
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '8px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: '#38bdf8',
                fontSize: '13px',
                fontWeight: 700,
              }}
            >
              <RefreshCw size={16} color="#38bdf8" />
              <span>Two-way simultaneous bidirectional audio</span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#0284c7" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 13: STREAMING STT (198.0 - 218.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's13_streaming_stt' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#6366f1',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Pipeline Job 1 of 3
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Streaming STT (Sarvam)
              </div>
            </div>

            {/* STT Feature Card */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '18px',
                backgroundColor: 'rgba(99, 102, 241, 0.15)',
                border: '1.5px solid #6366f1',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mic size={22} color="#818cf8" />
                <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px' }}>
                  Sarvam Saaras ASR Model
                </span>
              </div>
              <div style={{ color: '#c7d2fe', fontSize: '13px' }}>
                Built natively for Indian languages with instant Hindi &amp; English code-switching.
              </div>
            </div>

            {/* Live Streaming Transcription Visualizer */}
            <div
              style={{
                padding: '12px 14px',
                borderRadius: '14px',
                backgroundColor: '#05070d',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                fontFamily: 'monospace',
                fontSize: '13px',
              }}
            >
              <div style={{ color: '#6366f1', fontSize: '11px', marginBottom: '4px' }}>
                STREAMING TRANSCRIPT:
              </div>
              <div style={{ color: '#e2e8f0', lineHeight: '1.4' }}>
                &ldquo;Haanji sir, I was calling to check if you are free tomorrow afternoon...&rdquo;
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#6366f1" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 14: LLM REASONING & TOOLS (218.0 - 230.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's14_llm_reasoning' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#8b5cf6',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Pipeline Job 2 of 3
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                LLM &amp; Tool Calling
              </div>
            </div>

            {/* Cognitive Reasoning & Tool Calling */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid #8b5cf6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Brain size={24} color="#a78bfa" />
                <div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '14px' }}>
                    Context Reasoning
                  </div>
                  <div style={{ color: '#c4b5fd', fontSize: '12px' }}>
                    Extract caller intent &amp; formulate conversational reply
                  </div>
                </div>
              </div>

              {/* Tool Execution Box */}
              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <Calendar size={24} color="#34d399" />
                <div>
                  <div style={{ color: '#34d399', fontWeight: 800, fontSize: '13px' }}>
                    TOOL CALLED: calendar.checkAvailability()
                  </div>
                  <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>
                    Slot Available: Tomorrow 4:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '8px 12px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: '#cbd5e1',
                fontSize: '12.5px',
                textAlign: 'center',
              }}
            >
              Autonomous action execution with owner&apos;s permission.
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#8b5cf6" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 15: TTS & ORCHESTRATION (230.0 - 258.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's15_tts_orchestration' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#d946ef',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Pipeline Job 3 &amp; Glue
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                TTS + Orchestration
              </div>
            </div>

            {/* TTS Engine */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '16px',
                backgroundColor: 'rgba(217, 70, 239, 0.12)',
                border: '1px solid #d946ef',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Volume2 size={24} color="#f0abfc" />
              <div>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '14px' }}>
                  Sarvam Bulbul / ElevenLabs
                </div>
                <div style={{ color: '#f0abfc', fontSize: '12px' }}>
                  Ultra low-latency audio stream right back down the socket
                </div>
              </div>
            </div>

            {/* Orchestration Glue */}
            <div
              style={{
                padding: '12px 16px',
                borderRadius: '16px',
                backgroundColor: 'rgba(0, 240, 255, 0.12)',
                border: '1px solid #00f0ff',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Layers size={24} color="#00f0ff" />
              <div>
                <div style={{ color: '#00f0ff', fontWeight: 800, fontSize: '14px' }}>
                  Vapi / Pipecat / Node.js
                </div>
                <div style={{ color: '#cbd5e1', fontSize: '12px' }}>
                  Coordinates STT, LLM turn-taking, barge-in, &amp; audio packet delivery
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#d946ef" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 16: LATENCY GAP (258.0 - 278.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's16_latency_gap' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#f97316',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Conversational Physics
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                The &lt; 300ms Latency Budget
              </div>
            </div>

            {/* Latency Breakdown Waterfall */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  fontSize: '13px',
                }}
              >
                <span style={{ color: '#94a3b8' }}>Network Audio Ingestion:</span>
                <span style={{ color: '#fb923c', fontFamily: 'monospace', fontWeight: 800 }}>~80ms</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  fontSize: '13px',
                }}
              >
                <span style={{ color: '#94a3b8' }}>Streaming STT Endpointing:</span>
                <span style={{ color: '#fb923c', fontFamily: 'monospace', fontWeight: 800 }}>~120ms</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  fontSize: '13px',
                }}
              >
                <span style={{ color: '#94a3b8' }}>LLM Time-to-First-Token:</span>
                <span style={{ color: '#fb923c', fontFamily: 'monospace', fontWeight: 800 }}>~200ms</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  fontSize: '13px',
                }}
              >
                <span style={{ color: '#94a3b8' }}>TTS First Chunk Synthesis:</span>
                <span style={{ color: '#fb923c', fontFamily: 'monospace', fontWeight: 800 }}>~110ms</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: '14px',
                backgroundColor: 'rgba(249, 115, 22, 0.15)',
                border: '1px solid #f97316',
              }}
            >
              <Timer size={22} color="#f97316" />
              <span style={{ color: '#ffedd5', fontSize: '13px', fontWeight: 700 }}>
                Humans leave &lt; 300ms between turns. Every millisecond counts.
              </span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#f97316" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 17: BARGE-IN & LINE NOISE (278.0 - 298.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's17_barge_in' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#ef4444',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Real Audio Physics
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Barge-In &amp; Interruption
              </div>
            </div>

            {/* Interruption Graphic */}
            <div
              style={{
                padding: '14px 16px',
                borderRadius: '18px',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                border: '1.5px solid #ef4444',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#ef4444', fontWeight: 900, fontSize: '14px' }}>
                  CALLER INTERRUPTS!
                </span>
                <span
                  style={{
                    backgroundColor: '#ef4444',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 900,
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  CUT AUDIO INSTANTLY
                </span>
              </div>
              <div style={{ color: '#e2e8f0', fontSize: '13px' }}>
                The AI must cancel audio synthesis within 50ms to prevent speaking over the caller.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#94a3b8',
                  fontSize: '12.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Activity size={16} color="#ef4444" />
                <span>Noisy narrow-band 8kHz telephone audio filtering</span>
              </div>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: '#94a3b8',
                  fontSize: '12.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <PhoneOff size={16} color="#ef4444" />
                <span>Seamless fallback and human handover protocols</span>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#ef4444" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 18: NOT ANOTHER IVR (298.0 - 328.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's18_anti_ivr' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#10b981',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                The Product Vision
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Not Another Robotic IVR
              </div>
            </div>

            {/* Comparison */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                }}
              >
                <div style={{ color: '#f87171', fontWeight: 800, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <XCircle size={16} color="#f87171" />
                  <span>OLD IVR MENUS</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '12.5px', marginTop: '2px' }}>
                  &ldquo;Press 1 for Support, Press 2 to wait forever...&rdquo;
                </div>
              </div>

              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1.5px solid #10b981',
                }}
              >
                <div style={{ color: '#10b981', fontWeight: 900, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span>TRUE CONTEXTUAL AI AGENT</span>
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '12.5px', marginTop: '4px', lineHeight: '1.4' }}>
                  Understands context, remembers relationship history, takes verified notes, books calendar slots.
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#10b981" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 19: ANDROID 16 APP FUNCTIONS (328.0 - 348.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's19_app_functions' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#a855f7',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Android 16 Platform
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                App Functions API
              </div>
            </div>

            {/* App Functions Jetpack Library Card */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '18px',
                backgroundColor: 'rgba(168, 85, 247, 0.15)',
                border: '1.5px solid #a855f7',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <Cpu size={36} color="#c084fc" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ color: '#c084fc', fontWeight: 900, fontSize: '15px' }}>
                  JETPACK APP FUNCTIONS
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '12.5px', marginTop: '2px' }}>
                  Standardized AI agent tool invocation protocol inside installed apps.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  fontSize: '13px',
                  color: '#e2e8f0',
                }}
              >
                • Exposes safe actions to AI agents without root or telephony bypass
              </div>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  fontSize: '13px',
                  color: '#e2e8f0',
                }}
              >
                • On-device permission guards keep user data protected
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#a855f7" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 20: MCP TOOLS & DIGITAL LIFE (348.0 - 368.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's20_mcp_tools' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  color: '#38bdf8',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Ecosystem Interop
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                Model Context Protocol
              </div>
            </div>

            {/* MCP Tool Nodes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                }}
              >
                <Calendar size={20} color="#38bdf8" />
                <span style={{ color: '#fff', fontSize: '13.5px', fontWeight: 600 }}>
                  Calendar: Check availability &amp; create events
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                }}
              >
                <MessageSquareQuote size={20} color="#38bdf8" />
                <span style={{ color: '#fff', fontSize: '13.5px', fontWeight: 600 }}>
                  Messages: Send WhatsApp / SMS summary to caller
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 14px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                }}
              >
                <Database size={20} color="#38bdf8" />
                <span style={{ color: '#fff', fontSize: '13.5px', fontWeight: 600 }}>
                  CRM &amp; Contacts: Real-time caller memory recall
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '8px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                color: '#38bdf8',
                fontSize: '13px',
                fontWeight: 700,
              }}
            >
              <Network size={16} color="#38bdf8" />
              <span>Full MCP tool connectivity with owner authorization</span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#38bdf8" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 21: THE COMMUNITY DEBATE (368.0 - 381.0s) */}
        {/* ============================================================ */}
        {chapter.id === 's21_the_verdict' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                style={{
                  color: '#00f0ff',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Community Debate
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 900,
                  lineHeight: '1.25',
                }}
              >
                Would you let an AI answer your phone?
              </div>
            </div>

            {/* Poll Buttons */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  padding: '14px',
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.25), rgba(0, 240, 255, 0.25))',
                  border: '1.5px solid #00f0ff',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <CheckCircle2 size={20} color="#00f0ff" />
                <span>YES! Filter Spam &amp; Book Me</span>
              </div>

              <div
                style={{
                  padding: '14px',
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.25), rgba(245, 158, 11, 0.25))',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <XCircle size={20} color="#f87171" />
                <span>NO! Calls are too personal</span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <MessageCircle size={18} color="#00f0ff" />
              <span style={{ color: '#00f0ff', fontWeight: 800, fontSize: '14px' }}>
                Drop your thoughts in comments!
              </span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#00f0ff" barCount={26} height={35} />
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SCENE 22: SEND-PROMPT OUTRO (381.0 - 390.034s) */}
        {/* ============================================================ */}
        {chapter.id === 's22_send_prompt_outro' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                style={{
                  color: '#00f0ff',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '4px',
                }}
              >
                Day 1 Architecture Summary
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 900,
                }}
              >
                Build The Right Pipeline
              </div>
            </div>

            {/* Viral Favor Card (Sends per reach trigger) */}
            <div
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '22px',
                backgroundColor: 'rgba(0, 240, 255, 0.12)',
                border: '1.5px solid #00f0ff',
                boxShadow: '0 0 25px rgba(0, 240, 255, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Share2 size={22} color="#00f0ff" />
                <span style={{ color: '#00f0ff', fontWeight: 900, fontSize: '15px', letterSpacing: '0.5px' }}>
                  SEND THIS TO AN ANDROID DEV
                </span>
              </div>
              <div style={{ color: '#e2e8f0', fontSize: '13.5px', lineHeight: '1.4' }}>
                Save them months of fighting <strong>CAPTURE_AUDIO_OUTPUT</strong> &amp; Google Play policies.
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                borderRadius: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <Zap size={20} color="#00f0ff" />
              <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '15px' }}>
                Follow for Day 2: Cloud Telephony Code
              </span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#00f0ff" barCount={26} height={35} />
            </div>
          </div>
        )}
      </div>

      {/* Phone Bottom Home Bar */}
      <div
        style={{
          width: '100%',
          height: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: '8px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: '140px',
            height: '5px',
            borderRadius: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.35)',
          }}
        />
      </div>
    </div>
  );
};
