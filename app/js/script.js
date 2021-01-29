const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElemens = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){

    if(header.classList.contains('open')){ //Close Hamburger Menu
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElemens.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');            
        });

    }
    else{  //open Hamburger Menu
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElemens.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');            
        });
    }
});