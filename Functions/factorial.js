function factorial(n)
{
    var fact = 1;
    var i = 1 ;
    while(i<=n)
    {
        var prod = i * fact  ;
        fact = prod ;
        i++;
    }
    console.log(fact);
}
var inputFactorial = prompt("Enter the value of factorial");
factorial( prompt("Enter the value of factorial"));