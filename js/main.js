alert("Consulta De Precios!"); //App Para Consultar precios diferenciando el tipo de cliente

function tipoCliente() { // funcion que solicita al usuario su categoria de cliente "minorista o mayorista"
    let cliente = prompt("¿Es usted un cliente Mayorista o Minorista?");
    cliente = cliente.toLowerCase(); //Convierte los datos a minusculas para que siempre coincidan 
    while (cliente !== "mayorista" && cliente !== "minorista") { //bucle que que resolicita los datos que se ingresaron mal
        alert("Tipo De Cliente Invalido Ingrese nuevamente su tipo de cliente")
        cliente = prompt("¿Es usted un cliente Mayorista o Minorista?");
        cliente = cliente.toLowerCase();
    }
    console.log("Cliente:", cliente);
    return cliente;
}
var cliente = tipoCliente();


var producto = prompt("¿Qué producto desea consultar? 'Motorlimp', 'ShampooVerde', 'Revividor'");
producto = producto.toLowerCase();
while (producto !== "motorlimp" && producto !== "shampooverde" && producto !== "revividor") {
    alert("Producto inválido. Por favor, ingrese un producto válido.");
    producto = prompt("¿Qué producto desea consultar? 'Motorlimp', 'ShampooVerde', 'Revividor'");

}

switch (producto) {
    case "motorlimp":
        precio = 1000;
        break;
    case "revividor":
        precio = 1500;
        break;
    case "shampooverde":
        precio = 2000;
        break;
}

console.log("Producto:", producto, "Precio:", precio);

function calcularDescuento() { //funcion que determina el tipo de descuento que obtiene el cliente segun su categoria
    if (cliente === "mayorista") {
        const descuento = 0.7;
        return descuento;
    } else {
        const descuento = 1;
        return descuento;
    }
}

var descuento = calcularDescuento();
console.log("Descuento:", descuento);

alert("El producto: " + producto + " tiene un costo de $" + (precio * descuento) + "\n Gracias por Comprar en Distribuidora Del Sol");
