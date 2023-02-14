let carros = ["palio 98", "volvo", "toro", 10, new Date()];

console.log(carros);
console.log(carros.length);

carros.forEach(function(v, index){// Native function forEach can be used when we need to list a array. We don't need to use a For or While.

    console.log(index, v);

})

console.log("---------------------------------------------------");

let programmingLanguages = [".net", "c#", "java", "ruby", "python", "javascript"];
programmingLanguages.forEach(function(v, index){

    console.log(index, v);

});