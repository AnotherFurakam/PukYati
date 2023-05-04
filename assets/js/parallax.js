const parallax = document.querySelector('.parallax');

const Scroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    parallax.style.backgroundPosition = '0 '+scrollTop * -0.19+'px';
}

window.addEventListener('scroll',Scroll);