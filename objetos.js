/*
    There's two ways to define a class/object in JavaScript:

    OLD CLASS SYSTEM
*/



let celular = function(){

    this.cor = "prata";
    this.ligar = function(){
        console.log("Ligando");
        return "ligando"
    }


}

let objeto = new celular();

console.log(objeto);

/*
    NEW CLASS SYSTEM
*/

class carro{

    constructor(){
        this.cor = "preto";// We need to use "this" in before a variable to it becomes a attribute
        this.modelo = "corsa";
        this.caracteristica = "rebaixado";
    }

    partida(){ //Methods in the new class system should be declared like this, without anything before the method name
        console.log("Dando a partida");
        return "Carro Ligado";
    }
}

let carros = new carro(); //We need to create a instance of the class
console.log(carros.cor);//Using instance name.attribute, we can see what's inside it
console.log(carros.partida());//Methods too can be called from a object
