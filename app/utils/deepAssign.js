
export function deepAssign(oldObj, newObj) {
  let updated = {};

  for (let key in newObj) {
    if (typeof newObj[key] === 'object' && !!oldObj[key]) {
      updated[key] = deepAssign(oldObj[key], newObj[key]);
    } else {
      updated[key] = newObj[key];
    }
  }

  return {
    ...oldObj,
    ...updated
  };
}

// let obj1 = {
//   foo: 'bar',
//   nested: {
//     baz: 'buz',
//     beep: 'boop'
//   }
// };
//
// let obj2 = {
//   hi: 'there',
//   nested: {
//     baz: 'NOTBUZ'
//   },
//   nested2: {
//     otherBaz2: 'otherBuz2'
//   }
// };
//
// let copy = deepAssign(obj1, obj2);

// console.log(copy);
