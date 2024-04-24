let hcf;
let num1 = 60;
let num2 = 72;
for ( i=1 ; i <= num1 && i <= num2; i++)
{
    if ( num1 % i ==0 && num2 % i ==0)
    {
    hcf = i;
    }
}
console.log('The HCF value is:' + hcf);
