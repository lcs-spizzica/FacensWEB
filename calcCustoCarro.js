function calcCustoCarro(){
    console.log("Entrou aqui no calc do carro")

    var custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
	var percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
	var percImpostos = parseFloat(document.getElementById('percImpostos').value);

    var custoFinal = custoFabrica + (custoFabrica * (percDistribuidor/100)) + (custoFabrica * (percImpostos/100))
    
    console.log(custoFinal)

    

    document.getElementById('valorfinal').value = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(custoFinal))
    }

    
