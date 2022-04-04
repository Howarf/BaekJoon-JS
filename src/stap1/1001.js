var data = [];
var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (line) => {
  data = line.split(' ').map(el => parseInt(el));
});
rl.on('close', () => {
  console.log(data[0] - data[1]);
  process.exit();
});