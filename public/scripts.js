function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  console.log(els);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
    console.log("magic");
  });
}

function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}

function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

domReady(() => {
  scrollTrigger(".project-tile", {
    rootMargin: "-100px",
  });

  scrollTrigger(".project-header", {
    rootMargin: "-100px",
  });
});
