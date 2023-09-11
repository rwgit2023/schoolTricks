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

num1 = (Math.floor(Math.random() * 10) + 1)
num2 = (Math.floor(Math.random() * 10) + 1)
spot1.textContent = (num1 + '      +      ' + num2)
var correto1 = num1 + num2


num3 = (Math.floor(Math.random() * 10) + 1)
num4 = (Math.floor(Math.random() * 10) + 1)
spot2.textContent = (num3 + '      +      ' + num4)
var correto2 = num3 + num4

num5 = (Math.floor(Math.random() * 10) + 1)
num6 = (Math.floor(Math.random() * 10) + 1)
spot3.textContent = (num5 + '      +      ' + num6)
var correto3 = num5 + num6

num7 = (Math.floor(Math.random() * 10) + 1)
num8 = (Math.floor(Math.random() * 10) + 1)
spot4.textContent = (num7 + '      +      ' + num8)
var correto4 = num7 + num8

num9 = (Math.floor(Math.random() * 10) + 1)
num10 = (Math.floor(Math.random() * 10) + 1)
spot5.textContent = (num9 + '      +      ' + num10)
var correto5 = num9 + num10

i = 0


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
  modal.className = "aberto";
  const resultado = document.getElementById('menssage');
  botaoEnviar.classList.add('ocultar')
  botaoLimpar.style.display = "inline-block";


  resultado1 = document.querySelector('#resp1');
  resultado2 = document.querySelector('#resp2');
  resultado3 = document.querySelector('#resp3');
  resultado4 = document.querySelector('#resp4');
  resultado5 = document.querySelector('#resp5');


  let lista1 = []
  lista1.push(correto1, correto2, correto3, correto4, correto5)
  console.log('Respostas Corretas:', lista1)

  let lista2 = []
  lista2.push(resultado1.value, resultado2.value, resultado3.value, resultado4.value, resultado5.value)
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


  let user = {
    nome: "",
    pontos: []
  }

  // console.log(user)

  user.nome = getLocalStorageValue(CURRENTUSER)
  user.pontos.push(pontuacao)

  console.log(user)

  let userList = getLocalStorageValue(USER_LIST);
  
  if (userList == null) {
    setLocalStorageValue(USER_LIST, JSON.stringify([user]))
  }
  else {
    let json = JSON.parse(userList);
    let userFromStorage = json.find((element) => element.nome == getLocalStorageValue(CURRENTUSER))
    // lista[0] -> é um objeto jogador
    // lista[ na pos. do index do cara na própria lista ]  
    if (userFromStorage == undefined) {
      json.push(user);
    }
    else {
      let pos = json[json.indexOf(userFromStorage)];
      console.log(pos)
      userFromStorage.pontos.push(pontuacao);
    }

    setLocalStorageValue(USER_LIST, JSON.stringify(json));
  }

  console.warn(getLocalStorageValue(USER_LIST))

  /*
    console.log('Você obteve: ', pontuacao);
    console.log('Você acertou as questões: ', lista_acertos)
    console.log('Você errou as questões: ', lista_erros)
  */

})

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------


botaoLimpar.addEventListener('click', function (event) {
  console.log("Cliquei no limpar")
  event.preventDefault();

  resp1.value = ' ';
  resp2.value = ' ';
  resp3.value = ' ';
  resp4.value = ' ';
  resp5.value = ' ';

  resultado1.classList.remove('green', 'red')
  resultado2.classList.remove('green', 'red')
  resultado3.classList.remove('green', 'red')
  resultado4.classList.remove('green', 'red')
  resultado5.classList.remove('green', 'red')


  botaoEnviar.classList.add('aberto')
  botaoLimpar.classList.add('ocultar')



  window.location.href = './galaxia.html'; // muda de página
})