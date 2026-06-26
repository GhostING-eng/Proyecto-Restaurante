function agregarPedido() {

    const cliente = document.getElementById("cliente").value;
    const pedido = document.getElementById("pedido").value;

    if (cliente === "" || pedido === "") {
        alert("Completa todos los campos");
        return;
    }

    const lista = document.getElementById("listaPedidos");

    const item = document.createElement("li");

    item.innerHTML = `
        <strong> Cliente:</strong> ${cliente} <br>
        <strong> Pedido:</strong> ${pedido}
    `;

    lista.appendChild(item);

    document.getElementById("cliente").value = "";
    document.getElementById("pedido").value = "";
}