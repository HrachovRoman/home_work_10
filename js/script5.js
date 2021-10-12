const arr = [1, 2, 3, 4, 5];

let sumArr = 0;
for (let i = 0; i < arr.length; i++) {
    let sqrtArrI = Math.pow(arr[i], 2);
    sumArr += sqrtArrI;
}
console.log (sumArr);   