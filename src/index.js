/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (let i = 0; i < array.length; i++ ) {
        fn(array[i], i, array);
    }

    return array;
}

/*
Задание 2:

Напишите аналог встроенного метода map для работы с массивами
Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
*/
function map(array, fn) {
    var array2 = [];

    for (let i = 0; i < array.length; i++ ) {
        array2.push(fn(array[i], i, array));
    }

    return array2;
}

/*
Задание 3:

Напишите аналог встроенного метода reduce для работы с массивами
Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
*/
function reduce(array, fn, initial) {
    var prev, i;

    if (initial == undefined) { 
        prev = array[0];
        i = 1;
    } else {
        prev = initial;
        i = 0;
    }
    for (i; i < array.length; i++) {
        prev= fn(prev, array[i], i, array);
    }

    return prev;
}

/*
Задание 4:

Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

Пример:
 upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
*/
function upperProps(obj) {
    var array = Object.keys(obj), i = 0;

    array.forEach ( function(item, i, array) {
        array[i] = array[i].toUpperCase();
    })

    return array;
}

/*
Задание 5 *:

Напишите аналог встроенного метода slice для работы с массивами
Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
*/
function slice(array, from, to) {
    var array2 = [];

    to = to || array.length - 1;
    for (let i = from; i < to + 1; i++) {
        array2[i - from] = array[i];
        if (i == to) {
            break;
        }
    }
    array = array2;

    return array;
}

/*
Задание 6 *:

Функция принимает объект и должна вернуть Proxy для этого объекта
Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
*/
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};