﻿// Сохраняем приветствие в переменной
var greeting = 'Привет, ';

// Сохраняем имя покупателя в переменной
var name = 'Катерина';

/* Создаем приветственное сообщение посредством конкатенации строковых значений двух переменных */
var welcomeMessage = greeting + name + '!';

// Получаем элемент с идентификатором greeting
var el = document.getElementById('greeting');

// Заменяем содержимое этого элемента персональным сообщением
el.textContent = welcomeMessage;

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строке 14, но возникает угроза безопасности сайта, как описано в книге:

el.innerHTML = welcomeMessage;
*/