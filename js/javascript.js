const difBog = -2;
const difLim = -2;
const difTel = 6;
const difVig = 5;

// Objeto ciudades
const miArrayCiudades = [
  { idCiudad: 1, ciudad: "Tel Aviv", pais: "Israel" },
  { idCiudad: 2, ciudad: "Buenos Aires", pais: "Argentina" },
  { idCiudad: 3, ciudad: "Bogotá", pais: "Colombia" },
  { idCiudad: 4, ciudad: "Lima", pais: "Peru" },
  { idCiudad: 5, ciudad: "Vigo", pais: "España" },
];

//Uso de JSON y Storage (me servía Session Storage)
const jsonCiudades = JSON.stringify(miArrayCiudades);
sessionStorage.setItem("Ciudades", jsonCiudades);


let date = new Date();

// Tuve que poner este objeto para poder formatear la fecha
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

alert("Bienvenido a Reloj Mundial. A continuación elije tu ciudad");
let textoEntrada = prompt(
  "Elige tu ciudad --> | 1 Tel Aviv | 2 Buenos Aires | 3 Bogotá | 4 Lima | 5 Vigo |"
);

if (textoEntrada <= miArrayCiudades.length) {
  let tuCiudad = document.getElementById("id_tuCiudad");
  tuCiudad.innerText = devuelveCiudad(textoEntrada);
  fn_actualizarHora();
  textoEntrada = "ESC";
} 
else {
  alert("Error");
  textoEntrada = "ESC";
}

// Busqueda de la ciudad
function devuelveCiudad(idCiudad) {
  for (let laCiudad of miArrayCiudades) {
    if (idCiudad == laCiudad.idCiudad) {

      //Uso de JSON y Storage (Session Storage)
      const jsonLaCiudad = JSON.stringify(laCiudad);
      sessionStorage.setItem("laCiudad", jsonLaCiudad);
      return "Tu ciudad es " + laCiudad.ciudad + " - " + laCiudad.pais;
    }
 }
}





id_textoCantidadRelojes.textContent =
  "Reloj Mundial posee " + miArrayCiudades.length + " Relojes";




function fn_actualizarHora() {
  /* Tel Aviv 6 horas de diferencia    */
  date = new Date();
  date.setHours(date.getHours() + difTel);

  let hora1 = document.getElementById("id_hora1");
  hora1.innerText = date.toLocaleTimeString();

  let fecha1 = document.getElementById("id_fecha1");
  fecha1.innerText = date.toLocaleDateString("es-AR", options);

  /* Buenos Aires */
  date = new Date();
  let hora2 = document.getElementById("id_hora2");
  hora2.innerText = date.toLocaleTimeString();

  let fecha2 = document.getElementById("id_fecha2");
  fecha2.innerText = date.toLocaleDateString("es-AR", options);

  /* Colombia -2 horas de diferencia   */
  date = new Date();
  date.setHours(date.getHours() + difBog);

  let hora3 = document.getElementById("id_hora3");
  hora3.innerText = date.toLocaleTimeString();

  let fecha3 = document.getElementById("id_fecha3");
  fecha3.innerText = date.toLocaleDateString("es-AR", options);

  /* Perú -2 horas de diferencia   */
  date = new Date();
  date.setHours(date.getHours() + difLim);

  let hora4 = document.getElementById("id_hora4");
  hora4.innerText = date.toLocaleTimeString();

  let fecha4 = document.getElementById("id_fecha4");
  fecha4.innerText = date.toLocaleDateString("es-AR", options);

  /* Vigo 5 horas de diferencia    */
  date = new Date();
  date.setHours(date.getHours() + difVig);

  let hora5 = document.getElementById("id_hora5");
  hora5.innerText = date.toLocaleTimeString();

  let fecha5 = document.getElementById("id_fecha5");
  fecha5.innerText = date.toLocaleDateString("es-AR", options);
}

// Evento click 
document.getElementById("btnUpdate").addEventListener("click", fn_clickActualizar);

function fn_clickActualizar() {
    document.getElementById("btnUpdate").innerHTML = "Todo Actualizado";
    fn_actualizarHora();
}


