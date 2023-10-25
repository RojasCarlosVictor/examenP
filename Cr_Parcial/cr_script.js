// Variables para almacenar la puntuación del usuario y la computadora
let puntuacionUsuario = 0;
let puntuacionComputadora = 0;

// Función para determinar el resultado del juego y actualizar la puntuación
function jugar(eleccionUsuario) {
    // Array que contiene las opciones del juego
    const opciones = ["piedra", "papel", "tijera"];
    
    // Genera  elección aleatoria para la computadora
    const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

    // Variable para almacenar el resultado del juego
    let resultado = "";

    // Lógica para determinar el resultado del juego
    if (eleccionUsuario === eleccionComputadora) {
        resultado = "Empate";
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionComputadora === "papel")
    ) {
        resultado = "Ganaste";
        puntuacionUsuario++;
    } else {
        resultado = "Perdiste";
        puntuacionComputadora++;
    }

    // Mostrar el resultado y la puntuación en la interfaz de usuario
    document.getElementById("resultado").textContent = `Elegiste ${eleccionUsuario}. Computadora eligió ${eleccionComputadora}. ${resultado}!`;
    document.getElementById("puntuacion").textContent = `${puntuacionUsuario} - ${puntuacionComputadora}`;
}
