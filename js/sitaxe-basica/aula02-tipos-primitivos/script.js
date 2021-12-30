/*tipos primitivos

//boleanos
var vOuF = false;
console.log(typeof(vOuF));

//nunber
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = "Rafael";
console.log(typeof(nome));

//vairavel guarda valores que podem ser alterados
//como declarar vairavel 

var variavel = "Rafael";
variavel = "Carlos";
console.log(variavel);

let variavel2 = "Teste";
variavel2 = "Testado";
console.log(variavel2);


//constante não pode ser alterada
const constante = "Rafael";
constante = "Carlos";
console.log(constante)

var escopoGlobal = "Global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "Local";
    console.log(escopoLocalInterno);
}

escopoLocal();*/

//Comparação (resultado verdadeiro pois tem o mesmo valor)
var comp = "0" == 0;
console.log(comp);

//Comparação Identica (resultado falso pois não são do mesmo tipo)
var comp_i = "0" === 0;
console.log(comp_i);
