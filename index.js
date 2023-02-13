console.log("Hello World"); //Console.log é usado para exibir uma mensagem no console
var boasVindas = "Olá Mundo"; //Variaveis podem ser definidas com "var" ou "let". Constantes são definidas com "const"
console.log(boasVindas); //É possível utilizar uma variavel dentro de um console.log
console.log(typeof boasVindas == "string"); //Também é possível utilizar operações lógicas. (typeof é utilizado para verificar o tipo de variável utilizado)

var cor = "verde";

if(cor == "verde"){// If's servem para verificar a veracidade de algo. Neste caso, SE a variavel COR for IGUAL a VERDE, o bloco de códio determinado por {} será executado
    console.log("Semáforo verde!");
}

/*
Existem 3 tipos de sinais de igual em java script:

 =   |  Representa ATRIBUIÇÃO, DEFINIÇÃO
 ==  |  Analisa a informação armazenada em alguma variavel ou constante
 === |  Analisa a informação armazenada em alguma variavel ou constante. Será verdadeiro SOMENTE CASO os tipos sejam IGUAIS
*/


switch(cor){ //Switch funciona como if's em cadeia
    case "verde":// Case é utilizado para definir a condição da variável. Logo em baixo dele, é colocado o código à ser executado caso verdadeiro
        console.log("Continue");//Código aqui
        break;// O break deve ser adicionado no final de cada case, para definir onde terminar
    
    case "amarelo":
        console.log("Cuidado");
        break;
    
    case "vermelho":
        console.log("Pare");
        break;

    default:// Default é utilizado caso o valor da variável não seja representado em um case
        console.log("Semáforo quebrado!");
}

