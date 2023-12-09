// Mobile Menu Script
const mobile_bar = document.querySelector(".mobile_bar");
mobile_bar.addEventListener("click", () => {
  document.querySelector(".main_menu").classList.toggle("open");
});

// Light and Dark Theme Mood

const dark_Theme = document.querySelector(".dark_theme");
dark_Theme.addEventListener("click", () => {
  dark_Theme.querySelector("i").classList.toggle("fa-sun");
  dark_Theme.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
