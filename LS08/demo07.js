// 高阶函数
// 实例一 高阶函数一般应用 01
function add(x,y,f){
    return f(x)+f(y);
}
add(2,3,function(z){return z*z;});//13
add(2,-3,Math.abs);//Math.abs()取绝对值
add(2,3,Math.sqrt);//2的开平方加3的开平方

//练习使用高阶函数实现下述公式，要求函数复用
//z = 2*(x+1)-3*y*y;
//c = 2*a*a-3*(b-1);
//k = 2*(i+1)-3(j-1);

//实例一  高阶函数一般应用 02
var word_2 = "do another thing.";
var function_1 = function(callback){
    this.word_1 = "do something.";
    console.log(this.word_1);
    (callback && typeof(callback) ==="function") && callback();
};
var function_2 = function(){console.log(this.word_2)};
function_1(function_2);
/* do something.
do another thing. */

function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

//将数组所有元素改为数字类型
var result = ["1","2","3"].map(function(val){
    return parseInt(val);
});
for(var i = 0;i<result.length;i++){
    console.log(typeof result[i]);
}

//实例三 常用回调函数 设置超时和时间间隔的方法、异步请求、事件监听和处理
//超时回调实例
var timeOutId = setTimeout( function () {
    console.log("你已超时！");
},1000);

//间隔回调函数
var timeInterval = setInterval(function(){
    console.log("Hi");
},1000);
clearInterval(timeInterval);

//事件监听回调实例
document.addEventListener("click",function(){
    console.log("click callback");
});


// Part 22222222222222222 函数作为返回值输出
var x = 12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function(){
    return function fun2(){
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());
console.log("输出2：",obj.fun3()());//12
console.log("输出3: ",obj.fun4());//34
//不懂