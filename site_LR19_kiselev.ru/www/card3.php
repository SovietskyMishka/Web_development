<?php
require('header.inc');
require('nav.inc');
?>
<main>
    <h1 id="order">ЖК Ромашки</h1>
    <div id="gallery-block">
            <img src="" id="big-picture" name="big_pict" alt="Big picture">
        <img id="swipe_left" src="images/swipe_arrow.png">
        <div id="gallery-line">
            <div class="gallery-grid">
                <img src="" name="pict1" alt="picture">
            </div>
            <div class="gallery-grid">
                <img src="" name="pict2" id ="img-selector" alt="picture">
            </div>
            <div class="gallery-grid">
                <img src="" name="pict3" alt="picture">
            </div>
        </div>
        <img id="swipe_right" src="images/swipe_arrow.png">
        <script src="js/gallery.js"></script>
    </div>
    <script src="js/form.js"></script>
    <h3>МЕСТОПОЛОЖЕНИЕ</h3>
    <p><b>Область:</b> Алтайский край</p>
    <p><b>Город:</b> г. Барнаул</p>
    <p><b>Улица:</b> просп. Строителей</p><br>
    <h3>ДЕТАЛИ</h3>
    <p><b>Этажность здания:</b> 15</p>
    <p><b>Квартал:</b> IV кв.</p>
    <p><b>Год постройки:</b> 2022</p><br>
    <h3>КВАРТИРЫ</h3>
    <p><b>Студии:</b> от 5 240 000 руб.</p><br>
    <h3>КАТЕГОРИЯ</h3>
    <p>Новостройки</p><br>
    <?php if ($login === null): ?>
        <button id="ord-btn" onclick="createAlert()">Оставить заявку</button>
        <script src="js/alert.js"></script>
    <?php else: ?>
        <button id="ord-btn" onclick="callForm()">Оставить заявку</button>
    <?php endif; ?>
</main>
<?php
require('footer.inc');
?>