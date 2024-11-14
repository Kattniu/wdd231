const hamburger = document.querySelector('#menu');
const naviMenu = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	naviMenu.classList.toggle('open');
	hamburger.classList.toggle('open');
});
