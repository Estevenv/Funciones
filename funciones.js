//1. recibe el ancho y el alto de un rectángulo y calcula su superficie.
function calcularSuperficie(ancho, alto) {
    let superficie = ancho * alto;
    console.log("La superficie es: " + superficie);
}
calcularSuperficie(5, 10);

//2. para recibir la velocidad en Kilómetros y mostrarlas en metros y millas.
function metros(kilometros) {
    return kilometros * 1000;
}

function millas(kilometros) {
    return kilometros * 0.62; 
}

function mostrarVelocidad(km) {
    let metros = metros(km);
    let millas = millas(km);
    
    console.log(km + " kilómetros son " + metros + " metros y " + millas + " millas.");
}
mostrarVelocidad(120);

//3.  calcula la circunferencia de un círculo

function calcularCircunferencia(radio) {
    let circunferencia = 2 * Math.PI * radio;
    return circunferencia;
}

function calcularCubo(numero) {
    let cubo = numero * numero * numero;
    return cubo;
}

console.log("Circunferencia: " + calcularCircunferencia(5));
console.log("El cubo de 3 es: " + calcularCubo(3));

//4. parámetro un nombre y muéstralo en el navegador
function nombre(nombre) {
 
    if (!isNaN(nombre)) {
        document.write("Ingrese un nombre válido");
    } else {
        document.write("Hola " + nombre);
    }
}

let nombreIngresado = prompt("Escribe tu nombre:");
nombre(nombreIngresado);

//5.	Muestra todas las operaciones básicas

function mostrarOperaciones() {
    let num1 = prompt("Ingresa el primer número:");
    let num2 = prompt("Ingresa el segundo número:");
    let n1 = Number(num1);
    let n2 = Number(num2);
    let suma = n1 + n2;
    let resta = n1 - n2;
    let multiplicacion = n1 * n2;
    let division = n1 / n2;

    alert("Resultados:\n" + 
          "Suma: " + suma + "\n" + 
          "Resta: " + resta + "\n" + 
          "Multiplicación: " + multiplicacion + "\n" + 
          "División: " + division);
}

mostrarOperaciones();
