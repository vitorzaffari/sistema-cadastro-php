const nomeInput = document.getElementById('login-nome')
const senhaInput = document.getElementById('login-senha')
const formulario = document.getElementById('login-form')


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
   const valido = validarInputs();
    if(valido){
        formulario.submit();
    } else {
        console.log(valido);
    }
})

function validarInputs(){
    const nomeValue = nomeInput.value.trim()
    const senhaValue = senhaInput.value.trim()
    let valid = true
    if(nomeValue === '') {
        setErro(nomeInput, "O nome é obrigatório");
        valid = false
    } else {
        setSucesso(nomeInput);
    }

    if(senhaValue === '') {
        setErro(senhaInput, "A senha é obrigatória");
        valid = false

    } else {
        setSucesso(senhaInput);
    }
    return valid
}


function setErro(elemento, mensagem){
    const inputBox = elemento.parentElement;
    const erroDiv = inputBox.querySelector('#erro')
    erroDiv.innerText = mensagem;
    inputBox.classList.add('erro')

}

function setSucesso(elemento){
    const inputBox = elemento.parentElement;
    const erroDiv = inputBox.querySelector('#erro')

    erroDiv.innerText = '';
    inputBox.classList.remove('erro')
}
