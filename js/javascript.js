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

function fn_cuentaRelojes() {
  let lasCiudades = JSON.parse(sessionStorage.getItem("Ciudades"));
  return lasCiudades.length;
}

function fn_actualizarHora(ciudadSeleccion) {
  // Cantidad de relojes
  let cantidadRelojes = document.getElementById("id_textoCantidadRelojes");
  cantidadRelojes.innerText = "Reloj Mundial posee " + fn_cuentaRelojes() + " Relojes";
  
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

// Evento click <Actualizar Relojes>
document.getElementById("btnUpdate").addEventListener("click", fn_clickActualizar);

function fn_clickActualizar() {
    document.getElementById("btnUpdate").innerHTML = "Todo Actualizado";
    fn_actualizarHora();
}

// Evento click <Seleccionar>
document.getElementById("btnSelect").addEventListener("click", fn_clickSeleccionar);

function fn_clickSeleccionar() {
  let seleccion = document.getElementById("selectCiudades");
  let tuCiudad = document.getElementById("id_tuCiudad");
  tuCiudad.innerText =  "Tu ciudad es " + seleccion.options[seleccion.selectedIndex].text;
  fn_actualizarHora(seleccion.options[seleccion.selectedIndex].text);
}
