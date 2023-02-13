import { createApp } from 'vue'
import App from './App.vue'

import './style/style.css'

createApp(App).mount('#app')



//changer l'emplacement de la classe active en fonction de la page actuelle----------------
const linksLi = document.querySelectorAll("nav li");
linksLi.forEach(li => {
    li.addEventListener("click", () => {
        removeActive();
        li.classList.add("active");
    });
});
function removeActive() {
    linksLi.forEach(li => {
        li.classList.remove("active");
    });
}


const linksA = document.querySelectorAll("a");
linksA.forEach(a => {
    a.addEventListener("click", () => {
        removeActiveA();
        a.classList.add("button-active");
    });
});
function removeActiveA() {
    linksA.forEach(a => {
        a.classList.remove("button-active");
    });
}
