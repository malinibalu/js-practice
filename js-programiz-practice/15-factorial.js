let n=5;
fact = 1;
for (i=1; i<=n;i++)
{
    fact *= i;
}
console.log("Factorial of 5 is:" + fact);

// Another Method

var num=5;
if(num<0)
{
    console.log('Factorial does not exist');
}
else if(num==0)
{
    console.log('Factorial is 1');
}
else 
{
    var fact = 1;
    for(let i=1; i<=num;i++)
    fact *= i;
}
console.log('Factorial is:' + fact);