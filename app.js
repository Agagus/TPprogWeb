//----------------------Formulario--------------





const btn = document.getElementById("switch")
const darkmode = document.getElementById("dark-light-mode")


btn.addEventListener("click",()=> {
  document.body.classList.toggle("dark") //aca si cliqueas cambia la clase a dark (modo oscuro).

 if (document.body.classList.contains("dark")) { // aca si ya contiene la clase dark,cambia el texto y el icono despues de haber hecho click.
  btn.textContent="Modo claro";
  darkmode.src="iconos/sol.png"
 }
else { //aca si ya esta en oscuro cambias a claro denuevo.
  btn.textContent="Modo oscuro"
  darkmode.src ="iconos/luna.png"
}



console.log("dasdasda");


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
