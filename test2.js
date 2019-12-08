let i = 0;
let j = 1;
let n = 100;
let sum = 0;
let MAX= 4000000;
for(let n =1;n<=100 && j < MAX; n++) {
  let k = i+j;
  if(k%2 === 0) {
    sum +=k;
  }  
  i = j;
  j = k;
}

console.log(sum);