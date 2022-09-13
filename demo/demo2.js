import just from "../just.js" 
console.log(just);

console.log(1);
const p = just.nextTick(()=>{
    console.log(3);
});
console.log(2);

console.log(p);