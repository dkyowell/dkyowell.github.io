const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const menuOverlay = document.getElementById('menu-overlay');

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
window.addEventListener('beforeunload', closeMenu);
window.addEventListener('resize', closeMenu);

function openMenu() {
	menuOverlay.classList.add('onscreen');
	menuOverlay.classList.remove('offscreen-left');				  				  
}

function closeMenu() {
	console.log("Narf!"); 
	menuOverlay.classList.add('offscreen-left');
	menuOverlay.classList.remove('onscreen');				  				  
}
