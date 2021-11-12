//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar(adic1, adic2){
    adic1+=adic2;
    console.log(adic1);
    return console.log("RETURN", adic1);
}
adicionar(16, 9);


// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração 
// do primeiro menos o segundo.
let diferenca;
function subtracao(sub1, sub2) {
    sub1-=sub2;
    diferenca=sub1;
    return diferenca; 
}
subtracao(43, 22);
console.log("A subtração é"+" "+(diferenca)+".");

// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o 
//resultado de sua multiplicação.
let produto;
function multiplicar(mult1, mult2) {
    mult1*=mult2;
    produto=mult1;
    return produto; 
}
multiplicar(13, 5);
console.log("A multiplicação é"+" "+(produto)+".");

// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da 
// divisão do primeiro sobre o segundo.

function dividir(div1, div2) {
    div1/=div2;
    
    return console.log("div1", div1); 
}
dividir(39, 3);


// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um 
// console.log no qual você irá colocar uma string para indicar que abaixo dela você
//  começará a testar as funções, por exemplo:
// console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log("Abaixo começaremos o Teste de Operações / Calculadora adicionar:43 e 27.");
adicionar(43, 27);
console.log();
console.log("Abaixo começaremos o Teste de Operações / Calculadora subtração:43 e 27.");
subtracao(43, 27);
console.log("A subtração é"+" "+(diferenca)+".");
console.log("Abaixo começaremos o Teste de Operações / Calculadora multiplicar:43 e 27.");
multiplicar(43, 27);
console.log("A subtração é"+" "+(produto)+".");
console.log("Abaixo começaremos o Teste de Operações / Calculadora dividir:43 e 0.");
dividir(43, 0);
console.log("A subtração é"+" "+(dividir())+".");

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve
//  retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o
//  quadrado do parâmetro inserido em power().

function quadradoDoNumero(numElevadoA2) {
    return multiplicar(numElevadoA2, numElevadoA2);
}
quadradoDoNumero(11);

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão
//  inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas 
// anteriormente em nossa calculadora.

let dividirMediaDeTresNros;
function mediaDeTresNumeros(numMed1, numMed2, numMed3){
    numMed1+=numMed3;
   return (adicionar(numMed1, numMed2)/dividir());
    
    
   
}
mediaDeTresNumeros(1, 2, 3);





    






