function fib(num){
    if(isNaN(num) || num <= 0){
        return false;
    }
    var minusRoot = Math.sqrt(5*num*num-4)%1;
    var maxRoot = Math.sqrt(5*num*num + 4)%1;
   // var minusTest = Math.sqrt(5*num*num+4);
  // var minusTest = (minusRoot*minusRoot === (5*num*num - 4))?true:false;

    

    
    return !minusRoot || !maxRoot;
}

module.exports = fib;