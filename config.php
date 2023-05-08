<?php 

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '1234';
    $dbName = 'login';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

    if($conexao-> connect_errno)
    {
        echo "Erro";
    }
    else 
    {
        echo "Sucesso!";
    }
?>