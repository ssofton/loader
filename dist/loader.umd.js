(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Loader = factory());
})(this, (function () { 'use strict';

    const instances = {};

    class LoadingIndicator {
            constructor(options = {}) {

                this.options = {
                    size: (options.size || 40) + "px",
                    color: options.color || "#0d6efd",
                    overlay: options.overlay ?? true,
                    background: options.background || "rgba(255,255,255,.5)"
                };

                this.spinner = null;

                this.createStyle();
            }

            createStyle() {

                if (document.getElementById("loading-indicator-style")) return;

                const style = document.createElement("style");

                style.id = "loading-indicator-style";

                style.textContent = `
                .loading-overlay{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    z-index:999999;
                }

                .loading-spinner{
                    border:6px solid #e5e5e5;
                    border-top:6px solid var(--spinner-color);
                    border-radius:50%;
                    animation:loading-spin 1s linear infinite;
                }

                @keyframes loading-spin{
                    from{transform:rotate(0deg);}
                    to{transform:rotate(360deg);}
                }
            `;

                document.head.appendChild(style);
            }

            show(container = document.body) {

                if (this.spinner) return;

                const overlay = document.createElement("div");
                overlay.className = "loading-overlay";

                if (container === document.body) {

                    overlay.style.position = "fixed";
                    overlay.style.inset = "0";

                } else {

                    if (getComputedStyle(container).position === "static") {
                        container.style.position = "relative";
                    }

                    overlay.style.position = "absolute";
                    overlay.style.top = "0";
                    overlay.style.left = "0";
                    overlay.style.right = "0";
                    overlay.style.bottom = "0";
                }

                overlay.style.background = this.options.overlay
                        ? this.options.background
                        : "transparent";
                const spinner = document.createElement("div");
                spinner.className = "loading-spinner";
                spinner.style.width = this.options.size;
                spinner.style.height = this.options.size;
                spinner.style.setProperty("--spinner-color", this.options.color);
                overlay.appendChild(spinner);
                container.appendChild(overlay);
                this.spinner = overlay;
            }
            hide() {
                if (!this.spinner) return;
                this.spinner.remove();
                this.spinner = null;
            }
        }
    const Loader = {
        show(options = {}) {

            const key = options.targetId || "body";

            if (instances[key]) {
                instances[key].hide();
            }

            const loader = new LoadingIndicator(options);

            const target = options.targetId
                ? document.getElementById(options.targetId)
                : document.body;

            loader.show(target);

            instances[key] = loader;
        },
        hide(targetId = null) {

            const key = targetId || "body";

            if (instances[key]) {
                instances[key].hide();
                delete instances[key];
            }
        }
    };

    return Loader;

}));
