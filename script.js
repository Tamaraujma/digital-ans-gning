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
