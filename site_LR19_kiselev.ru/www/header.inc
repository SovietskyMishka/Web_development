<?php
require_once('auth.php');
$login = getUserLogin();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="lr19_style.css">
    <script src="js/authForm.js"></script>
    <title>Медвежья услуга</title>
</head>
<body>
    <div id="container">
        <header>
            <img src="images/header_bgr.jpeg" id="header_bg">
            <a href="index.php"><img src="images/logo.png" id="header_logo"></a>
            <?php if ($login === null): ?>
                    <table id="auth-bar"><tr><td><span id="login-text">Авторизация</span></td><td><div id="enter-icon" onclick="createAuthForm()"><img src="images/log-in.png" width="40px"></div></td></tr></table>
             <?php else: ?>
                    <table id="auth-bar"><tr><td><span id="login-text">Добро пожаловать, <?= $login ?></span></td><td><a href="logout.php"><div id="enter-icon"><img src="images/log-out.png" width="40px"></div></a></td></tr></table>
            <?php endif; ?>
        </header>