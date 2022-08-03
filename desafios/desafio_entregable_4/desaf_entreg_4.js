// let listadoApellido = [
//     "Gomez", "Flores", "Martinez", "Fernandez", "Romero", "Sanchez", "Solares", "Cusicanqui", "Septimo", "Cicciti",
// ];

// let apellido = prompt(
//     "Bienvenido, ha ingresado en credito online, por favor ingrese a continuación su apellido para consultar el estado de la solicitud de su crédito 😎 o digite ESC para salir"
// );

// if (apellido != "ESC") {
//     listadoApellido.push(apellido);
//     if (listadoApellido.length > 10) {
//         let solicitud = listadoApellido.slice(0, 10);

//         for (let i = 0; i < 10; i++) {
//             alert(`La posición ${i} corresponde a ${solicitud[i]}`);
//         }
//     }
// } else {
//     alert("En caso de querer nuevamente realizar su consulta presione F5 para actualizar");
// }


class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    }

    sumarIva() {
        return this.precio * 1.21;
    }

    Vender() {
        this.disponible = false;
    }

    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }
}

var arrayProductos = [];
do {
    var comprobacion = prompt('Ingrese un nombre del producto o fin para terminar de agregar');
    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {
        break;
    } else {
        nombreP = comprobacion;
        var precioP = prompt('Ingrese el precio del producto');
        var detalleP = prompt('Ingrese el detalle del producto');
        var cantidadP = prompt('Ingrese la cantidad comprada del producto');
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")

console.log(arrayProductos);

for (let producto of arrayProductos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
    <p> Precio $: ${producto.precio}</p>
    <p> Cantidad: ${producto.cantidad}</p>
    <p> Detalle: ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
}

// PRODUCTOS CON POCO STOCK - MENOS DE 5 PRODUCTOS

var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 5);
document.write("<h3> Lista de Productos con poco Stock (menos de 5 unidades): </h3>");
for (let producto of pocoStock) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
    <p> Cantidad: ${producto.cantidad}</p>
    <p> Detalle: ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
}

// PRODUCTOS SIN STOCK

var sinStock = arrayProductos.filter(producto => producto.cantidad == 0 || producto.disponible == false);
console.log(sinStock);
document.write("<h3> Lista de Productos sin Stock (cantidad = 0 o disponible = false): </h3>");

for (var producto of sinStock) {

    document.write("<h3> Lista de Productos con poco Stock (menos de 5 unidades): </h3>");
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nombre: ${producto.nombre}</h3>
    <p> Cantidad: ${producto.cantidad}</p>
    <p> Detalle: ${producto.detalle}</p>`;
    document.body.appendChild(contenedor);
}