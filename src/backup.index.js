// ******** DO NOT TOUCH THESE LINES - WEBPACK GLOBAL SETTINGS **********************
import "@babel/polyfill";
import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';
// *********************************************************************************

// header menu operation-------------------------------------------------
visualViewport.addEventListener('resize', recizeCheck);

window.addEventListener('resize', lowCheck);



const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('.header');
const container = document.querySelector('.container');
const op2022 = document.querySelector('.op2022');
const sandwich = document.querySelector('.sandwich');
const sandwichTitle = document.querySelector('.sandwich__title');


let menuStatus = 'closed';
burger.addEventListener('click', burgerOps);

function burgerOps() {
    
    if (visualViewport.width >= 781) {
        headerMenu.style.transform = 'translateY(0)';
        menuStatus = 'closed';
    }   else if (menuStatus === 'closed') {
            if (visualViewport.width > 450) {
                headerMenu.style.transform = 'translateY(77px)';
                headerMenu.style.transition = 'all 1.5s ease-in-out'; //
                            
                
            } else if (visualViewport.width <= 450) {
                headerMenu.style.transform = 'translateY(55px)';
                headerMenu.style.transition = 'all 1.5s ease-in-out'; //
                
                }
            menuStatus = 'opened'
            document.body.style.overflow = 'hidden';
            // container.classList.add('_blocked');
            document.querySelector('#first').style.visibility = 'hidden';
            document.querySelector('#fourth').style.visibility = 'hidden';
            document.querySelector('#second').style.transform = 'translateY(5px) rotate(-45deg)';
            document.querySelector('#third').style.transform = 'rotate(45deg) translateX(-2px) translateY(2px)';
                   
            } else if (menuStatus === "opened") {
            document.body.style.overflow = 'auto';
                // container.classList.remove('_blocked');
            headerMenu.style.transform = 'translateY(-500%)';
            headerMenu.style.transition = 'all 1.5s ease-in-out'; //
            document.querySelector('#first').style.visibility = 'visible';
            document.querySelector('#fourth').style.visibility = 'visible';
            document.querySelector('#second').style.transform = 'translateY(0) rotate(0deg)';
            document.querySelector('#third').style.transform = 'rotate(0deg) translateX(0) translateY(0)';
                
            menuStatus = 'closed'
            } 
    
}

// viewport resize check ---------------------------------------------------
function recizeCheck() {
    // checkWinRatio();
    if (visualViewport.width >= 781) {
        headerMenu.style.transition = 'none'; //
        headerMenu.style.transform = 'translateY(0)';
        
        document.querySelector('#second').style.transform = 'translateY(0) rotate(0deg)';
        document.querySelector('#third').style.transform = 'rotate(0deg) translateX(0) translateY(0)';
        document.querySelector('#first').style.visibility = 'visible';
        document.querySelector('#fourth').style.visibility = 'visible';
        menuStatus = 'closed';
    }   else if (visualViewport.width < 781 && menuStatus === "closed") {
            headerMenu.style.transition = 'none'; //  
            headerMenu.style.transform = 'translateY(-500%)';
            
            document.querySelector('#second').style.transform = 'translateY(0) rotate(0deg)';
            document.querySelector('#third').style.transform = 'rotate(0deg) translateX(0) translateY(0)';
            document.querySelector('#first').style.visibility = 'visible';
            document.querySelector('#fourth').style.visibility = 'visible';
            
            } else if (menuStatus === "opened" && visualViewport.width < 781 && visualViewport.width > 450) {
                
                headerMenu.style.transition = 'none'; //
                headerMenu.style.transform = 'translateY(77px)';
                document.querySelector('#second').style.transform = 'translateY(5px) rotate(-45deg)';
                document.querySelector('#third').style.transform = 'rotate(45deg) translateX(-2px) translateY(2px)';
                document.querySelector('#first').style.visibility = 'hidden';
                document.querySelector('#fourth').style.visibility = 'hidden'; 
                
                } else if (menuStatus === "opened" && visualViewport.width <= 450) {
                                        headerMenu.style.transition = 'none'; //
                    headerMenu.style.transform = 'translateY(55px)';
                    document.querySelector('#second').style.transform = 'translateY(5px) rotate(-45deg)';
                    document.querySelector('#third').style.transform = 'rotate(45deg) translateX(-2px) translateY(2px)';
                    document.querySelector('#first').style.visibility = 'hidden';
                    document.querySelector('#fourth').style.visibility = 'hidden'; 
                    };
};

// low height check --------------------------------------------------------------
// const winRatio = visualViewport.width / visualViewport.height;
// console.log("window ratio: ", winRatio);


// function checkWinRatio() {
    
//     if (winRatio >= 2.01) {
//         sandwich.style.backgroundSize = '1440px';
//         sandwichTitle.style.bottom = '0px';
//         location.reload();
//     } else if (winRatio < 2.01) {
//         sandwich.style.backgroundSize = '228vh, 120vh';
//         location.reload();
//     };
//     location.reload();
// };

function lowCheck() {
    if (visualViewport.width < 781 && visualViewport.height < 400) {
        header.classList.add('_low');
        headerMenu.style.marginTop = '-22px';
        headerMenu.style.height = 'calc(100vh - 55px + 22px)';
        
    } else if ((visualViewport.height > 400 && visualViewport.width > 450) || visualViewport.width > 781) {
        header.classList.remove('_low');
        headerMenu.style.marginTop = '0';
        headerMenu.style.height = '';
        
    } else if (visualViewport.width < 450 && visualViewport.height > 400) {
        header.classList.remove('_low');
        headerMenu.style.marginTop = '0';
        headerMenu.style.height = '';
    }  
}


// burger animation --------------------------------------------------------------
const burgerContainer = document.querySelector('.header_burger_container');
burgerContainer.addEventListener('mouseover', () => {
    document.querySelector('#first').classList.add("rightShift");
    document.querySelector('#third').classList.add("rightShift");
    document.querySelector('#second').classList.add("leftShift");
    document.querySelector('#fourth').classList.add("leftShift");
    burgerContainer.addEventListener('mouseout', () => {
        document.querySelector('#first').classList.remove("rightShift");
        document.querySelector('#third').classList.remove("rightShift");
        document.querySelector('#second').classList.remove("leftShift");
        document.querySelector('#fourth').classList.remove("leftShift");
    });
});

// book table shadow animation -------------------------------------------------------



const bookTableShadow = document.querySelector('.op2022__title__button_shadow');

bookTableShadow.addEventListener('click', () => {
    
    bookTableShadow.animate([
        {scale: 1, opacity: 0, easing: 'ease-out'},
        {scale: 1.9, opacity: 0.20, easing: 'ease-out'},
        {scale: 1.91, opacity: 0, easing: 'ease-out'},
    ], 600);

});


