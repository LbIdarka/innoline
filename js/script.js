//======= гамбургерное меню =======//
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var submenuParent = navMain.querySelector('.main-nav__item');
var submenuToggle = navMain.querySelector('.main-nav-item__btn');
var submenu = document.querySelector('.submenu');

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


// submenuToggle.addEventListener('click', function() {
//   if (submenu.classList.contains('submenu--closed')) {
//     submenu.classList.remove('submenu--closed');
//     submenu.classList.add('submenu--opened');
//   } else {
//     submenu.classList.remove('submenu--opened');
//     submenu.classList.add('submenu--closed');
//   }
// });


// var dropdown = document.querySelectorAll('.main-nav__item');
// var dropdownArray = Array.prototype.slice.call(dropdown,0);
// dropdownArray.forEach(function(el){
// 	var button = el.querySelector('.dropdown__link'),
// 			menu = el.querySelector('.submenu'),
// 			arrow = button.querySelector('.main-nav-item__btn');

// 	button.onclick = function(event) {
// 		if(!menu.hasClass('submenu--opened')) {
// 			menu.classList.add('submenu--opened');
// 			menu.classList.remove('submenu--closed');
// 			arrow.classList.add('main-nav-item__btn--opened');
// 			arrow.classList.remove('main-nav-item__btn--down');
// 			event.preventDefault();
// 		}
// 		else {
// 			menu.classList.remove('submenu--opened');
// 			menu.classList.add('submenu--closed');
// 			arrow.classList.remove('main-nav-item__btn--opened');
// 			arrow.classList.add('main-nav-item__btn--down');
// 			event.preventDefault();
// 		}
// 	};
// })


//======= функция для фиксированной навигации =======//

window.onscroll = function() {//событие скрола
var stickyMenu = document.querySelector(".menu"); //задаем переменную для элемента, который будет "липнуть"
var scrolled = window.pageYOffset; //проверяем состояние скрола
var logoRed = document.querySelector('.logo__img-color');
var logo = document.querySelector('.logo__img');

  if(scrolled >= 50) {
    stickyMenu.classList.add("menu--fixed");
    logo.classList.add('logo__img--grey');
    logoRed.classList.add('logo__img-color--menu-fixed');
  } else  {
    stickyMenu.classList.remove("menu--fixed");
    logo.classList.remove('logo__img--grey');
    logoRed.classList.remove('logo__img-color--menu-fixed');
  }
}
