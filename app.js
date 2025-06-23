//----------------------Formulario--------------
/*let datosFormulario = JSON.parse(localStorage.getItem("datosFormulario")) || [];

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
  
  }
}
*/
//--------------------MODO OSCURO--------------------

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
    menuDesp.style.transition;
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

//Logica carrito
const favheart = document.querySelectorAll(".fav");

const valorTotal = document.querySelector(".total");
let total = 0;

favheart.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    const tarjeta = e.target.closest(".card-productos");

    const descripcion = tarjeta.querySelector(".card-descripcion").textContent;
    const precioTexto = tarjeta.querySelector(".precio").textContent;
    const foto = tarjeta.querySelector(".img-producto").src;
    const precioaNumero = parseInt(precioTexto.replace(/\D/g, ""));

    console.log("Descripción:", descripcion);
    console.log("Precio:", precioTexto);

    let carrito = document.querySelector(".icono-carrito");

    const elements = document.createElement("li");
    elements.setAttribute("data-precio", precioaNumero);
    elements.classList.add("agregados");

    elements.innerHTML = `
    <div class ="precio-descripcion">
        <i class="fa-solid fa-xmark eliminar" data-precio="${precioaNumero}"></i>
        <img src = ${foto} class "foto-producto">
        <p>${descripcion}</p>
        <p class="precio-producto">${precioTexto}</p>
         
        </div>
    `

;

    carrito.appendChild(elements);

    total += precioaNumero;
    valorTotal.textContent = `$${total.toLocaleString("es-AR")}`;

    elements.querySelector(".eliminar").addEventListener("click", () => {
      const precioProducto = parseInt(elements.getAttribute("data-precio"));
      total -= precioProducto;
      valorTotal.textContent = `$${total.toLocaleString("es-AR")}`;
      elements.remove();
    });
  });
});

/*
const iconCarrito = document.querySelector(".icono-carrito")
const agregados= document.querySelector(".agregados")
iconCarrito.addEventListener ("click",() => {
 


})*/
