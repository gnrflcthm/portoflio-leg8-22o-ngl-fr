import type { ActionReturn } from "svelte/action";

const observer: IntersectionObserver = (() => {
    let instance: IntersectionObserver = null;

    if (!instance) {
        instance = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const e = entry.isIntersecting ? "enterviewport" : "exitviewport";
                entry.target.dispatchEvent(new CustomEvent(e));
            });
        });
    }

    return instance;
})();

export default function viewport(e: HTMLElement): ActionReturn {
    observer.observe(e);
    return {
        destroy() {
            observer.unobserve(e);
        },
    };
}
