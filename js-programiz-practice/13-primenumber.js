let n=5;
let isPrime=true;

if  (n === 1)
{
    console.log("The given number is neither prime nor composite number");
}
else if (n>1)
{
  
    for ( let i = 2; i < n; i++)
     {
        if(n%i == 0)
        {
       isPrime = false;
        //console.log("The given number is not prime");
        break;
        }
     }
     if(isPrime)
     
     {
      console.log(`${n} is a prime number`);
     }
     else
     {
      console.log(`${n} is not a prime number`);
     }
}
/*else
{
  console.log("The number is not a prime number");

}
*/