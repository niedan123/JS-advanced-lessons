//Part 1
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("abc"));
console.log(Boolean({}));
//false
//false
//false
//false
//true
//false
//true
//true

if(new Boolean(false)){
    console.log("执行");
}

//Part 2
console.log(Number(undefined));//NAN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NAN
console.log(Number("123.345xx"));//NAN
console.log(Number("32343,345xx"));//NAN
console.log(Number({x:1,y:2}));//NAN

console.log(parseFloat("123.345xx"));//123.345
console.log(parseFloat("32343,345xx"));//23345
console.log(parseInt("123.345xx"));//123
console.log(parseInt("32343,345xx"));//23345

//Part 3
console.log(String(undefined));
console.log(String(null));
console.log(String(true));
console.log(String(false));
console.log(String(0));
console.log(String(234));
console.log(String({x:1,y:2}));