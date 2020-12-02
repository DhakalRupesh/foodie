// scroll shadow
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    let windowposition =  window.scrollY > 0
    header.classList.toggle('scrolling-active', windowposition);
});

// redirecting pages
// function visitBreakfast() {
//     window.location.href = "pages/breakfast.html";
// }

// function visitLunch() {
//     window.location.href = "pages/lunch.html";
// }

// function visitDinner() {
//     window.location.href = "pages/dinner.html";
// }

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
    distance: '30px',
    duration: 1500,
    reset: false
});

sr.reveal('.brand',{delay: 100}); 
sr.reveal('.nav_buttons',{delay: 100}); 
sr.reveal('.body_container',{delay: 100}); 