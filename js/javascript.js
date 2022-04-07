alert("Bienvenido a Reloj Mundial. A continuación elije tu ciudad");
let textoEntrada = prompt(
  "Elige tu ciudad: 1 Buenos Aires | 2 Tel Aviv | 3 Bogotá | 4 Lima"
);

// Aquí utilizo arrays para la entrega del 07/04
const miArrayCiudades = [{ idCiudad: 1, ciudad: "Buenos Aires" },
                  { idCiudad: 2,  ciudad: "Tel Aviv" },
                  { idCiudad: 3,  ciudad: "Bogotá" },
                  { idCiudad: 4,  ciudad: "Lima" }];

function devuelveCiudad (idCiudad){
  
  for (let laCiudad of miArrayCiudades){
    if (idCiudad == laCiudad.idCiudad) {
      return ("Tu ciudad es " + laCiudad.ciudad);
    }
  }
}

id_textoCantidadRelojes.textContent = "Reloj Mundial posee " + miArrayCiudades.length + " Relojes";
while (textoEntrada != "ESC") {
  switch (textoEntrada) {
    case "1":
      id_tuCiudad.textContent = devuelveCiudad(textoEntrada);
      textoEntrada = "ESC";
      break;
    case "2":
      id_tuCiudad.textContent = devuelveCiudad(textoEntrada);
      textoEntrada = "ESC";
      break;
    case "3":
      id_tuCiudad.textContent = devuelveCiudad(textoEntrada);
      textoEntrada = "ESC";
      break;
    case "4":
        id_tuCiudad.textContent = devuelveCiudad(textoEntrada);
        textoEntrada = "ESC";
        break;
    default:
      alert("Error");
      textoEntrada = "ESC";
      break;
  }
}

// Tuve que poner esta lista delimitada por comas para poder formatear la fecha
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};


const difBog = -2;
const difLim = -2;
const difTel = 6;

let date = new Date();

/* Buenos Aires */
id_hora_bue.textContent = date.toLocaleTimeString();
id_fecha_bue.textContent = date.toLocaleDateString("es-AR", options);

/* Colombia -2 horas de diferencia   */
date.setHours(date.getHours() + difBog);
id_hora_bog.textContent = date.toLocaleTimeString();
id_fecha_bog.textContent = date.toLocaleDateString("es-AR", options);

/* Perú -2 horas de diferencia   */
id_hora_lim.textContent = date.toLocaleTimeString();
id_fecha_lim.textContent = date.toLocaleDateString("es-AR", options);

/* Tel Aviv 5 horas de diferencia    */
date.setHours(date.getHours() + (-difBog + difTel));
id_hora_tel.textContent = date.toLocaleTimeString();
id_fecha_tel.textContent = date.toLocaleDateString("es-AR", options);
