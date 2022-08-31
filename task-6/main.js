const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
 let numbers = result.input.split(" ");
  let max = parseInt(numbers[0]);
  let min = parseInt(numbers[0]);
  for (let i = 0; i < numbers.length; i++) {
    const element = parseInt(numbers[i]);
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = parseInt(numbers[i]);
    if (element !== max && element !== min) {
      sum += element;
    }
  }
  console.log(sum);  
});
