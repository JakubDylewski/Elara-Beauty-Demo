export interface MarqueeController {
  update: (scrollY: number, lowPower: boolean) => void;
}

export function createMarquee(): MarqueeController | null {
  const track = document.querySelector<HTMLElement>("[data-marquee-track]");
  if (!track) return null;

  let lastScrollY = window.scrollY;
  let lastTime = performance.now();
  let currentMultiplier = 1;

  function update(scrollY: number, lowPower: boolean) {
    const now = performance.now();
    const dt = Math.max(16, now - lastTime);

    if (lowPower) {
      currentMultiplier = 1;
    } else {
      const dy = Math.abs(scrollY - lastScrollY);
      const velocity = dy / dt;
      const targetMultiplier = Math.min(2.5, 1 + velocity * 18);
      currentMultiplier += (targetMultiplier - currentMultiplier) * 0.15;
    }

    lastScrollY = scrollY;
    lastTime = now;
    track!.style.setProperty("--marquee-speed", currentMultiplier.toFixed(3));
  }

  return { update };
}
