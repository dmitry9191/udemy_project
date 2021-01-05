﻿// Создаем переменную для хранения числа, которое будет использоваться
var originalNumber = 10.23456;
// Создаем переменную для хранения сообщения, которое будет отображаться на странице
var msg = '<h2>исходное число</h2><p>' + originalNumber + '</p>';
// Округляем число до 3 десятичных разрядов и помещаем полученное значение в переменную msg
msg += '<h2>3 десят. разряда</h2><p>' + originalNumber.toFixed(3) + '</p>';
// Округляем число до 3 цифр и помещаем полученное значение в переменную msg
msg += '<h2>3 цифры</h2><p>' + originalNumber.toPrecision(3) + '</p>';

// Создаем переменную el для записи элемента с идентификатором info
var el = document.getElementById('info');
// Записываем сообщение в элемент
el.innerHTML = msg;