// Concat - se utiliza para combinar dos o más arreglos. No modifica los arreglos originales, sino que devuelve un nuevo arreglo que es la combinación de los arreglos dados.
console.log("Ejercicio1");
const clientes = ['Cliente1', 'Cliente2', 'Cliente3'];
const empleados = ['Empleado1', 'Empleado2', 'Empleado3'];

const contactos = clientes.concat(empleados);

console.log(contactos);
// Resultado: ['Cliente1', 'Cliente2', 'Cliente3', 'Empleado1', 'Empleado2', 'Empleado3']

//  Join - une todos los elementos de un arreglo en una sola cadena
const clientes1 = ['Cliente1', 'Cliente2', 'Cliente3'];
const empleados1 = ['Empleado1', 'Empleado2', 'Empleado3'];

const contactos1 = clientes.join(', ') + ', ' + empleados.join(', ');

console.log(contactos1);
// Resultado: 'Cliente1, Cliente2, Cliente3, Empleado1, Empleado2, Empleado3'

// Push - se utiliza para agregar uno o más elementos al final de un arreglo y devuelve la nueva longitud del arreglo
const clientes2 = ['Cliente1', 'Cliente2', 'Cliente3'];
const empleados2 = ['Empleado1', 'Empleado2', 'Empleado3'];

const contactos2 = [...clientes2];
contactos2.push(...empleados2);

console.log(contactos2);
// Resultado: ['Cliente1', 'Cliente2', 'Cliente3', 'Empleado1', 'Empleado2', 'Empleado3']

// Splice - cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos
const clientes3 = ['Cliente1', 'Cliente2', 'Cliente3'];
const empleados3 = ['Empleado1', 'Empleado2', 'Empleado3'];

const contactos3 = [...clientes3];
contactos3.splice(contactos.length, 0, ...empleados3);

console.log(contactos3);
// Resultado: ['Cliente1', 'Cliente2', 'Cliente3', 'Empleado1', 'Empleado2', 'Empleado3']

/* concat: Combina directamente los arreglos y devuelve uno nuevo.
push: Añade los elementos de un arreglo al final de otro utilizando el operador de propagación.
splice: Inserta los elementos de un arreglo en otro.
join: No es adecuado para combinar arreglos, ya que devuelve una cadena en lugar de un nuevo arreglo.  */

console.log("Ejercicio 2");

var numbers = [5, 32, 43, 4];

var impares = numbers.filter(function (n) {
    return n % 2 !== 0;
});

console.log(impares);
// Resultado: [5, 43]


// La función filter crea un nuevo arreglo con todos los elementos que pasan la prueba implementada por la función dada.

console.log("Ejercicio 3");
var people = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 31 },
    { id: 3, name: "Peter", age: 55 }
];

var menoresDe35 = people.filter(function (persona) {
    return persona.age < 35;
});

console.log(menoresDe35);
// Resultado: [{ id: 1, name: "John", age: 28 }, { id: 2, name: "Jane", age: 31 }]



console.log("Ejercicio 4");

let peoples = [
    { name: "bob", id: 1 },
    { name: "john", id: 2 },
    { name: "alex", id: 3 },
    { name: "john", id: 4 }
  ];
  
  function contarNombres(arreglo) {
    let conteo = {};
  
    for (let i = 0; i < arreglo.length; i++) {
      let nombre = arreglo[i].name;
      if (conteo[nombre]) {
        conteo[nombre]++;
      } else {
        conteo[nombre] = 1;
      }
    }
  
    return conteo;
  }
  
  let resultado = contarNombres(peoples);
  console.log(resultado);
  // Resultado: { bob: 1, john: 2, alex: 1 }
  

console.log("Ejercicio 5");
var myArray = [1, 2, 3, 4];

function imprimirMaximoYMinimo(arr) {
    if (arr.length === 0) {
        console.log("El arreglo está vacío.");
        return;
    }

    var maximo = arr[0];
    var minimo = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
        if (arr[i] < minimo) {
            minimo = arr[i];
        }
    }

    console.log("Número máximo:", maximo);
    console.log("Número mínimo:", minimo);
}

imprimirMaximoYMinimo(myArray);
// Resultado:
// Número máximo: 4
// Número mínimo: 1

console.log("Ejercicio 6");

var object = {
  key1: 10,
  key2: 3,
  key3: 40,
  key4: 20
};

function ordenarKeysPorValor(obj) {
  // Convertir el objeto en un arreglo de pares [key, value]
  let entries = Object.entries(obj);

  // Ordenar el arreglo basado en los valores
  entries.sort(function(a, b) {
    return a[1] - b[1];
  });

  // Extraer y devolver solo las claves del arreglo ordenado
  let keysOrdenadas = entries.map(function(entry) {
    return entry[0];
  });

  return keysOrdenadas;
}

let resultado1 = ordenarKeysPorValor(object);
console.log(resultado1);
// Resultado: ['key2', 'key1', 'key4', 'key3']