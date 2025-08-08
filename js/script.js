document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");

  // 🌙 Tema oscuro/claro
  const savedTheme = localStorage.getItem("theme") || "dark";
  body.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "🌞" : "🌙";

  themeToggle.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "dark" ? "🌞" : "🌙";
  });

  // ⬆️ Botón volver arriba
  const scrollToTopBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ⚡ Efecto chispa
  document.addEventListener("click", (e) => {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.left = `${e.clientX}px`;
    spark.style.top = `${e.clientY}px`;
    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 500);
  });

  // ✅ Validación de formulario
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      status.textContent = "❌ Por favor, completa todos los campos.";
      status.style.color = "red";
      return;
    }

    status.textContent = "⏳ Enviando...";
    status.style.color = "yellow";
  });

  form.addEventListener("submit", function () {
    setTimeout(() => {
      status.textContent = "✅ ¡Mensaje enviado!";
      status.style.color = "lightgreen";
    }, 2000); // Simula retraso
  });

  // 🌐 Traducción multilingüe
  const translations = {
    es: {
      heroTitle: "👋 Hola, soy Malik ⚡",
      heroSubtitle: "Desarrollador Front-End especializado en experiencias digitales impactantes, accesibles y multilingües.\nTransformo ideas en sitios web modernos, rápidos y visualmente irresistibles.",
      heroButton: "Contáctame",
      aboutTitle: "Sobre mí ⚡",
      aboutText1: "Soy un desarrollador web creativo especializado en HTML, CSS, JS y sitios multilingües con animaciones modernas.",
      servicesTitle: "Servicios ⚡",
      s1: "Diseño Web",
      s2: "Multilenguaje",
      s3: "Animaciones",
      portfolioTitle: "Proyectos ⚡",
      formTitle: "Contáctame ⚡",
      labelNombre: "Nombre:",
      labelEmail: "Email:",
      labelMensaje: "¿Cómo te puedo ayudar?😊",
      formButton: "Enviar"
    },
    en: {
      heroTitle: "👋 Hi, I'm Malik ⚡",
      heroSubtitle: "Front-End Developer turning ideas into digital experiences.\nI turn ideas into modern, fast, and visually striking websites.",
      heroButton: "Contact me",
      aboutTitle: "About Me ⚡",
      aboutText1: "Creative web developer specialized in HTML, CSS, JS and multilingual websites with modern animations.",
      servicesTitle: "Services ⚡",
      s1: "Web Design",
      s1p: "Fast and responsive websites for all devices.",
      s2: "Multilanguage",
      s2p: "Effortless support for multiple languages.",
      s3: "Animations",
      s3p: "Visual interactions that captivate users.",

      portfolioTitle: "Projects ⚡",
      formTitle: "Contact Me ⚡",
      labelNombre: "Name:",
      labelEmail: "Email:",
      labelMensaje: "How can I help you?😊",
      formButton: "Send"
    },
    fr: {
      heroTitle: "👋 Salut, je suis Malik ⚡",
      heroSubtitle: "Développeur Front-End spécialisé dans les expériences numériques percutantes, accessibles et multilingues.\nJe transforme des idées en sites web modernes, rapides et visuellement attractifs.",
      heroButton: "Contactez-moi",
      aboutTitle: "À propos ⚡",
      aboutText1: "Développeur créatif spécialisé en HTML, CSS, JS et sites multilingues avec des animations modernes.",
      servicesTitle: "Services ⚡",
      s1: "Conception Web",
      s1p: "Sites rapides et adaptables à tous les appareils.",
      s2: "Multilingue",
      s2p: "Prise en charge de plusieurs langues sans effort.",
      s3: "Animations",
      s3p: "Interactions visuelles captivantes.",

      portfolioTitle: "Projets ⚡",
      formTitle: "Contactez-moi ⚡",
      labelNombre: "Nom:",
      labelEmail: "Email:",
      labelMensaje: "Comment puis-je vous aider ? 😊",
      formButton: "Envoyer"
    }
  };

  const langSelect = document.getElementById("languageSelect");
  langSelect.addEventListener("change", () => {
    const lang = langSelect.value;
    const tr = translations[lang];
    if (!tr) return;

    for (const id in tr) {
      const el = document.getElementById(id);
      if (el) el.textContent = tr[id];
    }
  });

  // Menú móvil: cerrar al hacer clic en enlaces
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll("#main-nav .nav-link");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("open");
      }
    });
  });
});

// Sombra al header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 10);
});
