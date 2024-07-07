// sum of digits of a given number using function
function sumofDigits(num)
{
  var sum = 0
  while(num!=0)
   {
     var digit = num%10;
     sum = digit + sum ;
     num = Math.floor(num/10);
   }
  console.log(sum)
}
var input = prompt("Enter the value")
sumofDigits(input);