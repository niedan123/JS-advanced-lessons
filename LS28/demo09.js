//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);

//用解构赋值方式定义变量
var [a,b,c] = [1,2,3];
console.log(a,b,c);

//let也支持解构赋值
let [foo,[[bar],baz]] = [1,[[2],3]];
console.log(foo,bar,baz);

let [ , ,xx] = ["foo","bar","baz"];
console.log(xx);//baz

let [x, ,y] = [1,2,4];
console.log(x,y);//1 4

let [head,...tail] = [1,2,3,4];
console.log(head,tail);//1,[2,3,4]

let [d,e,...f] = ['a'];
console.log(d,e,f);//"a" undefine []

//注意，如果解构不成功，变量的值就等于undefine
var [foo2] = [];
var [bar2,fee2] = [1];
console.log(foo2,fee2);//undefine undefine

//不完全解构的情况
let [x2,y2] = [1,2,3];
console.log(x2,y2);//1,2

let [a2,[b2],d2] = [1,[2,3],4];
console.log(a2,b2,d2);//1,2,4

//如果等号右边不是数组（或者严格的说，不是可遍历的结构），那么将会报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefine;
let [foo] = null;
let [foo] = {};

//解构赋值中的默认值
var [foo3 = true ] = [];//foo3为true
[x3,y3 = 'b'] = ['a']; //x3 = 'a',y3 = 'b'
[x4,y4 = 'b'] = ['a',undefined];//x4 = 'a' y4 = 'b'

///ES6内部使用严格相等运算符(===)，判断一个位置是否有值。
//所以，如果一个数组成员不严格等于undefined，默认值是不会生效的
var [x5 = 1] = [undefined];//x5 = 1
var [x6 = 1] = [null];//x6 = null

function f2(){
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);//1

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
let [m1 = 1,n1 = m1] = [];//m1 = 1;n1 = 1

