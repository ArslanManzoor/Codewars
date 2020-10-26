/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

function capitalize(s)
{
    var evenUpper = "";
    for(var i = 0; i < s.length; i += 2)
    {
        evenUpper[i] = s[i].toUpperCase();
    }

    var oddUpper = "";
    for(var j = 1; j< s.length; j += 2)
    {
        oddUpper[i] = s[i].toUpperCase();
    }

    return [evenUpper, oddUpper];
};
