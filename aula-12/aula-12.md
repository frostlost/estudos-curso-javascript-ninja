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
- Um objeto passado como parâmetro em um `indexOf()`, por exemplo, é um  
novo objeto 

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
  3. com o método de objeto `Object.create()` (exemplo 2)
    1. Retorna um erro, que será visto adiante 

exemplo 1:

```javascript
let newObj = new Object();

console.log(newObj);
// {}
```

exemplo 2:

```javascript
let obj = Object.create();

console.log(obj);
// TypeError: Object prototype may only be an Object or null: undefined
```

# `Object.prototype` Introdução a protótipos de objetos 
- Propriedade de objeto 
- Retorna um objeto vazio
- É o protótipo do objeto que está sendo criado 
  - Cada objeto criado, herda do protótipo do próprio objeto  
  interno do JS
  - Cada vez que um objeto é criado, ele herda de seu próprio  
  protótipo, que é acessível com `Object.prototype`
- Cada objeto criado no JS, herda propriedades e métodos do  
`Object.prototype`. Isso se chama **encadeamento de protótipos**
  - É a herança que acontece dentro do JavaScript 
  - Essas propriedades podem ser sobrescritas 
- Alterações e/ou adições de métodos e propriedades no `Object.prototype`  
são **acessadas por todos os objetos** 
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

# `Object.create(obj)`
- Método de objeto que cria um objeto que herda propriedades e  
métodos de um outro objeto principal, que é o objeto passado  
por parâmetro (exemplo 1)
  - Ao logar o segundo objeto no console, será mostrado um objeto  
  vazio, simbolizando que o objeto não possui propriedades  
  **próprias dele**
  - Mas ele herdou as propriedades e métodos do primeiro objeto 
    - Tanto é que, se um `for in` for feito nesse objeto, as  
    propriedades e métodos que ele herdou serão mostrados (título  
    abaixo)
- **Não é uma referência para o primeiro objeto**, mas sim, um  
novo objeto
  - Porém, se o valor de uma propriedade do primeiro objeto é  
  alterada, o valor dela no segundo objeto também será alterada,  
  devido à herança. Mas **não são o memso objeto**. (exemplo 2)
  - Se o valor de uma propriedade do objeto que herdou do primeiro  
  objeto for alterada, ela só será alterada no objeto que herdou.  
  Nenhuma propriedade ou método será alterado no objeto pai  
  (exemplo 3). **O objeto pai não muda seus valores**.
  - O objeto filho pode ter as propriedades herdadas sobrescritas 
- Se um objeto vazio for passado por parâmetro, um objeto vazio  
será criado. Porém, pormais que ele esteja vazio, ele herdou  
propriedades e métodos do `Object.prototype`
  - Esse objeto vazio possui, por exemplo, o método `toString()`,  
  herdado do `Object.prototype` (exemplo 4)
  - Se o objeto for criado na forma literal `{}`, ele também herdará  
  as propriedades e métodos do `Object.prototype`
    - Se esse objeto ganha propriedades e um objeto vazio 
- Se um terceiro objeto for criado, herdando propriedades e métodos  
do segundo objeto (que herdou do 1º objeto), esse terceiro objeto  
criado também terá as propriedades do segundo objeto. 
  - Se alguma propriedade ou método do segundo objeto for  
  sobrescrita, a mesma propriedade será alterada no terceiro  
  objeto. Já o primeiro objeto, que é pai do segundo objeto,  
  **não teve sua propriedade alterada** (exemplo 5)

exemplo 1:

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

const obj2 = Object.create(obj);
// obj2 possui as propriedades do obj

console.log(obj2.prop2);
// 2
```

exemplo 2:

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

const obj2 = Object.create(obj);

obj.prop1 = 'propriedade alterada!';

console.log(obj2.prop1);
// 'propriedade alterada!'
```

exemplo 3: 

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

const obj2 = Object.create(obj);
obj2.prop2 = 'dois';

console.log(obj.prop2);
// 2
```

exemplo 4: 

```javascript
const obj = Object.create({});

console.log(obj.toString());
// [object Object]
```

exemplo 5:

```javascript
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
```

exemplo 6:

```javascript
const obj = {
  prop1: 'valor prop1',
  prop2: 'valor prop2'
};

const obj2 = Object.create(obj);

console.log(obj2); // {}

for(let prop in obj2) {
  console.log(obj2[prop]);
} 
// 'valor prop1'
// 'valor prop2'
```

# `hasOwnProperty('propName')` - Verificando quais propriedades são específicas (não herdadas) de um objeto 
- Um método de objeto, que verifica se uma propriedade é específica  
de um objeto (exemplo 1)
- Retorna `true`, caso a propriedade verificada seja não-herdada 
- Retorna `false`, caso a propriedade verificada seja herdada

exemplo 1: 

```javascript
const obj = {
  prop1: 'valor prop1',
  prop2: 'valor prop2'
};

const obj2 = Object.create(obj);

obj.hasOwnProperty('prop1'); // true

