<?php

date_default_timezone_set('Asia/Novosibirsk');

require_once('auth.php');
$login = getUserLogin();

if(isset($_POST['order-name'])) $order_name = $_POST['order-name'];
if(isset($_POST['fio'])) $fio = $_POST['fio'];
if(isset($_POST['phone'])) $phone = $_POST['phone'];
if(isset($_POST['email'])) $email = $_POST['email'];

require('header.inc');
require('nav.inc');
?>

    <main>
        <img src="https://image.winudf.com/v2/image/Y29tLm92ZXJvbi5taXNub3Rhc19pY29uXzBfY2E4NjQ2ODg/icon.png?w=340&fakeurl=1" width="100px">
        <?php
            $date = date('H:i, j F:');
            echo "<h2>Ваша заявка успешно отправлена</h2><br><p><b>Время: </b>".$date."</p><br><p><b>Заявка на:</b> ".$order_name."</p><br><p><b>ФИО:</b> ".$fio."</p><br><p><b>Номер телефона:</b> ".$phone."</p><br><p><b>E-mail адрес:</b> ".$email."</p>";
            
            $output = "\nДата: ".$date."\nЗаявка на: ".$order_name."\nФИО: ".$fio."\nНомер телефона: ".$phone."\nE-mail адрес: ".$email."\n";
            $fp = fopen("orders/".$login.".txt", "a");
            fwrite($fp, $output);
        ?>
    </main>

<?php
require('footer.inc');
?>
