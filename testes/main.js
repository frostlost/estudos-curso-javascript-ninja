const obj = {
  prop1: 'prop1',
  prop2: 'prop2'
};

const obj2 = {
  prop1: 'prop1',
  prop2: 'prop2'
};

obj.prop1 = 'propriedade1';

delete obj.prop1;

obj.prop1 = 'prop1';

console.log(obj);