"use strict"

function createAlert() {
    if (!document.getElementById('form')) {
        let parent = document.getElementById('container');
        let dark_bg = document.createElement('div');
        dark_bg.setAttribute('id', 'dark-bg');
        dark_bg.setAttribute('onclick', 'removeWindow()')
        parent.appendChild(dark_bg);
        let form = document.createElement('div');
        form.setAttribute('id', 'form');
        parent.appendChild(form);
        document.getElementById('form').innerHTML =
        '<img src="images/alert.png" style="width: 60px"><br><p>Чтобы оставить заявку необходимо авторизоваться!</p><p onclick="createAuthForm()" id="reg">Войти</p>';
    }
}

function removeWindow() {
    document.getElementById("form").remove();
    document.getElementById("dark-bg").remove();
}