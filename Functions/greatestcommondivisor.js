function greatestCommonDivisor(a,b)
{
    while(b!=0)
    {
        var temp = b;
         b = a%b ; 
         a = temp ;
    }
    if (b==0)
    {
      return a ;
    }
    else
    {
        return b ;
    }
}

 var greatestCommonDivisor = greatestCommonDivisor(105,252);
 console.log(greatestCommonDivisor);