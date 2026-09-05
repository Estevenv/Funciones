//1. Suma de los N números naturales
function sumarNaturales() {
    let limite = prompt("Ingresa el número límite:");
    let N = Number(limite);
    let suma = 0;

    for (let i = 1; i <= N; i++) {
        suma = suma + i;
    }

    alert("La suma de los números hasta el " + N + " es: " + suma);
}
//2. Promedio de notas de un estudiante

function calcularPromedioEstudiante() {
    let nombre = prompt("Nombre del estudiante:");
    let cantidadNotas = prompt("¿Cuántas notas vas a ingresar?");
    let N = Number(cantidadNotas);
    let sumaNotas = 0;

    for (let i = 1; i <= N; i++) {
        let nota = prompt("Ingresa la nota " + i + ":");
        sumaNotas = sumaNotas + Number(nota);
    }

    let promedio = sumaNotas / N;

    if (promedio >= 3) {
        alert("El estudiante " + nombre + " APRUEBA con un promedio de " + promedio);
    } else {
        alert("El estudiante " + nombre + " REPRUEBA con un promedio de " + promedio);
    }
}
//3. Ingresar números hasta escribir "FIN"
function contarHastaFin() {
    let suma = 0;
    let cantidad = 0;
    let continuar = true;

    while (continuar) {
        let entrada = prompt("Ingresa un número entero (o escribe FIN para terminar):");

        if (entrada === "FIN" || entrada === "fin") {
            continuar = false; // Rompe el ciclo
        } else {
            suma = suma + Number(entrada);
            cantidad = cantidad + 1; // Cuenta el número ingresado
        }
    }

    alert("Cantidad de números ingresados: " + cantidad + "\nSuma total: " + suma);
}
// 4. Tabla de multiplicar hasta el 30

function tablaHastaTreinta() {
    let numero = prompt("¿De qué número quieres la tabla hasta el 30?");
    let n = Number(numero);
    
    console.log("Tabla del " + n + ":");
    for (let i = 1; i <= 30; i++) {
        let resultado = n * i;
        console.log(n + " x " + i + " = " + resultado);
    }
}
// 5. Tabla de multiplicar de forma descendente

function tablaDescendente() {
    let numero = prompt("Ingresa un número para su tabla descendente (del 10 al 1):");
    let n = Number(numero);

    console.log("Tabla descendente del " + n + ":");
    for (let i = 10; i >= 1; i--) {
        let resultado = n * i;
        console.log(n + " x " + i + " = " + resultado);
    }
}
//6. Conteo del 1 al 30 con intervalos (De menor a mayor)
function contarConIntervalo() {
    let numero = prompt("Ingresa el intervalo para contar del 1 al 30:");
    let intervalo = Number(numero);

    console.log("Contando de " + intervalo + " en " + intervalo + ":");
    for (let i = 1; i <= 30; i = i + intervalo) {
        console.log(i);
    }
}
//7. Conteo del 1 al 30 con intervalos (De mayor a menor)
function contarRegresivoConIntervalo() {
    let numero = prompt("Ingresa el intervalo para contar regresivo del 30 al 1:");
    let intervalo = Number(numero);

    console.log("Conteo regresivo:");
    for (let i = 30; i >= 1; i = i - intervalo) {
        console.log(i);
    }
}
//8.  Edades de 10 estudiantes
function clasificarEdades() {
    let mayores = 0;
    let menores = 0;

    for (let i = 1; i <= 10; i++) {
        let edadInput = prompt("Ingresa la edad del estudiante " + i + ":");
        let edad = Number(edadInput);

        if (edad >= 18) {
            mayores = mayores + 1;
        } else {
            menores = menores + 1;
        }
    }

    alert("Resultado de 10 estudiantes:\nMayores de edad: " + mayores + "\nMenores de edad: " + menores);
}
//9. Juego de adivinar el número aleatorio
function juegoAdivinar() {
    let numeroSecreto = Math.floor(Math.random() * 10);
    let acertó = false;

    alert("He pensado un número entre 0 y 9. Tienes 3 intentos para adivinarlo.");

    for (let intento = 1; intento <= 30; intento++) {
        if (intento > 3) {
            break; 
        }

        let suposicion = prompt("Intento " + intento + ". Digita tu número:");
        let numeroUsuario = Number(suposicion);

        if (numeroUsuario === numeroSecreto) {
            alert("¡Felicidades! Acertaste el número.");
            acertó = true;
            break; 
        } else {
            alert("Número incorrecto.");
        }
    }

    if (acertó === false) {
        alert("Te quedaste sin intentos. El número era el: " + numeroSecreto);
    }
}