const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let numbers = result.input.split(" ");
  let max = numbers[0];
  let max_index = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = parseInt(numbers[i]);
    if (element >= max) {
      max = element;
      max_index = i;
    }
  }
  [numbers[numbers.length - 1], numbers[max_index]] = [
    max.toString(),
    numbers[numbers.length - 1],
  ];
  console.log(numbers.join(" "));  
});
