const circle = require('./circle2');

console.log(`circle area is ${circle.area(process.argv[2])}`);
console.log(`circle circumference is ${circle.circumference(process.argv[2])}`);
console.log(circle.sayHello(process.argv[2], 'f1sty'));
