/* считайте файл,который называется input.txt,в котором через пробелы 
написаны 2 числа и символ(кол-во строк произвольное)
Написать калькулятор,который работает на событийной модели(EventEmitter).
Для считывания линии за линией используйте функцию nodejs -createReadStream.
События могут быть такие- plus, minus, devide, etc...
Каждое вхождение в событие должно также информировать о том, какое событие было вызвано и выходной результат,а также 
отдельное событие result,которое покажет результат подсчета.
Любой метод калькулятора возвращает ответ через 15 миллисекунд минимум.
Калькулятор и события на него- разные модули.
Бонус: юнит тесты*/

const fs = require("fs");

const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('../input.txt');

    const readLine = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of readLine) {
        console.log(`Line from the file txt: ${line}`);
    }
}
console.log(processLineByLine(2));

module.exports = fs;