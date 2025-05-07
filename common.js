document.getElementById('menu-button').addEventListener('click', openMenu);
window.addEventListener('beforeunload', closeMenu);
window.addEventListener('resize', closeMenu);

function openMenu() {
	document.body.classList.toggle('popdown-active');
}

function closeMenu() {
	document.body.classList.remove('popdown-active');
}
