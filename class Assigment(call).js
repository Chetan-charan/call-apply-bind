function calculate(n,m){
    return this.val1 + this.val2 + n+ m;
    
}

vals = {
    val1: 23,
    val2: 12
}

//using call method
console.log(calculate.call(vals,22,32));

//call and apply methods help in mthod reuse.
//With the call() method, you can write a method that can be used on different objects.
//call can be used to invoke a method with an owner object as an argument 
//With call(), an object can use a method belonging to another object.


//using apply method
console.log(calculate.apply(vals,[4,3]));

//The apply() method is similar to the call() method
//With the apply() method, you can write a method that can be used on different objects.
//DIFFERENCE between call and apply - The call() method takes arguments separately. The apply() method takes arguments as an array.
//The apply() method is very handy if you want to use an array instead of an argument list.


//using bind method
var bound =  calculate.bind(vals,10,10);
console.log(bound());

//bind when called returns a new function that, when called will have this equal to object argument bind(thisArg : Object,param1,param2)
