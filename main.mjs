import { createTrailDots, startTrail } from "./anim.mjs";

const container = document.body;

const dots = createTrailDots(container, 120); // number of bubbles

startTrail(dots, {
    ease: 0.18
});
