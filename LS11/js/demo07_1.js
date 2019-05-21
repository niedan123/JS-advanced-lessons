//文件内的变量污染问题,尤其是异步执行的情况下
(function(){
    var x = 10;
    document.onclick = function(){
        alert("x= "+x);
    }
})();//立即执行
 