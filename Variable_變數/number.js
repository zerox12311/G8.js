var a = 10;
var b = 12.34;

console.log(typeof a);
console.log(typeof typeof a);

var c = Infinity;
var d = -Infinity;
var e = NaN;

c
d
e
console.log(typeof c);
console.log(typeof d);
console.log(typeof e); // ??????

console.log(NaN === NaN) // ??????

console.log(isNaN(NaN));
console.log(isNaN(123));
console.log(isNaN("123")); // ?????
console.log(isNaN("Nan")); // ??????

console.log(1+2 === 3); // ???
console.log(0.1+0.2 === 0.3); // ???
console.log(0.01+0.02 === 0.003); // ???

