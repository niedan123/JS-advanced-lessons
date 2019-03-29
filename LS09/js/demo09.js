//词法作用域 与调用形式无关 详细内容参见作用域部分
var name = "Jack";
function echo(){
    console.log(name);
}
function foo(){
    var name = "Bill";
    echo();
}
foo();//Bill or Jack

//全局变量与局部变量
var x = "outside";
var f1 = function(){
    var x = "outside f1";
    console.log(x);//"outside f1"
};
f1();
console.log(x);//"outside"

//若函数内未加var 则相当于创建了全局变量
var f2 = function(){
    y = "局部";
    console.log(y);//"局部"
};
f2();
console.log(y);//报错
//若函数内有var此行报错，若函数内没有var则此行输出全局变量y值

//ES5中无块级作用域
if(true){
    var z = 23;
}
console.log(z);//正常输出
if(true){
    (function(){ //IIFE start
        var z = 23;
    }());        //IEFE end
}
console.log(z);//报错
