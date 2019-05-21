//ES作用域与变量共享问题
//查看Scope窗体中getNumFuncs中每一个函数的内部属性[[Scopes]]中的第0个元素闭包中的变量，看是否存在共享问题
function f(){
    var getNumFuncs = [];
    for(var i = 0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//都是10

function f(){
    var getNumFuncs = [];
    var i = 0;
    for(;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//都是10

//IIFE 解决变量共享问题
function f(){
    var getNumFuncs = [];
    for(var i = 0;i<10;i++){
        (function(j){
            getNumFuncs[j] = function(){
                return j;
            }
        })(i);
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();//输出3

//局部变量的案例
function f(){
    var getNumFuncs = [];
    var j;
    for(var i = 0;i<10;i++){
        j = i;
        getNumFuncs[i] = function(){
            return j;//如果return i;的话输出10？
        };
    }
    return getNumFuncs;
}
var tmp = f();
console.log(tmp[1]());//9,最后i++没加。