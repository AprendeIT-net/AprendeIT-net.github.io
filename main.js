/**
 * AprendeIT - Script Principal
 * Catálogo de 4 cursos intensivos (2 semanas) dictados 100% en vivo por Jeremias Toledo
 */

const instructorProfile = {
  name: "Jeremias Toledo",
  role: "Fundador & Director Académico",
  company: "Senior Software Engineer & Especialista en IA y Automatización",
  bio: "Desarrollador y formador con amplia experiencia en software moderno, flujos agénticos y automatización. En AprendeIT todos los cursos son dictados 100% en vivo por Jeremias, con código real, proyectos prácticos y sin intermediarios.",
  avatar: "JT",
  color: "blue"
};

// Base de Datos con los 4 Cursos Intensivos de 2 Semanas (Estático)
const courses = [
  {
    id: "python-ia",
    category: "start",
    categoryLabel: "Desde cero · Mañana",
    format: "2 semanas",
    title: "Aprende Python con IA",
    description: "Aprendé a programar desde cero absoluto. Lógica, estructuras de datos, scripts y proyectos prácticos potenciados con asistentes de IA.",
    symbol: "Py",
    visualClass: "course-card--violet",
    meta: "2 semanas · 6 clases (12 hs en vivo)",
    kicker: "Lunes, Miércoles y Viernes · Turno Mañana",
    dates: "Lun, Mié y Vie 09:30 a 11:30 hs (GMT-3) · 2 semanas (6 clases)",
    level: "Principiante (Desde cero)",
    priceARS: "$85.000 ARS",
    priceUSD: "$90 USD",
    installments: "Hasta 3 cuotas fijas sin interés",
    instructor: instructorProfile,
    modules: [
      { title: "Clases 1 y 2: Pensamiento Computacional, Variables y Lógica con IA", topics: "Variables, condicionales, bucles, funciones puras y buenas prácticas de código limpio asistidas por modelos de código." },
      { title: "Clases 3 y 4: Estructuras de Datos, Archivos y Consumo de APIs", topics: "Listas, diccionarios, manipulación de archivos JSON/CSV y conexión en tiempo real a APIs REST." },
      { title: "Clase 5: Automatización de Tareas y Testing con Pytest", topics: "Testing unitario, debugging en vivo y desarrollo asistido por modelos de código en Cursor." },
      { title: "Clase 6: Proyecto Final Integrador en Producción", topics: "Construcción y despliegue de un bot o script automatizado completo listo para usar." }
    ]
  },
  {
    id: "ia-trabajar",
    category: "grow",
    categoryLabel: "Productividad & IA · Tarde",
    format: "2 semanas",
    title: "IA para Trabajar",
    description: "Dominá herramientas de inteligencia artificial generativa, prompting técnico, análisis de datos, creación de agentes y flujos de trabajo profesionales.",
    symbol: "✦",
    visualClass: "course-card--dark",
    meta: "2 semanas · 6 clases (12 hs en vivo)",
    kicker: "Lunes, Miércoles y Viernes · Turno Tarde",
    dates: "Lun, Mié y Vie 15:00 a 17:00 hs (GMT-3) · 2 semanas (6 clases)",
    level: "Sin requisitos previos",
    priceARS: "$80.000 ARS",
    priceUSD: "$85 USD",
    installments: "Hasta 3 cuotas fijas sin interés",
    instructor: instructorProfile,
    modules: [
      { title: "Clases 1 y 2: Prompt Engineering Técnico y Modelos Frontier", topics: "Técnicas avanzadas de prompting, Structured Outputs, System Prompts y control de alucinaciones." },
      { title: "Clases 3 y 4: Análisis Masivo de Datos y Reportes Ejecutivos", topics: "Procesamiento de documentos extensos, síntesis analítica y generación automatizada de insights." },
      { title: "Clase 5: Custom GPTs, Asistentes y Knowledge Retrieval", topics: "Configuración de agentes con base de conocimientos propia y conexión de herramientas externas." },
      { title: "Clase 6: Flujos de Trabajo Agénticos Integrados", topics: "Integración de IA en el flujo laboral diario para multiplicar la velocidad y calidad profesional." }
    ]
  },
  {
    id: "web-ia",
    category: "grow",
    categoryLabel: "Desarrollo Web · Noche",
    format: "2 semanas",
    title: "Aprende Web con IA",
    description: "Creá sitios y aplicaciones web modernas desde la concepción hasta el deploy, combinando HTML, CSS, JavaScript, React y herramientas asistidas por IA.",
    symbol: "</>",
    visualClass: "",
    meta: "2 semanas · 4 clases (8 hs en vivo)",
    kicker: "Martes y Jueves · Turno Noche (19:00 hs)",
    dates: "Mar y Jue 19:00 a 21:00 hs (GMT-3) · 2 semanas (4 clases)",
    level: "Principiante a Intermedio",
    priceARS: "$90.000 ARS",
    priceUSD: "$95 USD",
    installments: "Hasta 3 cuotas fijas sin interés",
    instructor: instructorProfile,
    modules: [
      { title: "Clase 1: Maquetación Semántica y CSS Moderno Adaptativo", topics: "HTML5 semántico, Flexbox, CSS Grid, variables y diseño adaptable para móviles." },
      { title: "Clase 2: Interactividad Dinámica con JavaScript Moderno", topics: "Manipulación del DOM, eventos, asincronismo (Async/Await) e integración de APIs." },
      { title: "Clase 3: Componentes React y Prototipado Asistido por IA", topics: "Componentes funcionales, hooks de estado y prototipado rápido de interfaces web con v0 y Cursor." },
      { title: "Clase 4: Despliegue en la Nube, Dominio y Optimización", topics: "Deploy continuo en Vercel/Netlify, configuración de dominio y SEO técnico." }
    ]
  },
  {
    id: "automatizacion-n8n",
    category: "intensive",
    categoryLabel: "Automatización · Noche",
    format: "2 semanas",
    title: "Aprende Automatización con n8n",
    description: "Automatizá tareas complejas, conectá APIs, webhooks, bases de datos y modelos de IA en flujos autónomos con n8n self-hosted o cloud.",
    symbol: "⚡",
    visualClass: "course-card--orange",
    meta: "2 semanas · 4 clases (8 hs en vivo)",
    kicker: "Martes y Jueves · Turno Noche (21:00 hs)",
    dates: "Mar y Jue 21:00 a 23:00 hs (GMT-3) · 2 semanas (4 clases)",
    level: "Sin requisitos previos",
    priceARS: "$90.000 ARS",
    priceUSD: "$95 USD",
    installments: "Hasta 3 cuotas fijas sin interés",
    instructor: instructorProfile,
    modules: [
      { title: "Clase 1: Nodos, Triggers y Webhooks en n8n", topics: "Arquitectura de flujos, manejo de payloads JSON y transformaciones de datos." },
      { title: "Clase 2: Conexión de Servicios y CRMs en Vivo", topics: "Integración de Notion, Slack, Telegram, WhatsApp API y bases de datos." },
      { title: "Clase 3: Flujos Inteligentes con Nodos de Inteligencia Artificial", topics: "Procesamiento de texto con OpenAI/Claude, clasificación de mensajes y respuestas automáticas." },
      { title: "Clase 4: Despliegue Self-Hosted con Docker y Producción", topics: "Instalación en VPS propio, configuración de dominio, SSL y backups automáticos." }
    ]
  }
];

