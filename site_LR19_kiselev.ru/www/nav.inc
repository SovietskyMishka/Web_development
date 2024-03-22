<?php require_once('auth.php'); ?>
<div id="resize-block">
    <?php $login = getUserLogin(); ?>
    <nav id="navigation">
    <?php if ($login): ?>
        <p class="nav-btn"><a href="account.php">Личный кабинет</a></p>
    <?php endif; ?>
        <p class="nav-btn"><a href="index.php">Главная</a></p>
        <p class="nav-btn"><a href="product.php">Каталог продукции</a></p>
        <p class="nav-btn"><a href="contact.php">Контакты</a></p>
        <p class="nav-btn">Клиентам</p>
        <p class="nav-btn">Об агентстве</p>
        <p class="nav-btn">Отзывы</p>
    </nav>