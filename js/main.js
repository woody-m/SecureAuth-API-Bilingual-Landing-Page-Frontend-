/* ================================
   ⚙️ Main Script (main.js)
   General interactivity
================================ */

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Log ready
    console.log("✅ SecureAuth Landing Page Loaded Successfully");
});
