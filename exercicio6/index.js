function Pessoa(nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
}

var pessoas = new Array()


function adicionar() {
    // seperando as variaveis para salvar no array de pessoas
    let nomeInput = document.getElementById('nome').value
    let emailInput = document.getElementById('email').value
    let telInput = document.getElementById('telefone').value

    console.log("Variaveis teste: " + nomeInput, emailInput, telInput)

    let pessoa = new Pessoa(nomeInput, emailInput, telInput)

    // inserindo o objeto no array de pessoas
    pessoas.push(pessoa)
    console.log(pessoas)
    atualizar()
}

function atualizar() {
    tbody.innerHTML = ''
    for (let i = 0; i < pessoas.length; i++) {

        var tr = document.createElement('tr')
        var td1 = document.createElement('td')
        var td2 = document.createElement('td')
        var td3 = document.createElement('td')

        var txt1 = document.createTextNode(pessoas[i].nome)
        var txt2 = document.createTextNode(pessoas[i].email)
        var txt3 = document.createTextNode(pessoas[i].telefone)

        td1.appendChild(txt1)
        td2.appendChild(txt2)
        td3.appendChild(txt3)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)

        tbody.appendChild(tr)
        document.getElementById('nome').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telefone').value = '';
        
    }


}

function atualizarTabela() {
    var tbody = document.getElementById('tbody')
    var qtdeLinhas = 0
    tbody.innerHTML = ''
}

function salvarUsuario() {    
    pessoas.forEach(function (qqcoisa) {
        fetch('https://63055f77dde73c0f8445a3b9.mockapi.io/UsuarioExercicio', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(qqcoisa)
        }).then((response) => response.json())
        .then((data) => {
            console.log('Salvo com sucesso!');
            window.alert("Lista salva com sucesso!!")
            atualizarTabela();
        })
        .catch((error) => {
            console.error('Error ao salvar');
        })
    })
}


