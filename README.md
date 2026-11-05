# Phone AI Agent — Instagram Reel (Remotion)

A high-engagement, cinematic 9:16 vertical video (Instagram Reel / YouTube Short / TikTok) generated with **Remotion**, AI-generated imagery, web-searched media, synthesized audio sound design, dynamic captions, and technical HUD graphics for the **Phone AI Agent** technical breakdown.

---

## 📱 Visual Architecture & Aesthetic

- **Aspect Ratio**: `1080 x 1920` (9:16 Vertical Reel)
- **Framerate**: 30 FPS
- **Color Palette**: Dark Cyber Obsidian (`#070a12`), Electric Cyan (`#00f0ff`), Amber Alert (`#f59e0b`), Ruby Deny (`#ef4444`), Emerald Verified (`#10b981`), and Royal Violet (`#8b5cf6`).
- **3D Floating Glass Smartphone HUD**: Features dynamic live interactive UI states for each chapter:
  1. **The Hook (0:00 - 0:15)**: Incoming Cellular Call from AI Voice Agent with animated soundwave and action buttons.
  2. **The Android Security Wall (0:15 - 1:48)**: Red warning lock, `CAPTURE_AUDIO_OUTPUT: ACCESS DENIED`, and Accessibility API restrictions.
  3. **Telecom Regulations & DLT (1:48 - 2:28)**: TRAI regulations, DLT blockchain badge, 140 promotional vs. 1600 transactional series.
  4. **Cloud Telephony (2:28 - 3:38)**: Exotel AgentStream bi-directional WebSocket flow, 100ms raw PCM 8 kHz chunks.
  5. **The 3-Stage Voice Pipeline (3:38 - 4:50)**: Sarvam Saaras STT (Hindi/English), LLM Reasoning & Tools (Calendar), Bulbul TTS & Vapi/Pipecat orchestration.
  6. **Real Engineering Challenges (4:50 - 5:28)**: Sub-second latency gauge, instant Barge-In interruption mute, and noisy line recovery.
  7. **Android 16 & App Functions (5:28 - 6:10)**: App Functions Jetpack library + Model Context Protocol (MCP) tool integration.
  8. **Outro & CTA (6:10 - 6:30)**: Interactive poll card ("Would you trust an AI caller?") and animated comment CTA.

---

## 🔊 Audio & Sound Design

- **Primary Voiceover**: Original voice track (`public/voiceover.mp3`) at 100% volume.
- **Ambient Cyber Pulse**: Ambient 65-BPM synth pad & sub-bass loop (`public/bg_ambient.mp3`) mixed gently at 12% under speech.
- **Sound Effects (SFX)**:
  - `ringtone.mp3`: Initial phone ringtone during incoming call.
  - `glitch.mp3`: Digital glitch impact at "we hit a wall" and system permission blocks.
  - `whoosh.mp3`: Frequency-swept transition whooshes at chapter markers.
  - `ping.mp3`: Crystalline bell chime for verified badges and platform releases.

---

## 💬 Kinetic Subtitles

- **TikTok / Reels Style**: Centered in the optimal safe zone with uppercase bold typography (`system-ui, 900 weight`).
- **Word-Level Highlighting**: Live audio progress highlights words as they are spoken.
- **Keyword Glow**: Key technical terms (`AI`, `ANDROID`, `EXOTEL`, `SARVAM`, `WEBSOCKET`, `8 KHZ`, `BARGE-IN`, `MCP`, etc.) glow in vibrant gold/cyan.

---

## 🚀 How to Run & Preview

### 1. Interactive Remotion Studio (Realtime Preview & Scrubbing)
```bash
npm run dev
```
Opens the Remotion Studio in your browser where you can play, scrub through any frame, and preview all animations in real time.

### 2. Render 60-Second Viral Hook Reel
```bash
npm run render:hook
```
Renders the punchy 60-second teaser reel to `out/phone_ai_agent_hook.mp4`.

### 3. Render Full 6m30s Master Video
```bash
npm run render
```
Renders the complete 11,701 frames master composition to `out/phone_ai_agent_reel.mp4`.

---

## 📁 Project Structure

```
├── public/
│   ├── voiceover.mp3         # Master voiceover audio (390s)
│   ├── bg_ambient.mp3        # Ambient cyber synth background track
│   ├── ringtone.mp3          # Cellular ringtone
│   ├── whoosh.mp3            # Transition whoosh SFX
│   ├── glitch.mp3            # Error / glitch SFX
│   ├── ping.mp3              # Tech chime SFX
│   ├── hero_ai_phone.jpg     # AI Generated: Futuristic AI call smartphone
│   ├── android_security.jpg  # AI Generated: Android permission locked HUD
│   ├── telecom_dlt.jpg       # AI Generated: India telecom towers & DLT blockchain
│   ├── cloud_telephony.jpg   # AI Generated: Cloud server streaming network
│   └── agent_future.jpg      # AI Generated: Android 16 App Functions & MCP UI
├── src/
│   ├── components/
│   │   ├── Background.tsx    # Cyberpunk background with chapter transitions
│   │   ├── ProgressBar.tsx   # Top progress bar, chapter titles, live timer
│   │   ├── PhoneHUD.tsx      # Dynamic 3D floating glass phone interface
│   │   ├── AudioVisualizer.tsx # Live responsive audio frequency bars
│   │   ├── SubtitlesOverlay.tsx# Word-by-word kinetic animated captions
│   │   ├── FooterTicker.tsx  # Bottom technical status ticker
│   │   └── SoundEffects.tsx  # Timed SFX and background audio layers
│   ├── chapters.ts           # 8 narrative chapters with timing & accents
│   ├── subtitles.ts          # 147 audio-synced subtitle cues with keywords
│   ├── types.ts              # TypeScript definitions
│   ├── PhoneAIAgentReel.tsx  # Full 6m30s master composition
│   ├── PhoneAIAgentHook.tsx  # 60s viral reel composition
│   ├── Root.tsx              # Remotion Root composition declarations
│   └── index.ts              # Remotion registration entry
├── phone_ai_agent.srt        # Cleaned UTF-8 SRT subtitle file
└── remotion.config.ts        # Remotion rendering configuration
```
