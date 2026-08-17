import { easeOutQuad } from "../lib/motionPrefs";

export interface HeroController {
  update: (scrollY: number, innerHeight: number) => void;
}

export function createHeroMotion(): HeroController | null {
  const text = document.querySelector<HTMLElement>("[data-hero-text]");
  const tiles = document.querySelectorAll<HTMLElement>("[data-hero-tile]");

  if (!text || tiles.length === 0) return null;

  function update(scrollY: number, innerHeight: number) {
    const p = Math.min(1, Math.max(0, scrollY / (innerHeight * 0.65)));
    const eased = easeOutQuad(p);
    const isMobile = window.innerWidth < 768;
    const textShift = isMobile ? -120 : -220;
    const opacity = 1 - eased * 0.85;
    const scale = 1 - eased * 0.06;
    const animating = p > 0 && p < 1;
    const willChange = animating ? "transform, opacity" : "";

    text!.style.setProperty("--hero-tx", `${textShift * eased}px`);
    text!.style.setProperty("--hero-op", `${opacity}`);
    text!.style.willChange = willChange;

    tiles.forEach((tile) => {
      const mult = parseFloat(tile.dataset.heroMult ?? "1");
      const shift = 260 * mult * eased;
      tile.style.setProperty("--hero-tx", `${shift}px`);
      tile.style.setProperty("--hero-op", `${opacity}`);
      tile.style.setProperty("--hero-scale", `${scale}`);
      tile.style.willChange = willChange;
    });
  }

  return { update };
}
