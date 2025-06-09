//----------------------Formulario--------------












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
