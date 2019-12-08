let n = 99;


for(;n>=10; n--) {
  let m = 99;
  for(;m>= 10;m--) {
    // console.log("%s X %s", n , m);
    let product = n * m ;
    let reverse = product.toString().split().reverse().join();
    console.log(reverse);
    if(product.toString() === reverse ){
      console.log(product);
      console.log(n);
      console.log(m);      
    }  
  }  
}