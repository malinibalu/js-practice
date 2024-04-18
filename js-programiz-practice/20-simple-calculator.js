
/*

let num1=20;
let num2=7;
let operator = '%';
if (operator == '+')
    {
        console.log(`Sum of ${num1} and ${num2} is : ` + (num1 + num2) );
    }
    else if( operator =='-')
    {
        console.log(`Difference of ${num1} and ${num2} is : ` + (num1 - num2) );
    }
    else if (operator == '*')
    {
        console.log(`Product of ${num1} and ${num2} is : ` + (num1 * num2) );
    }
    else if (operator =='/')
    {
        console.log(`Divisible value of ${num1} and ${num2} is : ` + Math.floor (num1 / num2) );
    }
else
    {
        console.log ('Invalid operator ');
    }
    */


    // switch case method

    let num1 = 20;
    let num2 = 6;
    let result;
    let operator = '*' ;
    switch (operator)
    {
        case '+':
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ` + result);
        break;
        case '-':
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ` + result);
        break;
        case '*':
        result = num1 * num2;
        console.log(`${num1} * ${num2} = ` + result);
        break;
        case '/':
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ` + result);
        break;
        default:
            console.log("Invalid opeartor");
    }