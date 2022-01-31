var slideIndex = 0;
showSlide1();
showSlide2();
showSlide3();

function showSlide1() {
    "use strict"
    var i;
    var slides = document.getElementsByClassName("intro");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        slides[i].style.opacity = 0;  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.opacity = 1;  
    setTimeout(showSlide1, 1500); // Change image every 2 seconds
}

function showSlide2() {
    "use strict"
    var i;
    var slides = document.getElementsByClassName("people");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlide2, 1300); // Change image every 2 seconds
}

function showSlide3() {
    "use strict"
    var i;
    var slides = document.getElementsByClassName("float");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlide3, 1500); // Change image every 2 seconds
}