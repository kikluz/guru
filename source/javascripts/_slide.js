
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
//var dots = document.getElementsByClassName("dot");
//debugger
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
/*for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", " ");
}*/
slides[slideIndex-1].style.display = "block"; 
//dots[slideIndex-1].className += "active";
}

var slideIndex = 1;
showSlides(slideIndex);


// $( document ).ready(function() {
// var counter = 0, // to keep track of current slide
//     $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
//     numItems = $items.length; // total number of slides

// // this function is what cycles the slides, showing the next or previous slide and hiding all the others
// var showCurrent = function(){
//     var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
//   $items.removeClass('show'); // remove .show from whichever element currently has it
//   $items.eq(itemToShow).addClass('show');    
// };

// // add click events to prev & next buttons 
// $('.next').on('click', function(){
//     counter++;
//     showCurrent(); 
// });
// $('.prev').on('click', function(){
//     counter--;
//     showCurrent(); 
// });

// // if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
// if('ontouchstart' in window){
//   $('.diy-slideshow').swipe({
//     swipeLeft:function() {
//       counter++;
//       showCurrent(); 
//     },
//     swipeRight:function() {
//       counter--;
//       showCurrent(); 
//     }
//   });
// }

// });