function simulPrest(monto, tiempo) {

    let tasa1 = 0.04
    let tasa2 = 0.05
    let tasa3 = 0.06
    let cuota

    while (tipoCred != '1' && tipoCred != '2' && tipoCred != '3') {
        alert('Usted ha ingresado un tipo de credito no valido, por favor ingrese su opción nuevamente')
        tipoCred = prompt("Por favor ingrese el tipo de credito a solicitar \ncredito personal (1)\ncredito prendario (2)\ncredito hipotecario (3) ")

    }

    if (tipoCred == 'CRED.PERS') {
        cuota = ((monto * tasa3) / (1 - ((1 + tasa3) ** (-tiempo)))).toFixed(2)
    } else if (tipoCred == 'CRED.PREND') {
        cuota = ((monto * tasa2) / (1 - ((1 + tasa2) ** (-tiempo)))).toFixed(2)
    } else {
        cuota = ((monto * tasa1) / (1 - ((1 + tasa1) ** (-tiempo)))).toFixed(2)
    }

    return cuota

}

let tipoCred = prompt("Por favor ingrese el tipo de credito a solicitar \ncredito personal(1)\ncredito prendario(2)\ncredito hipotecario(3) ")

let monto = prompt('Ingrese el monto solicitado')

let tiempo = prompt('Ingrese la cantidad de cuotas del prestamo solicitado')

simulPrest(monto, tiempo)

alert('usted va a abonar por mes$ ' + simulPrest(monto, tiempo))