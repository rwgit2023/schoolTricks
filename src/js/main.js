const botaoEnviar = document.querySelector('.enviar')



const professora = document.getElementById("professora");
const modal = document.querySelector(".modal");
console.log(professora.src)
const imagemProfessora = professora.src;





botaoEnviar.addEventListener('click', function(event) {

    event.preventDefault();

// botaoEnviar.addEventListener("click",() =>{
    console.log("Cliquei no enviar")


    modal.classList.add("aberto");
    professora.setAttribute("src", imagemProfessora);

    // Seleciona o valor do campo de entrada de texto
    const valorNomeDigitado = document.querySelector('#nome_sobrenome').value;
    // Seleciona o valor do campo de entrada de texto
    const valoIidadeDigitado = document.getElementById('idade');
    // Seleciona o elemento de exibição de resultado
    setLocalStorageValue(CURRENTUSER,  valorNomeDigitado.toString())
    const resultado = document.getElementById('menssage');

    
    // Exibe o valor digitado na tela
    resultado.textContent = 'Olá ' + valorNomeDigitado +'. Escolha uma das opções acima Mario - Dinossauro - Galaxia.   Bom jogo!!!';
    console.log(resultado)

    nome_sobrenome.value = ''
    idade.value = ''
})

  
  

  
  

  
  

  
  
  