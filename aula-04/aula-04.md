## Truthy
- É todo valor que, ao ser convertido para boolean, é representado por `true`
- Qualquer outros valores que sejam diferentes dos listados como `falsy`, são  
`truthy`

## Falsy
- É todo valor que, booleanamente falando, é representado por `false`

Valores `falsy`:
- `false`
- `undefined`
- `null`
- `NaN`
- `0`
- `-0`
- `''`
- `""`

```javascript
let teste;

if("") {
  teste = true;
}
else {
  teste = false;
}

console.log(teste);
// false
```

## `!!` Descobrindo a representação booleana de um valor sem utilizar o `if`
- Converte para boolean e inverte o valor, converte para boolean novamente e  
inverte o valor novamente

```javascript
console.log(!!'');
// false
```

## Condicional ternário
- Substitui o `if` em pequenas verificações
- É uma forma menor de criar um `if`
- A condição pode ser o valor de uma variável, por exemplo, que deve ser  
avaliada como `true` ou `false`
- Se a condição é `true`, a expressão entre `?` e `:` será retornada
- Se a condição é `false`, a expressão entre `:` e `;` será retornada

Sintaxe:
- `condição ? true : false;`

```javascript
console.log(1 === '1' ? true : false);
// false

console.log(false ? 'este valor é truthy' : 'este valor é falsy');
// 'este valor é falsy'

```

Seu retorno pode ser atribuído à uma variável:

```javascript
let pessoa = {
  sexo: 'masculino'
};

let sexo = pessoa.sexo === 'feminino' ? 'a' : 'o';

console.log(`eu sou ${sexo}`);
// 'eu sou o'
```

## Escopo
- Escopo é o local onde se declara uma variável

## Escopo global
- É quando uma variável é declarada **fora** de uma função
- É um problema de design do JS
- Uma variável declarada no escopo global pode ser acessada de qualquer lugar do  
código, até mesmo dentro de escopos locais
- Pode haver conflito de nomes com outras variáveis
- Pode consumir muita memória do computador
- O JS não conseguirá limpar o espaço de memória que ela está ocupando
```javascript
let myLet = 1;

function myFunction() {
  return myLet;
}

console.log(myFunction());
// 1
/* retornou 1 pq conseguiu encontrar a variável criada no escopo global */
```

## Escopo local
- É quando uma variável é declarada **dentro** de uma função
- `function() {}` cria escopo local
- Uma variável criada dentro de uma `function` não é acessada fora dela, ou  
seja, só está disponível localmente, dentro da função
- Argumentos de funções possuem escopo local

```javascript
function myFunction() {
  var myVar = 'oi';
  return myVar;
}

console.log(myVar);
// ReferenceError: myVar is not defined
```

## Garbage collection 
- Coleta de lixo  
- Uma das vantagens do uso de variáveis locais é o Garbage collection, pois,  
uma variável local faz com que o JS elimine da memória o espaço que esta  
variável estava ocupando
- Ou seja, a variável é removida da memória enquanto não é usada
- Tudo o que o JS sabe que não irá usar depois é removido da memória (funções,  
objetos, variáveis)

## Declarando variáveis sem a palavra-chave `var`
- Ainda que criadas dentro de uma função, são automaticamente criadas em escopo  
global após a função ser invocada
- O JS não consegue usar o garbage collection neste tipo de variável

```javascript
function myFunction() {
  myVar = 'minha variável';
  return myVar;
}

myFunction();
// agora myVar está em escopo global, ou seja, pode ser acessada fora da função
console.log(myVar);
// 'minha variável'
```
