function cube(a){

    var i = 0 ;
    var prod = 1 ;
    while(i<3) 
    {
        var cub  = a * prod  ;
        prod = cub 
        i++;
    }
    console.log(cub)

}

cube(prompt("Enter the value"));
