// --- DARK MODE TOGGLE ---
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const icon = darkModeToggle.querySelector("i");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
});

// --- MENÚ MÓVIL ---
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

function closeMenu() {
  mobileMenu.classList.remove("open");
}

// --- EFECTO DE APARICIÓN SUAVE AL HACER SCROLL ---
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // deja de observar una vez visible
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
});

// --- HERO IMAGE SLIDER AUTOMÁTICO ---
const slides = document.querySelectorAll(".hero-slide");
const dotsContainer = document.getElementById("hero-dots");
let currentSlide = 0;

slides.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => goToSlide(index));
  dotsContainer.appendChild(dot);
});
const dots = dotsContainer.querySelectorAll("button");
dots[0].classList.add("active");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function goToSlide(index) {
  currentSlide = index;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Cambia cada 5 segundos

document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("main .section");

  // Observador para detectar cuando las secciones son visibles
  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 } // se activa cuando el 10% de la sección es visible
  );

  // Aplicar observador a cada sección
  secciones.forEach((seccion) => {
    observer.observe(seccion);
  });
});

// ...existing code...

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("main .section");
  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -12% 0px", // dispara un poco antes de llegar al final
    threshold: 0.12,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); // solo animar una vez
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
});

// ...existing code...
(function initObserver() {
  const sections = Array.from(document.querySelectorAll("main .section"));
  if (!sections.length) return;

  const options = {
    root: null,
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((s) => {
    // Si ya está visible en el viewport al cargar, activar sin esperar
    const rect = s.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      s.classList.add("visible");
    } else {
      observer.observe(s);
    }
  });
})();
// ...existing code...

// ...existing code...
(function initObserver() {
  const sections = Array.from(document.querySelectorAll("main .section"));
  if (!sections.length) return;

  const options = {
    root: null,
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  };

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;
        section.classList.add("visible");

        // Aplicar small stagger a hijos directos si hay (y limpiar luego)
        const children = Array.from(section.querySelectorAll(":scope > *"));
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 60}ms`;
        });
        setTimeout(() => {
          children.forEach((child) => (child.style.transitionDelay = ""));
        }, 900);

        observer.unobserve(section);
      }
    });
  }, options);

  sections.forEach((s) => {
    const rect = s.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) {
      s.classList.add("visible");
    } else {
      obs.observe(s);
    }
  });
})();
// ...existing code...

// ...existing code...
// Optional: aplicar delays dinámicos a las .service-card cuando la sección "services" entra en vista
(function staggerServicesOnVisible() {
  const target = document.getElementById("services");
  if (!target) return;
  const obs = new IntersectionObserver(
    (entries, o) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cards = Array.from(target.querySelectorAll(".service-card"));
          cards.forEach((card, i) => {
            card.style.transitionDelay = `${i * 80}ms`;
          });
          // activar la animación (si usas la regla .services-section.visible .service-card)
          target.classList.add("visible");
          // limpiar delays inline después de la animación para no interferir
          setTimeout(
            () => cards.forEach((c) => (c.style.transitionDelay = "")),
            1200
          );
          o.unobserve(target);
        }
      });
    },
    { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );
  obs.observe(target);
})();
// ...existing code...

// ...existing code...
/* Reemplaza la implementación del IntersectionObserver por esta versión.
   - Añade .visible inmediatamente cuando la sección está en viewport.
   - Aplica stagger dinámico sólo para la sección 'services' (cards)
*/
(function initObserver() {
  const sections = Array.from(document.querySelectorAll("main .section"));
  if (!sections.length) return;

  const options = {
    root: null,
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;
        // marcar visible (sin retrasar visibility)
        section.classList.add("visible");

        // Si es services, aplicar delays dinámicos a las .service-card (stagger)
        if (section.id === "services") {
          const cards = Array.from(
            section.querySelectorAll(".services-grid .service-card")
          );
          cards.forEach((card, i) => {
            // small dynamic delay (coincide con CSS but ensures dynamic count)
            card.style.transitionDelay = `${i * 70}ms`;
          });
          // limpiar delays inline después de la animación
          setTimeout(
            () => cards.forEach((c) => (c.style.transitionDelay = "")),
            900
          );
        }

        // Si quieres stagger para mission-vision, podrías aplicar similar lógica aquí

        obs.unobserve(section);
      }
    });
  }, options);

  sections.forEach((s) => {
    const rect = s.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewport) s.classList.add("visible");
    else observer.observe(s);
  });
})();
// ...existing code...

// ...existing code...
// Función para abrir WhatsApp con mensaje predefinido
window.openWhatsApp = function (message) {
  const whatsappNumber = "51960283702";
  const encodedMsg = encodeURIComponent(message);
  const url = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  window.open(url, "_blank");
};

// ...existing code...
