
const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

//фильрация
function getActiveUsers(users) {
  return users.filter(user => user.isActive === true);
}


const getUserNames = (users) => {
  return users.map(user => user.name);
};

// Поиск пользователя
function findUserById(users, id) {
  const foundUser = users.find(user => user.id === id);
  return foundUser !== undefined ? foundUser : null;
}

// Подсчёт статистики
function getUsersStatistics(users) {
  const activeCount = users.filter(user => user.isActive === true).length;
  const inactiveCount = users.filter(user => user.isActive === false).length;
  
  return {
    total: users.length,
    active: activeCount,
    inactive: inactiveCount
  };
}

//  Средний возраст
function getAverageAge(users) {
  if (users.length === 0) return 0;
  
  const sumAge = users.reduce((total, user) => total + user.age, 0);
  return sumAge / users.length;
}

//  Дополнительный функционал программы
function groupUsersByCity(users) {
  return users.reduce((result, user) => {
    const city = user.city;
    
   
    if (!result[city]) {
      result[city] = [];
    }
    

    result[city].push(user);
    
    return result;
  }, {});
}


console.log('Активные пользователи:', getActiveUsers(users));
console.log('Имена пользователей:', getUserNames(users));
console.log('Поиск пользователя с id 2:', findUserById(users, 2));
console.log('Поиск пользователя с id 10:', findUserById(users, 10));
console.log('Статистика:', getUsersStatistics(users));
console.log('Средний возраст:', getAverageAge(users));
console.log('Группировка по городам:', groupUsersByCity(users));