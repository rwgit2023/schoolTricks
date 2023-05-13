 // Apresenta o 1 numero no campo
 const spot1 = document.getElementById('num1');
 const spot2 = document.getElementById('num2');
 const spot3 = document.getElementById('num3');
 const spot4 = document.getElementById('num4');
 const spot5 = document.getElementById('num5');
 const spot6 = document.getElementById('num6');
 const spot7 = document.getElementById('num7');
 const spot8 = document.getElementById('num8');

 
 // Exibe o valor digitado na tela


 

num1 = (Math.floor(Math.random() * 10) + 1) 
num2 = (Math.floor(Math.random() * 10) + 1)
spot1.textContent = (num1 + '      +      ' +num2 )
var correto1 = num1 + num2

num3 = (Math.floor(Math.random() * 10) + 1) 
num4 = (Math.floor(Math.random() * 10) + 1)
spot2.textContent = (num3 + '      +      ' +num4 )
var correto2 = num3 + num4

num5 = (Math.floor(Math.random() * 10) + 1) 
num6 = (Math.floor(Math.random() * 10) + 1)
spot3.textContent = (num5 + '      +      ' +num6 )
var correto3 = num5 + num6

num7 = (Math.floor(Math.random() * 10) + 1) 
num8 = (Math.floor(Math.random() * 10) + 1)
spot4.textContent = (num7 + '      +      ' +num8 )
var correto4 = num7 + num8

num9 = (Math.floor(Math.random() * 10) + 1) 
num10 = (Math.floor(Math.random() * 10) + 1)
spot5.textContent = (num9 + '      +      ' +num10 )
var correto5 = num9 + num10

num11 = (Math.floor(Math.random() * 10) + 1) 
num12 = (Math.floor(Math.random() * 10) + 1)
spot6.textContent = (num11 + '      +      ' +num12 )
var correto6 = num11 + num12

num13 = (Math.floor(Math.random() * 10) + 1) 
num14 = (Math.floor(Math.random() * 10) + 1)
spot7.textContent = (num13 + '      +      ' +num14 )
var correto7 = num13 + num14

num15 = (Math.floor(Math.random() * 10) + 1) 
num16 = (Math.floor(Math.random() * 10) + 1)
spot8.textContent = (num15 + '      +      ' +num16 )
var correto8 = num15 + num16

i = 0

// Captura resultados digitados

//  -------------------------------------------------------------------------------------------
// 



const botaoEnviar = document.querySelector('.calcular')
const mario = document.getElementById("mario");
const modal = document.querySelector(".modal");
console.log(mario.src)
const imagemMario = mario.src;
const respostaC = document.getElementById('menssage');


botaoEnviar.addEventListener('click', function(event) {
  console.log("Cliquei no enviar")
  event.preventDefault();
  modal.classList.add("aberto");
  const resultado = document.getElementById('menssage');
  // imagemMario.setAttribute("src", imagemMario);

  resultado1 = document.querySelector('#resp1_1').value;
  resultado2 = document.querySelector('#resp2_2').value;
  resultado3 = document.querySelector('#resp3_3').value;
  resultado4 = document.querySelector('#resp4_4').value;
  resultado5 = document.querySelector('#resp5_5').value;
  resultado6 = document.querySelector('#resp6_6').value;
  resultado7 = document.querySelector('#resp7_7').value;
  resultado8 = document.querySelector('#resp8_8').value;

  let lista1 = []
  lista1.push(correto1, correto2, correto3, correto4, correto5, correto6, correto7, correto8)
  console.log('Respostas Corretas:', lista1)
  
  lista2 = []
  lista2.push(resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7, resultado8)
  console.log('Respostas:',lista2)
  
  lista_erros = []
  lista_acertos = []

  let i = 0;
  

let pontuacao = 0;

for (let i = 0; i < lista1.length; i++) {
  if (lista1[i] == lista2[i]) {
    pontuacao++;
    lista_acertos.push(lista1[i])
  } else {
    lista_erros.push(lista1[i])
  }
}

  if (pontuacao == 8){
    respostaC.textContent = ('Meus parabéns!!! Você acertou tudo.')
  }

  else if(pontuacao > 4){

    respostaC.textContent = ('Você foi muito bem, continue assim!')
  }

  else{
    respostaC.textContent = ('Meu garoto você esta quase lá.   Tente mais uma vez.')
  }

  console.log('Você obteve: ',pontuacao); 
  console.log('Você acertou as questões: ', lista_acertos)
  console.log('Você errou as questões: ', lista_erros)

  

  resp1_1.value = ' ';
  resp2_2.value = ' ';
  resp3_3.value = ' ';
  resp4_4.value = ' ';
  resp5_5.value = ' ';
  resp6_6.value = ' ';
  resp7_7.value = ' ';
  resp8_8.value = ' ';
  



})















