const d = document;

export function clockG(clock, btnInicio, btnParar) {
  let Tempo;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnInicio)) {
      Tempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3> ${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }

    if (e.target.matches(btnParar)) {
        clearInterval(Tempo);
        d.querySelector(clock).innerHTML = null;
        d.querySelector(btnInicio).disabled = false;
      }
  });
}

export function alarmaG(alarmaSonido, btnAlarmaInicio, btnAlarmaParar){

    let alarmaTempo;
   const $alarma = d.createElement("Audio");
    $alarma.src = alarmaSonido;

    d.addEventListener("click", (e) => {
if (e.target.matches(btnAlarmaInicio)) {
    alarmaTempo=setTimeout(() => {
        $alarma.play();
    }, 2000);
    e.target.disabled = true;
}

if (e.target.matches(btnAlarmaParar)) {
    clearInterval(alarmaTempo);
    $alarma.pause();
    $alarma.currentTime = 0;
    d.querySelector(btnAlarmaInicio).disabled = false;
}
    });
}


