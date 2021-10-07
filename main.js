const buttonDarkMode = document.getElementById("switch");
const circuloButtonDarkMode = document.getElementById("switch-circulo");
const bodyBackground = document.getElementById("body");
const colorFonts = document.querySelectorAll(".all-fonts");
const sectionMisConocimientos = document.getElementById("software-tools");
const cardsProjects = document.querySelectorAll(".project");
const lampYellow = document.getElementById("lamp-yellow")


buttonDarkMode.onclick = () => {
    circuloButtonDarkMode.classList.toggle('circle-dark-mode');
    buttonDarkMode.classList.toggle('switch-light-mode');
    bodyBackground.classList.toggle('dark-mode-background');
    sectionMisConocimientos.classList.toggle('dark-mode-background-section');

    for (let i = 0; i < colorFonts.length; i++) {
        colorFonts[i].classList.toggle('dark-mode-font');
    }

   
    for (let j = 0; j < cardsProjects.length; j++) {
        cardsProjects[j].classList.toggle('project-dark-mode');
        
    }

}

