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
//-------------TRYING PROMISES-----------------------------------------
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');

const thirdMotionOpening = [
    {transform: 'rotate(0deg) translateX(0) translateY(0)'},
    {transform: 'rotate(45deg) translateX(-2px) translateY(2px)'},
    
];

const thirdMotionClosing = [
    
    {transform: 'rotate(45deg) translateX(-2px) translateY(2px)'},
    {transform: 'rotate(0deg) translateX(0) translateY(0)'},
];

const secondMotionOpening = [
    {transform: 'translateY(0) rotate(0deg)'},
    {transform: 'translateY(5px) rotate(-45deg)'},
    
];

const secondMotionClosing = [
    {transform: 'translateY(5px) rotate(-45deg)'},
    {transform: 'translateY(0) rotate(0deg)'},
    
];

const first_fourthMotionOpening = [
    {visibility: 'hidden'},
];

const first_fourthMotionClosing = [
    {visibility: 'visible'},
]; 

//********************************************************
// const motionTiming = {
//     duration: 0,
//     iterations: 1,
//     fill: 'forwards',
// };

// const motionTiming2 = {
//     duration: 0,
//     iterations: 1,
//     fill: 'forwards',
// };

async function openMotion(burgerDuration2, burgerDuration) {
    const fourthDisap = fourth.animate(first_fourthMotionOpening, {duration: burgerDuration2, iterations: 1, fill: 'forwards',});
    const firstDisap = first.animate(first_fourthMotionOpening, {duration: burgerDuration2, iterations: 1, fill: 'forwards',});
    await fourthDisap.finished;
    await firstDisap.finished;
    const secondMove = second.animate(secondMotionOpening, {duration: burgerDuration, iterations: 1, fill: 'forwards',});
    const thirdMove = third.animate(thirdMotionOpening, {duration: burgerDuration, iterations: 1, fill: 'forwards',});
    
};

async function closeMotion(burgerDuration2, burgerDuration) {
    const secondMoveBack = second.animate(secondMotionClosing, {duration: burgerDuration, iterations: 1, fill: 'forwards',});
    const thirdMoveBack = third.animate(thirdMotionClosing, {duration: burgerDuration, iterations: 1, fill: 'forwards',});
    await thirdMoveBack.finished;
    await secondMoveBack.finished;
    const firstReappear = first.animate(first_fourthMotionClosing, {duration: burgerDuration2, iterations: 1, fill: 'forwards',});
    const fourthReappear = fourth.animate(first_fourthMotionClosing, {duration: burgerDuration2, iterations: 1, fill: 'forwards',});
};
//********************************************************

// const motionTiming = {
//     duration: 0,
//     iterations: 1,
//     fill: 'forwards',
// };

// const motionTiming2 = {
//     duration: 0,
//     iterations: 1,
//     fill: 'forwards',
// };

// async function openMotion() {
//     const fourthDisap = fourth.animate(first_fourthMotionOpening, motionTiming2);
//     const firstDisap = first.animate(first_fourthMotionOpening, motionTiming2);
//     await fourthDisap.finished;
//     await firstDisap.finished;
//     const secondMove = second.animate(secondMotionOpening, motionTiming);
//     const thirdMove = third.animate(thirdMotionOpening, motionTiming);
    
// };

// async function closeMotion() {
//     const secondMoveBack = second.animate(secondMotionClosing, motionTiming);
//     const thirdMoveBack = third.animate(thirdMotionClosing, motionTiming);
//     await thirdMoveBack.finished;
//     await secondMoveBack.finished;
//     const firstReappear = first.animate(first_fourthMotionClosing, motionTiming2);
//     const fourthReappear = fourth.animate(first_fourthMotionClosing, motionTiming2);
// };
//--------------------------------------------------------------------

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
                            
                openMotion(1500, 700);
                
            } else if (visualViewport.width <= 450) {
                headerMenu.style.transform = 'translateY(55px)';
                headerMenu.style.transition = 'all 1.5s ease-in-out'; //
                
                }
            menuStatus = 'opened'
            document.body.style.overflow = 'hidden';
            // container.classList.add('_blocked');
            
            openMotion(1500, 700);
           
            } else if (menuStatus === "opened") {
            document.body.style.overflow = 'auto';
                // container.classList.remove('_blocked');
            headerMenu.style.transform = 'translateY(-500%)';
            headerMenu.style.transition = 'all 1.5s ease-in-out'; //
            
            closeMotion(1500, 700);
                
            menuStatus = 'closed'
            }; 
    
};

// viewport resize check ---------------------------------------------------
function recizeCheck() {
    
    

    if (visualViewport.width >= 781) {
        headerMenu.style.transition = 'none'; //
        headerMenu.style.transform = 'translateY(0)';
        

        closeMotion(0, 0);
        document.body.style.overflow = 'auto';

        menuStatus = 'closed';
        }                   
    
    
    
        else if (visualViewport.width < 781 && menuStatus === "closed") {
            headerMenu.style.transition = 'none'; //  
            headerMenu.style.transform = 'translateY(-500%)';
            
                               
            closeMotion(0, 0);
            document.body.style.overflow = 'auto';
            } 
            else if (menuStatus === "opened" && visualViewport.width < 781 && visualViewport.width > 450) {
                
                headerMenu.style.transition = 'none'; //
                headerMenu.style.transform = 'translateY(77px)';
                
                //openMotion(); 
                
                } else if (menuStatus === "opened" && visualViewport.width <= 450) {
                    headerMenu.style.transition = 'none'; //
                    headerMenu.style.transform = 'translateY(55px)';
                    
                    //openMotion();
                     
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

// menu links forwarding -------------------------------------------------------------
const menuLInks = document.querySelectorAll(".link[data-goto]");
const extraLInk = document.querySelector('.op2022__title__button');

console.log(menuLInks);

if (menuLInks.length > 0) {
    menuLInks.forEach(menuLInk => {
        menuLInk.addEventListener('click', onMenuClick);
    });
    function onMenuClick(e) {
        const clickHolder = e.target;
        if (clickHolder.dataset.goto && document.querySelector(clickHolder.dataset.goto)) {
            const gotoBlock = document.querySelector(clickHolder.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            // closing dropout menu---------------
            if (visualViewport.width >= 781) {
                headerMenu.style.transition = 'none'; //
                headerMenu.style.transform = 'translateY(0)';
                
        
                closeMotion(0, 0);
                document.body.style.overflow = 'auto';
        
                menuStatus = 'closed';
                } else  {
                    headerMenu.style.transition = 'none'; //  
                    headerMenu.style.transform = 'translateY(-500%)';
                                  
                    closeMotion(0, 0);
                    document.body.style.overflow = 'auto';
                    menuStatus = 'closed';
                    }; 
                    
            //-----------------------------------
            
            

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth',
            });
            e.preventDefault();
        
        }
    }
}


