function sumOfEvenOrOdd(a,z)
{
    var sumOfEven = 0 ;
    var sumOfOdd = 0 ;
    for (var i = a ; i <= z ; i++)
    {
      if(i%2===0)
       {
          sumOfEven = sumOfEven + i ;
       }
      else if(i%2!=0)
        {
          sumOfOdd = sumOfOdd + i ;
        }
    }
    console.log("Sum of even numbers = ",sumOfEven);
    console.log("Sum of odd numbers = ",sumOfOdd);
}
var minRange = prompt("Enter the starting point of the range");
var maxRange = prompt("Enter the ending point of the range");
sumOfEvenOrOdd(minRange,maxRange);