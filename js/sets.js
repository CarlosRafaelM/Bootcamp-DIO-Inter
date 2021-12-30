const meuArray = [28, 28, 45, 7, 232, 888, 7878, 9];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));