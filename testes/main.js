const obj = {
  prop1: 'valor1',
  prop2: 'valor2'
};

const obj2 = Object.create(obj);
// herdou as propriedades de obj

const obj3 = Object.create(obj2);
// herdou as propriedades de obj2

obj2.prop1 = 'mudou o valor!';

console.log(obj3.prop1);
// 'mudou o valor!'

console.log(obj2 === obj3);