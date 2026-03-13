// Операції з масивами
/* */
let style=['jazz','blues'];
alert(style);

style.push('rok-n-roll', 'pop','lyriks','metalika');
alert(style);

for (let i = 0; i < style.length; i++) {
    if (i%2===0) style[i+1]=('classics');
}
alert( style);

style.shift();
alert(style);

style.unshift('Rap', 'Reggae');
alert(style);



//Сума введених чисел
let data=[];
let value, sum=0;
while (true) {
 value = prompt('Введіть числові дані','');
 if (isNaN(value) || value === '' || value === null) break;
data.push(+value);
}
for (let value of data) {
 sum += +value;
}

alert(sum); 

//Максимальний підмасив
function getMaxSubSum(arr) {

    let maxSum = 0;
    let sum = 0;

    for (let num of arr) {
        sum += num;

        if (sum > maxSum) maxSum = sum;

        if (sum < 0) sum = 0;
    }

    return maxSum;
}
let arr = [1, -2, 3, 4, -9, 6];

alert(getMaxSubSum(arr));