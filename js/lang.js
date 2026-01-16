/* ================================
   🌍 Language Controller (lang.js)
   Handles bilingual content (PT / EN)
=================================== */

const langButtons = document.querySelectorAll(".lang-btn");
const defaultLang = localStorage.getItem("lang") || "pt";
const translationPath = "translations/";

/**
 * Loads the JSON file for the selected language
 * and applies the translation to all data-key elements.
 */
async function loadLanguage(lang) {
    try {
        const response = await fetch(`${translationPath}${lang}.json`);
        const translations = await response.json();

        document.querySelectorAll("[data-key]").forEach((element) => {
            const key = element.getAttribute("data-key");
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        localStorage.setItem("lang", lang);
    } catch (error) {
        console.error("Error loading language file:", error);
    }
}

/* Handle language switch */
langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang");
        loadLanguage(selectedLang);
    });
});

/* Load saved/default language on startup */
loadLanguage(defaultLang);
