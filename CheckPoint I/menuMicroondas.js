//1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
//Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem:
//“kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

console.log("Escolha uma opção de prato:")
console.log("1 - Pipoca – 10 segundos");
console.log("2 - Macarrão – 8 segundos");
console.log("3 - Carne – 15 segundos");
console.log("4 - Feijão – 12 segundos");
console.log("5 - Brigadeiro – 8 segundos");

let menu;
let tempoPadrao;
let tempoDoUsuario;
let tempoNormal;

//1 - Pipoca – 10 segundos (padrão);
if(menu==1){
   tempoPadrao=10;
   console.log("Pipoca! Tecle 1 novamente para tempo normal ou digite um tempo:");
   if(menu==1 && tempoNormal==1 || tempoDoUsuario>=tempoPadrao && tempoDoUsuario<=tempoPadrao*2){
      console.log("Prato pronto, bom apetite!!!");
   }else{
      if(tempoDoUsuario>tempoPadrao*2 && tempoDoUsuario<tempoPadrao*3){
         //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
         console.log("A comida queimou");
      }
      if(tempoDoUsuario<tempoPadrao){
         // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
         console.log("Tempo insuficiente"); 
      }
      if(tempoDoUsuario>=tempoPadrao*3){
         // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem:
         //“kabumm”;
         console.log("Kabumm");
      }
   }
}

if(menu==2){
   tempoPadrao=8;
   console.log("Macarrão! Tecle 1 novamente para tempo normal ou digite um tempo:");
   if(menu==2 && tempoNormal==1 || tempoDoUsuario>=tempoPadrao && tempoDoUsuario<=tempoPadrao*2){
      console.log("Prato pronto, bom apetite!!!");
   }else{
      if(tempoDoUsuario>tempoPadrao*2 && tempoDoUsuario<tempoPadrao*3){
         //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
         console.log("A comida queimou");
      }
      if(tempoDoUsuario<tempoPadrao){
         // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
         console.log("Tempo insuficiente"); 
      }
      if(tempoDoUsuario>=tempoPadrao*3){
         // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem:
         //“kabumm”;
         console.log("Kabumm");
      }
   }

}
if(menu==3){
   tempoPadrao=15;
   console.log("Carne! Tecle 1 novamente para tempo normal ou digite um tempo:");//Tempo padrão.
   if(menu==3 && tempoNormal==1 || tempoDoUsuario>=tempoPadrao && tempoDoUsuario<=tempoPadrao*2){
      console.log("Prato pronto, bom apetite!!!");
   }else{
      if(tempoDoUsuario>tempoPadrao*2 && tempoDoUsuario<tempoPadrao*3){
         //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
         console.log("A comida queimou");
      }
      if(tempoDoUsuario<tempoPadrao){
         // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
         console.log("Tempo insuficiente"); 
      }
      if(tempoDoUsuario>=tempoPadrao*3){
         // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem:
         //“kabumm”;
         console.log("Kabumm");
      }
   }

}
if(menu==4){
   tempoPadrao=12;
   console.log("Feijão! Tecle 1 novamente para tempo normal ou digite um tempo:");//Tempo padrão.
   if(menu==4 && tempoNormal==1 || tempoDoUsuario>=tempoPadrao && tempoDoUsuario<=tempoPadrao*2){
      console.log("Prato pronto, bom apetite!!!");
   }else{
      if(tempoDoUsuario>tempoPadrao*2 && tempoDoUsuario<tempoPadrao*3){
         //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
         console.log("A comida queimou");
      }
      if(tempoDoUsuario<tempoPadrao){
         // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
         console.log("Tempo insuficiente"); 
      }
      if(tempoDoUsuario>=tempoPadrao*3){
         // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem:
         //“kabumm”;
         console.log("Kabumm");
      }
   }

}

if(menu==5){
   tempoPadrao=8;
   console.log("Brigadeiro! Tecle 1 novamente para tempo normal ou digite um tempo:");//Tempo padrão.
   if(menu==5 && tempoNormal==1 ||  tempoDoUsuario>=tempoPadrao && tempoDoUsuario<=tempoPadrao*2){
      console.log("Prato pronto, bom apetite!!!");
   }else{
      if(tempoDoUsuario>tempoPadrao*2 && tempoDoUsuario<tempoPadrao*3){
         //Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
         console.log("A comida queimou");
      }
      if(tempoDoUsuario<tempoPadrao){
         // - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
         console.log("Tempo insuficiente"); 
      }
      if(tempoDoUsuario>=tempoPadrao*3){
         // - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem:
         //“kabumm”;
         console.log("Kabumm");
      }
   }

}
else{
   if(menu!=1 && menu!=2 && menu!=3 && menu!=4 && menu!=5){
      // - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
      console.log("Prato inexistente");
   }
}








