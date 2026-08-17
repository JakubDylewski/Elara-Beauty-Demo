import { prefersReducedMotion } from "../lib/motionPrefs";

export function setupCascade(): void {
  const items = document.querySelectorAll<HTMLElement>("[data-cascade]");
  if (items.length === 0) return;

  if (prefersReducedMotion()) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
}
