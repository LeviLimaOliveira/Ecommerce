
let numeroCartao = document.getElementById('cardNumero')

numero.addEventListener('keyup', alteraBandeira)

function alteraBandeira() {
 let primeiroNumero = numero.value.substring(0, 1)

  if (primeiroNumero == '4') {
    band.innerHTML = `<img src='../img/visa.png'>`
  } else if (primeiroNumero == '5') {
    band.innerHTML = `<img src='../img/mastercard.png'>`
  }
}

