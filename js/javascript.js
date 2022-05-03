// DESESTRUCTURACION. (Ver function fn_actualizarHora) Entrega del 28/04
const difHoraria = {
  difBog: -2,
  difLim: -2,
  difTel: 6,
  difBue: 0,
  difVig: 5,
  difScl: -1
};
// Objeto ciudades
const miArrayCiudades = [
  { idCiudad: 1, ciudad: "Tel Aviv", pais: "Israel" },
  { idCiudad: 2, ciudad: "Buenos Aires", pais: "Argentina" },
  { idCiudad: 3, ciudad: "Bogotá", pais: "Colombia" },
  { idCiudad: 4, ciudad: "Lima", pais: "Peru" },
  { idCiudad: 5, ciudad: "Vigo", pais: "España" },
  { idCiudad: 6, ciudad: "Santiago", pais: "Chile" },
];

//Inicio
//Uso de JSON y Storage (me servía Session Storage)
const jsonCiudades = JSON.stringify(miArrayCiudades);
sessionStorage.setItem("ciudades", jsonCiudades);

fn_actualizarHora();



function fn_cuentaRelojes() {
  let lasCiudades = JSON.parse(sessionStorage.getItem("ciudades"));
  return lasCiudades.length;
}

let date = new Date();

// Tuve que poner este objeto para poder formatear la fecha
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function InicializaReloj(difHoraria, tiempo) {
  setInterval(function () {
    let date = new Date();
    date.setHours(date.getHours() + difHoraria);

    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    //evitar los 0 o numeros individuales
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    tiempo.innerText =  horas + ":" + minutos + ":" + segundos;
  }, 1000);
}

function fn_actualizarHora() {
  // Cantidad de relojes
  let cantidadRelojes = document.getElementById("id_textoCantidadRelojes");
  cantidadRelojes.innerText = "Reloj Mundial posee " + fn_cuentaRelojes() + " Relojes";

  // DESESTRUCTURACION. Entrega del 28/04
  let { difTel, difBue, difBog, difLim, difVig, difScl } = difHoraria;

  let tiempo1 = document.getElementById("tiempo1");
  let tiempo2 = document.getElementById("tiempo2");
  let tiempo3 = document.getElementById("tiempo3");
  let tiempo4 = document.getElementById("tiempo4");
  let tiempo5 = document.getElementById("tiempo5");
  let tiempo6 = document.getElementById("tiempo6");

  InicializaReloj(difTel, tiempo1);
  InicializaReloj(difBue, tiempo2);
  InicializaReloj(difBog, tiempo3);
  InicializaReloj(difLim, tiempo4);
  InicializaReloj(difVig, tiempo5);
  InicializaReloj(difScl, tiempo6);

  let ciudad1 = document.getElementById("ciudad1");
  let ciudad2 = document.getElementById("ciudad2");
  let ciudad3 = document.getElementById("ciudad3");
  let ciudad4 = document.getElementById("ciudad4");
  let ciudad5 = document.getElementById("ciudad5");
  let ciudad6 = document.getElementById("ciudad6");

  ciudad1.innerText = "Tel Aviv";
  ciudad2.innerText = "Buenos Aires";
  ciudad3.innerText = "Bogotá";
  ciudad4.innerText = "Lima";
  ciudad5.innerText = "Vigo";
  ciudad6.innerText = "Santiago";
}


function fn_clickSeleccionar(id_ciudad) {
  let tuCiudad = document.getElementById("id_tuCiudad");
  let textoCiudad = document.querySelector(id_ciudad).textContent;
  tuCiudad.innerText = "Tu ciudad es " + textoCiudad;
  fn_actualizarHora();
  fn_pintaCiudad(textoCiudad);
  Toastify({
    text: "Tu ciudad es " + textoCiudad + " :)",
    className: "alertaFeliz",
    duration: 3000
    }).showToast();
  
}


// USO OPERADOR TERNARIO, entrega del 28/04
function fn_pintaCiudad(textoCiudad) {
  textoCiudad == "Tel Aviv"
    ? (document.getElementById("tiempo1").style.color = "fuchsia")
    : (document.getElementById("tiempo1").style.color = "white");
  textoCiudad == "Buenos Aires"
    ? (document.getElementById("tiempo2").style.color = "fuchsia")
    : (document.getElementById("tiempo2").style.color = "white");
  textoCiudad == "Bogotá"
    ? (document.getElementById("tiempo3").style.color = "fuchsia")
    : (document.getElementById("tiempo3").style.color = "white");
  textoCiudad == "Lima"
    ? (document.getElementById("tiempo4").style.color = "fuchsia")
    : (document.getElementById("tiempo4").style.color = "white");
  textoCiudad == "Vigo"
    ? (document.getElementById("tiempo5").style.color = "fuchsia")
    : (document.getElementById("tiempo5").style.color = "white");
  textoCiudad == "Santiago"
    ? (document.getElementById("tiempo6").style.color = "fuchsia")
    : (document.getElementById("tiempo6").style.color = "white");
}

const container1 = document.querySelector("#container1");
container1.onmouseover = logMouseOver;
container1.onmouseout = logMouseOut;

const container2 = document.querySelector("#container2");
container2.onmouseover = logMouseOver;
container2.onmouseout = logMouseOut;

const container3 = document.querySelector("#container3");
container3.onmouseover = logMouseOver;
container3.onmouseout = logMouseOut;

const container4 = document.querySelector("#container4");
container4.onmouseover = logMouseOver;
container4.onmouseout = logMouseOut;

const container5 = document.querySelector("#container5");
container5.onmouseover = logMouseOver;
container5.onmouseout = logMouseOut;

const container6 = document.querySelector("#container6");
container6.onmouseover = logMouseOver;
container6.onmouseout = logMouseOut;



function logMouseOver() {
  let containerMouseOver = "#" + this.id;
  document.querySelector(containerMouseOver).style.color = "orange";

}

function logMouseOut() {
  let containerMouseOut = "#" + this.id;
  document.querySelector(containerMouseOut).style.color = "white";
}