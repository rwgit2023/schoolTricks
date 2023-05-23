// Apresenta o 1 numero no campo
const spot1 = document.getElementById('num1');
const spot2 = document.getElementById('num2');
const spot3 = document.getElementById('num3');
const spot4 = document.getElementById('num4');
const spot5 = document.getElementById('num5');
const spot6 = document.getElementById('num6');
const spot7 = document.getElementById('num7');
const spot8 = document.getElementById('num8');
const spot9 = document.getElementById('num9');
const spot10 = document.getElementById('num10');


// Exibe o valor digitado na tela




num1 = (Math.floor(Math.random() * 11) + 10)
num2 = (Math.floor(Math.random() * 10) + 1)
spot1.textContent = (num1 + '      -     ' + num2)
// spot1.innerHTML = '';
var correto1 = num1 - num2
// num1 = parseInt(input.value);
// for (let i = 0; i < num1; i++) {
// const img = document.createElement("img");
// img.src = "./src/imagens/testefull.png";
// imagens.appendChild(img);
// }


num3 = (Math.floor(Math.random() * 11) + 10)
num4 = (Math.floor(Math.random() * 10) + 1)
spot2.textContent = (num3 + '      -      ' + num4)
var correto2 = num3 - num4

num5 = (Math.floor(Math.random() * 11) + 10)
num6 = (Math.floor(Math.random() * 10) + 1)
spot3.textContent = (num5 + '      -      ' + num6)
var correto3 = num5 - num6

num7 = (Math.floor(Math.random() * 11) + 10)
num8 = (Math.floor(Math.random() * 10) + 1)
spot4.textContent = (num7 + '      -      ' + num8)
var correto4 = num7 - num8

num9 = (Math.floor(Math.random() * 11) + 10)
num10 = (Math.floor(Math.random() * 10) + 1)
spot5.textContent = (num9 + '      -      ' + num10)
var correto5 = num9 - num10

// num11 = (Math.floor(Math.random() * 10) + 1)
// num12 = (Math.floor(Math.random() * 10) + 1)
// spot6.textContent = (num11 + '      +      ' + num12)
// var correto6 = num11 + num12

// num13 = (Math.floor(Math.random() * 10) + 1)
// num14 = (Math.floor(Math.random() * 10) + 1)
// spot7.textContent = (num13 + '      +      ' + num14)
// var correto7 = num13 + num14

// num15 = (Math.floor(Math.random() * 10) + 1)
// num16 = (Math.floor(Math.random() * 10) + 1)
// spot8.textContent = (num15 + '      +      ' + num16)
// var correto8 = num15 + num16

// num17 = (Math.floor(Math.random() * 10) + 1)
// num18 = (Math.floor(Math.random() * 10) + 1)
// spot9.textContent = (num17 + '      +      ' + num18)
// var correto9 = num17 + num18

// num19 = (Math.floor(Math.random() * 10) + 1)
// num20 = (Math.floor(Math.random() * 10) + 1)
// spot10.textContent = (num19 + '      +      ' + num20)
// var correto10 = num19 + num20

i = 0

// Captura resultados digitados

//  -------------------------------------------------------------------------------------------
// 



const botaoEnviar = document.querySelector('.calcular')
const botaoLimpar = document.querySelector('.limpar')
const mario = document.getElementById("mario");
const modal = document.querySelector(".modal");
console.log(mario.src)
const imagemMario = mario.src;
const respostaC = document.getElementById('menssage');


botaoEnviar.addEventListener('click', function (event) {
  console.log("Cliquei no enviar")
  event.preventDefault();
  modal.classList.add("aberto");
  const resultado = document.getElementById('menssage');
  botaoEnviar.classList.add('ocultar')
  botaoLimpar.style.display = "inline-block";
  // imagemMario.setAttribute("src", imagemMario);

  resultado1 = document.querySelector('#resp1');
  resultado2 = document.querySelector('#resp2');
  resultado3 = document.querySelector('#resp3');
  resultado4 = document.querySelector('#resp4');
  resultado5 = document.querySelector('#resp5');
  // resultado6 = document.querySelector('#resp6');
  // resultado7 = document.querySelector('#resp7');
  // resultado8 = document.querySelector('#resp8');
  // resultado9 = document.querySelector('#resp9');
  // resultado10 = document.querySelector('#resp10');

  // for (let i = 1; i <= 8; i++){
  // resultado[i] = document.getElementById('resp[i]');
  // lista1.push(correto[i]);
  // lista2.push(resultado[i].value)
  // }


  let lista1 = []
  lista1.push(correto1, correto2, correto3, correto4, correto5)
    // , correto6, correto7, correto8, correto9, correto10)
  console.log('Respostas Corretas:', lista1)

  let lista2 = []
   lista2.push(resultado1.value, resultado2.value, resultado3.value, resultado4.value, resultado5.value) //resultado6.value, resultado7.value, resultado8.value, resultado9.value, resultado10.value)
  console.log('Respostas:', lista2)

  let listap = []
  listap.push(resultado1, resultado2, resultado3, resultado4, resultado5)
  // , resultado6, resultado7, resultado8, resultado9, resultado10)
  console.log('LISTA DOIDA', listap)


  lista_erros = []
  lista_acertos = []


  // lista_posicao[1].classList.remove('red')
  // listap[1].classList.add('red')
  // 
  let pontuacao = 0;

  for (let i = 0; i < lista1.length; i++) {
    if (lista1[i] == lista2[i]) {
      pontuacao++;
      listap[i].classList.add('green')
      lista_acertos.push(lista1[i])

    } else {
      listap[i].classList.add('red')

      lista_erros.push(lista1[i])
    }
  }

  console.log(pontuacao)

  if (pontuacao == 5) {
    respostaC.textContent = ('Meus parabéns!!! Você acertou tudo.')
  }

  else if (pontuacao > 3) {

    respostaC.textContent = ('Você foi muito bem, continue assim!')
  }

  else {
    respostaC.textContent = ('Você esta quase lá.   Tente mais uma vez.')
  }

  console.log('Você obteve: ', pontuacao);
  console.log('Você acertou as questões: ', lista_acertos)
  console.log('Você errou as questões: ', lista_erros)

})

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------














botaoLimpar.addEventListener('click', function (event) {
  console.log("Cliquei no limpar")
  event.preventDefault();
  // modal.classList.add("ocultar");


  resp1.value = ' ';
  resp2.value = ' ';
  resp3.value = ' ';
  resp4.value = ' ';
  resp5.value = ' ';
  // resp6.value = ' ';
  // resp7.value = ' ';
  // resp8.value = ' ';
  // resp9.value = ' ';
  // resp10.value = ' ';

  resultado1.classList.remove('green','red')
  resultado2.classList.remove('green','red')
  resultado3.classList.remove('green','red')
  resultado4.classList.remove('green','red')
  resultado5.classList.remove('green','red')
  // resultado6.classList.remove('green','red')
  // resultado7.classList.remove('green','red')
  // resultado8.classList.remove('green','red')
  // resultado9.classList.remove('green','red')
  // resultado10.classList.remove('green','red')


  botaoEnviar.classList.add('aberto')
  botaoLimpar.classList.add('ocultar')
  



  





})





