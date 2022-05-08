//Fetch para penultima entrega // Pinta relojes
const contRelojes = 0;

fn_modificarDOM();
fn_iniciarRelojes();
fn_pintaCantidad();

function fn_modificarDOM(){
  const resp = fetch("./json/ciudades.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((ciudad) => {
      const grilla = document.querySelector("#grilla");
      let idContainer = `container${ciudad.idCiudad}`;
      let idTiempo = `tiempo${ciudad.idCiudad}`;
      grilla.innerHTML += `<div id=${idContainer} class="container-reloj" onclick="fn_clickSeleccionar('#ciudad${ciudad.idCiudad}')">
      <div><span id="ciudad${ciudad.idCiudad}" >${ciudad.ciudad}</span></div>
      <div class="reloj"><span id="${idTiempo}">${ciudad.horaLocal}</span></div></div>`;
    });
  });
}

function fn_iniciarRelojes(){
  const resp = fetch("./json/ciudades.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((ciudad) => {
      fn_iniciarRelojLocal(ciudad);
      const container = document.getElementById(`container${ciudad.idCiudad}`);
      container.onmouseover = fn_logMouseOver;
      container.onmouseout = fn_logMouseOut;
    });
  });
}

function fn_iniciarRelojLocal(ciudad) {
    let idTiempo = `tiempo${ciudad.idCiudad}`;
    let horaLocal = document.getElementById(idTiempo);
    
  setInterval(function () {
    let date = new Date();
    date.setHours(date.getHours() + ciudad.difHoraria);

    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    //evitar los 0 o numeros individuales
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

    horaLocal.innerText = horas + ":" + minutos + ":" + segundos;
    
  }, 1000);
}

function fn_pintaCantidad() {
  const contRelojes = 0;
  const resp = fetch("./json/ciudades.json")
  .then((res) => res.json())
  .then((data) => {
    let cantidadRelojes = document.getElementById("id_textoCantidadRelojes");
    cantidadRelojes.innerText = `Reloj Mundial posee ${data.length} Relojes`;
  });
}

function fn_logMouseOver() {
  let containerMouseOver = "#" + this.id;
  document.querySelector(containerMouseOver).style.color = "orange";
}

function fn_logMouseOut() {
  let containerMouseOut = "#" + this.id;
  document.querySelector(containerMouseOut).style.color = "white";
}

function fn_clickSeleccionar(id_ciudad) {
  let textoCiudad = document.querySelector(id_ciudad);

  let tuCiudad = document.getElementById("id_tuCiudad");
  tuCiudad.innerText = "Tu ciudad es " + textoCiudad.innerText;

  fn_pintaCiudad(textoCiudad.innerText);
  Toastify({
    text: "Tu ciudad es " + textoCiudad.innerText + " :)",
    className: "alertaFeliz",
    duration: 3000,
  }).showToast();
}








let date = new Date();

// Tuve que poner este objeto para poder formatear la fecha
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};





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



// const container2 = document.querySelector("#container2");
// container2.onmouseover = logMouseOver;
// container2.onmouseout = logMouseOut;

// const container3 = document.querySelector("#container3");
// container3.onmouseover = logMouseOver;
// container3.onmouseout = logMouseOut;

// const container4 = document.querySelector("#container4");
// container4.onmouseover = logMouseOver;
// container4.onmouseout = logMouseOut;

// const container5 = document.querySelector("#container5");
// container5.onmouseover = logMouseOver;
// container5.onmouseout = logMouseOut;

// const container6 = document.querySelector("#container6");
// container6.onmouseover = logMouseOver;
// container6.onmouseout = logMouseOut;

