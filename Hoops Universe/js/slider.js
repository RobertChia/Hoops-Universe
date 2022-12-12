var countSlide = 0;
imageSlider();

function imageSlider() {
  var i;
  var slides = document.getElementsByClassName("image");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  countSlide++;
  if (countSlide > slides.length) {countSlide = 1}   
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[countSlide - 1].style.display = "block";  
  dots[countSlide - 1].className += " active";
  setTimeout(imageSlider, 5000);
}