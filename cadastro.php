<?php

if (!empty($_POST['nome']) && !empty($_POST['senha']) && !empty($_POST['email'])) {

  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $senha = $_POST['senha'];

// if (isset($_POST['submit'])) {
  // print_r($nome);
  // print_r($email);
  // print_r($senha);


}


?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tela de Cadastro</title>
  <link rel="stylesheet" href="cadastro.css" />
</head>

<body>
  <form action="cadastro.php" method="POST" id="formulario">
    <h1>Cadastro</h1>
    <div class="input-box">
      <input id="nome" name="nome" type="text" class="input-cadastro" />
      <label class="cadastro-label" for="nome">Nome *</label>
      <div id="erro"></div>
    </div>
    <div class="input-box">
      <input id="email" name="email" type="text" class="input-cadastro" />
      <label class="cadastro-label" for="email">Email *</label>
      <div id="erro"></div>
    </div>
    <div class="input-box">
      <input id="senha" name="senha" type="password" class="input-cadastro" />
      <label class="cadastro-label" for="senha">Senha *</label>
      <div id="erro"></div>
    </div>

    <div class="input-box">
      <input id="senha-confirmar" name="senha-confirmar" type="password" class="input-cadastro" />
      <label class="cadastro-label" for="senha-confirmar">Repita a senha *</label>
      <div id="erro"></div>
    </div>
    <div>
      <label for="data">Data de Nascimento</label>
      <input class="input-data" name="data" type="date" />
    </div>
    <div class="input-box">
      <input name="cidade" type="text" class="input-cadastro" />
      <label class="cadastro-label" for="cidade">Cidade</label>
    </div>
    <div class="input-box">
      <input name="estado" type="text" class="input-cadastro" />
      <label class="cadastro-label" for="estado">Estado</label>
    </div>
    <div class="input-box">
      <input name="endereco" type="text" class="input-cadastro" />
      <label class="cadastro-label" for="endereco">Endereço</label>
    </div>
    <input class="enviar" type="submit" value="Enviar" />
  </form>
  <script src="./cadastro.js"></script>
</body>

</html>