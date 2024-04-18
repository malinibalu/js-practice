var num=153;
var temp=num;
var sum=0;
while (temp !=0)
{
    var remainder = temp % 10;                  // 153 % 10 = 3                             15 % 10 =5
    sum += remainder * remainder * remainder;   //sum = 3*3*3 = 27                          sum = 27 + 5*5*5
    temp = Math.floor (temp/10);                // temp = 153/10 =15                        temp = 15/10=1
}                                               //math.floor is to round the value
if (sum==num)
{
    console.log (true);
}
else{console.log(false);
}