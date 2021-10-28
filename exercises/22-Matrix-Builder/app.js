// Code goes here

// function matrixBuilder(howMany){
//     let matrixArray = Array.from(Array(howMany),() =>
//         new Array(howMany).fill(1));
//     return matrixArray;

// }

// // do not change anything from this line down
// console.log(matrixBuilder(5))

const anArray = new Array(5);
console.log(anArray);

// const arrayOfArrays = Array.from( anArray, function() {
//     return anArray.fill(1);
// })

const arrayOfArrays = Array.from(anArray, () => anArray.fill(1));

console.log(arrayOfArrays);