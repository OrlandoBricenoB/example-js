// * Tipos de datos

// * Primitivos
// 'this is a string' // strings "" '' ``
// 5 // int
// 5.45 // float
// true
// false // booleans
// undefined // No definido
// null // Cuando un valor es nulo

// * Compuestos
// ([]) // Array - Matrices
// {} // Objects - Diccionarios

// * Variables
// * Variables globales y locales. (Scope)
function myFunc() {
  // un scope (CTRL + K + C comment)
  {
    // otro scope (CTRL + K + U uncomment)
  }
}

// * Testing a global variable vs a local variable | PLEASE DON'T USE A GLOBAL VARIABLE.
// {
//   {
//     var number = 5
//     let name = 'Dario'
//     console.log(name)
//   }
// }

// console.log(number)

// * camelCase - PascalCase - snake_case

// * Objects
const user = {
  key: 'value',
  name: 'Dario',
  age: 35,
  country: 'AR',
  'my-cash': {
    'USD': 300,
    'ARS': 593405390
  },
  getName: () => 'Returned name'
}
const searchKey = 'country'

console.log(user.name)
console.log(user[searchKey])
console.log(user.getName())

// * Falsy values and Truthy Values
// ? Todos los tipos de datos en JavaScript son un objeto, en otros lenguajes sería un clase.
// ? Un valor que convertido a boolean da false, es un falsy value, el caso contrario, es un truthy value.
console.log(Boolean(5))

// * Los if (condicionales) y toda condición utilizan truthy and falsy values.
// *
// * Operadores
// *
console.clear()
// * Operadores Aritméticos
console.log(5 + 4) // + operador de suma
console.log(5 - 4) // + operador de resta
console.log(5 * 2) // * operador de multiplicación
console.log(5 / 2) // / operador de división
console.log(5 ** 2) // ** operador de exponencial 5^2

// * Operadores de Asignación
let number = 1 // = es el operador de asignación, le da un valor a una variable.
// ? Podemos mezclar los aritméticos con el de asignación, así:
number += 1 // Esto significa que se toma el valor de number, se le suma el nuevo valor y se reasigna.
number -= 1
number *= 5
number /= 2
// ? sin esto, el método sería:
number = number + 1 // O cualquier otro operador.
console.log(number)

// * Operadores Lógicos
// ? Todos los operadores lógicos se basan en valores booleanos.
console.clear()
// * NOT (Utiliza el simbolo !)
// ? NOT transforma cualquier valor a su contrario en booleano. (Se escribe siempre a la izquierda del valor)
console.log(!true)
console.log(!!5) // ? Truco para transformar un valor a booleano sin Boolean()

// * AND (Utiliza el simbolo &&)
// ? AND verifica si la expresion evaluada es verdadera, pasa a la siguiente, si alguna es un falsy value, retorna el falsy value encontrado.
// ? Este operador lo utilizamos para evaluaciones de corto circuito.
console.log(5 && 'un string' && undefined && 'otro string')
console.log(5 && 'un' && true && {})
const isAlive = false
const isRunning = false
const process = {}

console.log(process && isRunning && isAlive)
if (process && isRunning && isAlive) {
  console.log('La aplicación corre perfectamente.')
} else {
  console.log('La aplicación falló al iniciar.')
}

// * OR (Utiliza el simbolo ||)
// ? OR verifica si la expresión evaluada es verdadera, de ser así, la devuelve, sino, evalua la siguiente, si todos son falsy, devuelve el último.
console.clear()
let myName = undefined
let name = myName || 'Jo' || 'Dario'

if (isRunning || isAlive) {
  console.log('Está corriendo o al menos está viva')
}

// ? Dato extra acerca de los if
// ? La sintaxis de if nos dice que recibe una expresión condicional booleana, la verifica y ejecuta su bloque de código si se cumple.
if (true) {
  console.log('Se cumplió el if')
}
