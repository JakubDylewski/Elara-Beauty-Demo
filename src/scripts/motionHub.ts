export interface MotionPayload {
  scrollY: number;
  innerHeight: number;
  reducedMotion: boolean;
  lowPower: boolean;
}

export type MotionCallback = (payload: MotionPayload) => boolean | void;

export interface MotionHub {
  register: (callback: MotionCallback) => void;
}

declare global {
  interface Window {
    elaraMotion?: MotionHub;
  }
}

function createHub(): MotionHub {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowPower = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
  const callbacks: MotionCallback[] = [];

  let rafId: number | null = null;
  let idleFrames = 0;

  function tick() {
    const payload: MotionPayload = {
      scrollY: window.scrollY,
      innerHeight: window.innerHeight,
      reducedMotion,
      lowPower,
    };

    let anyActive = false;
    for (const callback of callbacks) {
      if (callback(payload) === true) anyActive = true;
    }

    idleFrames = anyActive ? 0 : idleFrames + 1;

    if (reducedMotion || idleFrames > 12) {
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function wake() {
    if (rafId === null) {
      idleFrames = 0;
      rafId = requestAnimationFrame(tick);
    }
  }

  window.addEventListener("scroll", wake, { passive: true });

  return {
    register(callback: MotionCallback) {
      callbacks.push(callback);
      wake();
    },
  };
}

if (!window.elaraMotion) {
  window.elaraMotion = createHub();
}
