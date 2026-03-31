// 15. Palindrome Number
let num = 121;
let temp = num;
let rev = 0;

while (num != 0) {
    let digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}

if (temp == rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}