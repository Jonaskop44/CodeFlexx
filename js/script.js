// Navbar
window.addEventListener('resize', add)
function add() {
    if (window.innerWidth < 900) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile')
    }
}
window.onload = add;
let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')
let bars = document.querySelectorAll('.hamburger span')
let isActive = false
hamburger.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    if (!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
})

// Animation
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 400
})

const ops = { interval: 100 }

sr.reveal('.head, .paragraph, .hero-button', ops);
sr.reveal('.icon', ops);
sr.reveal('.trusted-header', ops);
sr.reveal('.trusted-companies', ops);
sr.reveal(".skill-title, .skill-img, .skill-text, .skill-description.grey", ops);
sr.reveal('.stats-item', ops);
sr.reveal('.timeline-event', ops);
sr.reveal('.project-content', ops);
sr.reveal('.project-card-whole', ops);

// Counter
if (window.innerWidth > 600) {
    new PureCounter({
        selector: '.purecounter',
        start: 0,
        end: 100,
        duration: 2,
        delay: 10,
        once: true,
        repeat: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        separator: false,
    });
}

//Scroll
  function scrollToElement() {
    // Find the element
    var element = document.getElementById("projects");

    // Scroll to the element
    element.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToElementskills() {
    // Find the element
    var element = document.getElementById("skills");

    // Scroll to the element
    element.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToElementhome() {
    // Find the element
    var element = document.getElementById("home");

    // Scroll to the element
    element.scrollIntoView({ behavior: 'smooth' });
  }

  function scrollToElementstats() {
    // Find the element
    var element = document.getElementById("stats");

    // Scroll to the element
    element.scrollIntoView({ behavior: 'smooth' });
    }