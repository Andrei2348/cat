const burger = document.querySelector('.navbar__burger-wrapper');
const mobile__menu = document.querySelector('.navbar__wrapper');
const mobile__item = document.querySelectorAll('.navbar__item-link');
const header = document.querySelector('.header');

window.addEventListener('DOMContentLoaded', navbarContent());

function navbarContent(){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('active');
    mobile__menu.classList.toggle('active');
  
    if(burger.classList.contains('active') & mobile__menu.classList.contains('active')){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    };
  });
  
  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 50) {
      header.style.backgroundColor = '#29323c';
    } else {
      header.style.backgroundColor = 'transparent';
    }
  });
  
  mobile__item.forEach(item=>{
    item.addEventListener('click', ()=>{
      if(burger.classList.contains('active') & mobile__menu.classList.contains('active')){
        burger.classList.remove('active');
        mobile__menu.classList.remove('active');
        document.body.style.overflow = '';
      };
    });
  });
}