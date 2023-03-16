/*
1 - Quando o usuário clicar no botão de ver treier, devemos abrir a modal com o video do trailer.

2 - Quando o usupario clicar no x.... devemos fechar a modal.


1 - Quando o usuário clicar no botão de ver treier, devemos abrir a modal com o video do trailer.

    - passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js.

    - passo 2 - identificar quando que o usuário clicou.

    - passo 3 - dar um jeito de pegar o elemento na modal do js

    - passo 4 - abrir a modal na tela



2 - Quando o usupario clicar no x.... devemos fechar a modal.

      - passo 1 - dar um jeito de pegar o elemento que representa o botçao na tela usando o js.

      - passo 2 - identificar quando que o usuário clicou no x.

      - passo 3 - fechar a modal.

*/

//Para mostrar algo no console usa-se o console.log + oque você quer

//console.log('Mostrar o Document',document);




//1 - Quando o usuário clicar no botão de ver treier, devemos abrir a modal com o video do trailer.

    //- passo 1 - dar um jeito de pegar o elemento que representa o botçao na tela usando o js.
    const botaoTrailer = document.querySelector(".botao-trailer");
    const botaoFecharModal = document.querySelector(".fechar-modal");
    
    const video = document.getElementById("video");
    const modal = document.querySelector(".modal");
    console.log(video.src);
    const linkDoVideo = video.src;
    



    botaoTrailer.addEventListener("click",() => {
        console.log("Clicou no Botão de ver o Trailer");


        modal.classList.add("aberto");
        video.setAttribute("src", linkDoVideo);


    });



    botaoFecharModal.addEventListener("click", () => {
        modal.classList.remove("aberto");
        video.setAttribute("src" , "");
        
    });

