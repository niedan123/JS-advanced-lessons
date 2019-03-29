console.log(a);//undefine
var a = 1;
console.log(a);//1

console.log(a,b);//undefine,undefine
var b = 23;
console.log(a,b);//undefine,23
var a = b;
console.log(a,b);//23,23

console.log(obj1,obj2);//undefine,undefine
var obj1 = {x:23};
console.log(obj1,obj2);//{x:23},undefine
var obj2 = obj1;
console.log(obj1,obj2);//{x:23},{x:23}
obj2.x = 25;
console.log(obj1,obj2);//{x:25},{x:25}

foo();//"f_2"
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}

//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

foo() = function(){
    console.log("foo");
};//报错

//思考以下代码是否会报错，写出这段代码的等价形式
console.log(foo);//undefine
var foo = function(){
    console.log("foo");
};
foo();//foo

AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();

function AA(){
    console.log("AA_1");
}
var AA;

//上边代码等价如下
//先将所有代码的声明提前，然后依次调用
AA();
AA = function AA(){
    console.log("AA_2");
};
AA();