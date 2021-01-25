$(document).ready(function () {

    //nav-page
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });

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

//фильтрация проектов
let containerEl = document.querySelector('#portfolio-projects');
let mixer = mixitup(containerEl, {
    classNames: {
        block: ""
    }
});

//форма и плейсхолдер
const formInputs = document.querySelectorAll('.form-field');
for(let item of formInputs){
    const thisPlaceholder = item.nextElementSibling;

    item.addEventListener('focus', function(){
        thisPlaceholder.classList.add('active');
    });
    item.addEventListener('blur', function() {
        if(item.value==''){
            thisPlaceholder.classList.remove('active');
        }
    });
}

//валидация формы
$('#contact-form').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        theme: {
            required: true
        },
        message: {
            required: true
        }
    },
    messages: {
        email: {
            required: 'Введите email',
            email: 'отсутсвует символ @'
        },
        theme: {
            required: 'Введите тему сообщения'
        },
        message: {
            required: 'Введите текстсообщения'
        }
    },
    submitHandler: function (form) {
        ajaxFormSubmit();
    }

})


// Функция AJAX запрса на сервер

function ajaxFormSubmit() {

    let string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку.

    //Формируем ajax запрос
    $.ajax({
        type: "POST", // Тип запроса - POST
        url: "php/mail.php", // Куда отправляем запрос
        data: string, // Какие даные отправляем, в данном случае отправляем переменную string

        // Функция если все прошло успешно
        success: function (html) {
            $("#contact-form").slideUp(800);
            $('#answer').html(html);
        }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
}

//backTop button
$('#backTop').hide();

$(window).scroll(function () {

    if($(this).scrollTop() > 200){
        $('#backTop').fadeIn();
    }
    else{
        $('#backTop').fadeOut();
    }
})






});
