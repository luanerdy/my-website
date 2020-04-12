var navBar = document.querySelector('nav');
var menuButton = document.querySelector('.menu-button');
var icon = menuButton.querySelector('.fas');

menuButton.addEventListener('click', function (e) {

	if(icon.classList.contains('fa-bars')){
		icon.classList.remove('fa-bars');
		icon.classList.add('fa-times');

		navBar.classList.add('isActive');
	}
	else{
		icon.classList.remove('fa-times');
		icon.classList.add('fa-bars');

		navBar.classList.remove('isActive');
	}

});