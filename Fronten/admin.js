function mostrarSeccion(seccion){

    document.getElementById("informacion").classList.add("oculto");
    document.getElementById("contacto").classList.add("oculto");
    document.getElementById("pedidos").classList.add("oculto");
    document.getElementById("administracion").classList.add("oculto");

    document.getElementById(seccion).classList.remove("oculto");

}