let numero = document.getElementById('numero')

let bandeira = document.getElementById('bandeira')

function alteraCartao() {
    if (numero.value.substr(0, 1) == '4') {
        bandeira.innerHTML = `<img src="img/mastercard.png" alt="">`
        
    } else if (numero.value.substr(0, 1) == '5') {
        bandeira.innerHTML = `<img src="img/visa.png" alt="">`
    } else {
        bandeira.innerHTML = "bandeira"
    }
};

let mes = document.getElementById('mes')

let meses = [
    {
    'id': '01', 
    'nome': 'Janeiro'
    },
    {
        'id': '02', 
        'nome': 'Fevereiro'
    },
    {
        'id': '03', 
        'nome': 'Março'
    },
    {
        'id': '04', 
        'nome': 'Abril'
    },
    {
        'id': '05', 
        'nome': 'Maio'
    },
    {
        'id': '06', 
        'nome': 'Junho'
    },
    {
        'id': '07', 
        'nome': 'Julho'
    },
    {
        'id': '08', 
        'nome': 'Agosto'
    },
    {
        'id': '09', 
        'nome': 'Setembro'
    },
    {
        'id': '10', 
        'nome': 'Outubro'
    },
    {
        'id': '11', 
        'nome': 'Novenmbro'
    },
    {
        'id': '12', 
        'nome': 'Dezembro'
    },
]

for (let i = 0; i <= 11; i++) {

    mes.innerHTML += `<option value=0 ${meses[i].id}>${meses[i].nome}</option>`
}

let ano = document.getElementById('ano')

let anoAtual = new Date().getFullYear();

ano.innerHTML += `<option value=${anoAtual}>${anoAtual}</option>`;

for (let i = 0; i < 10; i++) {
    anoAtual++
    ano.innerHTML += `<option value=${anoAtual}>${anoAtual}</option>`
}




