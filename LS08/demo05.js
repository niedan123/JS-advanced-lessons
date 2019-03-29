function foo(){};
console.log(foo);//foo()这个函数
console.log(typeof foo);//function
console.log(foo instanceof Object);//true
console.log(foo instanceof Function);//true
console.log(foo === window.foo);//true

console.log(typeof Function);//function
console.log(typeof Array);//Function
console.log(typeof Date);//Functiom
console.log(typeof Error);//function
console.log(typeof Math);//Object
console.log(typeof JSON);//object

console.log(typeof new Function());// function or object
console.log(typeof new Array());	 // function or object
console.log(typeof new Date());      // function or object

//补充思考

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

