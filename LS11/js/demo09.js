//避免闭包中非期望的变量共享问题，如下例子
var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];
for(var i = 0;i<tabs.length;i++){
    tabs[i].onclick = function(){
        for(var j = 0;j<tabs.lengthl;j++){
            tabs[j].className = '';
        }
        this.className = "active";
        contents.innerHTML = "导航"+i+"内容";
    };
}//但是会一直是导航4内容,要解决得用IIFE