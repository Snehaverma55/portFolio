// =========================
// AOS Animation
// =========================
AOS.init({
    duration: 1000,
    once: true
});

// =========================
// Typed.js
// =========================
var typed = new Typed("#element", {
    strings: [
        "Full Stack Web Developer",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Problem Solver"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// =========================
// Navbar Active Link
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Navbar Shadow
// =========================
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});

// =========================
// Smooth Scroll
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });

    });

});