/* ================================
   ⚙️ main.js — scroll hard reset
================================ */

// DESATIVA restauração automática do navegador
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

// REMOVE qualquer hash da URL IMEDIATAMENTE
(function () {
    if (window.location.hash) {
        history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
        );
    }
})();

// FORÇA topo antes e depois do load
window.scrollTo(0, 0);

window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
});

// GARANTE topo ao recarregar
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});
