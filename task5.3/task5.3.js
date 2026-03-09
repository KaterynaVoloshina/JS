
/* */
//Переведіть перший символ у верхній регістр
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
    word = prompt ('Введіть слово, усі літери нижнім регістром', '');
    alert(ucFirst(word));

//Перевірка на спам

function checkSpam(ln) {
    ln = ln.toLowerCase();
    return ln.includes('viagra') || ln.includes('xxx');          
}
let text = prompt('Введіть viagra або XXX', '');
alert(checkSpam(text)); 

//Урізання тексту

let maxlength=8;
function truncate(str, maxlength) {
    if (str.length > maxlength) return str.slice(0, maxlength) +"...";
    return str;
}
let lengthText = prompt('Ваш текст', '');
alert(truncate(lengthText , maxlength)); 

//Виділіть гроші
let str = '$120';
 function extractCurrencyValue(str) {
    return str.slice(1);
 }
 alert(extractCurrencyValue(str));

