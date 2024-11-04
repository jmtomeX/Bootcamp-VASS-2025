var arr = ["Altuve", "Bregman", "Correa", "Springer"];

console.log(arr);

var foundElement = arr.indexOf("Correa");

foundElement; // 2

let spliced = arr.splice(foundElement, 1); // ["Correa"]
console.log("Spliced: " + spliced);

console.log(arr.splice(foundElement, 2)); // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

console.log(arr); // ["Altuve"]

console.log("-----------------------------");

var array = ["Altuve", "Bregman", "Correa", "Springer"];

array.splice(2, 0, "Kyle");

console.log("new Array: ", array);
var añadirDelante = array.indexOf("Kyle");
console.log("Kyle está ", añadirDelante, "en el array");

array.splice(añadirDelante, 0, "Fernando");
console.log(array);

console.log("-----------------------------");

// Utilice el método splice en la matriz para dejar los primeros 3 valores en la matriz y hacer que el splice devuelva "Springer"
var array2 = ["Altuve", "Bregman", "Correa", "Springer"];

/**
 * 3: es el índice donde se comienza a eliminar elementos. En este caso, se
 * elimina  el elemento en la posición 3 del arreglo.
  1: es el número de elementos que se van a eliminar. En este caso, se elimina solo 1 elemento.
 */
console.log(array2.splice(3, 1)); // Array [ "Springer" ]
console.log(array2); // Array(3) [ "Altuve", "Bregman", "Correa" ]
