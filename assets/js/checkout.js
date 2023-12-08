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

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de eventos para o input 'numero'
    var numeroInput = document.getElementById('numero');
    numeroInput.addEventListener('input', function() {
      // Obtém o valor digitado no input 'numero' e remove caracteres não numéricos
      var numeroDigitado = numeroInput.value.replace(/\D/g, '');

      if (numeroDigitado === '') {
        numeroDigitado = '0000000000000000';
      }
  
      // Limita o número de dígitos a 16
      numeroDigitado = numeroDigitado.slice(0, 16);
  
      // Formata o valor como um número de cartão de crédito
      numeroDigitado = numeroDigitado.replace(/(\d{4})/g, '$1 ').trim();
  
      // Atualiza o conteúdo na div 'cardNumero'
      var cardNumero = document.getElementById('cardNumero');
      cardNumero.textContent = numeroDigitado;
    });
  
    // Adiciona um ouvinte de eventos para o evento "keydown" para impedir a entrada de não números
    numeroInput.addEventListener('keydown', function(e) {
      // Permite apenas números e as teclas de controle (por exemplo, backspace, delete)
      if (!(e.key === 'Backspace' || e.key === 'Delete' || (e.key >= '0' && e.key <= '9'))) {
        e.preventDefault();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um ouvinte de eventos para o input 'Titular'
    var titularInput = document.getElementById('Titular');
    titularInput.addEventListener('input', function() {
      // Obtém o valor digitado no input 'Titular' e remove caracteres não alfabéticos
      var nomeDigitado = titularInput.value.replace(/[^a-zA-ZÀ-ÿ ]/g, '');

      if (nomeDigitado === '') {
        nomeDigitado = 'NOME DO TITULAR';
      }
      // Atualiza o conteúdo na div 'cardNome'
      var cardNome = document.getElementById('cardNome');
      cardNome.textContent = nomeDigitado.toUpperCase();
    });
  
    // Adiciona um ouvinte de eventos para o evento "keydown" no input 'Titular' para impedir a entrada de números
    titularInput.addEventListener('keydown', function(e) {
      // Permite apenas letras e espaços
      if (!((e.key >= 'A' && e.key <= 'Z') || (e.key >= 'a' && e.key <= 'z') || e.key === ' ')) {
        e.preventDefault();
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {

    // Adiciona ouvintes de eventos para os inputs 'mes' e 'ano'
    var mesInput = document.getElementById('mes');
    var anoInput = document.getElementById('ano');

    mesInput.addEventListener('change', function() {
      atualizaMesAno();
      alteraCartao(); // Adiciona essa linha para atualizar a bandeira quando o mês é alterado
    });

    anoInput.addEventListener('change', function() {
      atualizaMesAno();
      alteraCartao(); // Adiciona essa linha para atualizar a bandeira quando o ano é alterado
    });

    function atualizaMesAno() {
      var mesSelecionado = mesInput.selectedIndex;
      var anoSelecionado = anoInput.value.slice(-2); // Pega os dois últimos dígitos do ano

      // Adiciona um zero à esquerda se o mês for menor que 10
      var mesFormatado = (mesSelecionado).toString().padStart(2, '0');

      var mesanoDiv = document.getElementById('mesano');
      mesanoDiv.textContent = mesFormatado + '/' + anoSelecionado;
    }
});

document.addEventListener('DOMContentLoaded', function () {
  var cvcInput = document.getElementById('cvc');
  var frenteDiv = document.getElementById('frente');
  var versoDiv = document.getElementById('verso');

  cvcInput.addEventListener('input', function () {
    // Substituir não números por uma string vazia
    cvcInput.value = cvcInput.value.replace(/\D/g, '');

    // Limitar o comprimento a 3 caracteres
    cvcInput.value = cvcInput.value.slice(0, 3);

    // Atualizar o conteúdo do verso com o que está sendo digitado
    versoDiv.innerText = cvcInput.value;
  });

  cvcInput.addEventListener('focus', function () {
    // Quando o input CVC recebe foco, oculte a frente e mostre o verso
    frenteDiv.style.display = 'none';
    versoDiv.style.display = 'block';
  });

  cvcInput.addEventListener('blur', function () {
    // Quando o input CVC perde foco, volte a mostrar a frente e ocultar o verso
    frenteDiv.style.display = 'block';
    versoDiv.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var cpfInput = document.getElementById('cpf');

  cpfInput.addEventListener('input', function () {
    // Substituir não números por uma string vazia
    cpfInput.value = cpfInput.value.replace(/\D/g, '');

    // Limitar o comprimento a 11 dígitos
    cpfInput.value = cpfInput.value.slice(0, 11);
  });
});





  

