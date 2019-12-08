let n = 600851475143;
let primeArr = [];

for(let i = 2; i <= n; i++){
  let isPrime;
  if(n % i === 0) {
    for(let j = 2; j < i /2; j++){
      isPrime = !(i%j === 0);         
    }

    if(isPrime) {
      n /= i;
      primeArr.push(i);    
    }
  }
}

console.log(Math.max.apply(null,primeArr));