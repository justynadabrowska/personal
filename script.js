const hamburger = document.getElementById('hamburger');
const navList = document.getElementsByClassName('nav-list')[0];

hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
})