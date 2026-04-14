// main.mjs
import { createTrailDots, startTrail } from "./anim.mjs";

const container = document.body;

const dots = createTrailDots(container);

startTrail(dots, {
  ease: 0.18,
  size: 8,
  color: "#00ffcc",
});
