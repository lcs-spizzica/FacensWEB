var arrayNum = [1,2,3,4,5,6,7,8,9,10]
var filtrados = []

function filtrarNum(num) {
   if (num%2 == 0){
    filtrados.push(num)
   }
   
}

function botaoFiltrar(){
    arrayNum.forEach(filtrarNum)
   alert("Saída dos pares: " + filtrados)
}
