function dos(x){
    var suma=0;
    for(let i=0;i<x.length;i++){
        suma = suma + x[i];
    }
    var promedio = suma/x.length;
    console.log("suma = " + suma);
    console.log("promedio = " + promedio);    
}

x = [1,2,3,4,5,6,7,8,9,10]
dos(x)