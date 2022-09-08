import { alarmaG, clockG } from "./dom/reloj.js";
import darkTheme from "./dom/tema_oscuro.js";

const d= document;

d.addEventListener("DOMContentLoaded", (e)=>{
    clockG("#mostrar-hora", "#start-reloj", "#stop-reloj");
alarmaG("assets/graciosos-alarma-es-tu-mujer-.mp3","#start-alarma", "#stop-alarma");
});

darkTheme(".dark-theme-btn", "dark-mode");





