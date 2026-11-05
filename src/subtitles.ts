export interface SubtitleCue {
  id: number;
  startSec: number;
  endSec: number;
  startFrame: number;
  endFrame: number;
  text: string;
  section: string;
}

export const subtitles: SubtitleCue[] = [
  {
    "id": 1,
    "startSec": 0.0,
    "endSec": 3.355,
    "startFrame": 0,
    "endFrame": 101,
    "text": "What if an AI could answer your phone calls,",
    "section": "hook"
  },
  {
    "id": 2,
    "startSec": 3.355,
    "endSec": 5.126,
    "startFrame": 101,
    "endFrame": 154,
    "text": "understand who's calling,",
    "section": "hook"
  },
  {
    "id": 3,
    "startSec": 5.126,
    "endSec": 8.574,
    "startFrame": 154,
    "endFrame": 257,
    "text": "and actually have a conversation on your behalf?",
    "section": "hook"
  },
  {
    "id": 4,
    "startSec": 8.574,
    "endSec": 10.904,
    "startFrame": 257,
    "endFrame": 327,
    "text": "That's the idea we're chasing.",
    "section": "hook"
  },
  {
    "id": 5,
    "startSec": 10.904,
    "endSec": 14.539,
    "startFrame": 327,
    "endFrame": 436,
    "text": "And on day one, we hit a wall.",
    "section": "hook"
  },
  {
    "id": 6,
    "startSec": 14.539,
    "endSec": 17.242,
    "startFrame": 436,
    "endFrame": 517,
    "text": "First: what can't be done.",
    "section": "hook"
  },
  {
    "id": 7,
    "startSec": 17.242,
    "endSec": 19.012,
    "startFrame": 517,
    "endFrame": 570,
    "text": "The obvious plan?",
    "section": "android_wall"
  },
  {
    "id": 8,
    "startSec": 19.012,
    "endSec": 21.249,
    "startFrame": 570,
    "endFrame": 637,
    "text": "Build it inside an Android app.",
    "section": "android_wall"
  },
  {
    "id": 9,
    "startSec": 21.249,
    "endSec": 23.579,
    "startFrame": 637,
    "endFrame": 707,
    "text": "Detect an incoming SIM call,",
    "section": "android_wall"
  },
  {
    "id": 10,
    "startSec": 23.579,
    "endSec": 25.35,
    "startFrame": 707,
    "endFrame": 760,
    "text": "answer it automatically,",
    "section": "android_wall"
  },
  {
    "id": 11,
    "startSec": 25.35,
    "endSec": 27.866,
    "startFrame": 760,
    "endFrame": 836,
    "text": "capture both sides of the conversation,",
    "section": "android_wall"
  },
  {
    "id": 12,
    "startSec": 27.866,
    "endSec": 30.569,
    "startFrame": 836,
    "endFrame": 917,
    "text": "send that audio to an AI model,",
    "section": "android_wall"
  },
  {
    "id": 13,
    "startSec": 30.569,
    "endSec": 33.924,
    "startFrame": 917,
    "endFrame": 1018,
    "text": "and play the reply back to the caller.",
    "section": "android_wall"
  },
  {
    "id": 14,
    "startSec": 33.924,
    "endSec": 36.347,
    "startFrame": 1018,
    "endFrame": 1090,
    "text": "On paper, it sounds simple.",
    "section": "android_wall"
  },
  {
    "id": 15,
    "startSec": 36.347,
    "endSec": 39.33,
    "startFrame": 1090,
    "endFrame": 1180,
    "text": "Android does give developers call APIs.",
    "section": "android_wall"
  },
  {
    "id": 16,
    "startSec": 39.33,
    "endSec": 42.964,
    "startFrame": 1180,
    "endFrame": 1289,
    "text": "CallScreeningService lets an app identify an incoming call",
    "section": "android_wall"
  },
  {
    "id": 17,
    "startSec": 42.964,
    "endSec": 46.04,
    "startFrame": 1289,
    "endFrame": 1381,
    "text": "and allow, silence, or reject it.",
    "section": "android_wall"
  },
  {
    "id": 18,
    "startSec": 46.04,
    "endSec": 49.022,
    "startFrame": 1381,
    "endFrame": 1471,
    "text": "InCallService gives a default dialer its call interface",
    "section": "android_wall"
  },
  {
    "id": 19,
    "startSec": 49.022,
    "endSec": 50.979,
    "startFrame": 1471,
    "endFrame": 1529,
    "text": "and call management.",
    "section": "android_wall"
  },
  {
    "id": 20,
    "startSec": 50.979,
    "endSec": 53.962,
    "startFrame": 1529,
    "endFrame": 1619,
    "text": "But neither one hands a normal app the actual audio",
    "section": "android_wall"
  },
  {
    "id": 21,
    "startSec": 53.962,
    "endSec": 56.664,
    "startFrame": 1619,
    "endFrame": 1700,
    "text": "of a cellular call.",
    "section": "android_wall"
  },
  {
    "id": 22,
    "startSec": 56.664,
    "endSec": 60.113,
    "startFrame": 1700,
    "endFrame": 1803,
    "text": "Android does define audio sources for exactly that:",
    "section": "android_wall"
  },
  {
    "id": 23,
    "startSec": 60.113,
    "endSec": 63.095,
    "startFrame": 1803,
    "endFrame": 1893,
    "text": "VOICE_UPLINK, VOICE_DOWNLINK, VOICE_CALL.",
    "section": "android_wall"
  },
  {
    "id": 24,
    "startSec": 63.095,
    "endSec": 65.425,
    "startFrame": 1893,
    "endFrame": 1963,
    "text": "But each one requires a permission called",
    "section": "android_wall"
  },
  {
    "id": 25,
    "startSec": 65.425,
    "endSec": 67.662,
    "startFrame": 1963,
    "endFrame": 2030,
    "text": "CAPTURE_AUDIO_OUTPUT,",
    "section": "android_wall"
  },
  {
    "id": 26,
    "startSec": 67.662,
    "endSec": 70.458,
    "startFrame": 2030,
    "endFrame": 2114,
    "text": "and that permission is reserved for system components.",
    "section": "android_wall"
  },
  {
    "id": 27,
    "startSec": 70.458,
    "endSec": 73.347,
    "startFrame": 2114,
    "endFrame": 2200,
    "text": "It is not available to third-party apps.",
    "section": "android_wall"
  },
  {
    "id": 28,
    "startSec": 73.347,
    "endSec": 75.49,
    "startFrame": 2200,
    "endFrame": 2265,
    "text": "There was a workaround.",
    "section": "android_wall"
  },
  {
    "id": 29,
    "startSec": 75.49,
    "endSec": 78.566,
    "startFrame": 2265,
    "endFrame": 2357,
    "text": "Android 10 blocked call recording by default,",
    "section": "android_wall"
  },
  {
    "id": 30,
    "startSec": 78.566,
    "endSec": 80.71,
    "startFrame": 2357,
    "endFrame": 2421,
    "text": "so apps started using the Accessibility Service",
    "section": "android_wall"
  },
  {
    "id": 31,
    "startSec": 80.71,
    "endSec": 82.667,
    "startFrame": 2421,
    "endFrame": 2480,
    "text": "to get around it.",
    "section": "android_wall"
  },
  {
    "id": 32,
    "startSec": 82.667,
    "endSec": 86.488,
    "startFrame": 2480,
    "endFrame": 2595,
    "text": "And in 2022, Google Play shut that door too.",
    "section": "android_wall"
  },
  {
    "id": 33,
    "startSec": 86.488,
    "endSec": 89.191,
    "startFrame": 2595,
    "endFrame": 2676,
    "text": "Its policy says the Accessibility API",
    "section": "android_wall"
  },
  {
    "id": 34,
    "startSec": 89.191,
    "endSec": 91.707,
    "startFrame": 2676,
    "endFrame": 2751,
    "text": "is not for recording call audio.",
    "section": "android_wall"
  },
  {
    "id": 35,
    "startSec": 91.707,
    "endSec": 94.037,
    "startFrame": 2751,
    "endFrame": 2821,
    "text": "Google Play also restricts the call log",
    "section": "android_wall"
  },
  {
    "id": 36,
    "startSec": 94.037,
    "endSec": 95.808,
    "startFrame": 2821,
    "endFrame": 2874,
    "text": "and SMS permissions.",
    "section": "android_wall"
  },
  {
    "id": 37,
    "startSec": 95.808,
    "endSec": 98.231,
    "startFrame": 2874,
    "endFrame": 2947,
    "text": "Only apps that are the default phone, SMS,",
    "section": "android_wall"
  },
  {
    "id": 38,
    "startSec": 98.231,
    "endSec": 100.934,
    "startFrame": 2947,
    "endFrame": 3028,
    "text": "or assistant app can use them.",
    "section": "android_wall"
  },
  {
    "id": 39,
    "startSec": 100.934,
    "endSec": 103.636,
    "startFrame": 3028,
    "endFrame": 3109,
    "text": "Then India adds another layer.",
    "section": "android_wall"
  },
  {
    "id": 40,
    "startSec": 103.636,
    "endSec": 106.712,
    "startFrame": 3109,
    "endFrame": 3201,
    "text": "TRAI's rules for commercial communication require businesses",
    "section": "android_wall"
  },
  {
    "id": 41,
    "startSec": 106.712,
    "endSec": 109.787,
    "startFrame": 3201,
    "endFrame": 3294,
    "text": "to register on the DLT platform and to use designated",
    "section": "android_wall"
  },
  {
    "id": 42,
    "startSec": 109.787,
    "endSec": 111.838,
    "startFrame": 3294,
    "endFrame": 3355,
    "text": "number series:",
    "section": "regulations"
  },
  {
    "id": 43,
    "startSec": 111.838,
    "endSec": 114.447,
    "startFrame": 3355,
    "endFrame": 3433,
    "text": "140 for promotional calls,",
    "section": "regulations"
  },
  {
    "id": 44,
    "startSec": 114.447,
    "endSec": 117.523,
    "startFrame": 3433,
    "endFrame": 3526,
    "text": "1600 for service and transactional calls.",
    "section": "regulations"
  },
  {
    "id": 45,
    "startSec": 117.523,
    "endSec": 120.319,
    "startFrame": 3526,
    "endFrame": 3610,
    "text": "Ordinary 10-digit numbers are out.",
    "section": "regulations"
  },
  {
    "id": 46,
    "startSec": 120.319,
    "endSec": 122.928,
    "startFrame": 3610,
    "endFrame": 3688,
    "text": "Those rules are aimed at commercial calling,",
    "section": "regulations"
  },
  {
    "id": 47,
    "startSec": 122.928,
    "endSec": 125.072,
    "startFrame": 3688,
    "endFrame": 3752,
    "text": "but they show how closely India watches numbers,",
    "section": "regulations"
  },
  {
    "id": 48,
    "startSec": 125.072,
    "endSec": 128.147,
    "startFrame": 3752,
    "endFrame": 3844,
    "text": "telecom resources, and automated voices.",
    "section": "regulations"
  },
  {
    "id": 49,
    "startSec": 128.147,
    "endSec": 131.223,
    "startFrame": 3844,
    "endFrame": 3937,
    "text": "So this isn't a bug waiting for a clever fix.",
    "section": "regulations"
  },
  {
    "id": 50,
    "startSec": 131.223,
    "endSec": 133.087,
    "startFrame": 3937,
    "endFrame": 3993,
    "text": "It's a boundary",
    "section": "regulations"
  },
  {
    "id": 51,
    "startSec": 133.087,
    "endSec": 135.883,
    "startFrame": 3993,
    "endFrame": 4076,
    "text": "set by the operating system, the app store,",
    "section": "regulations"
  },
  {
    "id": 52,
    "startSec": 135.883,
    "endSec": 138.679,
    "startFrame": 4076,
    "endFrame": 4160,
    "text": "and the telecom network itself.",
    "section": "regulations"
  },
  {
    "id": 53,
    "startSec": 138.679,
    "endSec": 141.661,
    "startFrame": 4160,
    "endFrame": 4250,
    "text": "Now: what can be done, today.",
    "section": "regulations"
  },
  {
    "id": 54,
    "startSec": 141.661,
    "endSec": 144.271,
    "startFrame": 4250,
    "endFrame": 4328,
    "text": "If the audio can't come out of the phone,",
    "section": "regulations"
  },
  {
    "id": 55,
    "startSec": 144.271,
    "endSec": 146.507,
    "startFrame": 4328,
    "endFrame": 4395,
    "text": "the call has to arrive somewhere else.",
    "section": "regulations"
  },
  {
    "id": 56,
    "startSec": 146.507,
    "endSec": 149.583,
    "startFrame": 4395,
    "endFrame": 4487,
    "text": "An authorized cloud telephony provider can receive the call",
    "section": "regulations"
  },
  {
    "id": 57,
    "startSec": 149.583,
    "endSec": 151.913,
    "startFrame": 4487,
    "endFrame": 4557,
    "text": "on its own infrastructure.",
    "section": "cloud_telephony"
  },
  {
    "id": 58,
    "startSec": 151.913,
    "endSec": 154.616,
    "startFrame": 4557,
    "endFrame": 4638,
    "text": "The owner's number can forward calls to it,",
    "section": "cloud_telephony"
  },
  {
    "id": 59,
    "startSec": 154.616,
    "endSec": 156.852,
    "startFrame": 4638,
    "endFrame": 4706,
    "text": "for example when they're busy, unanswered,",
    "section": "cloud_telephony"
  },
  {
    "id": 60,
    "startSec": 156.852,
    "endSec": 158.81,
    "startFrame": 4706,
    "endFrame": 4764,
    "text": "or unreached.",
    "section": "cloud_telephony"
  },
  {
    "id": 61,
    "startSec": 158.81,
    "endSec": 161.605,
    "startFrame": 4764,
    "endFrame": 4848,
    "text": "Take Exotel, an Indian cloud telephony provider.",
    "section": "cloud_telephony"
  },
  {
    "id": 62,
    "startSec": 161.605,
    "endSec": 163.749,
    "startFrame": 4848,
    "endFrame": 4912,
    "text": "When a call is answered,",
    "section": "cloud_telephony"
  },
  {
    "id": 63,
    "startSec": 163.749,
    "endSec": 166.452,
    "startFrame": 4912,
    "endFrame": 4994,
    "text": "its AgentStream service opens a WebSocket",
    "section": "cloud_telephony"
  },
  {
    "id": 64,
    "startSec": 166.452,
    "endSec": 168.502,
    "startFrame": 4994,
    "endFrame": 5055,
    "text": "to your server",
    "section": "cloud_telephony"
  },
  {
    "id": 65,
    "startSec": 168.502,
    "endSec": 171.298,
    "startFrame": 5055,
    "endFrame": 5139,
    "text": "and streams the caller's audio as raw PCM,",
    "section": "cloud_telephony"
  },
  {
    "id": 66,
    "startSec": 171.298,
    "endSec": 174.28,
    "startFrame": 5139,
    "endFrame": 5228,
    "text": "in chunks of about 100 milliseconds.",
    "section": "cloud_telephony"
  },
  {
    "id": 67,
    "startSec": 174.28,
    "endSec": 176.89,
    "startFrame": 5228,
    "endFrame": 5307,
    "text": "It's telephone-quality audio: 8 kHz.",
    "section": "cloud_telephony"
  },
  {
    "id": 68,
    "startSec": 176.89,
    "endSec": 179.872,
    "startFrame": 5307,
    "endFrame": 5396,
    "text": "With its VoiceBot setup, the connection is two-way.",
    "section": "cloud_telephony"
  },
  {
    "id": 69,
    "startSec": 179.872,
    "endSec": 182.389,
    "startFrame": 5396,
    "endFrame": 5472,
    "text": "Your server sends audio back on the same socket,",
    "section": "cloud_telephony"
  },
  {
    "id": 70,
    "startSec": 182.389,
    "endSec": 184.532,
    "startFrame": 5472,
    "endFrame": 5536,
    "text": "and the caller hears it.",
    "section": "cloud_telephony"
  },
  {
    "id": 71,
    "startSec": 184.532,
    "endSec": 186.862,
    "startFrame": 5536,
    "endFrame": 5606,
    "text": "And here's a detail that matters:",
    "section": "cloud_telephony"
  },
  {
    "id": 72,
    "startSec": 186.862,
    "endSec": 189.285,
    "startFrame": 5606,
    "endFrame": 5679,
    "text": "the provider only relays the audio.",
    "section": "cloud_telephony"
  },
  {
    "id": 73,
    "startSec": 189.285,
    "endSec": 191.895,
    "startFrame": 5679,
    "endFrame": 5757,
    "text": "It does not do speech recognition",
    "section": "cloud_telephony"
  },
  {
    "id": 74,
    "startSec": 191.895,
    "endSec": 194.038,
    "startFrame": 5757,
    "endFrame": 5821,
    "text": "or voice generation.",
    "section": "cloud_telephony"
  },
  {
    "id": 75,
    "startSec": 194.038,
    "endSec": 196.555,
    "startFrame": 5821,
    "endFrame": 5897,
    "text": "That part is ours.",
    "section": "cloud_telephony"
  },
  {
    "id": 76,
    "startSec": 196.555,
    "endSec": 199.351,
    "startFrame": 5897,
    "endFrame": 5981,
    "text": "So the pipeline has three jobs.",
    "section": "cloud_telephony"
  },
  {
    "id": 77,
    "startSec": 199.351,
    "endSec": 201.681,
    "startFrame": 5981,
    "endFrame": 6050,
    "text": "First: speech-to-text.",
    "section": "cloud_telephony"
  },
  {
    "id": 78,
    "startSec": 201.681,
    "endSec": 204.57,
    "startFrame": 6050,
    "endFrame": 6137,
    "text": "A streaming recognizer turns the caller's audio into text",
    "section": "cloud_telephony"
  },
  {
    "id": 79,
    "startSec": 204.57,
    "endSec": 206.807,
    "startFrame": 6137,
    "endFrame": 6204,
    "text": "while they're still talking.",
    "section": "cloud_telephony"
  },
  {
    "id": 80,
    "startSec": 206.807,
    "endSec": 209.975,
    "startFrame": 6204,
    "endFrame": 6299,
    "text": "Sarvam offers this with its Saaras models,",
    "section": "cloud_telephony"
  },
  {
    "id": 81,
    "startSec": 209.975,
    "endSec": 212.305,
    "startFrame": 6299,
    "endFrame": 6369,
    "text": "built for Indian languages with support",
    "section": "cloud_telephony"
  },
  {
    "id": 82,
    "startSec": 212.305,
    "endSec": 215.754,
    "startFrame": 6369,
    "endFrame": 6473,
    "text": "for switching between languages like Hindi and English.",
    "section": "cloud_telephony"
  },
  {
    "id": 83,
    "startSec": 215.754,
    "endSec": 218.27,
    "startFrame": 6473,
    "endFrame": 6548,
    "text": "Second: the language model.",
    "section": "cloud_telephony"
  },
  {
    "id": 84,
    "startSec": 218.27,
    "endSec": 220.786,
    "startFrame": 6548,
    "endFrame": 6624,
    "text": "It takes the transcript and the conversation so far,",
    "section": "pipeline"
  },
  {
    "id": 85,
    "startSec": 220.786,
    "endSec": 223.023,
    "startFrame": 6624,
    "endFrame": 6691,
    "text": "works out what the caller wants,",
    "section": "pipeline"
  },
  {
    "id": 86,
    "startSec": 223.023,
    "endSec": 225.353,
    "startFrame": 6691,
    "endFrame": 6761,
    "text": "decides what to say,",
    "section": "pipeline"
  },
  {
    "id": 87,
    "startSec": 225.353,
    "endSec": 228.615,
    "startFrame": 6761,
    "endFrame": 6858,
    "text": "and can call authorized tools, like a calendar.",
    "section": "pipeline"
  },
  {
    "id": 88,
    "startSec": 228.615,
    "endSec": 230.945,
    "startFrame": 6858,
    "endFrame": 6928,
    "text": "Third: text-to-speech.",
    "section": "pipeline"
  },
  {
    "id": 89,
    "startSec": 230.945,
    "endSec": 233.648,
    "startFrame": 6928,
    "endFrame": 7009,
    "text": "Bulbul from Sarvam, or ElevenLabs,",
    "section": "pipeline"
  },
  {
    "id": 90,
    "startSec": 233.648,
    "endSec": 236.071,
    "startFrame": 7009,
    "endFrame": 7082,
    "text": "turns the reply into audio that goes straight back",
    "section": "pipeline"
  },
  {
    "id": 91,
    "startSec": 236.071,
    "endSec": 238.214,
    "startFrame": 7082,
    "endFrame": 7146,
    "text": "down the same connection.",
    "section": "pipeline"
  },
  {
    "id": 92,
    "startSec": 238.214,
    "endSec": 241.569,
    "startFrame": 7146,
    "endFrame": 7247,
    "text": "Wiring all of this together is the orchestration layer.",
    "section": "pipeline"
  },
  {
    "id": 93,
    "startSec": 241.569,
    "endSec": 243.713,
    "startFrame": 7247,
    "endFrame": 7311,
    "text": "Vapi is a hosted platform",
    "section": "pipeline"
  },
  {
    "id": 94,
    "startSec": 243.713,
    "endSec": 245.857,
    "startFrame": 7311,
    "endFrame": 7376,
    "text": "where you plug in your own speech, language,",
    "section": "pipeline"
  },
  {
    "id": 95,
    "startSec": 245.857,
    "endSec": 247.814,
    "startFrame": 7376,
    "endFrame": 7434,
    "text": "and voice providers,",
    "section": "pipeline"
  },
  {
    "id": 96,
    "startSec": 247.814,
    "endSec": 250.144,
    "startFrame": 7434,
    "endFrame": 7504,
    "text": "and it handles turn-taking, interruptions,",
    "section": "pipeline"
  },
  {
    "id": 97,
    "startSec": 250.144,
    "endSec": 252.194,
    "startFrame": 7504,
    "endFrame": 7566,
    "text": "and tool calls.",
    "section": "pipeline"
  },
  {
    "id": 98,
    "startSec": 252.194,
    "endSec": 254.244,
    "startFrame": 7566,
    "endFrame": 7627,
    "text": "Or you build it yourself",
    "section": "pipeline"
  },
  {
    "id": 99,
    "startSec": 254.244,
    "endSec": 256.947,
    "startFrame": 7627,
    "endFrame": 7708,
    "text": "with open-source frameworks like Pipecat",
    "section": "pipeline"
  },
  {
    "id": 100,
    "startSec": 256.947,
    "endSec": 259.277,
    "startFrame": 7708,
    "endFrame": 7778,
    "text": "or a custom Node.js layer.",
    "section": "pipeline"
  },
  {
    "id": 101,
    "startSec": 259.277,
    "endSec": 262.539,
    "startFrame": 7778,
    "endFrame": 7876,
    "text": "Sarvam's own documentation even walks through a phone voice agent",
    "section": "pipeline"
  },
  {
    "id": 102,
    "startSec": 262.539,
    "endSec": 265.987,
    "startFrame": 7876,
    "endFrame": 7980,
    "text": "built from Exotel, Pipecat, and Sarvam.",
    "section": "pipeline"
  },
  {
    "id": 103,
    "startSec": 265.987,
    "endSec": 269.995,
    "startFrame": 7980,
    "endFrame": 8100,
    "text": "But a working pipeline is not a good phone agent.",
    "section": "pipeline"
  },
  {
    "id": 104,
    "startSec": 269.995,
    "endSec": 272.977,
    "startFrame": 8100,
    "endFrame": 8189,
    "text": "People leave only a fraction of a second between turns.",
    "section": "pipeline"
  },
  {
    "id": 105,
    "startSec": 272.977,
    "endSec": 275.587,
    "startFrame": 8189,
    "endFrame": 8268,
    "text": "Every step in this chain\u2014the network,",
    "section": "pipeline"
  },
  {
    "id": 106,
    "startSec": 275.587,
    "endSec": 279.221,
    "startFrame": 8268,
    "endFrame": 8377,
    "text": "the recognizer, the model, the voice\u2014adds delay.",
    "section": "pipeline"
  },
  {
    "id": 107,
    "startSec": 279.221,
    "endSec": 282.204,
    "startFrame": 8377,
    "endFrame": 8466,
    "text": "Interruptions\u2014what engineers call \"barge-in\"\u2014",
    "section": "pipeline"
  },
  {
    "id": 108,
    "startSec": 282.204,
    "endSec": 285.093,
    "startFrame": 8466,
    "endFrame": 8553,
    "text": "mean the AI must stop talking the instant the caller starts.",
    "section": "pipeline"
  },
  {
    "id": 109,
    "startSec": 285.093,
    "endSec": 288.075,
    "startFrame": 8553,
    "endFrame": 8642,
    "text": "Phone lines are noisy and narrow. Connections drop.",
    "section": "pipeline"
  },
  {
    "id": 110,
    "startSec": 288.075,
    "endSec": 290.871,
    "startFrame": 8642,
    "endFrame": 8726,
    "text": "Context has to survive the whole call,",
    "section": "pipeline"
  },
  {
    "id": 111,
    "startSec": 290.871,
    "endSec": 293.854,
    "startFrame": 8726,
    "endFrame": 8816,
    "text": "and the AI has to know when to step back",
    "section": "challenges"
  },
  {
    "id": 112,
    "startSec": 293.854,
    "endSec": 295.904,
    "startFrame": 8816,
    "endFrame": 8877,
    "text": "and hand over to a human.",
    "section": "challenges"
  },
  {
    "id": 113,
    "startSec": 295.904,
    "endSec": 299.352,
    "startFrame": 8877,
    "endFrame": 8981,
    "text": "That's the real engineering.",
    "section": "challenges"
  },
  {
    "id": 114,
    "startSec": 299.352,
    "endSec": 301.775,
    "startFrame": 8981,
    "endFrame": 9053,
    "text": "So, what do we intend to do?",
    "section": "challenges"
  },
  {
    "id": 115,
    "startSec": 301.775,
    "endSec": 304.385,
    "startFrame": 9053,
    "endFrame": 9132,
    "text": "The goal is not another IVR,",
    "section": "challenges"
  },
  {
    "id": 116,
    "startSec": 304.385,
    "endSec": 307.367,
    "startFrame": 9132,
    "endFrame": 9221,
    "text": "not a menu that plays pre-recorded options.",
    "section": "challenges"
  },
  {
    "id": 117,
    "startSec": 307.367,
    "endSec": 309.977,
    "startFrame": 9221,
    "endFrame": 9299,
    "text": "It's a personal agent that understands",
    "section": "challenges"
  },
  {
    "id": 118,
    "startSec": 309.977,
    "endSec": 312.4,
    "startFrame": 9299,
    "endFrame": 9372,
    "text": "who's calling and why,",
    "section": "challenges"
  },
  {
    "id": 119,
    "startSec": 312.4,
    "endSec": 314.73,
    "startFrame": 9372,
    "endFrame": 9442,
    "text": "keeps context, answers questions,",
    "section": "challenges"
  },
  {
    "id": 120,
    "startSec": 314.73,
    "endSec": 317.339,
    "startFrame": 9442,
    "endFrame": 9520,
    "text": "takes a message, or checks your availability",
    "section": "challenges"
  },
  {
    "id": 121,
    "startSec": 317.339,
    "endSec": 319.203,
    "startFrame": 9520,
    "endFrame": 9576,
    "text": "and books a time\u2014",
    "section": "challenges"
  },
  {
    "id": 122,
    "startSec": 319.203,
    "endSec": 322.372,
    "startFrame": 9576,
    "endFrame": 9671,
    "text": "all with the owner's permission.",
    "section": "challenges"
  },
  {
    "id": 123,
    "startSec": 322.372,
    "endSec": 325.541,
    "startFrame": 9671,
    "endFrame": 9766,
    "text": "The first milestone is a working cloud-based phone agent.",
    "section": "challenges"
  },
  {
    "id": 124,
    "startSec": 325.541,
    "endSec": 328.43,
    "startFrame": 9766,
    "endFrame": 9853,
    "text": "The bigger ambition is making it work",
    "section": "challenges"
  },
  {
    "id": 125,
    "startSec": 328.43,
    "endSec": 331.04,
    "startFrame": 9853,
    "endFrame": 9931,
    "text": "with the phone people already use.",
    "section": "app_functions"
  },
  {
    "id": 126,
    "startSec": 331.04,
    "endSec": 334.395,
    "startFrame": 9931,
    "endFrame": 10032,
    "text": "And Android may still have a role.",
    "section": "app_functions"
  },
  {
    "id": 127,
    "startSec": 334.395,
    "endSec": 337.191,
    "startFrame": 10032,
    "endFrame": 10116,
    "text": "App Functions is an Android platform API",
    "section": "app_functions"
  },
  {
    "id": 128,
    "startSec": 337.191,
    "endSec": 339.334,
    "startFrame": 10116,
    "endFrame": 10180,
    "text": "with a Jetpack library",
    "section": "app_functions"
  },
  {
    "id": 129,
    "startSec": 339.334,
    "endSec": 342.317,
    "startFrame": 10180,
    "endFrame": 10269,
    "text": "that lets an app expose its features as tools for AI agents.",
    "section": "app_functions"
  },
  {
    "id": 130,
    "startSec": 342.317,
    "endSec": 344.647,
    "startFrame": 10269,
    "endFrame": 10339,
    "text": "Think of it as the mobile counterpart",
    "section": "app_functions"
  },
  {
    "id": 131,
    "startSec": 344.647,
    "endSec": 347.256,
    "startFrame": 10339,
    "endFrame": 10418,
    "text": "to Model Context Protocol (MCP),",
    "section": "app_functions"
  },
  {
    "id": 132,
    "startSec": 347.256,
    "endSec": 350.052,
    "startFrame": 10418,
    "endFrame": 10502,
    "text": "which connects agents to outside services.",
    "section": "app_functions"
  },
  {
    "id": 133,
    "startSec": 350.052,
    "endSec": 352.755,
    "startFrame": 10502,
    "endFrame": 10583,
    "text": "App Functions needs Android 16 or higher,",
    "section": "app_functions"
  },
  {
    "id": 134,
    "startSec": 352.755,
    "endSec": 354.992,
    "startFrame": 10583,
    "endFrame": 10650,
    "text": "and it's still early days.",
    "section": "app_functions"
  },
  {
    "id": 135,
    "startSec": 354.992,
    "endSec": 357.694,
    "startFrame": 10650,
    "endFrame": 10731,
    "text": "They won't unlock cellular call audio,",
    "section": "app_functions"
  },
  {
    "id": 136,
    "startSec": 357.694,
    "endSec": 360.397,
    "startFrame": 10731,
    "endFrame": 10812,
    "text": "but they could connect the agent to the rest",
    "section": "app_functions"
  },
  {
    "id": 137,
    "startSec": 360.397,
    "endSec": 362.727,
    "startFrame": 10812,
    "endFrame": 10882,
    "text": "of the owner's digital life:",
    "section": "app_functions"
  },
  {
    "id": 138,
    "startSec": 362.727,
    "endSec": 366.362,
    "startFrame": 10882,
    "endFrame": 10991,
    "text": "calendar, messages, notes, tasks.",
    "section": "app_functions"
  },
  {
    "id": 139,
    "startSec": 366.362,
    "endSec": 368.598,
    "startFrame": 10991,
    "endFrame": 11058,
    "text": "We're not there yet.",
    "section": "app_functions"
  },
  {
    "id": 140,
    "startSec": 368.598,
    "endSec": 371.301,
    "startFrame": 11058,
    "endFrame": 11139,
    "text": "This is where we're starting.",
    "section": "app_functions"
  },
  {
    "id": 141,
    "startSec": 371.301,
    "endSec": 373.631,
    "startFrame": 11139,
    "endFrame": 11209,
    "text": "Now I want to know:",
    "section": "outro"
  },
  {
    "id": 142,
    "startSec": 373.631,
    "endSec": 376.986,
    "startFrame": 11209,
    "endFrame": 11310,
    "text": "would you let an AI answer your phone calls for you?",
    "section": "outro"
  },
  {
    "id": 143,
    "startSec": 376.986,
    "endSec": 379.969,
    "startFrame": 11310,
    "endFrame": 11399,
    "text": "Or is that a line you won't cross?",
    "section": "outro"
  },
  {
    "id": 144,
    "startSec": 379.969,
    "endSec": 382.578,
    "startFrame": 11399,
    "endFrame": 11477,
    "text": "And if you've fought with Android telephony",
    "section": "outro"
  },
  {
    "id": 145,
    "startSec": 382.578,
    "endSec": 385.281,
    "startFrame": 11477,
    "endFrame": 11558,
    "text": "or voice AI yourself,",
    "section": "outro"
  },
  {
    "id": 146,
    "startSec": 385.281,
    "endSec": 387.424,
    "startFrame": 11558,
    "endFrame": 11623,
    "text": "tell me what I'm missing.",
    "section": "outro"
  },
  {
    "id": 147,
    "startSec": 387.424,
    "endSec": 390.034,
    "startFrame": 11623,
    "endFrame": 11701,
    "text": "Drop it in the comments.",
    "section": "outro"
  }
];
