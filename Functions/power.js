//power of any number using function
function power(base,exp)
{
    var power = 1 ;
    var i = 0 ;
    while(i<exp)
    {
        var product = base * power ; 
        power = product ;
        i++ ;
    }
    console.log(power);
}

var inputBase = prompt("Enter base");
var inputExp = prompt("Enter Exponent")
power(inputBase,inputExp);