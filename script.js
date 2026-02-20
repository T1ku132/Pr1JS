

let expenses = [];          
let nextId = 1;            


function addExpense(title, amount, category) {
    if (!title || amount <= 0 || !category) {
        console.log('Ошибка: проверьте название, сумму и категорию');
        return;
    }
    const expense = {
        id: nextId++,
        title: title,
        amount: amount,
        category: category
    };
    expenses.push(expense);
    console.log(`Добавлено: ${title} (${amount} руб.) - ${category}`);
}


function printAllExpenses() {
    if (expenses.length === 0) {
        console.log('Список расходов пуст');
        return;
    }
    console.log(' Все расходы ');
    expenses.forEach(exp => {
        console.log(`${exp.id}: ${exp.title} | ${exp.amount} руб. | ${exp.category}`);
    });
}
function getTotalAmount() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    console.log(`Общая сумма расходов: ${total} руб.`);
    return total;
}


function getExpensesByCategory(category) {
    const filtered = expenses.filter(exp => exp.category === category);
    if (filtered.length === 0) {
        console.log(`В категории "${category}" расходов нет`);
        return [];
    }
    const total = filtered.reduce((sum, exp) => sum + exp.amount, 0);
    console.log(`--- Расходы в категории "${category}" ---`);
    filtered.forEach(exp => console.log(`${exp.title}: ${exp.amount} руб.`));
    console.log(`Итого по категории: ${total} руб.`);
    return filtered;
}


function findExpenseByTitle(search) {
    const found = expenses.find(exp => exp.title.toLowerCase().includes(search.toLowerCase()));
    if (found) {
        console.log(`Найдено: ${found.title} (${found.amount} руб.) - ${found.category}`);
    } else {
        console.log(`Ничего не найдено по запросу "${search}"`);
    }
    return found;
}


function deleteExpenseById(id) {
    const index = expenses.findIndex(exp => exp.id === id);
    if (index === -1) {
        console.log(`Расход с id=${id} не найден`);
        return false;
    }
    const deleted = expenses.splice(index, 1)[0];
    console.log(`Удалён расход: ${deleted.title}`);
    return true;
}


function getCategoryStatistics() {
    if (expenses.length === 0) {
        console.log('Нет данных для статистики');
        return;
    }
    const stats = {};
    expenses.forEach(exp => {
        if (!stats[exp.category]) {
            stats[exp.category] = { count: 0, total: 0 };
        }
        stats[exp.category].count++;
        stats[exp.category].total += exp.amount;
    });
    console.log('Статистика по категориям ');
    for (let cat in stats) {
        console.log(`${cat}: ${stats[cat].count} расход(ов) на ${stats[cat].total} руб.`);
    }
}


const expenseTracker = {
    addExpense,
    printAllExpenses,
    getTotalAmount,
    getExpensesByCategory,
    findExpenseByTitle,
    deleteExpenseById,
    getCategoryStatistics
};

expenseTracker.addExpense('Обед', 350, 'Еда');
expenseTracker.addExpense('Такси', 500, 'Транспорт');
expenseTracker.addExpense('Кофе', 120, 'Еда');
expenseTracker.printAllExpenses();
expenseTracker.getTotalAmount();
expenseTracker.getExpensesByCategory('Еда');
expenseTracker.findExpenseByTitle('кофе');
expenseTracker.deleteExpenseById(2);
expenseTracker.printAllExpenses();
expenseTracker.getCategoryStatistics();