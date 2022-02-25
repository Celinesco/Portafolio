const buttonDarkMode = document.querySelector(".nav__button--switch");
const iconLamp = document.querySelector(".fa-lightbulb");
const bodyBackground = document.querySelector(".body");
const colorFonts = document.querySelectorAll(".all-fonts");
const sectionMisConocimientos = document.getElementById("software-tools");
const cardsProjects = document.querySelectorAll(".project");
const lampYellow = document.getElementById("lamp-yellow")
const containerFormular = document.getElementById("formular-container");
const openMenuHamburguesa = document.getElementById("open-menu-hamburguesa");
const containerBurgerMenu = document.querySelector(".container__dropdown-menu");
const closeMenuHamburgesa = document.getElementById("close-dropdown-menu")
const allSections = document.getElementById("all-sections");
const linksMenuHamburguesa = document.querySelectorAll(".link-nav-menu-hamburguesa")

const links = document.querySelectorAll(".icons-focus")


  
//Funcionalidad modo oscuro



buttonDarkMode.onclick = () => {
    buttonDarkMode.classList.toggle('nav__button--switch--darkmode');
    iconLamp.classList.toggle('fa-lightbulb--darkmode')
    bodyBackground.classList.toggle('dark-mode-background');
    sectionMisConocimientos.classList.toggle('dark-mode-background-section');
    containerFormular.classList.toggle('dark-mode-background-section');

    for (let i = 0; i < colorFonts.length; i++) {
        colorFonts[i].classList.toggle('dark-mode-font');
    }

    for (let j = 0; j < cardsProjects.length; j++) {
        cardsProjects[j].classList.toggle('project-dark-mode');
        
    }
    for (let j = 0; j < links.length; j++) {
        links[j].classList.toggle("dark-mode-font")
    }

}

openMenuHamburguesa.onclick = () => {
    containerBurgerMenu.style.top = "0"
}

closeMenuHamburgesa.onclick = () => {
    containerBurgerMenu.style.top = "-100%"
    
}

linksMenuHamburguesa.forEach ((link) => {
    link.onclick = ()=> {
        containerBurgerMenu.style.top = "-100%"
    }
})





class X {
    get Y() {return 42; }
}

var x = new X()


console.log(x.Y)


var a;
var b = (a=3) ? true : false

//The condition in the ternary statement is using the assignment operator


var obj
console.log(obj)
//undefined


// que operador no es unary 
// delete
// void
// typeof
// instanceof (este)


// opcion incorrecta para devolver un arreglo vacio

const vacio = () => {}

const dessert = {type: 'pie'};
dessert.type = 'pudding'


console.log(dessert.type)


function logThis () {
    this.des = "logger";
    console.log(this)
}

new logThis();


