/**
 * Create trail dots and return structured objects
 */
export function createTrailDots(container, count = 100) {
    if (!container) {
        throw new Error("Container is required");
    }

    const dots = [];
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
        const el = document.createElement("div");
        el.classList.add("trail");

        const color = getRandomColor(); // 🎨 random color ici

        el.style.backgroundColor = color;

        fragment.appendChild(el);

        dots.push({
            el,
            x: 0,
            y: 0,
            color
        });
    }

    container.appendChild(fragment);

    return dots;
}

/**
 * Start smooth mouse trail animation
 */
export function startTrail(dots, options = {}) {
    const {
        ease = 0.15,
        size = 10
    } = options;

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        let x = mouseX;
        let y = mouseY;

        for (let i = 0; i < dots.length; i++) {
            const dot = dots[i];

            dot.x += (x - dot.x) * ease;
            dot.y += (y - dot.y) * ease;

            const half = size * 0.5;

            dot.el.style.transform =
                `translate3d(${dot.x - half}px, ${dot.y - half}px, 0)`;

            dot.el.style.width = `${size}px`;
            dot.el.style.height = `${size}px`;

            // 🎨 couleur déjà assignée à la création
            dot.el.style.backgroundColor = dot.color;

            x = dot.x;
            y = dot.y;
        }

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

/**
 * Random integer (safe)
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (min > max) {
        throw new Error("min must be <= max");
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Random hex color (#rrggbb)
 */
export function getRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0")}`;
}
