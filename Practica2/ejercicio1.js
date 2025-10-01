// Seleccionamos los elementos del DOM
const inputProducto = document.getElementById("producto");
const btnAñadir = document.getElementById("btnAñadir");
const btnResetear = document.getElementById("btnReset");
const listaProductos = document.getElementById("listaProductos");

// Cargar lista desde localStorage al iniciar
document.addEventListener("DOMContentLoaded", cargarLista);

// ---- FUNCIONES ----

// 1. Añadir producto
btnAñadir.addEventListener("click", () => {
    const producto = inputProducto.value.trim();
    if (producto === "") return; // No permite productos vacíos

    agregarProducto(producto);
    guardarEnLocalStorage(producto);
    inputProducto.value = ""; // limpiar input
});

// 2. Resetear lista completa
btnResetear.addEventListener("click", () => {
    listaProductos.innerHTML = ""; // vaciar lista visual
    localStorage.removeItem("listaCompra"); // limpiar almacenamiento
});

// Función para agregar producto a la lista (HTML)
function agregarProducto(nombre) {
    const li = document.createElement("li");
    li.textContent = nombre;

    // Evento: click simple → editar (poner en rojo)
    li.addEventListener("click", () => {
        li.style.color = (li.style.color === "red") ? "black" : "red";
    });

    // Evento: doble click → eliminar producto
    li.addEventListener("dblclick", () => {
        li.remove();
        eliminarDeLocalStorage(nombre);
    });

    listaProductos.appendChild(li);
}

// Guardar en localStorage
function guardarEnLocalStorage(producto) {
    let lista = JSON.parse(localStorage.getItem("listaCompra")) || [];
    lista.push(producto);
    localStorage.setItem("listaCompra", JSON.stringify(lista));
}

// Eliminar un producto del localStorage
function eliminarDeLocalStorage(producto) {
    let lista = JSON.parse(localStorage.getItem("listaCompra")) || [];
    lista = lista.filter(item => item !== producto);
    localStorage.setItem("listaCompra", JSON.stringify(lista));
}

// Cargar lista desde localStorage al iniciar
function cargarLista() {
    let lista = JSON.parse(localStorage.getItem("listaCompra")) || [];
    lista.forEach(prod => agregarProducto(prod));
}
