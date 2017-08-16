var fib = require ('./index');


it('should have correct numbers in sequence', function(){
    var numbers = [1,2,3,5,4052739537881];
    for(var i=0;i<numbers.length;i++){
        expect(fib(numbers[i])).toBeTruthy();
    }
});

it('should return true when we pass 1', function(){
    expect(fib(1)).toBeTruthy();
});

it('should return true when we pass 8', function(){
    expect(fib(8)).toBeTruthy();
});


it('should return false when a non number is passed in', function(){
        expect(fib('a string')).toBeFalsy();
});

it('should not have anything other than a number passed in', function(){
    var numbers = [10,20,-1,-5];
    for(var i=0;i<numbers.length;i++){
        expect(fib(numbers[i])).toBeFalsy();
    }
});

it('should return false when no arg is passed in', function(){
        expect(fib()).toBeFalsy();
});