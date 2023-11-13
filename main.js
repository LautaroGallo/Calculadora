// Funciones para realizar cada operación
var operaciones = {
    suma: function (num1, num2) { return num1 + num2; },
    resta: function (num1, num2) { return num1 - num2; },
    multiplicacion: function (num1, num2) { return num1 * num2; },
    division: function (num1, num2) { return num1 / num2; }
};

// Solicitar al usuario que ingrese el primer número
var numero1 = parseFloat(prompt("Ingrese el primer número:"));

// Solicitar al usuario que ingrese el segundo número
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));

// Crear un array con las operaciones disponibles
var operacionesDisponibles = Object.keys(operaciones);

// Solicitar al usuario que elija la operación utilizando un filtro
var operacionElegida = prompt("Seleccione la operación:\n" + operacionesDisponibles.join('\n'));

// Filtrar las operaciones disponibles para validar la elección del usuario
if (!operacionesDisponibles.includes(operacionElegida)) {
    alert("Operación no válida");
} else {
    // Realizar la operación seleccionada
    var resultado = operaciones[operacionElegida](numero1, numero2);

    // Construir el mensaje a mostrar en el alert
    var mensaje = "Resultado: " + resultado;

    // Mostrar el resultado mediante alert
    alert(mensaje);
}
