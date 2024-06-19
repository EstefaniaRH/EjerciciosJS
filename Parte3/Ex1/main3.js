var infoBox = document.getElementById('info-box');

// Función para manejar el movimiento del ratón
function handleMouseMove(event) {
    var pageX = event.pageX;
    var pageY = event.pageY;
    infoBox.innerHTML = 
        'RATÓN <br>' +
        'Página: [' + pageX + ', ' + pageY + ']';
}

// Función para manejar la presión de una tecla
function handleKeyDown(event) {
    var key = event.key;
    infoBox.innerHTML = 
        'TECLA PRESIONADA <br>' +
        'Tecla: '+key+'';
}

// Agregar los event listeners para el movimiento del ratón y la presión de teclas
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('keydown', handleKeyDown);