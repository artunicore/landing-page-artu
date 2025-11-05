document.addEventListener("DOMContentLoaded", () => {
  // --- LÓGICA DO MENU HAMBÚRGUER ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  // --- LÓGICA DA NAVBAR ON SCROLL ---
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- LÓGICA DAS ANIMAÇÕES ON SCROLL ---
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length === 0) {
    return;
  }

  // Um único observador para todas as animações de fade-in
  const fadeInObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElements.forEach((element) => {
    // Todos os elementos, incluindo a seção de habilidades, usam o mesmo observador
    fadeInObserver.observe(element);
  });
});
