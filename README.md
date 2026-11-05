# Phone AI Agent — 60 FPS Master Instagram Reel (Remotion)

[![GitHub Actions Workflow](https://img.shields.io/badge/GitHub_Actions-Cloud_Render_60FPS-blue?logo=github-actions)](https://github.com/whispererofenigma/nifty-darwin/actions)
[![60 FPS Full Duration](https://img.shields.io/badge/Framerate-60_FPS_(23,402_Frames)-cyan)](https://github.com/whispererofenigma/nifty-darwin)
[![Duration](https://img.shields.io/badge/Duration-06:30.03-purple)](https://github.com/whispererofenigma/nifty-darwin)

A cinematic, ultra-smooth **60 FPS** 9:16 vertical video breakdown created with **Remotion**, AI-generated cyber visuals, vector iconography, kinetic captions, and sound design.

Repository: **[https://github.com/whispererofenigma/nifty-darwin](https://github.com/whispererofenigma/nifty-darwin)**

---

## ⚡ 60 FPS Master Specifications

- **Resolution**: `1080 x 1920` (9:16 Vertical Video)
- **Framerate**: **60.0 FPS** (Ultra-smooth kinetic typography and interface animations)
- **Total Duration**: `06m 30.03s` (**23,402 frames**)
- **Vector Icons**: Replaced all emojis with Lucide vector icons (`Bot`, `Lock`, `ShieldCheck`, `Smartphone`, `Cloud`, `Server`, `Mic`, `Brain`, `Volume2`, `Timer`, `Share2`, `CheckCircle2`, `MessageCircle`).
- **Sound-Off Viral Hook**: High-contrast headline overlay on the first 3.8 seconds (`CAN AI ANSWER YOUR PHONE CALLS?`) to beat the 3-second drop-off cliff.
- **Sends-Per-Reach CTA**: End card re-engineered to prompt DM shares to developers and engineers.

---

## ☁️ How to Build & Render on GitHub Cloud

Render the entire 60 FPS video directly in the cloud using GitHub Actions:

1. Open **[https://github.com/whispererofenigma/nifty-darwin/actions](https://github.com/whispererofenigma/nifty-darwin/actions)**.
2. Select **Build & Render 60FPS Remotion Reel (Cloud)**.
3. Click **Run workflow**:
   - **Rendering Strategy**:
     - `parallel-cluster` *(Recommended)*: Spins up **4 parallel cloud runners** (chunks 0-3), renders simultaneously, and losslessly stitches them via FFmpeg into the master MP4.
     - `single-runner`: Renders the full 23,402 frames sequentially on one machine.
     - `hook-only`: Renders the 60-second teaser reel (3,600 frames) in ~5 minutes.
   - **GitHub Runner Environment**:
     - `ubuntu-latest` (Default, 4-core, 16GB RAM)
     - `ubuntu-latest-8-cores` / `ubuntu-latest-16-cores` (High-spec runners)
4. Once completed, download the master video file from the **Artifacts** section!

---

## 📋 Recommended Instagram Reel Caption (SEO & Send-Tuned)

```text
Building an AI phone agent: why Android won't let you record cellular calls.

We tried building an AI assistant to answer calls on Android. On day one, we discovered CAPTURE_AUDIO_OUTPUT is locked to system apps, and the Accessibility API loophole got shut down in 2022. Here is how cloud telephony (Exotel + Sarvam) actually solves it.

Send this to a developer or founder before they waste 3 months trying to build voice AI inside an Android app.

#voiceai #androiddev #developer #artificialintelligence #tech
```

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

## ☁️ Cloud Rendering with GitHub Actions

This repository includes an automated GitHub Actions cloud workflow ([.github/workflows/render.yml](file:///home/whispererofenigma/Documents/antigravity/nifty-darwin/.github/workflows/render.yml)) that builds and renders the Remotion video entirely in the cloud on GitHub-hosted runners (or your own self-hosted cloud instances).

### How to Render on the Cloud:
1. Navigate to the **Actions** tab in your GitHub repository.
2. Select **Build & Render Remotion Reel** from the left sidebar.
3. Click **Run workflow**:
   - **Composition**: Select `PhoneAIAgentHook` (60s viral reel) or `PhoneAIAgentReel` (full 6m30s master reel).
   - **Concurrency**: Set thread concurrency (default `4`).
   - **Frames** *(optional)*: Specify a frame range like `0-300` for test previews, or leave empty for the full video.
4. Once completed, download the rendered high-definition MP4 directly from the **Artifacts** section of the run!

### Dedicated Self-Hosted Cloud Runner (Optional)
If you prefer to render on your own GPU/high-core cloud instance (e.g., AWS EC2, GCP, Oracle Cloud):
```bash
./scripts/setup-cloud-runner.sh
```
Follow the on-screen instructions to register the runner under **Settings ➔ Actions ➔ Runners**.

---

## 🚀 How to Run & Preview Locally

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