// Asistente de Orientación Rápido
const quizRecommendations = {
  start: {
    title: "Aprende Python con IA",
    track: "Ruta Inicial · Turno Mañana",
    desc: "El intensivo ideal para aprender a programar desde cero absoluto con acompañamiento humano directo en el turno mañana.",
    details: "2 semanas (6 clases) · Lun, Mié y Vie de 09:30 a 11:30 hs (GMT-3)",
    courseId: "python-ia"
  },
  grow: {
    title: "IA para Trabajar & Aprende Web con IA",
    track: "Ruta de Productividad y Desarrollo",
    desc: "Multiplicá tu velocidad profesional con IA generativa (Turno Tarde) o creá tus propias webs y aplicaciones con React e IA (Turno Noche).",
    details: "2 semanas de alta intensidad práctica con Jeremias Toledo",
    courseId: "ia-trabajar"
  },
  intensive: {
    title: "Aprende Automatización con n8n",
    track: "Ruta de Automatización · Turno Noche",
    desc: "Conectá aplicaciones, APIs y modelos de lenguaje para construir flujos que trabajen en piloto automático.",
    details: "2 semanas (4 clases) · Mar y Jue de 21:00 a 23:00 hs (GMT-3)",
    courseId: "automatizacion-n8n"
  }
};

