if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//undefine
    var j = 10;
    console.log("j:",j);//10
}
foo();
console.log("i:",i);//0
console.log("j:",j);//报错