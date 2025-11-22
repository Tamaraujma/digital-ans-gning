// Theme switcher functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", currentTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Language switcher functionality
let currentLanguage = localStorage.getItem("language") || "da";

function updateLanguage(lang) {
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update language button text
  const languageButton = document.getElementById("current-language");
  if (languageButton) {
    languageButton.textContent = lang.toUpperCase();
  }

  // Update HTML lang attribute
  document.documentElement.setAttribute("lang", lang);

  // Save language preference
  localStorage.setItem("language", lang);
  currentLanguage = lang;
}

// Language toggle event listener
document.addEventListener("DOMContentLoaded", () => {
  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const newLanguage = currentLanguage === "da" ? "en" : "da";
      updateLanguage(newLanguage);
    });
  }

  // Initialize language on page load
  updateLanguage(currentLanguage);
});

// Lazy loading for videos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "50px",
};

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play();
      video.style.opacity = "1";
    } else {
      video.pause();
    }
  });
}, observerOptions);

document.querySelectorAll("video").forEach((video) => {
  video.style.opacity = "0.7";
  videoObserver.observe(video);
});
