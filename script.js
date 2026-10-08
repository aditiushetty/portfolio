const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("menu-open");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("menu-open"));
});

// Highlight the active nav link based on current page
(function setActiveNav() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("nav-active");
    } else {
      link.classList.remove("nav-active");
    }
  });
})();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
