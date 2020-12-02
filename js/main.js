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

function openFood(foodName) {
    var i;
    var x = document.getElementsByClassName("food_tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    document.getElementById(foodName).style.display = "block"; 
}