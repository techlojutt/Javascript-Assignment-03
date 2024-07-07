function evenOrOdd(a,z)
{
    for ( var i = a ; i <= z ; i++)
    {
        if(i%2===0)
        {
           console.log(i,"is even number");
        }
        else if (i%2!=0){
            console.log(i,"is odd number");
        }
    }
}
var inputRangeMin = prompt("Enter the starting point of the range");
var inputRangemax = prompt("Enter the ending point of the range");
evenOrOdd(inputRangeMin,inputRangemax);