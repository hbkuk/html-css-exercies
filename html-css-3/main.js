const nav_bar_togglebtn = document.querySelector('nav_bar_togglebtn');
const menu = document.querySelector('nav_bar__menu');
const icon = document.querySelector('nav_bar__icon');

nav_bar_togglebtn.addEventListener('click' , () => {
menu.classList.toggle('active');
icon.classList.toggle('active');
});
