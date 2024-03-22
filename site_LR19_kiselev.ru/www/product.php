<?php
require('header.inc');
require('nav.inc');
?>
<main>
    <h1>Каталог продукции</h1><br>
    <div class="catalog">
        <a href="card1.php"><div class="catalog-card">
            <img class="catalog-img" src="images/house.jpg">
            <h3>ЖК "Новый горизонт"</h3>
            <p>от 4 200 000 руб.</p>
        </div></a>
        <a href="card2.php"><div class="catalog-card">
            <img class="catalog-img" src="images/house.jpg">
            <h3>ЖК "Мой мир"</h3>
            <p>от 4 960 000 руб.</p>
        </div></a>
        <a href="card3.php"><div class="catalog-card">
            <img class="catalog-img" src="images/house.jpg">
            <h3>ЖК "Ромашки"</h3>
            <p>от 5 240 000 руб.</p>
        </div></a>
        <a href="card4.php"><div class="catalog-card">
            <img class="catalog-img" src="images/house.jpg">
            <h3>ЖК "Стороны света"</h3>
            <p>от 5 190 000 руб.</p>
        </div></a>
    </div>
</main>

<?php
require('footer.inc');
?>