obj2.hasOwnProperty('prop1'); // false
```

# Fazendo um for in em um objeto e mostrando somente propriedades específicas dele 
- Se um `for in` for feito nesse objeto, as propriedades e métodos que  
ele herdou serão mostrados (título abaixo)
  - É possível verificar, com o método `hasOwnProperty()`, se um objeto  
  possui ou não apenas propriedades específicas dele 

```javascript
const obj = {
  prop1: 'valor prop1',
  prop2: 'valor prop2'
};

const obj2 = Object.create(obj);

for(let prop in obj2) {
  if(obj2.hasOwnProperty(prop)) // condição retorna true or false 
    console.log(prop);
}

// ''

for(let prop in obj) {
  if(obj.hasOwnProperty(prop))
    console.log(prop);
}

// prop1 prop2
```

# `Object.keys(obj)` 
- Método de objeto 
- Retorna um array com as propriedades do objeto passado por  
parâmetro (exemplo 1)
- É interessante em casos onde o retorno pode fazer algo que  
só um array faz (título abaixo)

exemplo 1: 

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

Object.keys(obj);
// ['prop1', 'prop2]
```

# Contando o número de propriedades de um objeto 
- Como o método `Object.keys(obj)` retorna um array, é possível  
encadear um `length` em seu retorno

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

Object.keys(obj).length;
// 2
```

# `obj.isPrototypeOf(otherObj)`
- Verifica se o objeto é protótipo de algum outro (exemplo 1)
- Retorna `true` or `false`
- Se o objeto verificado não foi herdado **diretamente** do  
objeto principal, o retorno também é `true` (exemplo 2)

exemplo 1: 

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

const obj2 = Object.create(obj);

obj.isPrototypeOf(obj2); // true
```

exemplo 2:

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

const obj2 = Object.create(obj);

const obj3 = Object.create(obj);

obj.isPrototypeOf(obj3); // true
// obj é protótipo dos objetos obj2 e obj3
```

# Introdução a `JSON`
- Significa JavaScript Object Notation 
  - É uma notação de objeto do JavaScript
- É uma string que representa um objeto em JS 

# `JSON.stringify(obj)`
- Gera o JSON de um objeto (exemplo 1)
- Transforma um valor em uma string (exemplo 2)
- Não altera o objeto original 

exemplo 1: 

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

JSON.stringify(obj);
// "{"prop1":1,"prop2":2}"
```

exemplo 2:

```javascript
JSON.stringify(true);
// true
```

# `JSON.parse(str)`
- Transforma um JSON em objeto (exemplo 1)
- Transforma uma string em valor primitivo (exemplo 2)

exemplo 1: 

```javascript
const obj = {
  prop1: 1,
  prop2: 2
};

const stringfyedObj = JSON.stringify(obj); // converteu o objeto para JSON

console.log(stringfyedObj);
// "{"prop1":1,"prop2":2}"

const parsedJson = JSON.parse(stringfyedObj); // converteu o JSON para objeto 

console.log(parsedJson);
// { prop1: 1, prop2: 2 }
```

exemplo 2:

```javascript
JSON.parse('true'); 
// true
```

# Atribuição manual de itens a um array 
- Quando os itens são atribuídos manualmente, caso o item inserido  
esteja em um índice distante dos demais, são atribuídos itens  
vazios (undefined) ao array (exemplo 1)

exemplo 1: 

```javascript
const myArr = [];

myArr[0] = 'hi';
myArr[8] = 'hello';

console.log(myArr);
// [ 'hi', <7 empty items>, 'hello' ]
```

# `arr.pop()` - Método de array
- Arranca o último item do array
- **Retorna o item removido** 
  - O item pode ser armazenado em uma variável, por exemplo 
- Modifica o array original 

# `arr.join()` / `arr.join(sep)` - Método de array
- Junta itens do array em uma só string (exemplo 1)
- Por padrão, junta itens do array separados por vírgula 
- Aceita um valor como parâmetro 
  - O valor será o separador entre os itens do array (exemplo 2)
- Não altera o array original 

exemplo 1:

```javascript
const arr = [856, 965, 856];

arr.join();
// "856,965,856"
```

exemplo 2:

```javascript
const arr = [856, 965, 856];

arr.join(' ');
// "856 965 856"

arr.join('');
// "856965856"

arr.join(', ');
// "856, 965, 856"
```

exemplo 3: 

```javascript
const cars = ['Bentley', 'Silverado', 'Land Rover'];

console.log(`I have these cars: ${cars.join(', ')}.`);
// I have these cars: Bentley, Silverado, Land Rover.
```

# `.reverse()` - Método de array
- Inverte a ordem dos itens de um array (exemplo 1)
- Modifica o array original 

exemplo 1: 

```javascript
const cars = ['Bentley', 'Silverado', 'Land Rover'];

cars.reverse();
// [ 'Land Rover', 'Silverado', 'Bentley' ]
```

# `arr.sort()` - Método de array
- Ordena os itens de um array por ordem alfabética (exemplo 2)
- Modifica o array original 
exemplo 2: 

```javascript
const cars = ['Bentley', 'Silverado', 'Land Rover'];

cars.sort();
// [ 'Bentley', 'Land Rover', 'Silverado' ]
```
