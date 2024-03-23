/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toogle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click' , () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollV >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp=()=>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height,add the show-scroll class to the a tag with the scrollup
     this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{

        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' +sectionId +']')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
         }else{
                sectionsClass.classList.remove('active-link')
              }
    })

}
window.addEventListener('scroll',scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' :'ri-sun-line'

// We validate if the user previously chose a topic
if(selectedTheme){
    // if the validation is fulfilled,we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme ==='dark'? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri moon-line'?'add':'remove'](iconTheme)
}
// Active/deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
  //  reset: true, //Animations repeat
})

sr.reveal(`.home__img`)
sr.reveal(`.home__data`,{origin:'bottom'})
sr.reveal(`.about__data, .recently__data`,{origin:'left'})
sr.reveal(`.about__img, .recently__img`,{origin:'right'})
sr.reveal(`popular__card`,{interval: 100})

var images = ['assets/img/about-sushi.png', 'assets/img/home-sushi-rolls.png', 'assets/img/recently-salmon-sushi.png"'];
var i =0;
function slideShow() {

    document.getElementById("image").src=images[i];
    if(i<images.length-1){
          i++;
}

    else {
        i=0;
}

    setTimeout("slideShow()" , 2000);
}
window.onload = slideShow;

