import * as circle from './circle_es.mjs';

function runAll() {
  const r = process.argv[2];
  const area = circle.area(r);
  const circumference = circle.circumference(r);
  const helloValue = circle.sayHello(r, 'f1sty');
  console.log(area, circumference, helloValue);
  console.log(circle);
  return 0;
};

runAll();
