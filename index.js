const title = document.querySelectorAll('.shake_it'); //all elementos
const username = document.querySelector('.t__username'); //one element is very especific
const greeting = document.querySelector('.t__hello');
const textAutomatically = document.getElementById('t__text');
const aboutme = document.querySelector('.t__aboutme');
let text = 'Developer,Cibersecurity and IA';
let textAboutme ='About me'

// if used querySelectorAll is for loop through the element 

let colorChange = false;
function changeColor() {
    if(colorChange){
        greeting.style.color = 'grey'
    }else{
        greeting.style.color = 'rgb(136, 136, 218)'
    }

    if(colorChange){
        username.style.background = 'rgb(136, 136, 218)';
    }else{
        username.style.background = 'grey';
    }
    // TODO: Caundo viene verdadero, se cambia a falso, y cuando viene falso se vuelve verdadero
    //el signo de admiracion es un operador de negacion
    colorChange = !colorChange;
}

setInterval(() => {
    greeting.style.color = changeColor()
    username.style.fontWeight = 'bold';
},1000)

let index = 0;
function writter() {
    if(index < text.length) {
        textAutomatically.textContent += text.charAt(index); // charArt es un metodo para acceder a un caracter especifico de una cadena de texto se le pasa el indice
        index++;
    }else{
        clearInterval();
    }

}

const interval = setInterval(writter, 100);



