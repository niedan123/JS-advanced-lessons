//实参数大于形参数

//arguments是一个对象。可以将形参变成类数组。
function test(){
    console.log(arguments);//传入的形参的类数组
    console.log(test.arguments == arguments);//false
    console.log(arguments.length);//形参个数
    console.log(typeof arguments);//object
    console.log(arguments instanceof Array);//false
    console.log(arguments instanceof Object);//true
    console.log(Array.prototype.slice.call(arguments));
    /* var s = "";
    for(var i=0;i<arguments.length;i++){
        s+=arguments[i];
    }
    return s; */
}
test("hello","world!");

//实参数小于形参数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10