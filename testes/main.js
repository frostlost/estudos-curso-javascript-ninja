const obj = {
  prop1: 1,
  prop2: 2
};

const obj2 = Object.create(obj);

const obj3 = Object.create(obj);

obj.isPrototypeOf(obj3); // true