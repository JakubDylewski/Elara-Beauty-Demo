export interface FloatingButtonController {
  update: (scrollY: number) => void;
}

export function createFloatingButton(): FloatingButtonController | null {
  const button = document.querySelector<HTMLElement>("[data-floating-book]");
  if (!button) return null;

  button.classList.add("js-managed");
  let visible = false;

  function update(scrollY: number) {
    const shouldShow = scrollY > 400;
    if (shouldShow === visible) return;
    visible = shouldShow;
    button!.classList.toggle("is-visible", visible);
  }

  return { update };
}
