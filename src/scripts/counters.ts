import { prefersReducedMotion, easeOutCubic } from "../lib/motionPrefs";

function formatValue(value: number, decimals: number): string {
  if (decimals > 0) {
    return value.toFixed(decimals).replace(".", ",");
  }
  return Math.round(value).toLocaleString("pl-PL");
}

export function setupCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>("[data-counter-target]");
  if (counters.length === 0 || prefersReducedMotion()) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);

        const target = parseFloat(el.dataset.counterTarget ?? "0");
        const decimals = parseInt(el.dataset.counterDecimals ?? "0", 10);
        const suffix = el.dataset.counterSuffix ?? "";
        const duration = 1200;
        const start = performance.now();

        function frame(now: number) {
          const t = Math.min(1, (now - start) / duration);
          const eased = easeOutCubic(t);
          el.textContent = formatValue(target * eased, decimals) + suffix;
          if (t < 1) requestAnimationFrame(frame);
          else el.textContent = formatValue(target, decimals) + suffix;
        }

        requestAnimationFrame(frame);
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => observer.observe(el));
}
