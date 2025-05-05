const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', openMenu);
window.addEventListener('beforeunload', closeMenu);
window.addEventListener('resize', closeMenu);

function openMenu() {
	const header = document.querySelector('#header');
	const bottom = document.querySelector('#bottombar');
	console.log(bottom)
	if (header.classList.contains('menu-icon-active')) {
		header.classList.remove('menu-icon-active');
		bottom.classList.remove('menu-icon-active');
	} else {
		header.classList.add('menu-icon-active');
		bottom.classList.add('menu-icon-active');
	}
}

function closeMenu() {
	menuButton.classList.remove('hidden');
}
