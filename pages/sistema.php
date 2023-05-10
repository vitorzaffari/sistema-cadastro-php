<?php
session_start();
print_r($_SESSION);
if ((!isset($_SESSION['nome']) == TRUE) and (!isset($_SESSION['senha']) == TRUE)) {
  unset($_SESSION['nome']);
  unset($_SESSION['senha']);
  header('Location: home.php');
}
$logado = $_SESSION['nome'];
?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="../css/sistema.css">
</head>

<body>
  <a href="home.php" class='voltar'>Voltar</a>
  <a href="../config/sair.php" class='voltar sair'>Sair da sessão</a>

  <?php
  echo "<h1>Bem vindo ao sistema  $logado </h1>";

  ?>
  <h2>Você foi logado com sucesso</h2>
</body>

</html>