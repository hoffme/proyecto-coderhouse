function activacionNavegacion() {
    var elemento = document.getElementById("navegacion");
    if (elemento.classList.contains('deplegada')) {
        elemento.classList.remove('deplegada');
    } else {
        elemento.classList.add('deplegada');
    }
}