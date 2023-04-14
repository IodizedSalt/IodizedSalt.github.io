
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  event.target.parentNode.parentNode.classList.remove("enlarged");
  var enlargedImage = document.getElementsByClassName("mySlides img-fluid mb-3 mb-lg-0 enlarged")[0]
  if(enlargedImage){
    enlargedImage.classList.remove("enlarged")
  }  
  showDivs(slideIndex += n);

}

function showDivs(n) {
  console.log('There is nothing interesting to see here, but thank you for checking anyways.')
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
}


var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
  event.target.parentNode.parentNode.classList.remove("enlarged");
  var enlargedImage = document.getElementsByClassName("mySlides2 img-fluid mb-3 mb-lg-0 enlarged")[0]
  if(enlargedImage){
    enlargedImage.classList.remove("enlarged")
  }  
  showDivs2(slideIndex += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

var slideIndex = 1;
showDivs3(slideIndex);

function plusDivs3(n) {
  event.target.parentNode.parentNode.classList.remove("enlarged");
  var enlargedImage = document.getElementsByClassName("mySlides3 img-fluid mb-3 mb-lg-0 enlarged")[0]
  if(enlargedImage){
    enlargedImage.classList.remove("enlarged")
  }
  showDivs3(slideIndex += n);
}

function showDivs3(n) {

  var i;
  var x = document.getElementsByClassName("mySlides3");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}


var slideIndex = 1;
showDivs4(slideIndex);

function plusDivs4(n) {
  event.target.parentNode.parentNode.classList.remove("enlarged");
  var enlargedImage = document.getElementsByClassName("mySlides4 img-fluid mb-3 mb-lg-0 enlarged")[0]
  if(enlargedImage){
    enlargedImage.classList.remove("enlarged")
  }
  showDivs4(slideIndex += n);
}

function showDivs4(n) {

  var i;
  var x = document.getElementsByClassName("mySlides4");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// var bool = false

function toggleSize() {
  // bool = !bool
  var element = event.target;
  element.classList.toggle("enlarged");

  var parentElement = event.target.parentNode.parentNode;
  parentElement.classList.toggle("enlarged")
}
