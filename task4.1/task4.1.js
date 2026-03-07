'use script'
let user={};
user.name='Іван';
user.surname='Сміт';
alert (user.surname +' '+ user.name);
user.name='Петро';
alert (user.surname + ' '+ user.name);
delete user.name;
alert ('name' in user);

// Перевірка на порожнечу
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let obj={};
alert(isEmpty(obj));

obj.obj1= 'щось';
obj.obj2= 'ще щось';

alert(isEmpty(obj));

//Сума властивостей об’єкта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum=0;
for( let salary in salaries){
    sum += salaries[salary];
};
alert(sum);

 //Помножте числові значення властивостей на 2

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(salaries);
console.log(salaries);