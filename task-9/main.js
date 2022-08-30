const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let numbers = result.input.split(" ");
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    arr.unshift(element);
  }
  console.log(arr);
  
});
