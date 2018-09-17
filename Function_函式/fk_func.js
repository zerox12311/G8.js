var x = 1;

var doSomeThing = function (y) {
    console.log(x);

    var x = 100;
    return x + y;
};

console.log(doSomeThing(50));
console.log(x);               



// console.log(square(2))
// var square = function(number){
//     return number * number;
// }