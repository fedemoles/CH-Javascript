1//Creo la clase producto
class Producto {
    constructor(producto, marca, cantidad) {
        this.producto = producto;
        this.marca = marca;
        this.cantidad = cantidad;
    }
}

//Defino todas las VARIABLES GLOBALES que necesito para trabajar con el DOM

let arrayProductos = [];
let miFormulario = document.querySelector("#formulario");
let inputProducto = document.querySelector("#iProducto");

let productoI = formulario.children[1].value;
let marcaI = formulario.children[3].value;
let cantidadI = formulario.children[5].value;

let contenedor = document.querySelector("#productoIngresado")
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

// Defino Los EVENTOS de ambos botones

miFormulario.addEventListener("submit", agregarProductos);
btnMostrar.addEventListener('click', MostrarTodosProductos);

// Pongo en Focus el primer input

inputProducto.focus();

// FUNCIONES

// FUNCION PARA COMPROBAR EL INGRESO DE DATOS EN INPUTS

function validarForm() {
    productoI = formulario.children[1].value;
    marcaI = formulario.children[3].value;
    cantidadI = formulario.children[5].value;
    console.log(productoI);
    console.log(marcaI);
    console.log(cantidadI);

    if (productoI == '' || marcaI == '' || cantidadI == '') {
        alert('ERROR - Por favor complete todos los campos para continuar');
        inputProducto.focus();
        bandera = false;
    } else {
        bandera = true;
    }
}
// FUNCION PARA AGREGAR ALUMINOS AL ARRAY DE ALUMNOS

function agregarProductos(e) {
    e.preventDefault();
    validarForm(); //valido que esten bien Los datos del formulario  
    if (bandera == true) {
        let opcion = confirm("Esta seguro que desea agregar este producto?");
        if (opcion = true) {
            let formulario = e.target
            arrayProductos.push(new Producto(productoI, marcaI, cantidadI));
        } else {
            alert('No se agregara el producto');
        }

        formulario.children[1].value = '';
        formulario.children[3].value = '';
        formulario.children[5].value = '';
        contenedor.innerHTML = '';
        AgregarAlDom();
        inputProducto.focus();
    } else {
        inputProducto.focus();
    }
}

// funcion para Mostrar en DOM el ultimo alumno ingresado

function AgregarAlDom() {
    contenedor.innerHTML = `<h3> Último producto ingresado:</h3>
        <p><strong> Producto:</strong> ${productoI} </p>
        <p><strong> Marca:</strong> ${marcaI} </p>  
        <p><strong> Cantidad:</strong> ${cantidadI} </p><hr>`;
}
// funcion para mostrar proceduralmente todos los alumnos en un div en DOM

function MostrarTodosProductos(e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = '<h3> Listado de todos los productos:</h3>';
    for (const producto of arrayProductos) {

        displayTodos.innerHTML += `

<p><strong> Producto:</strong> ${producto.producto}</p>
<p><strong> Marca:</strong> ${producto.marca} </p> 
<p><strong> Cantidad:</strong> ${producto.cantidad}</p><hr>`;
    }
}