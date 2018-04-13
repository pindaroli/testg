const pippo={
    "a": 2,
    b: 3
}

console.log(pippo["a"]);
const prova=(a,b) => {
    console.log("a="+a+" b="+b);
}
const curr= (a) => ((b) =>prova (a,b));
console.log(curr(3)(2));