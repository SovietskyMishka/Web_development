<?php
require_once('auth.php');
$login = getUserLogin();
require('header.inc');
require('nav.inc');
?>
    <main>
        <h1>Личный кабинет</h1><br>
        <h2>Ваши заявки:</h2>
        <?php
        $file_name = 'orders/'.$login.'.txt';
        if(file_exists($file_name)) {
            $fp = fopen($file_name, 'r');
            fseek($fp, 1);
            echo "<br>";
            $num = 1;
            $count = 0;
            while (!feof($fp)) {
            if ($count == 0) {
                echo "<h4>Заявка №".$num.":</h4><br>";
            }
            $text = fgets($fp);
            echo '<p>'.$text.'</p><br>';
            $count++;
            if($count > 5) { 
                $count = 0;
                $num++;
            }
            }
            fclose($fp);
        }
        else {
            echo '<p><br>Заявки отсутствуют</p>';
        }
        ?>
    </main>
<?php
require('footer.inc');
?>