const botaoEnviar = document.querySelector('.enviar')

const professora = document.getElementById("professora");
const modal = document.querySelector(".modal");
console.log(professora.src)






botaoEnviar.addEventListener("click",() =>{
    console.log("Cliquei no enviar")

    modal.classList.add("aberto");
    professora.setAttribute("src", linkDoVideo);
})
