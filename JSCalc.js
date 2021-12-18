let N1 = 0;
let N2 = 0;
let Flag = true;
let Flag2 = true;
let Signo = '';
let ResultadoActual = 0;
const Resultado = document.querySelector('.Res');

document.querySelector('.Btns-Calc').addEventListener('click',function(event){
    const Valor = event.target.innerText
    if (Valor == 0 || Valor == 1 || Valor == 2 || Valor == 3 || Valor == 4 || Valor == 5 || Valor == 6 || Valor == 7 || Valor == 8 || Valor == 9){
        NumPresionado(Valor);
    } else if (Valor === '%' || Valor === 'X' || Valor === '-' || Valor === '+'){
        QSignoEs(Valor);
    } else if (Valor === 'C'){
        Resultado.innerText = 0;
        Reset();
    } else if (Valor === '←') {
        Resultado.innerText = Resultado.innerText.slice(0,-1);
    } else if (Valor === '='){
        N2 = parseInt(Resultado.innerText);
        N1 = Igual(N1,N2,Signo);
        Resultado.innerText = N1;
    }
});

function NumPresionado(Numero){
        if (!Flag){
            Resultado.innerText = '0';
        }
        if (Resultado.innerText == 0){
            Resultado.innerText = Numero;
        } else {
            Resultado.innerText += Numero
        }
}

function QSignoEs(Sig){
    if (Flag){
        Flag = false;
        N1 = parseInt(Resultado.innerText);
        Resultado.innerText = '0';
    } else {
        N2 = parseInt(Resultado.innerText);
        N1 = Igual(N1,N2,Signo);
        Resultado.innerText = N1;
    }
    Signo = Sig;
}

function Igual(Numero1,Numero2,Sig){
    Flag2 = false;
    switch(Sig){
        case '%':
            if (Numero2 != 0){
                return Numero1 / Numero2;
            }
            break;
        case 'X':
            return Numero1 * Numero2;
            break;
        case '-':
            return Numero1-Numero2;
            break;
        case'+':
            return Numero1+Numero2;
            break;
    }
}

function Reset(){
    Flag = true; Flag2 = true; N1 = 0; N2 = 0; Signo = ''; 
    Resultado.innerText = '0';
}