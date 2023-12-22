exports.area = (radius) => Math.PI * radius ** 2;
exports.circumference = (radius) => Math.PI * radius * 2;
exports.sayHello = (radius, name) => {
  console.log(`hello ${name}, from circus of area ${exports.area(radius)} and circumference ${exports.circumference(radius)}`);
  return 42;
}
