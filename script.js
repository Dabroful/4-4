const income = prompt('аименование товара: ');
const quantity = prompt('количество: ');
if (isNaN (income)) {
  alert('вы ввели некоректные данные, пожалуйста укажите число')
}

const category = prompt('категория: ');
const price = prompt('цена ');
if (isNaN (price)) {
  alert('вы ввели некоректные данные, пожалуйста укажите число')
}

console.log(income);
console.log(quantity);
console.log(category);
console.log(price);

console.log(`на складе ${quantity} удениц товара "${income}" на сумму ${quantity * price} рублей`)

