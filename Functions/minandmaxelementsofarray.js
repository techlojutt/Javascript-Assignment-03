function minAndMaxElementsOfArray(arr)
{
    var min = arr[0];
    var max = arr[0];
    for(var i = 1 ; i <= arr.length ; i++)
    {
     if(arr[i]<min)
       {
         min = arr[i];
       }
     else if (arr[i]>max)
       {
         max = arr[i];
       }
    }
    return {min,max};
}
var array = [3,1,9,4,5,7];
var result = minAndMaxElementsOfArray(array);
console.log("Array :",array);
console.log("Minimum:",result.min);
console.log("Maximum:",result.max);