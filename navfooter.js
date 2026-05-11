

const hamburger = document.querySelector('.hamburger');
const nav_links = document.querySelector('nav .nav-links');

// Nav Bar
let screen_width = document.documentElement.clientWidth;

if (screen_width <= 500) {
    hamburger.addEventListener('click', () =>{
        nav_links.classList.toggle("active");
    })
}

// theme.js
function applyTheme() {
    const body = document.querySelector('body');
    const themeBtn = document.querySelector('.theme');
    const themeBtn1 = document.querySelector('.theme1');
    const savedTheme = localStorage.getItem('selected-theme');
    const logo = document.querySelector('nav .logo img');
    const logof = document.querySelector('div#info img');
    const nike = document.querySelector('#nike');
    const nike_partner = document.querySelector('#nike_partner');

    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        if (themeBtn) themeBtn.textContent = '☀️';
        if (themeBtn1) themeBtn1.textContent = '☀️';
        if (logo) logo.setAttribute('src', './Images/Logo/Small1.png');
        if (logof) logof.setAttribute('src', './Images/Logo/Small1.png');
        if (nike) nike.setAttribute('src', './Images/Footer/sponsors/nike_white.png');
        if (nike_partner) nike_partner.setAttribute('src', './Images/Footer/sponsors/nike_white.png');
    } else {
        body.classList.remove('dark-theme');
        if (themeBtn) themeBtn.textContent = '🌙';
        if (themeBtn1) themeBtn1.textContent = '🌙';
        if (logo) logo.setAttribute('src', './Images/Logo/Small.png');
        if (logof) logof.setAttribute('src', './Images/Logo/Small.png');
        if (nike) nike.setAttribute('src', './Images/Footer/sponsors/nike.png');
        if (nike_partner) nike_partner.setAttribute('src', './Images/Footer/sponsors/nike.png');
    }
}

applyTheme();

const themeBtn = document.querySelector('.theme');
const themeBtn1 = document.querySelector('.theme1');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('selected-theme', 'light');
        } else {
            localStorage.setItem('selected-theme', 'dark');
        }
        applyTheme();
    });
}
if (themeBtn1) {
    themeBtn1.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('selected-theme', 'light');
        } else {
            localStorage.setItem('selected-theme', 'dark');
        }
        applyTheme();
    });
}