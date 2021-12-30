// vetores ou arrays

// como declarar array

/*let array = ['string' , 1, true];
console.log(array); */

/* let array = ['string', 1, true, ['array1'], ['array2']];
console.log(array [4]); */

// forEach() - itera um array;
// push() - add item final array;
// pop() - remove item final array;
// unshift() - add item inicio array;
// shift() - remove item inicio array;
// indexOf() - retorna o índice de um valor;
// splice() - remove ou substitui um item pelo índice;
// slice() - retorna uma parte de um array existente;

//exemplo

let array = ['string', 1, true, ['array1'], ['array2']];
console.log(array [4]);

array.forEach(function(item, index){console.log(item, index)})