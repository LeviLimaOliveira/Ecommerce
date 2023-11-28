let lista = document.getElementById('lista')

const listaProdutos = [
  {
    nome: "Microfone Condensador Profissional",
    descricao: "Microfone de estúdio de alta sensibilidade com cápsula condensadora para gravações precisas.",
    preco: "R$ 800",
    url: '../img/micro.jpg'
  },
  {
    nome: "Monitor de Áudio Estúdio Pro",
    descricao: "Monitor de referência para estúdio com resposta de frequência plana e excelente reprodução sonora.",
    preco: "R$ 1.200",
    url: '../img/img4.jpg'
  },
  {
    nome: "Headphone Monitoramento Studio",
    descricao: "Headphone de monitoramento profissional para mixagem e produção musical com isolamento de ruído.",
    preco: "R$ 300",
    url: "../img/headphone.jpg"
  },
  {
    nome: "Guitarra Elétrica Custom",
    descricao: "Guitarra elétrica custom com captadores de alta performance e acabamento exclusivo.",
    preco: "R$ 1.500",
    url: "https://i.ebayimg.com/images/g/pbgAAOSw5zRk5S4G/s-l1600.jpg"
  },
  {
    nome: "Interface de Áudio USB Avançada",
    descricao: "Interface de áudio USB com pré-amplificadores de alta qualidade para gravações profissionais.",
    preco: "R$ 600",
    url: "../img/focus.jpg"
  },
  {
    nome: "Teclado Controlador MIDI Profissional",
    descricao: "Teclado controlador MIDI com teclas sensíveis à velocidade e controles avançados de expressão.",
    preco: "R$ 700",
    url: "../img/tecmid.jpg"
  },
  {
    nome: "Bateria Eletrônica Compacta",
    descricao: "Bateria eletrônica compacta com pads sensíveis e módulos de som realistas.",
    preco: "R$ 900",
    url: "../img/bat.jpg"
  },
  {
    nome: "Baixo Elétrico de 5 Cordas",
    descricao: "Baixo elétrico de 5 cordas com captadores ativos para graves poderosos e versatilidade sonora.",
    preco: "R$ 1.000",
    url: "../img/bass.jpg"
  },
  {
    nome: "Sintetizador digital PRO",
    descricao: "Sintetizador digital com filtros e modulação avançada para criação de timbres únicos.",
    preco: "R$ 1.200",
    url: "../img/sinte.jpg"
  },
  {
    nome: "Afinador Cromático Digital",
    descricao: "Afinador cromático digital compacto e preciso para instrumentos de corda e sopro.",
    preco: "R$ 50",
    url: "../img/afinador.jpg"
  }
];


function carregar() {
    for (let i = 0; i <= 10; i++) {
        lista.innerHTML +=
        `<div class="col">
        <div class="card" style="width: 18rem;">
  <img class="img-product" src="${listaProdutos[i].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><strong>${listaProdutos[i].nome}</strong></h5>
    <p class="card-text">${listaProdutos[i].descricao}</p>
    <p class="card-text">${listaProdutos[i].preco}</p>
    <a href="#" class="btn btn-primary">Comprar</a>
  </div>
</div>`
    }
}
