import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { getCurrentChapter } from '../chapters';
import { AudioVisualizer } from './AudioVisualizer';

export const PhoneHUD: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const chapter = getCurrentChapter(frame);

  // Subtle floating oscillation
  const translateY = Math.sin(frame * 0.04) * 8;
  const rotateZ = Math.sin(frame * 0.02) * 0.8;

  // Chapter transition spring
  const chapterFrame = frame - chapter.startFrame;
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
        backgroundColor: 'rgba(11, 16, 28, 0.85)',
        backdropFilter: 'blur(30px)',
        border: `2px solid ${chapter.accentColor}55`,
        boxShadow: `0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px ${chapter.accentColor}33`,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        zIndex: 20,
      }}
    >
      {/* Phone Screen Bezel & Dynamic Island / Punch Hole */}
      <div
        style={{
          width: '100%',
          height: '42px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '12px',
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
              backgroundColor: 'rgba(255,255,255,0.2)',
            }}
          />
        </div>
      </div>

      {/* Screen Body Content Depending on Chapter */}
      <div
        style={{
          flex: 1,
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* CHAPTER 1: HOOK - INCOMING CALL */}
        {chapter.id === 'hook' && (
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
                  fontSize: '15px',
                  fontWeight: 800,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                Incoming Cellular Call
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '34px',
                  fontWeight: 900,
                  letterSpacing: '-0.5px',
                }}
              >
                AI Voice Agent
              </div>
              <div
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '18px',
                  marginTop: '4px',
                }}
              >
                Calling on your behalf...
              </div>
            </div>

            {/* Glowing Avatar */}
            <div
              style={{
                width: '150px',
                height: '150px',
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
                  flexDirection: 'column',
                }}
              >
                <div style={{ fontSize: '48px' }}>🤖</div>
              </div>
            </div>

            {/* Audio Waveform */}
            <div style={{ width: '100%', padding: '0 20px' }}>
              <AudioVisualizer color="#00f0ff" barCount={28} height={60} />
            </div>

            {/* Call Action Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                width: '100%',
                marginTop: '10px',
              }}
            >
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(239, 68, 68, 0.5)',
                  fontSize: '28px',
                }}
              >
                ✕
              </div>
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 25px rgba(16, 185, 129, 0.6)',
                  fontSize: '28px',
                }}
              >
                📞
              </div>
            </div>
          </div>
        )}

        {/* CHAPTER 2: ANDROID WALL */}
        {chapter.id === 'android_wall' && (
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
                  fontSize: '15px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '8px',
                }}
              >
                Android Security Sandbox
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '28px',
                  fontWeight: 800,
                }}
              >
                ACCESS DENIED
              </div>
            </div>

            {/* Shield & Lock Graphic */}
            <div
              style={{
                alignSelf: 'center',
                width: '130px',
                height: '130px',
                borderRadius: '30px',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '2px solid #ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 35px rgba(239, 68, 68, 0.4)',
                fontSize: '56px',
              }}
            >
              🔒
            </div>

            {/* Terminal Log Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  padding: '12px 18px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '16px',
                  borderLeft: '4px solid #ef4444',
                  fontFamily: 'monospace',
                  fontSize: '15px',
                  color: '#f87171',
                }}
              >
                <strong>CAPTURE_AUDIO_OUTPUT:</strong>
                <br />
                Reserved for System Components only.
              </div>

              <div
                style={{
                  padding: '12px 18px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '16px',
                  borderLeft: '4px solid #f59e0b',
                  fontFamily: 'monospace',
                  fontSize: '15px',
                  color: '#fbbf24',
                }}
              >
                <strong>Accessibility API:</strong>
                <br />
                Google Play policy blocked call recording (2022).
              </div>

              <div
                style={{
                  padding: '12px 18px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  borderRadius: '16px',
                  borderLeft: '4px solid #6b7280',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  color: '#9ca3af',
                }}
              >
                VOICE_UPLINK • VOICE_DOWNLINK: Restricted
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#ef4444" barCount={26} height={40} isActive={false} />
            </div>
          </div>
        )}

        {/* CHAPTER 3: REGULATIONS */}
        {chapter.id === 'regulations' && (
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
                  fontSize: '15px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '8px',
                }}
              >
                TRAI & Telecom Rules
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '26px',
                  fontWeight: 800,
                }}
              >
                India DLT Compliance
              </div>
            </div>

            <div
              style={{
                alignSelf: 'center',
                padding: '16px 28px',
                borderRadius: '24px',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid #f59e0b',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div style={{ fontSize: '38px' }}>🇮🇳</div>
              <div>
                <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: '18px' }}>
                  DLT REGISTRATION
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                  Mandatory for Automated Voice
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#f59e0b',
                    color: '#000',
                    fontWeight: 900,
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontSize: '18px',
                  }}
                >
                  140
                </div>
                <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700 }}>
                  Promotional Call Series
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#10b981',
                    color: '#000',
                    fontWeight: 900,
                    padding: '6px 12px',
                    borderRadius: '10px',
                    fontSize: '18px',
                  }}
                >
                  1600
                </div>
                <div style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700 }}>
                  Service & Transactional Series
                </div>
              </div>

              <div
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                ⚠️ Standard 10-digit SIM numbers are OUT
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#f59e0b" barCount={26} height={40} />
            </div>
          </div>
        )}

        {/* CHAPTER 4: CLOUD TELEPHONY */}
        {chapter.id === 'cloud_telephony' && (
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
                  fontSize: '15px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '6px',
                }}
              >
                The Architecture Shift
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '28px',
                  fontWeight: 800,
                }}
              >
                Exotel Cloud Telephony
              </div>
            </div>

            {/* Cloud Call Forwarding Flow */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderRadius: '20px',
                border: '1px solid #10b981',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '30px' }}>📱</div>
                <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 700 }}>Owner SIM</div>
                <div style={{ color: '#10b981', fontSize: '11px' }}>Forward Busy</div>
              </div>
              <div style={{ color: '#10b981', fontSize: '24px', fontWeight: 900 }}>➔</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '30px' }}>☁️</div>
                <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 700 }}>Exotel Infra</div>
                <div style={{ color: '#10b981', fontSize: '11px' }}>AgentStream</div>
              </div>
              <div style={{ color: '#10b981', fontSize: '24px', fontWeight: 900 }}>➔</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '30px' }}>⚡</div>
                <div style={{ color: '#e2e8f0', fontSize: '13px', fontWeight: 700 }}>Your Server</div>
                <div style={{ color: '#10b981', fontSize: '11px' }}>WebSocket</div>
              </div>
            </div>

            {/* Stream Specs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '15px' }}>Audio Format:</span>
                <span style={{ color: '#10b981', fontFamily: 'monospace', fontWeight: 800 }}>
                  Raw PCM (8 kHz)
                </span>
              </div>
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '15px' }}>Packet Latency:</span>
                <span style={{ color: '#10b981', fontFamily: 'monospace', fontWeight: 800 }}>
                  ~100ms Chunks
                </span>
              </div>
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: '#94a3b8', fontSize: '15px' }}>VoiceBot Link:</span>
                <span style={{ color: '#00f0ff', fontFamily: 'monospace', fontWeight: 800 }}>
                  Bi-Directional Full Duplex
                </span>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#10b981" barCount={28} height={50} />
            </div>
          </div>
        )}

        {/* CHAPTER 5: 3-STAGE PIPELINE */}
        {chapter.id === 'pipeline' && (
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
                  color: '#3b82f6',
                  fontSize: '15px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '6px',
                }}
              >
                The Neural Stack
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '28px',
                  fontWeight: 800,
                }}
              >
                3-Job Voice Pipeline
              </div>
            </div>

            {/* 3 Step Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Step 1 */}
              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid #3b82f6',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#3b82f6',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                  }}
                >
                  1
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>
                    Speech-to-Text (STT)
                  </div>
                  <div style={{ color: '#93c5fd', fontSize: '13px' }}>
                    Sarvam Saaras (Hindi + English Streaming)
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(139, 92, 246, 0.15)',
                  border: '1px solid #8b5cf6',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#8b5cf6',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                  }}
                >
                  2
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>
                    Language Model (LLM)
                  </div>
                  <div style={{ color: '#c4b5fd', fontSize: '13px' }}>
                    Context Reasoning + Tool Calling (Calendar)
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#10b981',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                  }}
                >
                  3
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 800, fontSize: '16px' }}>
                    Text-to-Speech (TTS)
                  </div>
                  <div style={{ color: '#6ee7b7', fontSize: '13px' }}>
                    Sarvam Bulbul / ElevenLabs Low Latency
                  </div>
                </div>
              </div>
            </div>

            {/* Orchestrator Badge */}
            <div
              style={{
                textAlign: 'center',
                padding: '10px',
                backgroundColor: 'rgba(0,0,0,0.4)',
                borderRadius: '12px',
                color: '#cbd5e1',
                fontSize: '14px',
              }}
            >
              Orchestrated with <strong>Vapi</strong> or <strong>Pipecat + Node.js</strong>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#3b82f6" barCount={28} height={45} />
            </div>
          </div>
        )}

        {/* CHAPTER 6: CHALLENGES */}
        {chapter.id === 'challenges' && (
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
                  color: '#ec4899',
                  fontSize: '15px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '6px',
                }}
              >
                The Hard Truth
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '28px',
                  fontWeight: 800,
                }}
              >
                Real Voice Engineering
              </div>
            </div>

            {/* Engineering Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(236, 72, 153, 0.12)',
                  border: '1px solid #ec4899',
                }}
              >
                <div style={{ color: '#f472b6', fontWeight: 800, fontSize: '16px' }}>
                  ⚡ Sub-Second Latency
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '14px', marginTop: '4px' }}>
                  Humans leave &lt; 300ms between conversation turns.
                </div>
              </div>

              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  border: '1px solid #f59e0b',
                }}
              >
                <div style={{ color: '#fbbf24', fontWeight: 800, fontSize: '16px' }}>
                  🛑 Barge-In Interruption
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '14px', marginTop: '4px' }}>
                  AI must cut voice immediately when caller speaks.
                </div>
              </div>

              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '18px',
                  backgroundColor: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid #6366f1',
                }}
              >
                <div style={{ color: '#a5b4fc', fontWeight: 800, fontSize: '16px' }}>
                  📞 Noisy 8 kHz Telephone Audio
                </div>
                <div style={{ color: '#e2e8f0', fontSize: '14px', marginTop: '4px' }}>
                  Preserve context &amp; graceful human handover.
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#ec4899" barCount={28} height={50} />
            </div>
          </div>
        )}

        {/* CHAPTER 7: APP FUNCTIONS & FUTURE */}
        {chapter.id === 'app_functions' && (
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
                  fontSize: '15px',
                  fontWeight: 900,
                  letterSpacing: '2px',
                  marginBottom: '6px',
                }}
              >
                Android 16 &amp; Beyond
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '28px',
                  fontWeight: 800,
                }}
              >
                App Functions + MCP
              </div>
            </div>

            {/* Smart Assistant Glass Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid #a855f7',
                  borderRadius: '16px',
                }}
              >
                <div style={{ color: '#d8b4fe', fontWeight: 800, fontSize: '15px' }}>
                  📅 Google Calendar
                </div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '16px' }}>
                  Meeting Booked: Tomorrow 4:00 PM
                </div>
              </div>

              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid #3b82f6',
                  borderRadius: '16px',
                }}
              >
                <div style={{ color: '#93c5fd', fontWeight: 800, fontSize: '15px' }}>
                  💬 Auto-Summary Sent
                </div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '16px' }}>
                  Caller: &quot;Needs contract updated by Friday&quot;
                </div>
              </div>

              <div
                style={{
                  padding: '14px 18px',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  borderRadius: '16px',
                }}
              >
                <div style={{ color: '#6ee7b7', fontWeight: 800, fontSize: '15px' }}>
                  🔗 Model Context Protocol (MCP)
                </div>
                <div style={{ color: '#ffffff', fontSize: '14px' }}>
                  Direct tool integration with owner&apos;s digital life
                </div>
              </div>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#a855f7" barCount={28} height={45} />
            </div>
          </div>
        )}

        {/* CHAPTER 8: OUTRO */}
        {chapter.id === 'outro' && (
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
                  fontSize: '16px',
                  fontWeight: 900,
                  letterSpacing: '3px',
                  marginBottom: '10px',
                }}
              >
                THE BIG QUESTION
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '32px',
                  fontWeight: 900,
                  lineHeight: '1.2',
                }}
              >
                Would you let an AI answer your phone?
              </div>
            </div>

            {/* Interactive Poll Cards */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div
                style={{
                  padding: '16px',
                  borderRadius: '18px',
                  background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.25), rgba(0, 240, 255, 0.25))',
                  border: '2px solid #00f0ff',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '20px',
                  boxShadow: '0 0 25px rgba(0, 240, 255, 0.3)',
                }}
              >
                🔥 YES, Automate My Calls!
              </div>
              <div
                style={{
                  padding: '16px',
                  borderRadius: '18px',
                  background: 'linear-gradient(90deg, rgba(239, 68, 68, 0.25), rgba(245, 158, 11, 0.25))',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '20px',
                }}
              >
                🛑 NO, Too Personal / Risky!
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                borderRadius: '30px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <span style={{ fontSize: '24px' }}>💬</span>
              <span style={{ color: '#00f0ff', fontWeight: 800, fontSize: '18px' }}>
                Drop it in the comments below!
              </span>
            </div>

            <div style={{ width: '100%' }}>
              <AudioVisualizer color="#00f0ff" barCount={28} height={45} />
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
        }}
      >
        <div
          style={{
            width: '140px',
            height: '5px',
            borderRadius: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          }}
        />
      </div>
    </div>
  );
};
