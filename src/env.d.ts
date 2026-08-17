/// <reference types="astro/client" />

interface ElaraMotionPayload {
  scrollY: number;
  reducedMotion: boolean;
  lowPower: boolean;
}

interface ElaraMotionHub {
  reducedMotion: boolean;
  lowPower: boolean;
  register: (callback: (payload: ElaraMotionPayload) => void) => void;
}

interface Window {
  elaraMotion?: ElaraMotionHub;
}
