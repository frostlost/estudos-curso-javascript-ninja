function MyConstructor () {
  this.prop1 = 'value 1';
  this.prop2 = 'value2';
}

const obj1 = new MyConstructor()
const obj2 = new MyConstructor()

console.log(obj2.prop2)
