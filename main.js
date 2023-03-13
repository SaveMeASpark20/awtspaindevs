const toggleButton = document.getElementsByClassName('bars')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
    console.log('active');
})