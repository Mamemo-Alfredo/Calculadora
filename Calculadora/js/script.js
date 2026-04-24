let input = document.querySelector('input');
let ultimo_carac;

function adicionar(numero) {
    ultimo_carac = input.value[input.value.length - 1];

    if ((input.value == 0) && (numero == 0)) {
        input.value = 0;
    } else if ((input.value == 0) && (numero != 0)) {
        if ((numero == '.') || (numero == '+') || (numero == '-') || (numero == '*') || (numero == '/')) {
            input.value = '0' + numero;
        }else {
            input.value = numero;
        }
    }else {
        if ((ultimo_carac == '.') || (ultimo_carac == '+') || (ultimo_carac == '-') || (ultimo_carac == '*') || (ultimo_carac == '/')) {
            if ((numero == '.') || (numero == '+') || (numero == '-') || (numero == '*') || (numero == '/')) {
                alert("Erro");
            }else {
                input.value += numero;
            }
        }else {
            input.value += numero;
        }
    }
}

function limpar() {
    input.value = 0;
}

function apagar_1() {
    input.value = input.value.slice(0, -1);
    if (input.value == '') {
        input.value = 0;
    }
}

function resultado() {
    let resultado;
    try {
        resultado = eval(input.value);
        if (resultado == 'Infinity') {
            input.value = 'infinito';
        }else {
            input.value = resultado;
        }
    } catch {
        input.value = 'Erro';
    }
}
