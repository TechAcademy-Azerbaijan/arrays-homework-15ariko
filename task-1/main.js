const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let numbers = result.input.split(" ");
  let count = numbers.length;
  for (let i = 0; i < numbers.length; i++) {
    const element = parseInt(numbers[i]);

    for (let j = i + 1; j < numbers.length; j++) {
      const next_element = parseInt(numbers[j]);
      if (element === next_element) {
        count--;
      }
    }
  }

  console.log(count);  
});
