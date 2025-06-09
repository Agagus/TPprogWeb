//----------------------Formulario--------------
  function cargaForm() {
    const mail = document.getElementById('mail').value.trim();
    const consulta = document.getElementById('consulta').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar email
    if (!emailRegex.test(mail)) {
      alert("Ingresá un mail válido.");
      return false;
    }

    // Validar consulta
    if (consulta.length <10) {
      alert("Por favor escribí una consulta de al menos 10 caracteres.");
      return false;
    }

    alert("Formulario enviado correctamente.");
    return true; // Permite el envío
  }




const btn = document.getElementById("switch")
const darkmode = document.getElementById("dark-light-mode")


btn.addEventListener("click",()=> {
  document.body.classList.toggle("dark") //aca si cliqueas cambia la clase a dark (modo oscuro).
})






//----------------------MENU DESPLEGABLE--------------

let menu = document.getElementById("menu");
let menuDesp = document.getElementById("menu-desp");
let bool = true;

menu.addEventListener("click", (e) => {
  e.preventDefault();
  if (bool) {
    menuDesp.style.display = "flex";
    menuDesp.style.transition = "transform";
    menuDesp.style.transitionDuration = "0.6s";
    bool = false;
  } else {
    menuDesp.style.display = "none";
    bool = true;
  }
});


////----------------------Agrandar imagenes de la galeria--------------
const imagenes = document.querySelectorAll(".img-producto");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");


imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target != imagenesLight) {
    contenedorLight.classList.toggle("show");
    imagenesLight.classList.toggle("mostrarImagen");
   
  }
});

const aparecerImagen = (imagen) => {
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLight.classList.toggle("mostrarImagen");
 
};







