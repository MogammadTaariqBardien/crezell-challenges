var number = 5;
function makeNegative (number) {

    if(number > 0)
    {
       number = number*-1;
       return number;
    }
    else
    {
        number = number;
        return number;
    }
}


console.log(number);