const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const senhaConfirmarInput = document.getElementById("senha-confirmar");
const formulario = document.getElementById("formulario");

verificarPrimeiroInput(nomeInput);
verificarPrimeiroInput(emailInput);
verificarPrimeiroInput(senhaInput);
verificarPrimeiroInput(senhaConfirmarInput);

formulario.addEventListener("submit", (event) => {
  validarInputs();
  event.preventDefault();
});

function validarInputs() {
  const nomeValue = nomeInput.value;
  const emailValue = emailInput.value;
  const senhaValue = senhaInput.value;
  const senhaConfirmarValue = senhaConfirmarInput.value;

  console.log(
    "Nome: ",
    nomeValue,
    "Email: ",
    emailValue,
    "Senha: ",
    senhaValue,
    "Senha 2: ",
    senhaConfirmarValue
  );

  if (nomeValue === "") {
    setErro(nomeInput, "O nome é obrigatório");
  } else {
    setSucesso(nomeInput);
  }

  if (emailValue === "") {
    setErro(emailInput, "O email é obrigatório");
  } else if (!emailValidacao(emailValue)) {
    setErro(emailInput, "Email inválido");
  } else {
    setSucesso(emailInput);
  }

  if (senhaValue === "") {
    setErro(senhaInput, "A senha é obrigatória");
  } else if (senhaValue.length < 8) {
    setErro(senhaInput, "A senha deve conter no mínimo 8 caracteres");
  } else {
    setSucesso(senhaInput);
  }
  if (senhaConfirmarValue === "") {
    setErro(senhaConfirmarInput, "Por favor confirme sua senha");
  } else if (senhaConfirmarValue !== senhaValue) {
    setErro(senhaConfirmarInput, "Por favor, confira sua senha");
  } else {
    setSucesso(senhaConfirmarInput);
  }



  
  nomeInput.addEventListener("input", (event) => {
    if (event.target.value !== "") {
      setSucesso(nomeInput);
    }
  });

  emailInput.addEventListener("input", (event) => {
    if (emailValidacao(event.target.value)) {
      setSucesso(emailInput);
    } else {
      setErro(emailInput, "Email inválido");
    }
  });

  senhaInput.addEventListener("input", (event) => {
    if (event.target.value !== "" && event.target.value.length >= 8) {
      setSucesso(senhaInput);
    } else {
      setErro(senhaInput, "A senha deve conter no mínimo 8 caracteres");
    }
    if (
      senhaConfirmarInput.value === event.target.value &&
      event.target.value.length >= 8
    ) {
      setSucesso(senhaConfirmarInput);
    } else {
      setErro(senhaConfirmarInput, "Por favor, confira sua senha");
    }
  });
  senhaConfirmarInput.addEventListener("input", (event) => {
    // console.log(senhaInput.value);

    if (
      event.target.value.length >= 8 &&
      event.target.value == senhaInput.value
    ) {
      setSucesso(senhaConfirmarInput);
    } else {
      setErro(senhaConfirmarInput, "Por favor, confira sua senha");
    }
  });
}

function setErro(elemento, mensagem) {
  const inputBox = elemento.parentElement;
  const erroDiv = inputBox.querySelector("#erro");
  erroDiv.innerText = mensagem;
  inputBox.classList.add("erro");
  inputBox.classList.remove("sucesso");
}

function setSucesso(elemento) {
  const inputBox = elemento.parentElement;
  const erroDiv = inputBox.querySelector("#erro");

  erroDiv.innerText = "";

  inputBox.classList.remove("erro");
  inputBox.classList.add("sucesso");
}

function emailValidacao(email) {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(String(email).toLocaleLowerCase());
}

function verificarPrimeiroInput(elemento) {
  elemento.addEventListener("keydown", (event) => {
    if (event.target.value.length === 0 && event.key === " ") {
      event.preventDefault();
    }
  });
}
