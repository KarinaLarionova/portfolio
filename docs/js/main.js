$(document).ready(function () {

    const menuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector ('.header-menu');
    const overlayEl = document.querySelector ('#overlay');
    const bodyEl = document.body;

    //клик по иконке гамбургер
    menuToggle.addEventListener('click', function(){
        this.classList.toggle('active');
        mobMenu.classList.toggle('active');
        overlayEl.classList.toggle('active');
        bodyEl.classList.toggle('noscroll');
    });

    //клик по мобильному меню
    mobMenu.addEventListener('click', function(){
        this.classList.remove('active');
        menuToggle.classList.remove('active');
        overlayEl.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    //закрытие моб меню при клике на overlay
    overlayEl.addEventListener('click', function(){
        this.classList.remove('active');
        menuToggle.classList.remove('active');
        mobMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    //закрытие моб меню при ресайзе экрана
    window.addEventListener('resize', function(){
        mobMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        overlayEl.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    });

    //при скролле добавить класс fix-menu.active
    const fixMenu = document.querySelector('.fix-menu');
    
    window.addEventListener('scroll', function(){

        if(this.pageYOffset > 10) {
            fixMenu.classList.add('active');
        }
        else {
            fixMenu.classList.remove('active');
        }
        
    });






});
/*document.querySelector('.toggle-menu').onclick = function(){
    this.classList.toggle('active');
}*/