function sumOfElementsOfArray()
{
    var sum = 0 ;
    for (i = 0; i<array.length; i++) 
        {
            var arrayElement = array[i] ;
            sum = sum + arrayElement ;
        }
        console.log(sum)
}
var array = [1,2,4,5,8,3];
sumOfElementsOfArray(array)