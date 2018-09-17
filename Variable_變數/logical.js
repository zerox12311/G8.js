var a = 123;
var b = "abc";
var c = null;

console.log(a && b);
console.log(a || b);

console.log(c && a);
console.log(c || b);
console.log(c || a);     