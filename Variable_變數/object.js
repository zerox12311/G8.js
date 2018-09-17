var person = new Object();
person.name = 'Lux';
person.job = 'Full-Stack Developer';
person.sayJs = function () {
    console.log('Hi JS');
};

// ========================================

var person2 = {
    name: 'Lux',
    job: 'Full-Stack Developer',
    sayJs: function () {
        console.log('Hi JS');
    }
};

console.log(person.name);
console.log(person['name']);

person.sayJs();
person['sayJs']();



var obj = {};
console.log(obj.name);

console.log('name' in obj);
console.log(obj.hasOwnProperty('name'));

obj.hasOwnProperty('hasOwnProperty'); 
'hasOwnProperty' in obj; 
