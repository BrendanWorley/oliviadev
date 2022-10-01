import "@babel/polyfill";
import './index.html';
import './index.scss';
import { mult, sum } from './modules/calc';

// header menu operation-------------------------------------------------
visualViewport.addEventListener('resize', recizeCheck);

const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
let menuStatus = 'closed';
burger.addEventListener('click', burgerOps);

function burgerOps() {
    if (visualViewport.width >= 781) {
        headerMenu.style.transform = 'translateY(0)';
        menuStatus = 'closed';
    }   else if (menuStatus === 'closed') {
            if (visualViewport.width > 450) {
                headerMenu.style.transform = 'translateY(77px)';
            } else if (visualViewport.width <= 450) {
                headerMenu.style.transform = 'translateY(55px)';
            }
            menuStatus = 'opened'
            document.querySelector('#second').style.transform = 'translateY(5px) rotate(-45deg)';
            document.querySelector('#third').style.transform = 'rotate(45deg) translateX(-2px) translateY(2px)';
                
            document.querySelector('#first').style.visibility = 'hidden';
            document.querySelector('#fourth').style.visibility = 'hidden';        
            } else if (menuStatus === "opened") {
            headerMenu.style.transform = 'translateY(-500%)';
            document.querySelector('#second').style.transform = 'translateY(0) rotate(0deg)';
            document.querySelector('#third').style.transform = 'rotate(0deg) translateX(0) translateY(0)';
                
            document.querySelector('#first').style.visibility = 'visible';
            document.querySelector('#fourth').style.visibility = 'visible';
            menuStatus = 'closed'
            }
    
}

// viewport resize check ---------------------------------------------------
function recizeCheck() {
    if (visualViewport.width >= 781) {
        headerMenu.style.transform = 'translateY(0)';
        document.querySelector('#second').style.transform = 'translateY(0) rotate(0deg)';
            document.querySelector('#third').style.transform = 'rotate(0deg) translateX(0) translateY(0)';
                
            document.querySelector('#first').style.visibility = 'visible';
            document.querySelector('#fourth').style.visibility = 'visible';
        menuStatus = 'closed';
    }   else if (visualViewport.width < 781 && menuStatus === "closed") {
                headerMenu.style.transform = 'translateY(-500%)';
                document.querySelector('#second').style.transform = 'translateY(0) rotate(0deg)';
            document.querySelector('#third').style.transform = 'rotate(0deg) translateX(0) translateY(0)';
                
            document.querySelector('#first').style.visibility = 'visible';
            document.querySelector('#fourth').style.visibility = 'visible';
            } else if (menuStatus === "opened" && visualViewport.width < 781 && visualViewport.width > 450) {
                headerMenu.style.transform = 'translateY(77px)';
                document.querySelector('#second').style.transform = 'translateY(5px) rotate(-45deg)';
            document.querySelector('#third').style.transform = 'rotate(45deg) translateX(-2px) translateY(2px)';
                
            document.querySelector('#first').style.visibility = 'hidden';
            document.querySelector('#fourth').style.visibility = 'hidden'; 
            } else if (menuStatus === "opened" && visualViewport.width <= 450) {
                headerMenu.style.transform = 'translateY(55px)';
                document.querySelector('#second').style.transform = 'translateY(5px) rotate(-45deg)';
            document.querySelector('#third').style.transform = 'rotate(45deg) translateX(-2px) translateY(2px)';
                
            document.querySelector('#first').style.visibility = 'hidden';
            document.querySelector('#fourth').style.visibility = 'hidden'; 
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
    })
})


