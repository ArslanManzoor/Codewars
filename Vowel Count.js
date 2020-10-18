/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str)
{
  var vowelsCount = 0;

  for (var i = 0; i < stringLength; stringLength = str.length; i++)
  {
      if (str[i] in "aeiou")
      {
          vowelsCount++;
      }
  }

  return vowelsCount;
}
