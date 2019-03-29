//普通函数直接调用
function test1(){
    console.log("this is",this);
}
test1();
//window,没有参数的情况是window