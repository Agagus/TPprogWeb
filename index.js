const btn = document.querySelector(".btn");
const body = document.body;
const txt=document.querySelector(".lorem")



btn.addEventListener("click", () => {
    const modoNocturno = body.classList.toggle("modo-modoNocturno");

    if (modoNocturno) {
        btn.textContent = "Cambiar a modo claro";
        btn.classList.add("modoNocturno");
        body.style.background="#000"
        txt.style.color="#fff"

    } else {
        btn.textContent = "Cambiar a modo oscuro";
        btn.classList.remove("modoNocturno");
        body.style.background="#fff"
        txt.style.color="#000"


    }
});
