<?php
$text = $_POST['form_text'];
$fio = $_POST['FIO-text'];
$phone = $_POST['phone-text'];
$email = $_POST['Email-text'];
$adress = $_POST['adress-text'];
$project_category = $_POST['project_category'];
$project_material = $_POST['project_material'];

if($text == "") $text = "не указан.";
if($adress == "") $adress = "не указан.";

$date = date('H:i, j F:');
$output = $date."\nТекст заказа: ".$text."\nФИО: ".$fio."\nТелефон: ".$phone."\nE-mail: ".$email."\nАдрес: ".$adress."\nКатегория проекта: ".$project_category."\nМатериал: ".$project_material."\nВозраст: "."\n\n";
echo $output;
$fp = fopen("house_orders.txt", "a");
fwrite($fp, $output);
?>