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