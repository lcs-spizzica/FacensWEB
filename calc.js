
function calculadora(){
    console.log("Entrou aqui na calc")
    var select = document.getElementById('lista');
	var value = select.options[select.selectedIndex].value;
	console.log(value);
    console.log(typeof(value))
    var num1 = parseFloat(document.getElementById('number1').value)
    var num2 = parseFloat(document.getElementById('number2').value)
    var resultado;
    switch (value) {
        case '1':
            resultado = num1 + num2
            break;
        case '2':
            resultado = num1 - num2
            break;
        case '3':
            resultado = num1 * num2
            break;
        case '4':
            resultado = num1 / num2
            break;
            
    
        default:
            break;
    }

    document.getElementById('resultadoCalc').value = resultado
}