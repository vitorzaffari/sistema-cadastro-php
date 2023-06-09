const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const senhaConfirmarInput = document.getElementById("senha-confirmar");
const formulario = document.getElementById("formulario");

verificarPrimeiroInput(nomeInput);
verificarPrimeiroInput(emailInput);
verificarPrimeiroInput(senhaInput);
verificarPrimeiroInput(senhaConfirmarInput);

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const valido = validarInputs();
  if (valido) {
    formulario.submit();
  } else {
    console.log(valido);
  }
});

function validarInputs() {
  const nomeValue = nomeInput.value;
  const emailValue = emailInput.value;
  const senhaValue = senhaInput.value;
  const senhaConfirmarValue = senhaConfirmarInput.value;
  let valid = true;

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
    valid = false;
  } else {
    setSucesso(nomeInput);
  }

  if (emailValue === "") {
    setErro(emailInput, "O email é obrigatório");
    valid = false;
  } else if (!emailValidacao(emailValue)) {
    setErro(emailInput, "Email inválido");
    valid = false;
  } else {
    setSucesso(emailInput);
  }

  if (senhaValue === "") {
    setErro(senhaInput, "A senha é obrigatória");
    valid = false;
  } else if (senhaValue.length < 8) {
    setErro(senhaInput, "A senha deve conter no mínimo 8 caracteres");
    valid = false;
  } else {
    setSucesso(senhaInput);
  }
  if (senhaConfirmarValue === "") {
    setErro(senhaConfirmarInput, "Por favor confirme sua senha");
    valid = false;
  } else if (senhaConfirmarValue !== senhaValue) {
    setErro(senhaConfirmarInput, "Por favor, confira sua senha");
    valid = false;
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
      valid = false;
    }
  });

  senhaInput.addEventListener("input", (event) => {
    if (event.target.value !== "" && event.target.value.length >= 8) {
      setSucesso(senhaInput);
    } else {
      setErro(senhaInput, "A senha deve conter no mínimo 8 caracteres");
      valid = false;
    }
    if (
      senhaConfirmarInput.value === event.target.value &&
      event.target.value.length >= 8
    ) {
      setSucesso(senhaConfirmarInput);
    } else {
      setErro(senhaConfirmarInput, "Por favor, confira sua senha");
      valid = false;
    }
  });
  senhaConfirmarInput.addEventListener("input", (event) => {

    if (
      event.target.value.length >= 8 &&
      event.target.value == senhaInput.value
    ) {
      setSucesso(senhaConfirmarInput);
    } else {
      setErro(senhaConfirmarInput, "Por favor, confira sua senha");
      valid = false;
    }
  });
  return valid;
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
