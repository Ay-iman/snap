const features = document.querySelector('#features');
const company = document.querySelector('#company');
const iconMenu = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('#close-menu');
const menuFeatures = document.querySelector('.menu-features');
const menuCompany = document.querySelector('.menu-company');
const firstSec = document.querySelector('.first-sec');
const secondSec = document.querySelector('.second-sec');
const backdrop = document.querySelector('.backdrop');
const thirdSec = document.querySelector('#third-sec');
const dropDownOne = document.querySelector('#drop-down_one');
const dropDownTwo = document.querySelector('#drop-down_two');



features.addEventListener( 'click', ()=> {
    // let features = document.querySelector('#features');

    firstSec.classList.toggle('visible');
    features.style.cssText = 'color:black';
})

company.addEventListener('click', ()=> {
    secondSec.classList.toggle('visible')
})

iconMenu.addEventListener ( 'click', ()=> {
    backdrop.classList.toggle('visible');
    thirdSec.classList.toggle('visible')
} )

closeMenu.addEventListener('click', ()=> {
    backdrop.classList.remove('visible');
    thirdSec.classList.remove('visible');
    // dropDownOne.classList.toggle ('visible')
    // dropDownTwo.classList.toggle ('visible')
})

menuFeatures.addEventListener( 'click', ()=> {
    dropDownOne.classList.toggle ('visible')
} )

menuCompany.addEventListener( 'click', ()=> {
    dropDownTwo.classList.toggle ('visible')
} )
