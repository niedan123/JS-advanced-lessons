var tmp = 100;//注意：词法作用域,形成的闭包是否包含此行的变量tmp？
function foo(x){
    //var tmp = 3;//注意：词法作用域，思考：若屏蔽此行，会输出什么？foo之外的tmp是否为闭包的一部分？
    return function(y){
        console.log(x+y+(++tmp));
    }
}
var fee = foo(2);// fee 形成了一个闭包
fee(10);//16
fee(10);//17
fee(10);//18
//如果屏蔽了var tmp = 3，结果为113,114,115

//闭包嵌套，扩展知识，思考下述代码中存在几个闭包，设置断点调试
function f1(m){
    var z = 100;
    function f2(x){
        return function(y){
            console.log(x+y+(++z));
        }
    }
    return f2(m);
}
var f3 = f1(2);
f3(10);//113
f3(10);//114
//思考有几个闭包，x和z分别属于哪个闭包
//f1,f2都是闭包 x属于f2这个闭包中，z属于f1这个闭包中。

function foo(x){
    var tmp = 3;
    return function(y){
        x.count = x.count? x.count+1:1;
        console.log(x+y+tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age);
bar(10);//15,1
bar(10);//15,2
bar(10);//15,3

function fn(){
    var max = 10;
    return function bar(x){
        if(x>max){
            console.log(x);
        }
        else{
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);//15