/**
 * Udara Nirmal - Interactive Portfolio Scripts
 */

// Project Detailed Data for Modals
const projectDetails = {
  computershop: {
    title: "Computer Shop Management System",
    category: "Full-Stack Web Application",
    badge: "MERN Stack",
    tagline: "Comprehensive e-commerce and inventory workflow for retail computer parts.",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Express.js", "React.js", "MongoDB", "Node.js", "REST APIs", "JWT Authentication", "Email API (Nodemailer)"],
    features: [
      {
        title: "Order Management Engine",
        desc: "Engineered core order processing pipeline to streamline customer purchases, status transitions, and automatic stock deduction."
      },
      {
        title: "Full-Stack CRUD Architecture",
        desc: "Designed and integrated customer management, product cataloging, and inventory tracking using Node.js & Express.js microservices."
      },
      {
        title: "Dynamic & Responsive React UI",
        desc: "Built reactive client-side interfaces featuring real-time cart states, search/filter algorithms, and modern checkout UX."
      },
      {
        title: "Secure RESTful API Layer",
        desc: "Implemented JWT-based role authentication (Admin vs Customer), rate limiting, and automated email confirmation notifications upon order placement."
      },
      {
        title: "Optimized Database Schemas",
        desc: "Architected scalable MongoDB collections with indexing for high-speed queries on products, users, and audit logs."
      }
    ],
    github: "https://github.com/IT24103918"
  },
  smartmarine: {
    title: "SmartMarine Supply Chain Platform",
    category: "Cross-Platform Mobile Application",
    badge: "React Native & Cloud",
    tagline: "Real-time maritime supply chain and cargo logistics monitoring application.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "REST APIs", "GitHub Actions", "Cloud Hosting"],
    features: [
      {
        title: "Cross-Platform Architecture",
        desc: "Initiated and configured high-performance mobile UI using React Native, delivering unified experience on both Android and iOS devices."
      },
      {
        title: "Cloud-Deployed Backend Services",
        desc: "Engineered robust Express.js API services and deployed to cloud infrastructure with automated CI/CD workflows."
      },
      {
        title: "Real-Time Data Synchronization",
        desc: "Connected mobile screens to RESTful endpoints with optimistic caching and live state sync for shipment tracking."
      },
      {
        title: "Supply Chain Focused UI/UX",
        desc: "Crafted modern mobile dashboard with visual milestones, manifests, driver/inspector status, and interactive status chips."
      },
      {
        title: "Collaborative Git Workflow",
        desc: "Maintained rigorous branch management, feature pull requests, and automated versioning on GitHub."
      }
    ],
    github: "https://github.com/IT24103918"
  },
  musicstore: {
    title: "Music Store Web Application",
    category: "Enterprise Java Web App",
    badge: "Spring Boot & PostgreSQL",
    tagline: "Academic group project delivering a secure online musical instruments and feedback platform.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    techStack: ["Java Spring Boot", "React.js", "PostgreSQL", "Spring Security", "JWT", "REST APIs", "Hibernate/JPA"],
    features: [
      {
        title: "Review & Rating Engine",
        desc: "Engineered dynamic feedback ecosystem allowing verified users to rate musical instruments, submit reviews, and filter evaluations."
      },
      {
        title: "Spring Boot RESTful Services",
        desc: "Developed strict type-safe REST controllers handling CRUD operations for user reviews with Bean Validation and custom exceptions."
      },
      {
        title: "Real-Time Rating Aggregation Logic",
        desc: "Implemented server-side mathematical aggregation to recalculate and cache weighted average ratings dynamically as feedback arrives."
      },
      {
        title: "Responsive React Components",
        desc: "Created modular interactive UI components for star ratings, histogram distribution displays, and user comment threads."
      },
      {
        title: "Relational Schema & Security",
        desc: "Architected third-normal-form PostgreSQL relational schemas with foreign key constraints, coupled with Spring Security and JWT guards."
      }
    ],
    github: "https://github.com/IT24103918"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTyping();
  initMobileMenu();
  initProjectFilters();
  initProjectModal();
  initCopyButtons();
  initContactForm();
  initScrollSpy();
});

