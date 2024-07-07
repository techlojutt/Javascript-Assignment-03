function greatestCommonDivisor(a,b)
{
    if(a>b)
    {
    while(b!=0)
    {
        var temp = b ; 
        b = a%b ;
        a = temp ;
    }
    }
    else if(b>a) {
      while(a!=0)
     {
      var temp = a ;
      a = b%a;
      b = temp;
     }
    }
    if(b==0)
    {
        return a ;
    }
    else if (a==0)
    {
        return b ;
    }
}
function leastCommonMultiple(a,b)
{
 var leastCommonMultiple = (a*b)/greatestCommonDivisor(a,b) ;

 console.log(leastCommonMultiple);
}

leastCommonMultiple(673,472);


