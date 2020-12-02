// scroll shadow
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    let windowposition =  window.scrollY > 0
    header.classList.toggle('scrolling-active', windowposition);
});

// redirecting pages
function visitBreakfast() {
    window.location.href = "pages/breakfast.html";
}

function visitLunch() {
    window.location.href = "pages/lunch.html";
}

function visitDinner() {
    window.location.href = "pages/dinner.html";
}

// changing tabs
function openFood(foodName) {
    var i;
    var x = document.getElementsByClassName("food_tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(foodName).style.display = "block"; 
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 