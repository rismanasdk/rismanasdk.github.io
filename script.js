// ======================
// Typing Effect (smooth)
// ======================
const texts = [
  "Software Developer",
  "Linux Enthusiast",
  "Cybersecurity Learner"
];

let i = 0;
let j = 0;
let isDeleting = false;

function typing() {
  const el = document.getElementById("typing");

  if (i >= texts.length) i = 0;

  let current = texts[i];

  if (isDeleting) {
    el.textContent = current.substring(0, j--);
  } else {
    el.textContent = current.substring(0, j++);
  }

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(typing, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
  }

  setTimeout(typing, isDeleting ? 40 : 80);
}

// ======================
// Scroll Reveal Animation
// ======================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0", "translate-y-10");
    }
  });
});

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});

// ======================
// Smooth Scroll (all link)
// ======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ======================
// Scroll Spy (navbar active)
// ======================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-blue-400");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("text-blue-400");
    }
  });
});

// ======================
// Dark / Light Mode
// ======================
function toggleTheme() {
  const body = document.getElementById("body");

  body.classList.toggle("bg-gray-900");
  body.classList.toggle("text-white");
  body.classList.toggle("bg-white");
  body.classList.toggle("text-black");
}

// RUN
typing();
