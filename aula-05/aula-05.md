## Objetos 
- Propriedades são separadas por vírgula
- A última propriedade de um objeto não deve ter vírgula 

## Métodos
- Geralmente representam uma ação que pode ser feita com o objeto 
- Devem ser nomeados como ações (verbos)
- `()` obtem o valor/dado que a função retorna
- São criados para que a propriedade de um objeto não seja tratada  
diretamente, pois propriedades também são setter
- Ao retornarem o valor de uma propriedade, **sempre irão retornar  
o valor atualizado da propriedade**

## Funções 
- Funções e métodos que não retornam nada sempre irão retornar `undefined`  
no console

## Retorno de funções além dos tipos primitivos

## Funções retornando arrays 
- É possível especificar para que a função retorne um array, por exemplo,  
ou seja, ela irá retornar mais de um valor
- Após executar a função, é possível acessar os itens desse array 

```javascript
function myFunction() {
  return [1, 2, 3];
}

console.log(myFunction()[2]);
// 3
```

## Funções retornando objetos 
- Não é necessário criar uma variável ou um objeto no escopo global, posso  
criá-los no escopo de uma função e usar o retorno dela como um objeto com  
propriedades ou métodos 
- O retorno da função é um objeto 

```javascript
function myFunction() {
  return {
    prop1: 'valor prop1',
    prop2: 'valor prop 2'
  };
}

console.log(myFunction().prop2);
// 'valor prop 2'
```

- Posso guardar o objeto retornado em uma variável, por exemplo 
- Posso acessar uma propriedade ou método do objeto, que agora  
é referenciado na variável 

```javascript
function myFunction() {
  return {
    prop1: 'valor prop1',
    prop2: 'valor prop 2',
    prop3: function() {
      return `oi!`;
    }
  };
}

let myLet = myFunction();

myLet.prop3();
// 'oi'
```

## Arrays como parâmetros de funções 
- É possível passar objetos e arrays como parâmetros de funções 
- É possível fazer com que uma função que recebe um array como  
argumento retorne um item desse array, passando o índice desse  
item 
- É possível fazer com que o array passado por argumento, na  
invocação da função, esteja na forma literal 

```javascript
let arr = [1, 5, 9];

function myFunction(value) {
  return value[1];
}

console.log(myFunction(arr));
// 5
```

```javascript
function myFunction(value) {
  return value[1];
}

console.log(myFunction([8, 9, 4]));
// 9
```

## Objetos como parâmetros de funções 
- É possível acessar a propriedade de um objeto 
- Posso fazer com que uma função retorne uma propriedade,  
caso ela exista no objeto 

```javascript
let obj = {
  prop1: 'oi',
  prop2: 'hello',
  prop3: 'hi'
};

function sayHello(value) {
  return value.prop2;
}

console.log(sayHello(obj));
// 'hello'
```

## Acessando um arquivo no console do Node JS
- Não é preciso estar dentro do diretório, basta digitar o caminho do  
arquivo. `node challenge-05\challenge-05.js`, por exemplo. 

## `console.log()` 
- `.log()` é um método do objeto `console`