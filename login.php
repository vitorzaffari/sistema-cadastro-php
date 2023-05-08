<?php

if (!empty($_POST['nome']) && !empty($_POST['senha'])) {
  print_r($_POST['nome']);
  print_r($_POST['senha']);

}


?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tela de Login</title>
    <link rel="stylesheet" href="login.css" />
  </head>
  <body>
    <form  action="login.php" method="POST" id="login-form" class="login">
      <h1>Login</h1>
      <div class="input-control">
        <input 
        name="nome"
        type="text" 
        id="login-nome"
        placeholder="Nome" />
      <div id="erro"></div>
      </div>
      <div class="input-control">
        <input 
        name="senha"
        type="password" 
        id="login-senha"
        placeholder="Senha" />
        <div id="erro"></div>
      </div>
      <button 
       type="submit"
       class="enviarBtn">
        Enviar
      </button>
    </form>

    <script src="login.js"></script>
  </body>
</html>
