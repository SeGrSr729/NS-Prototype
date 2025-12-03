document.addEventListener("DOMContentLoaded", () => {
    // Feather icons
    if (window.feather) {
      feather.replace();
    }
  
    // Tab navigation
    const tabs = document.querySelectorAll(".tab");
    const screens = document.querySelectorAll(".screen");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-target");
  
        // active tab styling
        tabs.forEach((t) => t.classList.remove("tab-active"));
        tab.classList.add("tab-active");
  
        // show correct screen
        screens.forEach((scr) => {
          scr.classList.toggle("screen-active", scr.id === targetId);
        });
      });
    });
  
    // Kilometer card flip
    const flipBtn = document.getElementById("flip-km-card");
    const front = document.querySelector(".km-front");
    const back = document.querySelector(".km-back");
  
    if (flipBtn && front && back) {
      flipBtn.addEventListener("click", () => {
        front.classList.toggle("km-active");
        back.classList.toggle("km-active");
      });
  
      // initial state
      front.classList.add("km-active");
    }
  });
  