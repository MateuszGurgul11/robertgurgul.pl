// menu
    const mobileNav = document.querySelector('.menu');
    const burgerIcon = document.querySelector('.burger');

    burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    })


//galeria
let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide(index);
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide(index);
}

showSlide(index);

let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add('active');
}

setInterval(showSlides, 2000);

//mapa
 // Funkcja inicjalizująca mapę
 function initMap() {
  // Współrzędne lokalizacji
  var location = { lat: 52.08556132599441, lng: 17.459865584801666 };
  
  // Tworzenie mapy
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12, // Poziom przybliżenia mapy
    center: location // Wyśrodkowanie mapy na danej lokalizacji
  });
  
  // Tworzenie znacznika na mapie
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: 'Moja lokalizacja'
  });
}
// oferta
$(document).ready(function(){
  $("#cf_onclick, #cf2 img.top").click(function(){
    $("#cf2 img.top").toggleClass("transparent");
  });
});
