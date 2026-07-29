import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }

  try {
    const targets = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
    if (targets && targets.length > 0) {
      gsap.fromTo(
        targets,
        { opacity: 0, y: 40, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.out",
          y: 0,
          stagger: 0.15,
          delay: 0.2,
        }
      );
    }
  } catch (e) {
    console.warn("initialFX animation skipped:", e);
  }
}
