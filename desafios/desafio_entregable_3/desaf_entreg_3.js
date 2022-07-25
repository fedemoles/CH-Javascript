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