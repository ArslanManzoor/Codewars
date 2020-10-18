
function removeSmallest(numbers)
{
    if (numbers == [])
    {
    return [];
    }
    else
    {
        var numbersCopy;
        var smallestNum = numbers[0];
        var smallestNumIndex = 0;
        for (var i = 1; i < numbers.length; i++)
        {
          if (numbers[i] < smallestNum)
          {
            smallestNum = numbers[i];
            smallestNumIndex = i;
          }
        }

        numbersCopy = numbers.map((x) => x);

        function smallestRemover (ratings)
        {
            return ratings != numbers[smallestNumIndex];
        }

        const numbersAfterRemoval = numbersCopy.filter(smallestRemover);
        return numbersAfterRemoval;
    }
}
