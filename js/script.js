//======= гамбургерное меню =======//

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var bgPosition = document.querySelector('.page-current');

bgPosition.classList.remove('page-current--nojs');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//======= функция для фиксированной навигации =======//

window.onscroll = function() {//событие скрола
  var stickyMenu = document.querySelector(".menu"); //задаем переменную для элемента, который будет "липнуть"
  var scrolled = window.pageYOffset; //проверяем состояние скрола
  var logoRed = document.querySelector('.logo__img-color');
  var logo = document.querySelector('.logo__img');

  if(scrolled) { //если скрол больше или равен отступу меню + слоган, то добавляем класс с position: fixed;
    stickyMenu.classList.add("menu--fixed");
    logo.classList.add('logo__img--grey');
    logoRed.classList.add('logo__img-color--menu-fixed');
  } else  {
    stickyMenu.classList.remove("menu--fixed");
    logo.classList.remove('logo__img--grey');
    logoRed.classList.remove('logo__img-color--menu-fixed');
  }
}
