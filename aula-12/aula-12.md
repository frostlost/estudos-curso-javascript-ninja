# `delete` - Deletando propriedades de um objeto 
- Palavra-chave que deleta propriedades de um objeto 
- Retorna um valor booleano 

```javascript
delete obj.propName;
```

# Mais sobre objetos (Mutabilidade)
- Objetos, arrays e funções são mutáveis, podem mudar. Diferentemente  
de valores literais 
  - Objetos permitem que valores de suas propriedades sejam alterados 
  - Objetos permitem que propriedades sejam deletadas, com o `delete`
  - Se um segundo objeto que possui as mesmas propriedades do primeiro  
  objeto for criado
- São manipulados por referência 

# Manipulação de objetos por referência 
- Cada objeto, é um objeto diferente, criado na memória
  - Se uma variável armazenar **a referência** de um objeto, ao  
  logar a variável no console, é mostrado que ela possui as mesmas  
  propriedades do objeto armazenado (exemplo 2)
    - Se for verificado se a variável é igual ao objeto que ela  
    armazena, o resultado é true, pois a variável é uma referência  
    ao objeto armazenado (exemplo 3)
      - Inclusive, **através da própria variável** é possível manipular  
      propriedades do objeto que a variável está armazenando (exemplo 4)
  - Dois objetos que possuem as mesmas propriedades são objetos diferentes  
  (exemplo 1)

```javascript
const obj = {
  prop1: 'prop1',
  prop2: 'prop2'
};

const obj2 = {
  prop1: 'prop1',
  prop2: 'prop2'
};

console.log(obj === obj2);
// false
```

```javascript
const obj = {
  prop1: 'prop1',
  prop2: 'prop2'
};

const obj2 = {
  prop1: 'prop1',
  prop2: 'prop2'
};

let objCopy = obj;

console.log(objCopy);
// {prop1: 'prop1', prop2: 'prop2'};
```

```javascript
const obj = {
  prop1: 'prop1',
  prop2: 'prop2'
};

const obj2 = {
  prop1: 'prop1',
  prop2: 'prop2'
};

let objCopy = obj;

console.log(objCopy === obj);
// true 
```

```javascript
const obj = {
  prop1: 'prop1',
  prop2: 'prop2'
};

const obj2 = {
  prop1: 'prop1',
  prop2: 'prop2'
};

let objCopy = obj;

objCopy.prop1 = 'string manipulada através da referência';

console.log(obj);
/* 
  {
    prop1: 'string manipulada através da referência', 
    prop2: 'prop2'
  } 
*/
```

# `Object` Palavra-chave do objeto interno do JS 
- É um objeto interno do JS
- É uma função (exemplo 1)
  - Caso invocada, retorna um objeto vazio (exemplo 2)
- Cada objeto criado é uma instância do `Object`

```javascript
console.log(Object);
// [Function: Object]
```

```javascript
console.log(Object());
// {}
```

# Criação de objetos (literais, com `new, método `Object.create()`)
- 3 formas de criar objetos: 
  1. Literal 
    1. Usar a conotação `{}`
  2. Como construtor 
    1. Através da palavra-chave `new` (exemplo 1)
      1. Faz, exatamente, a mesma coisa ao se criar um objeto  
      de forma literal
      2. Ou seja, é sempre mais rápido usar a forma literal 
  3. com o método `Object.create()` (exemplo 2)
    1. Retorna um erro, que será visto adiante 

```javascript
let newObj = new Object();

console.log(newObj);
// {}
```

```javascript
let obj = Object.create();

console.log(obj);
// TypeError: Object prototype may only be an Object or null: undefined
```

# `Object.prototype` Introdução a protótipos de objetos 
- Propriedade. 
- Retorna um objeto vazio
- É o protótipo do objeto que está sendo criado 
  - Cada objeto criado, herda do protótipo do próprio objeto  
  interno do JS
  - Cada vez que um objeto é criado, ele herda de seu próprio  
  protótipo, que é acessível com `Object.prototype`
- Cada objeto criado no JS, herda propriedades e métodos do  
`Object.prototype`. Isso se chama **encadeamento de protótipos**
  - É a herança que acontece dentro do JavaScript 
  - Essas propriedades podems ser sobrescritas 
- Alterações no `Object.prototype` são acessadas por todos os  
objetos 
- Objetos internos / padrão do JS herdam métodos e propriedades de  
`Object.prototype`
  - `Array`, `String`, `Date`, `RegExp`
  - O único que não herda de algum objeto interno / padrão é o  
  próprio `Object.prototype`, pois ele é o Pai da herança dos objetos 
    - Todos os objetos internos / padrão herdarão métodos e  
    propriedades dele 

# `Array` Palavra-chave do array interno do JS 
- É um array interno do JS
- É uma função (exemplo 1)
  - Caso invocada, retorna um array vazio (exemplo 2)
- Herda propriedades e métodos do `Object.prototype`

```javascript
console.log(Array);
// [Function: Array]
```

```javascript
console.log(Array());
// []
```

# `Date` Palavra-chave do date interno do JS 
- É uma função (exemplo 1)
  - Caso invocada, retorna a data atual (exemplo 2)
- Herda propriedades e métodos do `Object.prototype`

```javascript
console.log(Date);
// [Function: Date]
```

```javascript
console.log(Date());
// Fri Aug 03 2018 19:44:00 GMT-0300 (Hora oficial do Brasil)
```

# Herança através de encadeamento de protótipos 
- Cada objeto criado no JS, herda propriedades e métodos do  
`Object.prototype`. Isso se chama **encadeamento de protótipos**
  - É a herança que acontece dentro do JavaScript 