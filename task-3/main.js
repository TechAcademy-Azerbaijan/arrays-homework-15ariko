const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
let a = result.input.split(" ");
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      arr.push(a[i]);
    }
  }

  console.log(arr.join(" "));  
});