// Renderizado de las tarjetas de cursos en el grid
function renderCourses(list = courses) {
  const grid = document.getElementById("course-grid");
  const emptyState = document.getElementById("empty-state");
  if (!grid) return;

  grid.innerHTML = "";

  if (list.length === 0) {
    if (emptyState) emptyState.hidden = false;
    return;
  }
  if (emptyState) emptyState.hidden = true;

  list.forEach((c) => {
    const card = document.createElement("article");
    card.className = `course-card ${c.visualClass || ""}`.trim();
    card.id = `course-${c.id}`;
    card.setAttribute("data-open-course", c.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver temario y detalles de ${c.title}`);

    card.innerHTML = `
      <div class="course-card__visual">
        <span class="course-card__visual-label">${c.categoryLabel}</span>
        <span class="course-card__symbol">${c.symbol}</span>
      </div>

      <div class="course-card__body">
        <div class="course-card__meta">
          <span class="course-card__tag">${c.format}</span>
          <span>${c.level}</span>
        </div>

        <h3>${c.title}</h3>
        <p>${c.description}</p>

        <div class="course-card__instructor">
          <span class="card-inst-avatar">${c.instructor.avatar}</span>
          <span class="card-inst-name">Docente: ${c.instructor.name}</span>
        </div>

        <div class="course-card__foot">
          <div>
            <strong style="font-size: 15px; color: var(--ink); display: block;">${c.priceARS}</strong>
            <span style="font-size: 11px; color: var(--muted);">${c.kicker}</span>
          </div>
          <span class="course-card__arrow" aria-hidden="true">→</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  bindCourseModals();
}

// Filtros de categoría
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-button");
  const countEl = document.getElementById("course-count");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      let filtered = courses;

      if (filter !== "all") {
        filtered = courses.filter((c) => c.category === filter);
      }

      renderCourses(filtered);

      if (countEl) {
        countEl.textContent = filtered.length.toString().padStart(2, "0");
      }
    });
  });
}

// Modal de Detalle de Curso
function bindCourseModals() {
  const openCards = document.querySelectorAll("[data-open-course]");
  const modal = document.getElementById("course-modal");

  openCards.forEach((el) => {
    const openHandler = () => {
      const courseId = el.dataset.openCourse;
      const course = courses.find((c) => c.id === courseId);
      if (!course) return;

      fillModal(course);
      if (modal) {
        modal.classList.add("is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
      }
    };

    el.addEventListener("click", openHandler);
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openHandler();
      }
    });
  });

  const closeButtons = document.querySelectorAll("[data-close-course-modal]");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (modal) {
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
      }
    });
  });
}

