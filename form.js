let datosFormulario = JSON.parse(localStorage.getItem("datosFormulario")) || [];

function cargaForm() {
  const mail = document.getElementById("mail").value.trim();
  const consulta = document.getElementById("consulta").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar email
  if (!emailRegex.test(mail)) {
    alert("Ingresá un mail válido.");
    return false;
  }

  // Validar consulta
  if (consulta.length < 10) {
    alert("Por favor escribí una consulta de al menos 10 caracteres.");
    return false;
  }

  console.log(datosFormulario, "local");
  datosFormulario.push(mail);
  datosFormulario.push(consulta);
  localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));

  console.log(datosFormulario);
  alert("Formulario enviado correctamente.");
  return true; // Permite el envío
}

const contConsultas = document.getElementById("contenedor-cons");
if (datosFormulario.length > 0) {
  for (let i = 0; i < datosFormulario.length; i += 2) {
    let mail = document.createElement("p");
    let consul = document.createElement("p");
    let linea = document.createElement("hr");

    mail.textContent = datosFormulario[i];
    consul.textContent = datosFormulario[i + 1];

    mail.classList.add("item-cons");
    consul.classList.add("texto-consulta")
    contConsultas.appendChild(mail);
    contConsultas.appendChild(consul);
    contConsultas.appendChild(linea);
  }
}
