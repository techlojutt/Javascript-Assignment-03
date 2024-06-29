function primeNumber(a)
{
    var i = 2 ;
    while(i<a)
   {
     if(a%i === 0)
     {
        return 0 ;
     }
     else 
     {
       return 1 ;
     }
     i++ ;
   }
}

if(primeNumber(7)){
   console.log("prime")
}
else{
   console.log("Not a prime")
}