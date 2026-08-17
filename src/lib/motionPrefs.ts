export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isLowPowerDevice(): boolean {
  return typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4;
}

export function easeOutQuad(t: number): number {
  return t * (2 - t);
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
