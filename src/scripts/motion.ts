import { prefersReducedMotion, isLowPowerDevice } from "../lib/motionPrefs";
import { createHeroMotion } from "./heroMotion";
import { createMarquee } from "./marquee";
import { createThread } from "./thread";
import { createPinnedCategories } from "./pinnedCategories";
import { createFloatingButton } from "./floatingButton";
import { setupCascade } from "./cascade";
import { setupCounters } from "./counters";

function init() {
  setupCascade();
  setupCounters();

  const reduced = prefersReducedMotion();
  const lowPower = isLowPowerDevice();

  // Thread must still build its static geometry (visible line) even under
  // reduced motion, so it is always created; its own update() is a no-op
  // when reduced motion is on.
  const thread = createThread();

  if (reduced) return;

  const hero = createHeroMotion();
  const marquee = createMarquee();
  const pinned = createPinnedCategories();
  const floatingButton = createFloatingButton();

  if (!hero && !marquee && !thread && !pinned && !floatingButton) return;

  const marqueeTrack = document.querySelector<HTMLElement>("[data-marquee-track]");

  let rafId: number | null = null;
  let idleFrames = 0;

  // Only the marquee needs continued frames after scrolling stops (to decay
  // its speed back to baseline). Everything else is a pure function of
  // scrollY and needs no further updates once scrolling has paused.
  function marqueeSettled(): boolean {
    if (!marqueeTrack) return true;
    const value = parseFloat(marqueeTrack.style.getPropertyValue("--marquee-speed") || "1");
    return Math.abs(value - 1) < 0.02;
  }

  function loop() {
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;

    hero?.update(scrollY, innerHeight);
    marquee?.update(scrollY, lowPower);
    thread?.update(scrollY, innerHeight, lowPower);
    pinned?.update(scrollY, innerHeight);
    floatingButton?.update(scrollY);

    idleFrames = marqueeSettled() ? idleFrames + 1 : 0;

    if (idleFrames > 12) {
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(loop);
  }

  function wake() {
    if (rafId === null) {
      idleFrames = 0;
      rafId = requestAnimationFrame(loop);
    }
  }

  window.addEventListener("scroll", wake, { passive: true });
  wake();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
