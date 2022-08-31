const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let numbers = result.input.split(" ");
  let min = parseInt(numbers[0]);
  let min_index = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    const element = parseInt(numbers[i]);

    if (element <= min) {
      min = element;
      min_index = i;
    }
  }
  [numbers[0], numbers[min_index], numbers[numbers.length - 1]] = [
    min.toString(),
    numbers[0],
    0,
  ];

  console.log(numbers);
});
