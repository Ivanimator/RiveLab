// altar.js

const ARTBOARD_NAME = "Mexico26-Poster-Potrait";             // <- update if needed
const STATE_MACHINE_NAME = "State Machine 1"; // <- update if needed

window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("riveCanvas");
  if (!canvas) return;

  function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const riveInstance = new rive.Rive({
    src: "riv/2511-test-08-mexico26.riv",
    canvas,
    autoplay: true,
    useOffscreenRenderer: true,

    artboard: ARTBOARD_NAME,
    stateMachines: STATE_MACHINE_NAME,
    autoBind: true,

    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
      // riveInstance.play(...) not needed if state machines drive behavior
    },

    onError: (e) => {
      console.error("Rive error:", e);
    },
  });
});
