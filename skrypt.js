// menu
    const mobileNav = document.querySelector('.menu');
    const burgerIcon = document.querySelector('.burger');

    burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active');
    })


//galeria sponsorow
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

//galeria zdjec
const thumbnails = document.querySelectorAll(".thumbnail img");
const popup = document.querySelector(".popup");
const popup_close = document.querySelector(".popup__close");
const popup_img = document.querySelector(".popup__img");
const arrow_left = document.querySelector(".popup__arrow--left");
const arrow_right = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg = () => {
  if(currentImgIndex === thumbnails.length - 1){
    currentImgIndex = 0;
  }
  else
  {
    currentImgIndex = currentImgIndex +1;
  }
  popup_img.src = thumbnails[currentImgIndex].src;
}
const showPrevImg = () => {
  if(currentImgIndex === 0){
    currentImgIndex = thumbnails.length -1;
  }
  else
  {
    currentImgIndex = currentImgIndex -1;
  }
  popup_img.src = thumbnails[currentImgIndex].src;
}
const closePopup = () => {
  popup.classList.add("hidden");
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", (e) => {popup.classList.remove("hidden");
  popup_img.src = e.target.src;
  currentImgIndex = index; 
  
  });
});

popup_close.addEventListener("click", closePopup);

arrow_right.addEventListener("click", showNextImg);

arrow_left.addEventListener("click", showPrevImg);

document.addEventListener("keydown", (e) => {
  if(!popup.classList.contains("hidden")){    
    if(e.code === "arrowRight" || e.keyCode === 39 ){
      showNextImg();
    }

    if(e.code === "arrowLeft" || e.keyCode === 37){
      showPrevImg();
    }

    if(e.code === "escape" || e.keyCode === 27){
      closePopup();
    }
  }
});

popup.addEventListener("click", (e) => {
  if(e.target === popup){
    closePopup();
  }
});

// panel haslo
function checkPassword() {
  var password = document.getElementById("password").value;
  var correctPassword = "123";

  if (password === correctPassword) {
    var passwordForm = document.querySelector(".passwordForm");
    var dokumentacjaPdf = document.querySelector(".dokumentacjaPdf");

    passwordForm.style.display = "none";
    dokumentacjaPdf.style.display = "flex";
  } else {
    alert("Niepoprawne hasło. Spróbuj ponownie.");
  }
}
