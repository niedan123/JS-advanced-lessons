//变量共享问题
for(var i = 0;i<5;i++){
    setTimeout(function(){
        console.log(new Date,i);
    },1000*i);
}
console.log("i:",i);//最终出来的i都是5

//通过IIFE解决变量共享问题
for(var i = 0;i<5;i++){
    (function(j){
        console.log(new Date,j);
    })(i);
}//正常出现i

//函数作为参数(高阶函数的一种）、静态词法作用域、IIFE
var max = 10;
var fn = function(x){
    // console.log(max);//10
    if(x>max){
        console.log(x);
    }
};
(function (f){
    var max = 100;
    f(15);
})(fn);