export interface PinnedController {
  update: (scrollY: number, innerHeight: number) => void;
}

export function createPinnedCategories(): PinnedController | null {
  const container = document.querySelector<HTMLElement>("[data-pinned-container]");
  if (!container) return null;

  const images = Array.from(document.querySelectorAll<HTMLElement>("[data-pinned-image]"));
  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-pinned-item]"));
  const progressBar = document.querySelector<HTMLElement>("[data-pinned-progress]");
  const count = items.length;

  let lastActive = -1;
  let lastProgressPct = -1;

  function setActive(index: number) {
    if (index === lastActive) return;
    lastActive = index;
    images.forEach((el) => el.classList.toggle("is-active", Number(el.dataset.index) === index));
    items.forEach((el) => el.classList.toggle("is-active", Number(el.dataset.index) === index));
  }

  function update(_scrollY: number, innerHeight: number) {
    if (window.innerWidth < 1024 || count === 0) return;

    const rect = container.getBoundingClientRect();
    const maxScroll = container.offsetHeight - innerHeight;
    const scrolled = -rect.top;
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrolled / maxScroll)) : 0;

    const activeIndex = Math.min(count - 1, Math.floor(progress * count));
    setActive(activeIndex);

    const progressPct = Math.round(progress * 100);
    if (progressPct !== lastProgressPct && progressBar) {
      lastProgressPct = progressPct;
      progressBar.style.height = `${progressPct}%`;
    }
  }

  if (items.length > 0) {
    images.forEach((el) => el.classList.toggle("is-active", Number(el.dataset.index) === 0));
    items.forEach((el) => el.classList.toggle("is-active", Number(el.dataset.index) === 0));
  }

  return { update };
}
