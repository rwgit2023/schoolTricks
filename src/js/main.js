const botaoEnviar = document.querySelector('.enviar')

const professora = document.getElementById("professora");
const modal = document.querySelector(".modal");
console.log(professora.src)




botaoEnviar.addEventListener('click', function(event) {

    event.preventDefault();

// botaoEnviar.addEventListener("click",() =>{

    
    console.log("Cliquei no enviar")


    modal.classList.add("aberto");
    professora.setAttribute("src", linkImagem);

    // Seleciona o valor do campo de entrada de texto
    const valorNomeDigitado = document.querySelector('#nome_sobrenome').value;
    // Seleciona o valor do campo de entrada de texto
    const valoIidadeDigitado = document.getElementById('idade');
    // Seleciona o elemento de exibição de resultado
    const resultado = document.getElementById('resultado');
    
    // Exibe o valor digitado na tela
    resultado.textContent = `Olá ${valorNomeDigitado}, você quer participar do meu desafio? Tenho certeza que vai arrazar`;
    console.log(resultado)
})

  
  

  
  

  
  

  
  
  