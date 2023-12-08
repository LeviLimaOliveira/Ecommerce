let lista = document.getElementById('lista')

window.addEventListener('load', carregaProdutos);

function carregaProdutos() {

  fetch(`https://run.mocky.io/v3/f1e668a7-04e7-4d46-8e5d-ffbc6e3f8d74`)
  .then((response) => response.json())
  .then(data => {
    data.map((produto) => {
      lista.innerHTML +=
        `<div class="col">
        <div class="card" style="width: 18rem;">
  <img class="img-product" src="${produto.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><strong>${produto.nome}</strong></h5>
    <p class="card-text">${produto.descricao}</p>
    <p class="card-text">${produto.preco}</p>
    <a href="../html/checkout.html"" class="btn btn-primary">Comprar</a>
  </div>
</div>`
    })
  }
  )
}





