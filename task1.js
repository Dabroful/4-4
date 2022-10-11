const rain = Math.round(Math.random());

console.log(rain);

if (rain === 1) {
    console.log('идет дождь, возьмите зонт');
} else if (rain === 0) {
    console.log('дождя нет');
}

const math = Number(prompt('оличество баллов по математике:', 85));
const russianLang = Number(prompt('количество баллов по Русскому:', 75));
const informatic = Number(prompt('количество баллов по информатике', 95));

if (math + russianLang + informatic >= 265) {
    console.log('Поздравляю! Вы прошли на бюджет.');
} else {
    console.log('Баллов не достаточно для поступления на бюджет');
}

const money = Number(prompt('введите сумму для выдачи:', 100));

if (money >= 100) {
    console.log(`Готовится к выдаче ${money} рублей`);
} else {
    console.log('минимальная сумма к выдаче 100 рублей');
}