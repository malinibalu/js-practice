let lcm,hcf;
let num1 = 10;
let num2 = 15;
for(i=1 ; i <= num1 && i <= num2; i++)
{
    if (num1 % i == 0 && num2 % i ==0)
    hcf = i;
}
lcm = (num1 * num2)/hcf;
console.log("The LCM value is:" + lcm);