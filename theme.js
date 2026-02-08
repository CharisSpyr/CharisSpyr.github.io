const toggle = document.getElementById("theme-toggle");

if (toggle) {
  const root = document.documentElement;

  // Default to LIGHT theme
  const savedTheme = localStorage.getItem("theme") || "light";
  root.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "light" ? "🌞" : "🌙";

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    toggle.textContent = next === "light" ? "🌞" : "🌙";
  });
}
