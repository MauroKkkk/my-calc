function atualizarDisplay(valor){
    var display = document.getElementById("display");
    display.value += valor;
}

function limparDisplay(){
    document.getElementById('display').value = '';
}

function calcularOperacao(){
    var display = document.getElementById("display");
    document.getElementById("display").value = eval(display.value);
}

function raizQuadrada(){
    const raiz = document.getElementById('display');
    const resultado = Math.sqrt(display.value);
    display.value = resultado;
}