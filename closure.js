// function init() {
//     let nama = 'Mas Adi';
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }

// init();

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

let substract = (function () {
    let counter = 0;
    return function () {
        return --counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(substract());
console.log(substract());
console.log(add());