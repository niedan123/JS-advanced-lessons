//函数定义，函数声明方式
function max(a,b){
    return a>b?a:b;
}
max(2,3);//3

//函数定义 函数表达式方式
//等号右侧可以是匿名函数
//也可以是非匿名函数


var max = function(a,b){//匿名函数
    return a>b?a:b;
};
max(2,3);

//非匿名函数便于调用栈追踪
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);//3

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);//2

//函数定义Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
console.log(max(2,3));
//Function("第一个变量","第二个变量",……,"函数体");
