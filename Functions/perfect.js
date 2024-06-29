function perfectNumber(a)
{
    var i = 2 ; 
    var perfect = 1 ;
    while (i<a) 
    {
        if(a%i===0)
        {
         perfect = perfect + i;
         if(perfect === a)
            {
                return 1 ;
            }
        }
       i++;
    }
}
if(perfectNumber(8128))
{
    console.log("Perfect Number")
}
else
{
    console.log("Not a perfect Number");
}