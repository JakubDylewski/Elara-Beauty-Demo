import { prefersReducedMotion } from "../lib/motionPrefs";

const STEP = 20;
const THICK_WINDOW_RADIUS = 70;

function buildPathD(width: number, height: number, amplitude: number, wavelength: number): string {
  const centerX = width / 2;
  let d = `M ${centerX.toFixed(1)} 0`;
  for (let y = STEP; y <= height; y += STEP) {
    const x = centerX + amplitude * Math.sin((2 * Math.PI * y) / wavelength);
    d += ` L ${x.toFixed(1)} ${y}`;
  }
  return d;
}

export interface ThreadController {
  update: (scrollY: number, innerHeight: number, lowPower: boolean) => void;
}

export function createThread(): ThreadController | null {
  const svg = document.querySelector<SVGSVGElement>("[data-thread-svg]");
  const path = document.querySelector<SVGPathElement>("[data-thread-path]");
  const thickPath = document.querySelector<SVGPathElement>("[data-thread-thick-path]");
  const dot = document.querySelector<SVGCircleElement>("[data-thread-dot]");
  const maskCircle = document.querySelector<SVGCircleElement>("[data-thread-mask-circle]");

  if (!svg || !path || !thickPath || !dot || !maskCircle) return null;

  const reduced = prefersReducedMotion();
  let pathLength = 0;

  function rebuild() {
    const width = window.innerWidth;
    const height = document.documentElement.scrollHeight;
    const isMobile = width < 768;
    const amplitude = width * (isMobile ? 0.08 : 0.14);
    const wavelength = window.innerHeight * 0.9;

    svg!.setAttribute("width", String(width));
    svg!.setAttribute("height", String(height));
    svg!.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const d = buildPathD(width, height, amplitude, wavelength);
    path!.setAttribute("d", d);
    thickPath!.setAttribute("d", d);
    pathLength = path!.getTotalLength();

    if (reduced) {
      const start = path!.getPointAtLength(0);
      dot!.setAttribute("cx", String(start.x));
      dot!.setAttribute("cy", String(start.y));
      maskCircle!.setAttribute("cx", String(start.x));
      maskCircle!.setAttribute("cy", String(start.y));
    }
  }

  rebuild();
  window.addEventListener("load", rebuild, { once: true });

  let resizeTimer: number | undefined;
  window.addEventListener(
    "resize",
    () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(rebuild, 150);
    },
    { passive: true }
  );

  if (reduced) {
    return { update: () => {} };
  }

  function update(scrollY: number, innerHeight: number, lowPower: boolean) {
    const docHeight = document.documentElement.scrollHeight - innerHeight;
    const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
    const pt = path!.getPointAtLength(progress * pathLength);
    dot!.setAttribute("cx", String(pt.x));
    dot!.setAttribute("cy", String(pt.y));

    if (!lowPower) {
      maskCircle!.setAttribute("cx", String(pt.x));
      maskCircle!.setAttribute("cy", String(pt.y));
      thickPath!.style.opacity = "0.8";
    } else {
      thickPath!.style.opacity = "0";
    }
  }

  return { update };
}

export { THICK_WINDOW_RADIUS };
