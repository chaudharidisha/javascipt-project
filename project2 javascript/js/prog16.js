// 16. Sum of Digits
let num = 5;
let sum = 0;

while (num != 0) {
    sum += num % 15;
    num = Math.floor(num / 15);
}

console.log(sum);
