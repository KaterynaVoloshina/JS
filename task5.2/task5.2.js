/* */
let a, b, sum;
a=+prompt('введіть перше число', '');

b=+prompt('введіть друге число', '');
sum=a + b;
alert('Сума введених вами чисел '+ sum);

// округлення до десятих
let n=6.35;
alert( 'округлення до десятих 6.35, це буде      ' +  (Math.round(n*10))/10 ); 

// Повторення поки не буде введено число

function readNumber() {
    let val;
    while (true) {
        val = prompt('Введіть число', '');

        if (val === '' || val === null) return null;

        if (!isNaN(val)) return +val;
    }
}
alert(readNumber()); 

//рандомне число від до

function random(min, max) {
    min = +prompt('Введіть перше число', '');
    max = +prompt('Введіть число більше за попереднє', '');
    let result = Math.random() * (max - min) + min;
    alert(result);
}
random();
