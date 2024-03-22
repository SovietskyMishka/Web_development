"use strict"

function callForm() {
    if (!document.getElementById('form')) {
        let parent = document.getElementById('container');
        let dark_bg = document.createElement('div');
        dark_bg.setAttribute('id', 'dark-bg');
        dark_bg.setAttribute('onclick', 'removeWindow()')
        parent.appendChild(dark_bg);
        let form = document.createElement('div');
        form.setAttribute('id', 'form');
        parent.appendChild(form);
        let order = document.getElementById('order').textContent;
        let img = document.getElementById("big-picture");
        document.getElementById('form').innerHTML = 
            '<form action="form.php" method="post">Оформление заявки: <input readonly id="form-head" name="order-name" value="'+order+'">'+
            '<img src="'+ img.src +'">'+
            '<table><tr><td>ФИО:</td><td><input required name="fio"></td></tr>'+
            '<tr><td>Номер:</td><td><input required type="number" name="phone"></td></tr>'+
            '<tr><td>E-mail</td><td><input required type="email" name="email"></td></tr></table>'+
            '<button type="submit" id="form-btn">Отправить</button></form>';
    }
}

function removeWindow() {
    document.getElementById("form").remove();
    document.getElementById("dark-bg").remove();
}