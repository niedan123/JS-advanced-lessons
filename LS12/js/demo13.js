function counter(){
    var n = 0;
    return {
        counter:function(){return ++n},
        reset:function(){n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.counter());//1
console.log(d.counter());//1
console.log(c.reset());//0
console.log(c.counter());//1
console.log(d.counter());//2