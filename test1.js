const MAX_NUMBER=1000;

let findSum = [];
let sum = 0;

for(let i =1;i<1000; i++) {
  if(i%3 === 0) {
    sum += i;
    continue;
  }
  
  if(i%5 === 0) {
    sum += i;
    continue;
  }
}

console.log(sum);

