function types(x){
    let n=0, s=0, b=0, u=0, o=0;
    for(i=0; i<x.length; i++){
        switch(typeof x[i]){
            case "number": 
            n++;
            break;
            case "string": 
            s++;
            break;
            case "boolean": 
            b++;
            break;
            case "undefined":
            u++;
            break;
            case "object":
            o++;
            break;
        }
    }
    console.log("Hay "+n+" de tipo number");
    console.log("Hay "+s+" de tipo string");
    console.log("Hay "+b+" de tipo boolean");
    console.log("Hay "+u+" de tipo undefined");
    console.log("Hay "+o+" de tipo object");
}