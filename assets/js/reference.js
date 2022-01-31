// SLideshow with arrows
// https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var slideId = [
    "adobe-spark-slide",
    "bethany",
    "abel-cada-o",
    "cedric-mabanglo",
    "farmers-daughter",
    "fatboys-grill",
    "jey-ventura",
    "lolo-cancios",
    "mana-cafe",
    "philippine-star",
    "randy-benigno",
    "rico-apsay",
    "rj-cayabyab",
    "when-in-baguio"
]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);


function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
}