function mostrarSeccion(seccion){

    document.getElementById("informacion").classList.add("oculto");
    document.getElementById("contacto").classList.add("oculto");
    document.getElementById("menu").classList.add("oculto");

    document.getElementById(seccion).classList.remove("oculto");
}