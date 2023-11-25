let lista = document.getElementById('lista')

const listaProdutos = [
  {
    nome: "Microfone Condensador Profissional",
    descricao: "Microfone de estúdio de alta sensibilidade com cápsula condensadora para gravações precisas.",
    preco: "R$ 800",
    url: "https://m.media-amazon.com/images/I/61SpooO4KcL._AC_SL1000_.jpg"
  },
  {
    nome: "Monitor de Áudio Estúdio Pro",
    descricao: "Monitor de referência para estúdio com resposta de frequência plana e excelente reprodução sonora.",
    preco: "R$ 1.200",
    url: "https://m.media-amazon.com/images/I/71F8l6+4EyL._AC_SL1400_.jpg"
  },
  {
    nome: "Headphone Monitoramento Studio",
    descricao: "Headphone de monitoramento profissional para mixagem e produção musical com isolamento de ruído.",
    preco: "R$ 300",
    url: "https://m.media-amazon.com/images/I/71HlB-gf46L._AC_SL1500_.jpg"
  },
  {
    nome: "Guitarra Elétrica Customizada",
    descricao: "Guitarra elétrica customizada com captadores de alta performance e acabamento exclusivo.",
    preco: "R$ 1.500",
    url: "https://i.ebayimg.com/images/g/pbgAAOSw5zRk5S4G/s-l1600.jpg"
  },
  {
    nome: "Interface de Áudio USB Avançada",
    descricao: "Interface de áudio USB com pré-amplificadores de alta qualidade para gravações profissionais.",
    preco: "R$ 600",
    url: "https://m.media-amazon.com/images/I/512LHcdM7gL._AC_SL1500_.jpg"
  },
  {
    nome: "Teclado Controlador MIDI Profissional",
    descricao: "Teclado controlador MIDI com teclas sensíveis à velocidade e controles avançados de expressão.",
    preco: "R$ 700",
    url: "https://m.media-amazon.com/images/I/51eTCqKJlLS._AC_SL1080_.jpg"
  },
  {
    nome: "Bateria Eletrônica Compacta",
    descricao: "Bateria eletrônica compacta com pads sensíveis e módulos de som realistas.",
    preco: "R$ 900",
    url: "https://m.media-amazon.com/images/I/51t3Utd1ECL._AC_SL1000_.jpg"
  },
  {
    nome: "Baixo Elétrico de 5 Cordas",
    descricao: "Baixo elétrico de 5 cordas com captadores ativos para graves poderosos e versatilidade sonora.",
    preco: "R$ 1.000",
    url: "https://m.media-amazon.com/images/I/51ZQFR7Tb9L._AC_SL1000_.jpg"
  },
  {
    nome: "Sintetizador Analógico Vintage",
    descricao: "Sintetizador analógico com filtros vintage e modulação avançada para criação de timbres únicos.",
    preco: "R$ 1.200",
    url: "https://media.istockphoto.com/id/96753422/pt/foto/korg-ms20-sintetizador-retro-anal%C3%B3gico.jpg?s=1024x1024&w=is&k=20&c=4ufN9YSQe_TuhSflvyX3BVC7_VEwc-avRcu9aZ4FMUI="
  },
  {
    nome: "Afinador Cromático Digital",
    descricao: "Afinador cromático digital compacto e preciso para instrumentos de corda e sopro.",
    preco: "R$ 50",
    url: "https://m.media-amazon.com/images/I/71Yir8cZYGL._AC_SL1500_.jpg"
  }
];


function carregar() {
    for (let i = 1; i <= 10; i++) {
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
