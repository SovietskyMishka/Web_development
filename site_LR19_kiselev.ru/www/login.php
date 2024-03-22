<?php
    require_once('auth.php');
    $login = getUserLogin();
    if ($login) {
        header('Location: index.php');
    }

    if (!empty($_POST)) {
        $login = $_POST['login'] ?? '';
        $password = $_POST['password'] ?? '';
        if (checkAuth($login, $password)) {
            setcookie('login', $login, 0, '/');
            setcookie('password', $password, 0, '/');
            header('Location: index.php');
        } 
        else {
            require('index.php');
            ?>
                <script>
                    createAuthForm();
                    document.getElementById('warnText').style.visibility = "visible";
                </script>
            <?php
        }
    }
?>