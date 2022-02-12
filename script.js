'use script';
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');
const closer = document.querySelector('.close');
menu.addEventListener('click', function () {
  sidebar.classList.remove('toggle');
});
closer.addEventListener('click', function () {
  sidebar.classList.add('toggle');
});
