function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "" || pass === "") {
        document.getElementById("msg").innerText = "Completa todos los campos";
        return;
    }

    // login falso 
    if ((user === "admin" || user === "admin@restaurante.com") && pass === "1234") {
        document.getElementById("msg").innerText = "Bienvenido administrador";
        document.getElementById("msg").style.color = "green";
    } else {
        document.getElementById("msg").innerText = "Credenciales incorrectas";
        document.getElementById("msg").style.color = "red";
    }
}