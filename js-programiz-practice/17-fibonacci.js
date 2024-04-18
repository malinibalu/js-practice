let fibonaci = 15;
let num1= 0;
let num2 = 1;
let num3;

for(let i=1; i<=fibonaci; i++)
{
num3 = num1 + num2;
console.log (num1);
num1 = num2;
num2 = num3;
}

// Another method

function fibonacci(num)
{
    let num1= 0;
    let num2 = 1;
    for(let i=1; i<=fibonaci; i++)
    {
        console.log (num1);
        var num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
    }
}
var num=5;
fibonacci(num)