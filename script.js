const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

const mobileMenu = () => {
          menu.classList.toggle('is-active')
          menuLinks.classList.toggle('active')
          body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)



var carousel = document.querySelector('.carousel');
var flkty = new Flickity( carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on( 'scroll', function() {
  flkty.slides.forEach( function( slide, i ) {
    var img = imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style[ transformProp ] = 'translateX(' + x  + 'px)';
  });
});














                                // -----------Animations---------
gsap.registerPlugin,{ScrollTrigger}




gsap.from('.animate-hero',{
          duration: 1.7,
          y: -150,   
          stagger: 0.3,
});
gsap.from('.animate-services',{
          scrollTrigger:'.animate-services',
          duration: 0.6,
          x: -150,
          opacity: 1,
          stagger: 0.12,
});
gsap.from('.animate-img',{
          scrollTrigger:'.animate-services',
          duration: 1.9,
          delay: 0.2,
          opacity: 0,
          x: -250,
});

gsap.from('.animate-membership',{
          scrollTrigger:'.animate-membership',
          duration: 2,
          opacity: 0,
          y: -150,    
          stagger: 0.3,
          delay:0.5
});
gsap.from('.animate-card',{
          scrollTrigger:'.animate-card',
          duration: 2,
          opacity: 0,
          y: -150,    
          stagger: 0.1,
          delay:0.2
});
gsap.from('.animate-team',{
          scrollTrigger:'.animate-team',
          duration: 1,
          opacity: 0,
          y: -150,    
          stagger: 0.3,
          delay:0.2
});
gsap.from('.animate-email',{
          scrollTrigger:'.animate-email',
          duration: 0.8,
          opacity: 0,
          y: -150,    
          stagger: 0.25,
          delay:0.4
});
