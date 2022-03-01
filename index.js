function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
n = 10
function increment(n){
    return (n += 1);
}
n = 10
function decrement(n){
    return (n -= 1);
}
function makeInt(n){
    return  parseInt(n, 10);
}
console.log(makeInt("3"));

function preserveDecimal(n){
    return  parseFloat(n);
}
console.log(makeInt("80.994927"));
