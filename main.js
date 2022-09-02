// All li inside ul used for navigation bar
const navbarLargeLinks = document.querySelectorAll('.navbar-large li a');
const navbarSmallLinks = document.querySelectorAll('.navbar-small li a');

// Navigation bar used in small screens and hamburger icon div
const navbarSmall = document.querySelector('.navbar-small');
const hamburger = document.querySelector('.hamburger');

// All section elements and first section element i.e. .home-intro
const sections = document.querySelectorAll('section');
const homeIntroSection = document.querySelector('.home-intro');

// For those elements which will slides up and fades in when visible in viewport
const sliders = document.querySelectorAll('.slide-up');

// For changing active links of navigation bar
const navLinksOptions = {
  root: null,
  threshold: 0.25
}

// Intersection Observer for observing sections so that we can highlight navbar links according to that
const navLinksObserver = new IntersectionObserver((entries, navLinksObserver) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {

      navbarLargeLinks.forEach(link => {

        if(entry.target.id == link.innerHTML.toLowerCase()) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }

      });

      navbarSmallLinks.forEach(link => {

        if(entry.target.id == link.innerHTML.toLowerCase()) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }

      });

    }
  });
}, navLinksOptions);

// Hamburger menu working on click
hamburger.addEventListener('click', _ => {
  hamburger.classList.toggle('clicked');
  navbarSmall.classList.toggle('visible');
});

// Small navigation menu disappears when we select a link from it
navbarSmallLinks.forEach(link => {
  link.addEventListener('click', _ => {
    hamburger.classList.remove('clicked');
  navbarSmall.classList.remove('visible');
  });
});

// Observing all the sections
sections.forEach(section => {
  navLinksObserver.observe(section);
});

// For parallax effect of the background image of .home-intro section
window.addEventListener('scroll', _ => {
  offset = window.pageYOffset;
  homeIntroSection.style.backgroundPositionY = offset * (-0.3) + "px";
});

// For slide up animation on scroll
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})
