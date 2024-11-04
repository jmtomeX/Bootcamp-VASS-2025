var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
console.log(arr);

arr.pop(); // "Springer"
console.log(arr);

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Jerardo'); // 4
console.log(arr);

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']
console.log(arr);

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']
console.log(arr);

arr.unshift('Limón'); // 4
console.log(arr);

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']
