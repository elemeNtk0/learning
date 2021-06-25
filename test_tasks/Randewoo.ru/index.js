// const a = {
//   field: 10,
// };

// function doSmth(a) {
//   a = {};
//   a.field = 21;
//   return a;
// }

// console.log(doSmth(a));
// console.log(a);
// console.log(doSmth(18));

// solution Ex3/
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
