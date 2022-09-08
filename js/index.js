import { alarmaG, clockG } from "./dom/reloj.js";

const d= document;

d.addEventListener("DOMContentLoaded", (e)=>{
    clockG("#mostrar-hora", "#start-reloj", "#stop-reloj");
alarmaG("assets/graciosos-alarma-es-tu-mujer-.mp3","#start-alarma", "#stop-alarma");
});





