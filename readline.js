const readline=require('readline');
const input=readline.createInterface(process.stdin);
a=Math.floor(Math.random()*7);
b=[a-Math.abs(Math.floor(Math.random()*5+1)),a+Math.abs(Math.floor(Math.random()*45))];
console.log(b);
input.on('line',(data)=>{if (parseInt(data)<a) {console.log("Больше")} else if (parseInt(data)>a) {console.log("Меньше")} else {console.log("Верно!")}})