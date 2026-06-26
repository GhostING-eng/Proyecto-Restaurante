let pedidos = [];

// Simulación
function cargarPedidosIniciales() {
    pedidos.push({
        id: 1,
        cliente: "Juan",
        pedido: "Hamburguesa con papas",
        estado: "Pendiente"
    });

    pedidos.push({
        id: 2,
        cliente: "Maria",
        pedido: "Pizza mediana",
        estado: "Pendiente"
    });

    renderizar();
}

function renderizar() {

    const lista = document.getElementById("listaPedidos");
    lista.innerHTML = "";

    pedidos.forEach((p, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong> Cliente:</strong> ${p.cliente} <br>
            <strong> Pedido:</strong> ${p.pedido} <br>
            <strong> Estado:</strong> ${p.estado} <br><br>

            <button onclick="enProceso(${index})" class="proceso">
                En proceso
            </button>

            <button onclick="terminado(${index})" class="terminado">
                Terminado
            </button>
        `;

        lista.appendChild(li);
    });
}

function enProceso(i) {
    pedidos[i].estado = "En proceso";
    renderizar();
}

function terminado(i) {
    pedidos[i].estado = "Terminado";
    renderizar();
}

cargarPedidosIniciales();