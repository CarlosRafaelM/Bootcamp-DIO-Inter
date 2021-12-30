function calculadora() {
    const operacao = prompt('Escolha uma Operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*) \n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)')

    let n1 = Number(prompt('Insita o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado;

    if (!n1 || !n2){
        alert("Erro - Parametros Invalidos")
        calculadora();
    } else {
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaoreal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }
        function divisaointeira() {
            resultado = n1 % n2;
            alert(`O resto da vivisão entre ${n1} e ${n2} = ${resultado}`)
            novaOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2}ª é igual a = ${resultado}`)
            novaOperacao();
        }
        function novaOperacao() {
            let opcao = prompt(`Deseja fazer outra operação?\n 1 - sim\n 2 - não`)
        
            if (opcao == 1){
                calculadora();
            } 
            else if (opcao == 2){
                alert('Até Mais')
            } 
            else {
                alert('Digite uma opção válida!')
                novaOperacao();
            }
        }
    
        /*if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoreal();
        } else if (operacao == 5) {
            divisaointeira();
        } else if (operacao == 6) {
            potenciacao();
        }*/

        switch (operacao){
            case 1:
                soma();
                break
            case 2:
                subtracao();
                break
            case 3:
                multiplicacao();
                break
            case 4:
                 divisaoreal();
                break
            case 5:
                divisaointeira();
                break
            case 6:
                potenciacao();
                break
        }
    }

}
calculadora();