/* ================================
   🌍 Language Controller
   + Typewriter (CSS restart)
================================ */

const langButtons = document.querySelectorAll(".lang-btn");
const translationPath = "translations/";
const defaultLang = localStorage.getItem("lang") || "pt";

/* 🔁 Reinicia animação CSS do typewriter */
function restartTypewriter(el) {
    el.classList.remove("typewriter-subtitle");
    void el.offsetWidth; // força reflow (ESSENCIAL)
    el.classList.add("typewriter-subtitle");
}

async function loadLanguage(lang) {
    try {
        const response = await fetch(`${translationPath}${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll("[data-key]").forEach((el) => {
            const key = el.getAttribute("data-key");
            if (!translations[key]) return;

            // Atualiza texto
            el.textContent = translations[key];

            // 🔥 Se for o subtítulo, reinicia o typewriter
            if (el.classList.contains("typewriter-subtitle")) {
                restartTypewriter(el);
            }
        });

        // Estado visual do botão
        langButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });

        localStorage.setItem("lang", lang);

    } catch (err) {
        console.error("Erro ao carregar idioma:", err);
    }
}

// Clique nos botões
langButtons.forEach(btn => {
    btn.type = "button";
    btn.addEventListener("click", () => {
        loadLanguage(btn.dataset.lang);
    });
});

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    loadLanguage(defaultLang);
});
