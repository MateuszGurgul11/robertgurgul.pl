"use strict";

// menu
var menuToggle = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
});