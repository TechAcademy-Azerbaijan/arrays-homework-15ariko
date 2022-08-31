const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let numbers = result.input.split(" ");
  let arr = [];
  for (let i = 0; i < numbers.length; i += 2) {
    const element = parseInt(numbers[i]);
    const next_element = parseInt(numbers[i + 1]);
    if (next_element) {
      arr.push(next_element);
    }
    arr.push(element);
  }
  console.log(arr.join(" ");
});
