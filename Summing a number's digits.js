/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sumDigits(10);  // Returns 1
  sumDigits(99);  // Returns 18
  sumDigits(-32); // Returns 5
*/

function sumDigits(number)
{
    numString = number.toString();
    var total = 0;
    for(var i=0; i < numString.length; i++)
    {
        if (numString[i] != "-")
        {
            total += Number(numString[i]);
        }
    }
    return total;
}

/*
function sumDigits(number)
{
    var total = 0;
    while (number > 0)
    {
        total += number % 10;
        number /= 10;
    }
    return total;

    for(var i=0; i < number.length; i++)
    {
        total += number[i];
    }
    return total;

}
*/
