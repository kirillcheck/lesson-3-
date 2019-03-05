let money, time;

function start() {
    money = +prompt('"Ваш бюджет на месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('"Ваш бюджет на месяц', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    savings: true,
    expenses: {},
    optionalExpenses: {},
    income: []

};


function chooseExpenses() {
    // Цикл for 
    for (let i = 0; i < 1; i++) {
        let a = prompt("введите обязательно статью расходов в этом месяце ", ''),
            b = prompt("Во сколько обойдется?", '');



        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
            alert("некорректный ввод, повторите попытку!");
        }
    };
    // Цикл for 
}

chooseExpenses();



function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log(" Высокий уровень достатка ");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
};
checkSavings();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};
detectDayBudget();

function chooseOptExpenses() {
    let q1 = prompt("Статья необязательных расходов?"),
        q2 = prompt("Статья необязательных расходов?"),
        q3 = prompt("Статья необязательных расходов?");

    if ((typeof (q1) && typeof (q2) && typeof (q3)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i = i - 1;
        alert("некорректный ввод, повторите попытку!");
    }


};

chooseOptExpenses();