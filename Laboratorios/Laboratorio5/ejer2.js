function sum(x){
    var sum=0;
    for(let i=0;i<x.length;i++){
        sum = sum + x[i];
    }
    var average = sum/x.length;
    console.log("suma = " + sum);
    console.log("promedio = " + average);    
}

x = [1,2,3,4,5,6,7,8,9,10]
sum(x)