## A importância de nomear funções ES5
- Ao atribuir uma função ES5 à uma variável, let ou const,  
a função pode ser nomeada 
- O nome da função pode ser o mesmo da variável 
- É possível apenas passar uma função para uma variável ou  
fazer com que a variável receba a invocação da função 
  - No primeiro caso, a função é o valor da variável, ou seja,  
  é possível utilizar a função a partir do nome da variável 
- Não é possível invocar diretamente a função que foi  
atribuída à variável, mesmo nomeada 
- Evitar atribuir **funções ES5 anônimas** a variáveis 
  - Vantagens 
    - É possível obter o nome da função ao debugar  
    o código 

## ES6(ES2015) e a nomeação de funções 
- A partir do ES6(ES2015) a **var**, **let** ou **const** a qual a  
**função anônima** foi atribuída, passa a ser o nome da função 
- Arrow functions são sempre anônimas 

Exemplo com **arrow function** atribuída a uma const. O  
resultado é o mesmo caso atribuída à var ou let: 

```javascript
const nomeConst = () => 'hi';

nomeConst.name;
// nomeConst
```

Exemplo com **função ES5 anônima** atribuída a uma const.  
O resultado é o mesmo caso atribuída à var ou let: 

```javascript
const nomeConst = function() {'hi'};

nomeConst.name;
// nomeConst
```

## `.name` - Propriedade de função
- Retorna o nome da função 
- Lembrando que funções são um tipo de objeto em JS,  
ou seja, possuem propriedades e métodos embutidos 

Exemplo de **função ES5 nomeada** atribuída à variável: 

```javascript
const mySum = function sum(num1, num2) {
  return num1 + num2;
}

console.log(mySum.name);
// sum
```

## Introdução à Programação Funcional (Functional Programming)
- É um formato de escrita de código baseado em funções, ou  
em características que funções possuem 
- Para que esse formato seja possível, a linguagem precisa  
disponibilizar certos recursos, como objetos de primeira  
classe 
- É um tipo de programação com características dinâmicas 
- Evita o uso de if's, switch's e loops 
- Faz o resultado esperado depender de uma função 
- Cria e divide o código em funções menores 

## Objetos/cidadãos de primeira classe 
- Funções em JS são objetos de primeira classe  
- Significa que as funções em JS possuem o mesmo  
tratamento de objetos em JS 
- Tudo o que é possível fazer com objetos, é possível  
fazer com funções 
- Em JS, é possível criar funções e objetos literais,  
onde são usadas as chaves e já é possível codar dentro  
do objeto ou função 
- Em JS, é possível atribuir tanto objetos quando  
funções à variáveis 

## Retornando objetos em funções 
- Uma função pode simplesmente retornar um objeto, sem  
ele estar atribuído à uma variável 
- Ao invocar a função, é possível acessar propriedades  
e métodos do objeto 

## Retornando funções através de outras funções 
- Se é possível fazer com que uma função retorne um objeto,  
é possível que ela retorne outra função 

Exemplo de uma função retornando outra: 

```javascript
function adder(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

adder(5)(10);
// 15
```

- No exemplo acima, a função externa recebe um parâmetro  
e retorna uma segunda função, que recebe um parâmetro e  
retorna a soma dos dois parâmetros passados 
- Ou seja, é possível fazer duas invocações seguidas, pois  
ao invocar a função externa, ela retorna a função interna 

Exemplo de uma função criada dentro de outra função: 

```javascript
function adder(num1) {
  function addOther(num2) {
    return num1 + num2;
  }

  return addOther;
}
```

- Nos dois exemplos acima, a função externa, ao ser invocada,  
retorna a função interna 
- Com a função interna disponível, posso invocá-la, passando o  
argumento que ela pede 

Mesmo exemplo, com arrow functions: 

```javascript
const sum = num1 => num2 => num1 + num2;
```

- É possível também invocar apenas a função externa e armazenar  
a função interna em uma variável, fazendo com que essa variável  
se torne uma função 

Exemplo armazenando a função interna em uma variável: 

```javascript
function sum(num1) {
  return function(num2) {
    return num1 + num2;
  };
}

const sumConst = sum(5);

console.log(sumConst(10));
// 15
```

## Passando objetos como parâmetros de funções 
- Ao receber um objeto por argumento, uma função  
pode, por exemplo, retornar o valor de uma  
propriedade do objeto 

```javascript
const car = {
  color: 'blue',
  year: 2018
};

const getCarColor = obj => obj.color;

console.log(getCarColor(car));
// blue
```

## Passando uma função como parâmetro de outras funções 
- Uma função, ao ser invocada, por exemplo, pode retornar  
a execução da função que foi passada por parâmetro 
- Pode executar uma função desconhecida, por exemplo 

```javascript
function func1(param) {
  return param();
}

console.log(
  func1(function() {
    return 'hi!';
  })
);
// 'hi!'
```