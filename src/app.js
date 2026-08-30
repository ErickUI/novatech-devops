let listaPedidos = [
    { id: 1, cliente: "Erick", producto: "Laptop Nova", cantidad: 1, precio: 2500.00 },
    { id: 2, cliente: "joel perez", producto: "Teclado Mecánico", cantidad: 2, precio: 150.00 },
    { id: 3, cliente: "javier", producto: "Mouse Inalámbrico", cantidad: 3, precio: 80.00 }
];

function calcularTotal(cantidad, precio) {
    return cantidad * precio;
}

function renderizarTabla() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    if (!cuerpoTabla) return; 

    cuerpoTabla.innerHTML = '';

    listaPedidos.forEach(pedido => {
        const total = calcularTotal(pedido.cantidad, pedido.precio);
        
        const fila = `
            <tr>
                <td>${pedido.id}</td>
                <td>${pedido.cliente}</td>
                <td>${pedido.producto}</td>
                <td>${pedido.cantidad}</td>
                <td>S/ ${pedido.precio.toFixed(2)}</td>
                <td>S/ ${total.toFixed(2)}</td>
                <td>
                    <button class="btn-editar" onclick="alert('Error')">✎</button>
                    <button class="btn-eliminar" onclick="eliminarPedido(${pedido.id})">🗑</button>
                </td>
            </tr>
        `;
        cuerpoTabla.innerHTML += fila;
    });
}

function agregarPedidoMock() {
    const nuevoId = listaPedidos.length > 0 ? listaPedidos[listaPedidos.length - 1].id + 1 : 1;
    listaPedidos.push({
        id: nuevoId,
        cliente: "Samuel",
        producto: "Audifonos Gamer",
        cantidad: 1,
        precio: 100.00
    });
    renderizarTabla();
}

function eliminarPedido(id) {
    listaPedidos = listaPedidos.filter(pedido => pedido.id !== id);
    renderizarTabla();
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', renderizarTabla);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calcularTotal, renderizarTabla };
}