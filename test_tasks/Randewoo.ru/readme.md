## Ex1: Является ли функция обьектом?

- [x] Да
- [ ] Нет

---

## Ex2: Что будет выведено в результате выполнения примера? Почему?

```js
const a = {
  field: 10,
};

function doSmth(a) {
  a = {};
  a.field = 21;
  return a;
}

console.log(doSmth(a));
console.log(a);
console.log(doSmth(18));
```

### Solution:

```log
{field: 21}
{field: 10}
{field: 21}
```

Только `console.log(a)` выведет обьъявленный в глобальной области видимости обьект `a` и выведет его так: `{field: 10}`, в остальных случаях - не важно, какое число или какой обьект мы передадим в функцию, ибо внутри неё идёт сперва обьявление переменной `a`, которая находится в локальной области видимости у функции и дальше `a.filed = 21` создаёт `filed: 21`. Т.е. это полностью новый объект и он только похож на первоначально объявленный `a`. Можно записать хоть так: `a.customname = 55` — создастся на момент вызова обьект а, которому будет присвоено `{customname: 55}`. После отработанного каждого консоль лога — с вызовом функции `doSmth()` будет очищена память по области видимости и никто не сможет достучаться до тех значений, которые были выведены через консоль лог.

---

## Ex3: Напишите реализацию функции, чтобы получить указанный вывод в консоли

```js
const a = {
  field: 10
};

function doSmth(...) {...}
doSmth(...);

console.log(a); // => { field: 20 }
```

### Solution:

```js
const a = {
  field: 10,
};

function doSmth(a) {
  for (let objName in a) {
    if (a.hasOwnProperty(objName) && typeof a[objName] === 'number') {
      a[objName] = a[objName] * 2;
    }
  }
}
doSmth(a);

console.log(a);
```

Сделал на случай расширения. Решил проверить на существование свойств и на то, что значение = число. Только после этого умножил его на 2.

---

## Ex4: Обязательные элементы HTTP-запроса

- [ ] url
- [x] url + метод
- [ ] url + параметры
- [ ] url + метод + параметры

---

## Ex5: Исправьте код:

```js
function deferredValue(value) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      return value;
    }, 3000);
  });
}

function multiply(a, b) {
  const a = deferredValue(a);
  const b = deferredValue(b);
  return a * b;
}

multiply(12, 13);
```

### Solution:
