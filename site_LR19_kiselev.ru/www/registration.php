<?php
if (!empty($_POST)) {
    $new_login = $_POST['login'] ?? '';
    $new_password = $_POST['password'] ?? '';
    if (($new_login != '' && $new_password != '') && checkLogin($new_login)) {
        $data = "\n\t['login' => '".$new_login."', 'password' => '".$new_password."'],\n];\n?>";
        $file_name = 'usersDB.php';
        $file = fopen($file_name, 'r+');
        fseek($file, -5, SEEK_END);
        fwrite($file, $data);
        setcookie('login', $new_login, 0, '/');
        setcookie('password', $new_password, 0, '/');
        header('Location: index.php');
    }
    else {
        require('index.php');
        ?>
            <script>
                createReg();
                document.getElementById('warnText').style.visibility = "visible";
            </script>
        <?php
    }
}

function checkLogin(string $login): bool
{
    $users = require 'usersDB.php';

    foreach ($users as $user) {
        if ($user['login'] === $login) {
            return false;
        }
    }

    return true;
}
?>