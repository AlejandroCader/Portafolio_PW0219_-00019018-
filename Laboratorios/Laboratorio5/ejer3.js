function tres(numero, x){
    var counter = 0;
    for(let i=0;i<x.length;i++){
        if(x[i]==numero)
        counter++;
    }
    return counter;
}

a = [5,5,5,4,2,3,5]
tres(5,a)