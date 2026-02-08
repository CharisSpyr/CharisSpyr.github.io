const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "light" ? "🌞" : "🌙";
}

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  toggle.textContent = next === "light" ? "🌞" : "🌙";
});
