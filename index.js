let header;
let oldScrollY;

header = document.querySelector('header');
oldScrollY = window.scrollY;

document.addEventListener('scroll', () => {
    if (oldScrollY < window.scrollY) {
        header.classList.add('header--hidden');
    } else {
        header.classList.remove('header--hidden');
    }
    oldScrollY = window.scrollY;
});