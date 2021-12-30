//Estruturas de Decisão
/*
var jogador1 = 0;
var jogador2 = 0;
var placar;

//if trenário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores invalidos');

if (jogador1 > 0 && jogador2 ==0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
else if (jogador2 > 0 && jogador1 ==0) {
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1;
}
else {
    console.log('Ninguem marcou ponto');
}

switch (placar) {
    case palcar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('Ninguem ganhou')    
} */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',}

/* for - executa uma instrução até que seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}*/

/* for/in - executa repetição a partir de uma propriedade
for (let i in array) {
    console.log(i);
}

for (i in object){
    console.log(i);
} */

/* for/of - repetição a partir de um valor
 for (i of array) {
     console.log(i);
 } */

 var a = 0;

 while (a < 10) {
    a++;
    console.log(a);
 }

 do {
     a++;
     console.log(a);
    
 } while (a < 10);