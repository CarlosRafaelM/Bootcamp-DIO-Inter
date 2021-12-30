function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.name} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    name: 'Waleska',
    idade: 55
}
const pessoa2 = {
    name: 'Gabriel',
    idade: 13
}
const animal = {
    name: 'Luna',
    idade: 3,
    raca: 'Bigoulata'
};

console.log(calculaIdade.call(animal, 30));
console.log(calculaIdade.apply(pessoa1, [4]));