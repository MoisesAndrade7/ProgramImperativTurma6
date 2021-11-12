// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function convertPolParaCm(numPol) {
   return numPol * 2.54;
}
console.log(convertPolParaCm(2), "cm");

// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function convetParaUrl(palavra) {
    return console.log("http://www."+palavra+".com.br");
}
convetParaUrl("superjava");

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function exclamacao(palavra2) {
    return console.log(palavra2+"!");
}
exclamacao("Olá");

//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

function calcIdadeCao(anoCao) {
    return console.log(anoCao+" "+"ano(s)"+" "+"equivale a"+" "+anoCao*7+" "+"anos para eles.");
}
calcIdadeCao(2);

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.

function calcHoraDeTrabalho(salarioMensal) {
    const horasMes=160;
    return console.log("O valor da hora de trabalho é"+" "+(salarioMensal/horasMes).toFixed(2)+".");
}
calcHoraDeTrabalho(1500);

// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas.
// Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com
// a altura.

function calcImc(altura, peso) {
    return console.log("O Índice é"+" "+(peso/(altura*altura)).toFixed(2)+".");
}
calcImc(1.75, 81);
calcImc(1.55, 60);

// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

function convertStringMinuscParaMaiusc(minusc) {
    return console.log(minusc.toUpperCase());
}
convertStringMinuscParaMaiusc("javaScript");

// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.

function tipoDeDado(operador) {
    return console.log("O tipo de dado é"+" "+typeof operador+".");
}
tipoDeDado(true);
tipoDeDado(7);
tipoDeDado("7");
tipoDeDado();

// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function raioDoCirculo(raio) {
    return console.log("A circunferência é"+" "+(Math.PI*2*raio).toFixed()+".")
}
raioDoCirculo(12);