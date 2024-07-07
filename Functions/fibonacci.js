function fibonacciSeries(n)
{
    var a = 0 ;
    var b = 1 ;
    console.log(a);
    for (var i = 1; i < n; i++)
    {
        var sum = a + b ;
        b = a  ;
        a = sum   ;
        console.log(sum);
    }
}
fibonacciSeries(10);