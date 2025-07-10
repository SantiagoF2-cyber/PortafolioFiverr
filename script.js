/* 
Copyright © 2025 Santiago Cossu (SantiagoF2-cyber)
This work is licensed under CC BY-NC-ND 4.0.
Do not copy, modify or use without permission.
Full license: https://creativecommons.org/licenses/by-nc-nd/4.0/
*/
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("modo-oscuro-btn");
  const body = document.body;

  // Detectar idioma según URL
  const isEnglish = window.location.pathname.includes("-en");

  btn.addEventListener("click", function () {
    body.classList.toggle("modo-oscuro");

    // Cambiar texto según idioma
    if (body.classList.contains("modo-oscuro")) {
      btn.innerHTML = isEnglish
        ? "☀️ Disable dark mode"
        : "☀️ Desactivar modo oscuro";
    } else {
      btn.innerHTML = isEnglish
        ? "🌙 Enable dark mode"
        : "🌙 Activar modo oscuro";
    }
  });
});
