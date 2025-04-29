const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const menuOverlay = document.getElementById('menu-overlay');
let menuShown = false;

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
window.addEventListener('beforeunload', closeMenu);
window.addEventListener('resize', closeMenu);

function openMenu() {
	console.log('narf');
	const header = document.getElementById('header');
	if (header.classList.contains('menu-icon-active')) {
	header.classList.remove('menu-icon-active');
	} else {
	header.classList.add('menu-icon-active');
	}
	//closeButton.classList.remove('hidden');
	
	menuShown = !menuShown;
	
	// menuOverlay.classList.add('onscreen');
	// menuOverlay.classList.remove('offscreen-left');				  				  
}

function closeMenu() {
	menuButton.classList.remove('hidden');
	closeButton.classList.add('hidden');
	// menuOverlay.classList.add('offscreen-left');
	// menuOverlay.classList.remove('onscreen');				  				  
}
