function sumOfNaturalNum(n) {
    var sum = 0 ;
    for (var index = 1; index <= n; index++)
    {
      sum = sum + index ;
    }
    return sum ;
}

var input = (prompt("Enter the value of n"))
var sumOfNatNum = sumOfNaturalNum(input);
console.log(sumOfNatNum)