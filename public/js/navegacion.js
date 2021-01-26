function activacionNavegacion() {
    var elemento = document.getElementById("navegacion");
    if (elemento.classList.contains('navegacion-abierta')) {
        elemento.classList.remove('navegacion-abierta');
    } else {
        elemento.classList.add('navegacion-abierta');
    }
}