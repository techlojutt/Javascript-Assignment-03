function palindromNumber(n){
    var ans = 0;
    while(n!=0){
        var digit = n%10;
        ans = (ans * 10) + digit ;
        n = Math.floor(n/10);
    }
   return ans ;
}
var input = 44;
var palindromNum = palindromNumber(input);
if(palindromNum==input){
  console.log("Given number is a palindrom number");
}
else {
    console.log("Given number is not a palindrom number")
}
