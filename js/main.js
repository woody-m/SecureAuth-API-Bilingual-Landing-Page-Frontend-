/* ================================
   ⚙️ main.js — scroll reset (SAFE)
================================ */

// Desativa restauração automática (Chrome + Safari)
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Remove hash da URL (se existir)
if (window.location.hash) {
    history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
    );
}

// Garante início no topo após renderização real
window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
});
