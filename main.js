let mobilebtn = document.querySelector('.mobilebtn');
let menu = document.querySelector('.menu');
let icon = document.querySelector('.mobilebtn i ');
mobilebtn.addEventListener('click', () => {
  menu.classList.toggle('show');
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
});
