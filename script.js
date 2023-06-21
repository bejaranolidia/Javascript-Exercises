// Necesitamos un programa que pida un nombre y un apellido con los siguientes mensajes respectivamente:

// ¿Cuál es tu nombre?.
// ¿Cuál es tu apellido?.

// Con esta información, el programa deberá mostrar el siguiente mensaje: Hola {nombre} {apellido}, bienvenida a Ada

// let nombre = prompt('ingrese su nombre')
// let apellido = prompt('ingrese su apellido')

// alert (`Hola ${nombre} ${apellido}, bienvenida a Ada`)


// Necesitamos un programa para una heladería que permita ingresar tres gustos de helado con los siguientes mensajes respectivamente:

// ¿Cuál es el primer gusto?.
// ¿Cuál es el segundo gusto?
// ¿Cuál es el tercer gusto?.
// Con esta información, el programa deberá mostrar el siguiente mensaje: Aquí tiene su helado de {gusto1}, {gusto2} y {gusto3}

// let gusto1 = prompt('ingrese el primer gusto')
// let gusto2 = prompt('ingrese el segundo gusto')
// let gusto3 = prompt('ingrese el tercer gusto')

// alert (`Aqui tiene su helado de ${gusto1}, ${gusto2} y ${gusto3}`)


                    // Ejercicio 3: Datos personales
// Necesitamos un programa que permita ingresar nombre, apellido, edad, nacionalidad y número de documento con los siguientes mensajes respectivamente:

// ¿Cuál es tu nombre?.
// ¿Cuál es tu apellido?.
// ¿Cuál es tu edad?
// ¿Cuál es tu nacionalidad?
// ¿Cuál es tu número de documento?
// Con esta información, el programa deberá mostrar el siguiente mensaje: El nuevo perfil fue ingresado al sistema: nombre: {nombre}, apellido: {apellido}, edad: {edad}, nacionalidad: {nacionalidad}, número de documento: {dni}


// let nombre = prompt('¿Cuál es tu nombre?')
// let apellido = prompt('¿Cuál es tu apellido?')
// let edad = prompt('¿Cuál es tu edad?')
// let nacionalidad = prompt('¿Cuál es tu nacionalidad?')
// let documento = prompt('¿Cuál es tu documento?')

// alert (`El nuevo perfil fue ingresado al sistema: nombre: ${nombre}, Apellido: ${apellido}, Edad: ${edad}, Nacionalidad: ${nacionalidad}, DNI: ${documento}`)

// Ejercicio 1: Sumar
// Definí una función sumar que reciba como argumentos dos números y devuelva la suma de ellos:

// const sumar = (num1, num2) => {
//     return Number(num1 + num2)
// };

// sumar(2, 3);


// Ejercicio 2: Restar
// Definí una función restar que tome por parámetros dos números y devuelva la resta de ellos

// const restar = (num1, num2) => {
//     return Number(num1 - num2)
// };

// restar (3, 2);


// Ejercicio 3: Multiplicar
// Definí una función multiplicar que reciba como argumentos dos números y devuelva la multiplicación de ellos

// const multiplicar = (num1, num2) => {
//     return Number(num1 * num2)
// };

// multiplicar (2, 3);

// Ejercicio 4: Dividir
// Definí una función dividir que reciba como argumentos dos números y devuelva la división de ellos

// const calcularAreaTriangulo = (num1, num2) => {
//     return Number((num1 * num2)/2)
// };

// calcularAreaTriangulo (3, 4);

// Ejercicio 6: Gritar
// Definí una función gritar que reciba como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo
// gritar('hola')
//   ¡hola!
//  gritar('aaaaaa')
//   ¡aaaaaa!


// const gritar = (str) => {
//     return  `¡${str}!`
// };

// gritar('hola')
// gritar('aaaaaa')

// console.log (gritar('hola'));
// console.log (gritar('aaaaa'));



// Ejercicio 10: Obtener datos de ciudad
// Definí una función obtenerDatosDeCiudad que tome por parámetros un string nombre, un número poblacion y un string pais y devuelva string con el siguiente formato: La ciudad de NOMBRE tiene una población de POBLACION habitantes y está ubicada en PAIS

// const obtenerDatosDeCiudad = () => {
//     let nombre = ('Santa Fe');
//     let poblacion = ('545606');
//     let pais = ('Argentina');
//     return `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`
// };



// const puedeVerPelicula = (edad, tieneAutorizacion) => {
//     if(edad >= 15) {
//         ('se cumple la condicion y el usuario es mayor de edad')
//         return true;
//     } else if(tieneAutorizacion) {
//         ('no es mayor de edad pero si se cumple la condicion de tener autorizacion')
//         return true;
//     } else {
//         ('no se cumple ninguna condicion, el usuario no puede ver la pelicula')
//         return false;
//     }    
// }


// const estaEnRangoAtigua = (valor, minimo, maximo) => {
//     if (valor >= minimo) {
//         if (valor <= maximo) {
//             return true
//         }
//     }
//     return false
// }

// const estaEnRango = (valor, minimo, maximo) => {
//     if (valor >= minimo && valor <= maximo) {        
//         return true;        
//     }
//     return false
// }



const semaforo = (color) => {
    let puedePasar;
    switch (color) {
        case 'verde':
            puedePasar = true;
            break;
        case 'amarillo':
            puedePasar = false;
            break;
        case 'rojo':
            puedePasar = false;
            break;
        default:
            puedePasar = 'color invalido'
            break;
    }
    return puedePasar
};