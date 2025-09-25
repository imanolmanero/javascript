//Eventos para los botones
document.getElementById("btnInicializar").addEventListener("click", inicializar);
document.getElementById("btnVisualizar").addEventListener("click", visualizar);

//Objeto para guardar anotaciones (día -> nota)
let anotaciones = {};

// Guardamos qué día está seleccionado
let diaSeleccionado = null;

// Seleccionamos todos los botones del calendario
const dias = document.querySelectorAll("#calendario button");

dias.forEach(boton => {
    boton.addEventListener("click", () => {
        try {
            diaSeleccionado = boton.getAttribute("dia"); // número del día

            // Quitar selección de los demás
            dias.forEach(d => d.classList.remove("seleccionado"));
            boton.classList.add("seleccionado");

            // Si ya hay nota guardada, mostrarla en el input
            document.getElementById("nota").value = anotaciones[diaSeleccionado] || "";
        } catch (error) {
            alert(error);
        }
    });
});

document.getElementById("nota").addEventListener("keyup", () => {
    try {
        if (!diaSeleccionado) {
            throw new Error("Primero selecciona un día");
        }
        anotaciones[diaSeleccionado] = document.getElementById("nota").value;
    } catch (error) {
        alert(error);
    }
});

function inicializar() {
    try {
        anotaciones = {}; // vaciamos todo
        document.getElementById("nota").value = "";
        alert("Todas las anotaciones se han borrado");
    } catch (error) {
        alert(error);
    }
}

function visualizar() {
    try {
        if (Object.keys(anotaciones).length === 0) {
            throw new Error("No hay anotaciones");
        }

        let mensaje = "Anotaciones:\n\n";
        for (let dia in anotaciones) {
            if (anotaciones[dia].trim() !== "") {
                mensaje += `Día ${dia}: ${anotaciones[dia]}\n`;
            }
        }

        alert(mensaje);
    } catch (error) {
        alert(error);
    }
}

