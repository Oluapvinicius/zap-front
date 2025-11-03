async function carregarUsuario() {
    try {
        const response = await fetch(`https://projeto-zapapi.onrender.com/v1/whatsapp/contacts/11987876567`)
        return await response.json()
    } catch (error) {
        console.log(error)
        return false
    }
}


carregarUsuario().then(dados => console.log(dados))


function aparecerUsuario(user) {
    const showUsuario = carregarUsuario(user)
    const caixa = document.getElementById('caixa')


    
}
   