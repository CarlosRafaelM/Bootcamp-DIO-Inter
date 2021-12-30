const alunos = [
    {
        nome: 'Waleska',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Rafael',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Gabriel',
        nota: 6,
        turma: '2c'
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i];

        if(nota <= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));