/* Создать функцию конструктор Card,который хранит имя владельца банковской 
карты и баланс счета на карте.
Определить функцию конструктор, позволяющие создавать карту на определенное имя
с определенным начальным балансом или без указания начального баланса.
Также определить функции для получения, пополнения и уменьшения баланса.
Определить функции, позволяющие вывести баланс счета в другой валюте
(курс конверсии передается как аргумент метода).
Имя владельца может передаваться через переменную окружения(process.env).
Bonus!:Написать юнит-тесты;сымитировать приватность 
поля с балансом,чтобы переменная была недоступна для изменений(только через функции работы с балансом). 
*/

function Card(cardOwnerName, cardBalance) {
    this.cardOwnerName = cardOwnerName;
    this.cardBalance = cardBalance;


    const gettingMoney = new Card(gettingMoney); // это должны быть функции , определенные внутри для card, а не конструктор

    const pushingMoney = new Card(pushingMoney);

    const spendingMoney = new Card(spendingMoney);

    const showBalanceEuroCurrency = new Card(showBalanceEuroCurrency);

    showBalanceEuroCurrency.cardBalance(euroCurrency);


    function CreateNewCardForSpecialPerson(withBasicBalance, withoutBasicBalance) {
        this.withBasicBalance = withBasicBalance;
        this.withBasicBalance = withoutBasicBalance;
    }
}


console.log(new Card("Jimm", 1000));

console.log(new CreateNewCardForSpecialPerson(100, 0));