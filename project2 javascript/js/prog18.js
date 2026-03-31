// Prime Number
let n = 8;
let i = 4;
let isPrime = true;

if (n <= 1) 
    {
    console.log("NotPrime");
} else
     {

    while (i < n) {
        if (n % i === 0) 
            {
            isPrime = false;
            break;
        } else 
            {
            i++;   
        }
    }

    if (isPrime) 
        {
        console.log("Prime");
    } else 
        {
        console.log("NotPrime");
    }
}