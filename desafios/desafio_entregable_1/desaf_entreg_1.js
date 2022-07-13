/* Desafío Entregable N°1
Ciclos/Iteraciones
Crear un algoritmo utilizando un ciclo
Ejemplo de Plazo Fijo a 30 días
Ingreso por prompt y salida por consola */



let capitalInic

let capitalFin

capitalInic = parseInt(prompt("Por favor ingrese el capital a invertir: "))



for (let tna = 53; tna <= 59; tna++) {

    capitalFin = capitalInic * (1 + tna / 12 / 100).toFixed(3)

    console.log('Si la tasa nominal anual es del ' + tna + '%, su PLAZO FIJO a 30 días generará una renta mensual estimada de $' + (capitalFin - capitalInic))
}