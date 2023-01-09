

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    // TOGGLE NAV

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

         // ANIMATE LINKS
    navLinks.forEach((link , index)=> {
        if (link.getElementsByClassName.animation){
         link.style.animation = '';
        }
        else {
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;        }
     }); 
    //  BURGER ANIMATION
    burger.classList.toggle('toggle');
    });
   
}
    navSlide();

