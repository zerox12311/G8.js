function square(number) {
    return number * number;
};

var square = function (number) {
    return number * number;
};

var square = function func(number) {
    console.log(typeof func);   // "function"
    return number * number;
};

var square = new Function('number', 'return number * number');



var plus = function (numA, numB) {
    arguments
    console.log(arguments.callee)
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }

    return numA + numB;
};

plus(1, 2, 3, 4, 5);