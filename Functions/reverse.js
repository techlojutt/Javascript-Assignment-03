function reverse(n)
{
  var ans = 0;
  var i = 0 ;
  while(n!=0)
  {
     var digit = n%10;
     var ans = (ans*10) + digit ;
     n = Math.floor(n/10);
     i++ ;
  }
  console.log(ans);
}
var input = 12345;
reverse(input);