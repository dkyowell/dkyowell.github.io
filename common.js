const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', openMenu);
window.addEventListener('beforeunload', closeMenu);
window.addEventListener('resize', closeMenu);

function openMenu() {
	const header = document.getElementById('header');
	if (header.classList.contains('menu-icon-active')) {
		header.classList.remove('menu-icon-active');
	} else {
		header.classList.add('menu-icon-active');
	}
}

function closeMenu() {
	menuButton.classList.remove('hidden');
	closeButton.classList.add('hidden');
	// menuOverlay.classList.add('offscreen-left');
	// menuOverlay.classList.remove('onscreen');				  				  
}
