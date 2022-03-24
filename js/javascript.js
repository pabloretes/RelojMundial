let textoEntrada = prompt(
  "Elige tu ciudad: 1 Buenos Aires; 2 Tel Aviv; 3 Bogotá"
);

while (textoEntrada != "ESC") {
  switch (textoEntrada) {
    case "1":
      id_tuCiudad.textContent = "Tu ciudad es Buenos Aires - Argentina";
      textoEntrada = "ESC";
      break;
    case "2":
      id_tuCiudad.textContent = "Tu ciudad es Tel Aviv - Israel";
      textoEntrada = "ESC";
      break;
    case "3":
      id_tuCiudad.textContent = "Tu ciudad es Bogotá - Colombia";
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
const difTel = 5;

let date = new Date();

/* Buenos Aires */
id_hora_bue.textContent = date.toLocaleTimeString();
id_fecha_bue.textContent = date.toLocaleDateString("es-AR", options);

/* Colombia -2 horas de diferencia   */
date.setHours(date.getHours() + difBog);
id_hora_bog.textContent = date.toLocaleTimeString();
id_fecha_bog.textContent = date.toLocaleDateString("es-AR", options);

/* Tel Aviv 5 horas de diferencia    */
date.setHours(date.getHours() + (-difBog + difTel));
id_hora_tel.textContent = date.toLocaleTimeString();
id_fecha_tel.textContent = date.toLocaleDateString("es-AR", options);
