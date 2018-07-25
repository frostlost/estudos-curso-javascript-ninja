## Funções de callback 
- São funções que serão invocadas em algum momento específico 

Exemplo de pogramação funcional com um exemplo similar ao do  
challenge-09: 

```javascript
function myFunc(userString) {
  return function(callback) {
    return callback(userString);
  };
}

const myConst = myFunc(`oi!`);

console.log(myConst(function(myParam) {
  return `A string passada pelo usuário é '${myParam}'`;
}));
// `A string passada pelo usuário é 'oi'`
```

## Wrapper Objects / Objetos construtores 
- Valores primitivos (number, string, boolean, etc)  
não são objetos. Todos os outros tipos são 
  - Um valor primitivo não possui propriedades e  
  métodos 
  - É um valor exatamente da forma como ele é  
  apresentado 
- O que diz se algo dentro do JS é um objeto ou não  
é o fato desse algo ter propriedades e/ou métodos 

- Só que uma string, por exemplo, possui a propriedade  
length: 

```javascript
const myString = 'melo';

console.log(myString.length);
// 4
```

- Mas não é que a string literal possui a propriedade length.  
- O JS, ao tentar buscar um método, por exemplo, entende o  
tipo do objeto, cria um novo objeto com o wrapper object,  
que é um envoltório, envolve o valor literal em um objeto  
do mesmo tipo para que a propriedade daquele tipo possa ser  
usada. 
  - Ao utilizar e verificar o valor da propriedade `length`  
  em uma string, por exemplo, o JS descarta esse wrapper  
  object da memória e a string continua sendo um valor  
  literal
  - Ou seja, a string é convertida em um objeto do tipo  
  string para que a propriedade `length` possa ser utilizada 

Valores primitivos não são objetos, mas possuem propriedades  
devido aos objetos construtores / wrapper objects. 

### Wrapper objects criam novos objetos 
- Sintaxe: `new ConstructorName(type)`

Exemplos de contrutores de valores primitivos: 

```javascript
const name = new String('melo');
const age = new Number(29);
const ninja = new Boolean(true);

console.log(name);
// [String: 'melo'] agora, name é um objeto do tipo string 
```

- Construtores, em JS, são objetos ou funções que criam novos  
objetos 
  - São funções globais, pois estão disponíveis em qualquer  
  lugar do código 
- Uma string, ao ser criada com um `new String()`, por exemplo,  
sempre será um novo objeto, e nunca uma string literal 
- Não é algo a ser utilizado no dia-a-dia, mas é interessante  
saber e entender como o JS faz essa conversão de valores 
  - Não é necessário, por exemplo, usar um `new String('string')`  
  para criar uma string 

### `name.valueOf()` - Método de objeto 
- Método que retorna o valor real, exato, literal de um objeto 

Exemplo: 

```javascript
name.valueOf();

// 'melo'
```

### `String(value)`, `Number(value)`, `Boolean(value)` - Conversores de tipo 
- Ao usar esta sintaxe, sem o `new`, é possível converter valores 
- Ou seja, o construtor passa a ser um conversor de tipo 
- São funções globais, pois estão disponíveis em qualquer  
lugar do código 

```javascript
Number('98');
String('639');
Boolean('0');

/* 
98
'639'
true 
*/
```

## `typeof` - Verificando tipos de valores primitivos 
- Operador unário utilizado para saber se um valor  
é um número, string, boolean, função, undefined...
- Para `null` ou qualquer outro objeto que não seja  
uma função, retorna 'object' 
  - Retorna 'object' para o `null` devido a um erro  
  na implementação do JS 
- **Confiar no `typeof` apenas para 3 valores primitivos**
  - number
  - string
  - boolean

```javascript
typeof true;
// 'boolean'

typeof undefined;
// 'undefined' 

typeof function() {};
// 'function'

typeof 10;
// 'number'

typeof 'myString is a string?';
// 'string'

typeof NaN;
// 'number'

typeof [];
typeof {};
typeof null;
// 'object', para as 3 instruções 
```

Exemplo prático do uso do `typeof` em uma função de soma. 

- Como o operador `+` em JS pode transformar um número  
em string, caso uma string seja concatenada com o número,  
o operador `typeof` pode assegurar que os dois operandos  
realmente são números: 

```javascript
const sum2 = (num1, num2) => {
  if(typeof num1 === 'number' && typeof num2 === 'number')
    return num1 + num2;
  return `Por favor, insira dois números`;
};

console.log(sum2(9, '8'));
// Por favor, insira dois números
```

## Verificando se um valor realmente é `null` 
- Para verificar se um valor é `null`, é necessário verificar  
se o valor é igual a `null`:  

```javascript
const myConst = null;

console.log(myConst === null);
// true
```