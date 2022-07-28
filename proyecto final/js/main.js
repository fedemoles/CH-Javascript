// VARIABLES DECLARADAS CREDITO //

let listadoApellido = [
    "Gomez", "Flores", "Martinez", "Fernandez", "Romero", "Sanchez", "Solares", "Cusicanqui", "Septimo", "Cicciti",
];

let apellido = prompt(
    "Bienvenido, ha ingresado en credito online, por favor ingrese a continuación su apellido para consultar el estado de la solicitud de su crédito 😎 o digite ESC para salir"
);

if (apellido != "ESC") {
    listadoApellido.push(apellido);
    if (listadoApellido.length > 10) {
        let solicitud = listadoApellido.slice(0, 10);

        for (let i = 0; i < 10; i++) {
            alert(`La posición ${i} corresponde a ${solicitud[i]}`);
        }
    }
} else {
    alert("En caso de querer nuevamente realizar su consulta presione F5 para actualizar");
}


// VARIABLES DECLARADAS CARRITO//
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#listaCarrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciarCarrito');
const listadoGeneral = document.querySelector('#listadoGeneral');

//FUNCION CONSTRUCTORA DE PRODUCTOS//
function Producto(id, imagen, titulo, descripcion, precio) {
    this.id = id;
    this.imagen = imagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = 1;
    this.subtotal = 0;
}

//ARRAYS PARA HTML//
const microprocesador = [];
const placaVideo = [];
const motherboards = [];
const memoriasRam = [];
const discosSSD = [];
const listaProductos = []

