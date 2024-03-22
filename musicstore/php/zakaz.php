<?php
$pokr=$_POST['pokr'];
$oil=$_POST['oil'];
$svecha=$_POST['svecha'];
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>результаты заказа</title>
    </head>
    <body>
        <h2>результаты заказа</h2>
        <?php
        echo '<p><font color=\"green\"><b>заказ обработан<br>Список Вашего заказа</b></font><br><br>';
        echo 'Количество автопокрышек '.$pokr.'<br>';
        echo 'Количество бутылок с маслом '.$oil.'<br>';
        echo 'Количество свечей зажигания '.$svecha.'<br>';
        ?>
    </body>
</html>
