$('.single-item').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,

});

const menuBtn = document.querySelector('.top__burger');
const menu = document.querySelector('.top__menu');
const body = document.querySelector('body');
const links = document.querySelectorAll('.top__wrapper_menu a');
console.log(links);

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})

links.forEach(function(link) {
    link.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
    })
})