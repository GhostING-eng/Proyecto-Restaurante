function loginUsuario() {
    const user = document.getElementById("user").value;
    const cedula = document.getElementById("cedula").value;

    if (user === "" || cedula === "") {
        document.getElementById("msg").innerText = "Completa todos los campos";
        return;
    }

    // REDIRECCIÓN A OTRA PÁGINA
    window.location.href = "home.html";
}