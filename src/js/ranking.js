// Dados de exemplo (nomes e porcentagens)
var dados = [
    { nome: "Ronan", porcentagem: 30 },
    { nome: "Kely", porcentagem: 50 },
    { nome: "Enzo", porcentagem: 45 },
    { nome: "Jubileu", porcentagem: 33 },
    { nome: "Persival", porcentagem: 45 },
    { nome: "Jurivaldo", porcentagem: 67 },
    { nome: "Raimundo", porcentagem: 48 },
    { nome: "Isolina", porcentagem: 13 }
    // Adicione quantos itens desejar
  ];
  
  
  // Função para gerar as barras de acordo com os dados
  function gerarBarras() {
    var ranking = document.getElementById("ranking");
  
    for (var i = 0; i < dados.length; i++) {
      var item = dados[i];
  
      var barra = document.createElement("div");
      barra.className = "barra";
  
      var nome = document.createElement("div");
      nome.className = "nome";
      nome.textContent = item.nome;
  
      var porcentagem = document.createElement("div");
      porcentagem.className = "porcentagem";
      porcentagem.style.width = item.porcentagem + "%";
  
      barra.appendChild(nome);
      barra.appendChild(porcentagem);
  
      ranking.appendChild(barra);
    }
  }
  
  // Chamada da função para gerar as barras
  gerarBarras();