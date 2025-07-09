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
