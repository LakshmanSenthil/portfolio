/*animation design*/
var typed = new Typed('.multiple-text', {
  strings: ["Frontend Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backspeed: 100,
  backDelay: 1000,
  loop: true
});

/*scroll sections active link */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
        navlinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
    };
  });

  /**sticky navbar */
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};

  /**scroll reveal */

  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

