function area(radius) {
  return Math.PI * radius ** 2;
}
function circumference(radius) {
  return Math.PI * radius * 2;
}
function sayHello(radius, name) {
  console.log(`hello ${name}, from circus of area ${area(radius)} and circumference ${circumference(radius)}`);
  return 42;
}

// export default {area, circumference, sayHello};
export {area, circumference, sayHello};
