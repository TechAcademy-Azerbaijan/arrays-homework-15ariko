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
  let temp = numbers[0];
  numbers[0] = min.toString();
  numbers[min_index] = temp;
  console.log(numbers.join(" "));
});
