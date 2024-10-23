let counter = 0;

function incrementCounter(){
    try{
    counter++;
    console.log(counter);
    setTimeout(incrementCounter, 0);
}catch(error){
console.error("It's not working:",error);
console.log("Counter value at the time of error:", counter)

}
let shouldStop = false;

function incrementCounter() {
    if (shouldStop) return;
    
    counter++;
    console.log(counter);
    
    setTimeout(incrementCounter, 1000)
}
incrementCounter()

function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        return Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val);
    }, []);
}

const nestedArray = [4, [5, [6, [7, [8]]]], 9];

console.log(flattenArray(nestedArray)); 

function factorial(n, acc = 1) {
    if (n <= 1) return acc;
    return () => factorial(n - 1, n * acc);
}

const result = trampoline(() => factorial(10000));
console.log(result);
}