// 1. Theme Management (Dark / Light)
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const storedTheme = localStorage.getItem("portfolio-theme") || "dark";

  document.documentElement.setAttribute("data-theme", storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("theme-icon");
  if (!themeIcon) return;
  if (theme === "light") {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }
}

// 2. Typing Effect for Subtitles
function initTyping() {
  const typingTarget = document.getElementById("typing-text");
  if (!typingTarget) return;

  const roles = [
    "IT Undergraduate @ SLIIT",
    "Full-Stack Web Developer",
    "React & Node.js Specialist",
    "Mobile App Developer (React Native)",
    "Backend Engineer (Spring Boot / Java)",
    "Passionate Problem Solver"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 90;

  function type() {
    const current = roles[roleIndex];
    if (isDeleting) {
      typingTarget.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      speed = 40;
    } else {
      typingTarget.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      speed = 90;
    }

    if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      speed = 1800; // pause at peak
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      speed = 400;
    }

    setTimeout(type, speed);
  }

  type();
}

// 3. Mobile Navigation Drawer
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// 4. Project Filters
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category") || "";
        if (filter === "all" || category.includes(filter)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.95)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// 5. Project Detail Modal
function initProjectModal() {
  const modal = document.getElementById("project-modal");
  const closeModalBtns = document.querySelectorAll(".close-modal-trigger");
  const modalTriggers = document.querySelectorAll(".open-project-modal");

  if (!modal) return;

  modalTriggers.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute("data-project");
      const data = projectDetails[projectId];
      if (!data) return;

      document.getElementById("modal-title").textContent = data.title;
      document.getElementById("modal-category").textContent = data.category;
      document.getElementById("modal-badge").textContent = data.badge;
      document.getElementById("modal-tagline").textContent = data.tagline;
      document.getElementById("modal-image").src = data.image;
      document.getElementById("modal-github").href = data.github;

      // Tech Stack Pills
      const techContainer = document.getElementById("modal-tech-stack");
      techContainer.innerHTML = "";
      data.techStack.forEach(t => {
        const pill = document.createElement("span");
        pill.className = "px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30";
        pill.textContent = t;
        techContainer.appendChild(pill);
      });

      // Features List
      const featuresContainer = document.getElementById("modal-features");
      featuresContainer.innerHTML = "";
      data.features.forEach(f => {
        const div = document.createElement("div");
        div.className = "p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80";
        div.innerHTML = `
          <h5 class="text-sm font-semibold text-cyan-400 flex items-center gap-2 mb-1">
            <i class="fa-solid fa-circle-check text-xs"></i> ${f.title}
          </h5>
          <p class="text-xs text-slate-300 leading-relaxed">${f.desc}</p>
        `;
        featuresContainer.appendChild(div);
      });

      modal.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// 6. Copy to Clipboard with Toast Notification
function initCopyButtons() {
  const copyBtns = document.querySelectorAll(".copy-btn");
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-msg");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const text = btn.getAttribute("data-copy");
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
      }).catch(() => {
        // Fallback
        const temp = document.createElement("input");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        showToast(`Copied: ${text}`);
      });
    });
  });

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
}

// 7. Contact Form Handling
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("sender-name").value.trim();
    const email = document.getElementById("sender-email").value.trim();
    const subject = document.getElementById("sender-subject").value.trim();
    const message = document.getElementById("sender-message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    // Direct mailto trigger
    const mailtoUrl = `mailto:udaranirmal2001@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
    window.location.href = mailtoUrl;

    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-msg");
    if (toast && toastMsg) {
      toastMsg.textContent = "Email client opened! You can now send your message.";
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3500);
    }

    form.reset();
  });
}

// 8. Active Nav link on scroll
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 140;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-cyan-400", "font-semibold");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-cyan-400", "font-semibold");
      }
    });
  });
}
