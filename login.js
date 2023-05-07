const nomeInput = document.getElementById('login-nome')
const senhaInput = document.getElementById('login-senha')
const formulario = document.getElementById('login-form')


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    validarInputs();
})

function validarInputs(){
    const nomeValue = nomeInput.value.trim()
    const senhaValue = senhaInput.value.trim()

    if(nomeValue === '') {
        setErro(nomeInput, "O nome é obrigatório");
    } else {
        setSucesso(nomeInput);
    }

    if(senhaValue === '') {
        setErro(senhaInput, "A senha é obrigatória");
    } else {
        setSucesso(senhaInput);
    }
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
