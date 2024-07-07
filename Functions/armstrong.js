//
function countDigitNumbers(n){
 var integerToString = (n.toString())
 return integerToString.length
}
function armstrongNumber(n)
{
  var power =  countDigitNumbers(n);
  var value = n ;
  var sum = 0; 
  while(n!=0)
  {
   var digit = n%10;
   sum = Math.pow(digit,power)+sum;
   n = Math.floor(n/10);
  }
  console.log(sum);
  if(sum === value)
  {
   return 1;
  }
}

var input = prompt("Enter the number number")
if(armstrongNumber(input))
{
  console.log("perfect Number")
}
else
{
  console.log("Not a perfect Number");
}
