<?php
$ibanez=$_POST['ibanez'];
$rockdale=$_POST['rockdale'];
$fender=$_POST['fender'];
$adress=$_POST['adress'];
?>
 
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Киселёв Артём</title>
        <style>
            body{
                background-image: url(../images/phpbg.jpg);
                background-size: 100vw;
                background-color: rgba(0, 0, 0, 0.65);
                background-blend-mode: color-burn;
                text-align: center;
                color: black;
                font-size: 50;
            }
            h2 {
                color: white;
            }
            #check {
                background-color: white;
                width: 300px;
                height: 400px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
    <center>
        <h2>Ваш заказ</h2>
        <div id="check">
            <?php
            if ($ibanez == "") $ibanez = 0;
            if ($rockdale == "") $rockdale = 0;
            if ($fender == "") $fender= 0;

            $sumtovar=$ibanez+$rockdale+$fender;
            define ('IBANEZPRICE',389);
            define ('ROCKDALEPRICE',309);
            define ('FENDERPRICE',449);
            $sumprice=$ibanez*IBANEZPRICE+$rockdale*ROCKDALEPRICE+$fender*FENDERPRICE;

            if ($sumtovar==0)
            {
                echo '<p><b>Вы ничего не заказали на предыдущей странице</b></p>';
                return;
            }
            elseif ($ibanez<0||$rockdale<0||$fender<0)
            {
                echo '<p><b>Неверно указано количество товара';
                return;
            }
            else {
                if($sumtovar < 2) {
                    $discount = 0;
                }
                elseif ($sumtovar >= 2 && $sumtovar <= 3) {
                    $discount = 5;
                }
                elseif ($sumtovar >= 4 && $sumtovar <= 5) {
                    $discount = 10;
                }
                else {
                    $discount = 15;
                }
            $sumdiscount=$sumprice - $sumprice * ($discount / 100);
            $nalogsale=0.1;
            $sumnalog=$sumdiscount*(1+$nalogsale);

            echo "<p><font color=\"brown\"><b>Заказ обработан в ".date('H:i, jS F'). "<br><br>Ваш заказ:</b></font><br><br>";
            if ($ibanez > 0) echo $ibanez. ' - IBANEZ GRG121DX-BKF<br>';
            if ($rockdale > 0) echo $rockdale. ' - ROCKDALE STARS HSS BK<br>';
            if ($fender > 0) echo $fender. ' - FENDER SQUIER BULLET STRATOCASTER HSS BROWN SUNBURST<br><br>';
            echo 'Заказано товаров: '.$sumtovar. '<br>';
            echo 'Общая сумма: $'.number_format($sumprice,2).'<br>';
            echo 'Ваша скидка составила: '.$discount.'%<br>';
            echo 'Итого: $'.number_format($sumdiscount,2).'<br><br>';
            echo 'Всего, включая налог с продаж: $'.number_format($sumnalog,2).'<br>';
            echo 'Адрес заказа: '.$adress.'<br>';
            }
            
            $date=date('H:i, j F:');
            $output=$date;
            if($ibanez > 0) { $output = $output." ".$ibanez." - IBANEZ GRG121DX-BKF,"; }
            if($rockdale > 0) { $output = $output." ".$rockdale." - ROCKDALE STARS HSS BK,"; }
            if($fender > 0) { $output = $output." ".$fender." - FENDER SQUIER BULLET STRATOCASTER HSS BROWN SUNBURST,"; }
            $output = $output." Всего на сумму $".number_format($sumnalog,2).", Адрес: ".$adress.".\n";

            $fp=fopen("../logs/orders.txt", 'a');
            fwrite($fp, $output);
            fclose($fp);
            ?>
        </div>
    </center>
    </body>
</html>