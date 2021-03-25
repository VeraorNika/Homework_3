"use strict";
let user = {
    name: "John",
    money: 2000,
    age: 20,
    isMarried: true,
} 
let UnchangedCopy = console.log;
UnchangedCopy('Первый способ переопределения console.log \n\n');
//1 способ
console.log = function (...args) {
    UnchangedCopy(new Date());
    UnchangedCopy(arguments);
}
console.log("test");
console.log([1, 2, 3]);
console.log(1, 2, 4, 6);
console.log(user);

UnchangedCopy('\n\nСравним с изначальной версией console.log при таких же вызовах:');

UnchangedCopy("test");
UnchangedCopy([1, 2, 3]);
UnchangedCopy(1, 2, 4, 6);
UnchangedCopy(user);

UnchangedCopy('\n\nВывод: сильно изменился вывод по сравнению с оригиналом (даже не считая появления даты). Изменим способ\n\n');

// 2 способ
console.log = function (...args) {
    UnchangedCopy(new Date());
    UnchangedCopy(...arguments);
}
console.log("test");
console.log([1, 2, 3]);
console.log(1, 2, 4, 6);
console.log(user);

UnchangedCopy('\n\nСравним с изначальной версией console.log при таких же вызовах:');

UnchangedCopy("test");
UnchangedCopy([1, 2, 3]);
UnchangedCopy(1, 2, 4, 6);
UnchangedCopy(user);

UnchangedCopy('\n\nВывод: за счет параметра расширения форма представления не изменилась\n\n Используем вместо arguments остаточные параметры ...args\n\n');
// 3 способ. Аналогично 1, но используем не "встроенный" массив arguments, а остаточные параметры
console.log = function (...args) {
    process.stdout.write("Time: " + new Date() + "\n");
    UnchangedCopy(args);
}

console.log("test");
console.log([1, 2, 3]);
console.log(1, 2, 4, 6);
console.log(user);

UnchangedCopy('\n\nСравним с изначальной версией console.log при таких же вызовах:');

UnchangedCopy("test");
UnchangedCopy([1, 2, 3]);
UnchangedCopy(1, 2, 4, 6);
UnchangedCopy(user);


UnchangedCopy('\n\nВывод: форма представления изменилась (даже не считая появления даты). Переопределим console.log по-другому\n\n');

// 4 способ. Аналогично 2, но используем остаточные параметры
console.log = function (...args) {
    process.stdout.write("Time: " + new Date() + "\n");
    UnchangedCopy(...args);
}

console.log("test");
console.log([1, 2, 3]);
console.log(1, 2, 4, 6);
console.log(user);

UnchangedCopy('\n\nСравним с изначальной версией console.log при таких же вызовах:');

UnchangedCopy("test");
UnchangedCopy([1, 2, 3]);
UnchangedCopy(1, 2, 4, 6);
UnchangedCopy(user);

UnchangedCopy('\n\nВывод: за счет оператора расширения ... массив стал восприниматься как список параметров');

UnchangedCopy('\n\nИспользуем apply для переопределения console.log\n\n');

// 5 способ
console.log = (...args) => {
    process.stdout.write("Time: " + new Date() + "\n");
    UnchangedCopy.apply(null, args);
};

console.log("test");
console.log([1, 2, 3]);
console.log(1, 2, 4, 6);
console.log(user);

UnchangedCopy('\n\nСравним с изначальной версией console.log при таких же вызовах:');

UnchangedCopy("test");
UnchangedCopy([1, 2, 3]);
UnchangedCopy(1, 2, 4, 6);
UnchangedCopy(user);

UnchangedCopy('\n\nВывод: функция apply позволяет передать массив аргументов как список параметров без оператора расширения');

UnchangedCopy('Добавим блок try catch для отлова ошибок:');

//6 способ
console.log = function (...args) {
    try {
        lalala;
        process.stdout.write("Time: " + new Date() + "\n");
        UnchangedCopy.apply(null, args);
    } catch (err) {
        UnchangedCopy('Error has happened: \n   Type: ' + err.name + '\n   Details: ' + err.message);
        console.error();
    }
};

console.log("test");

UnchangedCopy('Вывод через цикл for of для псевдомассива arguments. Вывод объекта через console.table: \n\n')

//7 способ
console.log = function (...args) {
    UnchangedCopy('__________________________________________________________________');
    process.stdout.write("Time: " + new Date() + "\nMessage: \n");
    // for (let i=0;  i<array.length; i++) {
        for (let arg of arguments){
        if (typeof arg == "object" && Array.isArray(arg) == false) {
            UnchangedCopy("\n"); 
            console.table(arg);
            UnchangedCopy("\n");

        }
        else if (Array.isArray(arg) == true) {
            process.stdout.write("Array:[" + String(arg) + "]\t");
            
            
        }
        else {
            process.stdout.write(arg+"\t");
        };
    }
    UnchangedCopy('\n__________________________________________________________________\n\n\n');

};


console.log("test");
console.log("test "+ 1);
console.log([1, 2, 3]);
console.log(1, 2, 4, 6);
console.log(1, 2, [4, 6], "str");
console.log(user);

