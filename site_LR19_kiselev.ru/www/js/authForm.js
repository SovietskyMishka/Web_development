"use strict"

passwords_match = false;

function createForm() {
    if (!document.getElementById('form')) {
        let parent = document.getElementById('container');
        let dark_bg = document.createElement('div');
        dark_bg.setAttribute('id', 'dark-bg');
        dark_bg.setAttribute('onclick', 'removeWindow()');
        parent.appendChild(dark_bg);
        let form = document.createElement('div');
        form.setAttribute('id', 'form');
        parent.appendChild(form);
    }
};

function createAuthForm() {
    createForm();
    if (document.getElementById('form')) {
        document.getElementById('form').innerHTML =
        '<h2>Авторизация</h2><p id="warnText">Неправильный логин или пароль!</p>'+
        '<form action="login.php" method="post">'+
        '<table><tr><td>Логин:</td><td><input name="login" type="text"></td></tr>'+
        '<tr><td>Пароль:</td><td><input name="password" type="password"></td></tr></table>'+
        '<input id="form-btn" type="submit" value="Войти"></form>'+
        'Нет аккаунта? <span id="reg" onclick="createReg()">Регистрация</span>';
    }
}

function removeWindow() {
    document.getElementById("form").remove();
    document.getElementById("dark-bg").remove();
}

function createReg() {
    createForm();
    if (document.getElementById('form')) {
    document.getElementById('form').innerHTML =
        '<h2>Регистрация</h2><p id="warnText">Данный аккаунт уже существует!</p>'+
        '<form name="reg_form" action="registration.php" method="post" onsubmit="return(repeat());">'+
        '<table><tr><td>Логин:</td><td><input name="login" type="text"></td></tr>'+
        '<tr><td>Пароль:</td><td><input id="reg_pass" name="password" type="password"></td></tr>'+
        '<tr><td>Повторите пароль:</td><td><input id="reg_pass_repeat" name="password_repeat" type="password"></td></tr></table>'+
        '<input id="form-btn" type="submit" value="Зарегистрировать"></form>'+
        'Уже есть аккаунт? <span id="reg" onclick="createAuthForm()">Войти</span>';
    }
}

function repeat() {
    let pass = document.getElementById("reg_pass").value;
    let pass_repeat = document.getElementById("reg_pass_repeat").value;
    if (pass === pass_repeat) {
        return true;
    }
    let text = document.getElementById('warnText');
    text.innerText = "Пароли должны совпадать!";
    text.style.visibility = 'visible';
    return false;
}

