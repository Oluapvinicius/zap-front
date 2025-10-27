
const NUMERO_CORRETO = '11987876567'
const PAGINA_DESTINO = "./home.html"



const input = document.getElementById("inputs")
const botao = document.getElementById("verificarBtn")
const erroMsg = document.getElementById("mensagemErro")


function verificarNumero() {
    
    const valorDigitado = input.value;

    
    if (valorDigitado === NUMERO_CORRETO) {
        
        window.location.href = PAGINA_DESTINO
    } else {
        
        erroMsg.textContent = "Código incorreto. Tente novamente."
        erroMsg.classList.add("ativo")
    }
}


botao.addEventListener("click", verificarNumero);


input.addEventListener("input", () => {
    erroMsg.textContent = ""
    erroMsg.classList.remove("ativo")
})