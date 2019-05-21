function f1(){
    var n= 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f();//1000
f();//1001

//闭包实例
//函数f1中的局部变量n一直保存在内存中，