function fillModal(c) {
  const kicker = document.getElementById("modal-kicker");
  const title = document.getElementById("modal-title");
  const desc = document.getElementById("modal-desc");
  const duration = document.getElementById("modal-duration");
  const level = document.getElementById("modal-level");
  const dates = document.getElementById("modal-dates");
  const price = document.getElementById("modal-price");
  const priceUsd = document.getElementById("modal-price-usd");
  const installments = document.getElementById("modal-installments");
  const instructorBox = document.getElementById("modal-instructor-box");
  const modulesContainer = document.getElementById("modal-modules");
  const enrollBtn = document.getElementById("modal-enroll-btn");

  if (kicker) kicker.innerHTML = `<span class="eyebrow__line"></span>${c.categoryLabel}`;
  if (title) title.textContent = c.title;
  if (desc) desc.textContent = c.description;
  if (duration) duration.textContent = c.meta;
  if (level) level.textContent = c.level;
  if (dates) dates.textContent = c.dates;
  if (price) price.textContent = c.priceARS;
  if (priceUsd) priceUsd.textContent = `o ${c.priceUSD}`;
  if (installments) installments.textContent = c.installments;

  if (instructorBox) {
    instructorBox.innerHTML = `
      <div class="cd-inst-avatar">${c.instructor.avatar}</div>
      <div class="cd-inst-info">
        <strong>${c.instructor.name}</strong>
        <span>${c.instructor.role}</span>
        <p>${c.instructor.bio}</p>
      </div>
    `;
  }

  if (modulesContainer) {
    modulesContainer.innerHTML = "";
    c.modules.forEach((m) => {
      const item = document.createElement("div");
      item.className = "cd-mod";
      item.innerHTML = `
        <h4>${m.title}</h4>
        <p>${m.topics}</p>
      `;
      modulesContainer.appendChild(item);
    });
  }

  if (enrollBtn) {
    const text = encodeURIComponent(`Hola Jeremias! Me interesa inscribirme al intensivo de 2 semanas "${c.title}" en AprendeIT.`);
    enrollBtn.href = `https://wa.me/543876150875?text=${text}`;
  }
}

// Asistente de Orientación Modal
function setupQuiz() {
  const quizModal = document.getElementById("quiz-modal");
  const openQuizBtns = document.querySelectorAll("[data-open-quiz]");
  const closeQuizBtns = document.querySelectorAll("[data-close-quiz]");
  const answerBtns = document.querySelectorAll("[data-quiz-answer]");
  const resultContainer = document.getElementById("quiz-result");

  openQuizBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (quizModal) {
        quizModal.classList.add("is-open");
        quizModal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        if (resultContainer) {
          resultContainer.hidden = true;
          resultContainer.innerHTML = "";
        }
      }
    });
  });

  closeQuizBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (quizModal) {
        quizModal.classList.remove("is-open");
        quizModal.setAttribute("aria-hidden", "true");
        document.body.classList.remove("modal-open");
      }
    });
  });

  answerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.dataset.quizAnswer;
      const rec = quizRecommendations[answer];
      if (!rec || !resultContainer) return;

      resultContainer.hidden = false;
      resultContainer.innerHTML = `
        <div class="quiz-result-card">
          <span class="quiz-result-track">${rec.track}</span>
          <h3>${rec.title}</h3>
          <p>${rec.desc}</p>
          <div class="quiz-result-dates">🗓 ${rec.details}</div>
          <div class="quiz-result-actions">
            <button class="button button--primary button--small" type="button" onclick="document.querySelector('[data-close-quiz]').click(); document.querySelector('[data-open-course=\\'${rec.courseId}\\']').click();">
              Ver temario y fechas →
            </button>
          </div>
        </div>
      `;
    });
  });
}

// Scroll Reveal Observer
function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (!revealElements.length) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }
}

// FAQ Accordion
function setupAccordion() {
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      if (!item) return;
      const isOpen = item.classList.contains("is-open");

      document.querySelectorAll(".faq-item").forEach((other) => {
        if (other !== item) other.classList.remove("is-open");
      });

      item.classList.toggle("is-open", !isOpen);
    });
  });
}

// Inicialización de la Landing Page (100% Estática, sin llamadas a backend)
document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  setupFilters();
  setupQuiz();
  setupAccordion();
  setupScrollReveal();

  // Scroll listener for sticky header styling
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 20);
    }
  });

  // Mobile menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.getElementById("primary-nav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      primaryNav.classList.toggle("is-open", !expanded);
    });
  }

  // Copy email button
  const copyBtn = document.querySelector("[data-copy-email]");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("hola@aprendeit.com").then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "✓ Email copiado (hola@aprendeit.com)";
        setTimeout(() => (copyBtn.textContent = originalText), 2500);
      });
    });
  }
});
