## A importância de nomear funções ES5
- Ao atribuir uma função ES5 à uma variável, let ou const,  
a função pode ser nomeada 
- O nome da função pode ser o mesmo da variável 
- Evitar atribuir **funções ES5 anônimas** a variáveis 
  - Vantagens 
    - É possível obter o nome da função ao debugar  
    o código 

## ES6(ES2015)
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