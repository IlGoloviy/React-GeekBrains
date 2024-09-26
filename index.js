function loop(times = 0, callback = null) {
  if (callback !== null) {
    for (let i = 0; i < times; i++) {
      callback();
    }
  }
}

function sum() {
  console.log(2+3);
}

loop(1, sum);

function calculateArea() {
  let calc = {
    area: '',
    figure: '',
    input: ''
  }
  let [a, b, c] = arguments;

  if (arguments.length === 1) {
    calc.area = a * 2;
    calc.figure = 'square';
    calc.input = `value SQUARE - ${a}`;
  } else if (arguments.length === 2) {
    calc.area = a * b;
    calc.figure = 'rectangle';
    calc.input = `value RECTANGLE: a - ${a}, b - ${b}`;
  } else if (arguments.length === 3) {
    p = (a + b + c) / 2;
    calc.area = Math.sqrt(p * (p-a) * (p-b) * (p-c));
    calc.figure = 'triangle';
    calc.input = `value TRIANGLE: a - ${a}, b - ${b}, c - ${c}`;
  }

  console.log(calc);
}

calculateArea(3, 4, 2);