## Revisão do desafio da semana

## Prioridade / precedência entre operadores
```javascript
let myLet = 5 + 10;

// 15
```

Na expressão acima, o js **fez a operação de soma primeiro** e só depois  
atribuiu o resultado à let `myLet`. É por isso que ao testar essa instrução no  
node, o resultado é 15 e não 5 + 10.

Se o operador `=` tivesse precedência, o console mostraria 5 + 10.

## `++` Revisão do operador de soma abreviado - pós incremento
```javascript
let letUm = 1;
let letDois = letUm++;

letUm;
/* 2 - letUm valia 1, mas o operador de pós incremento foi usado, então agora  
ela vale 2. */
letDois;
/* 1 - O valor de LetUm foi atribuído à letDois. Ou seja, 1 foi atribuído antes  
do incremento. letDois valeria 2 caso o operador de pré-incremento tivesse sido  
usado. */
```

## Operadores lógicos
Combinam ou invertem valores booleanos. Sempre irão retornar `true` or `false`.

### `&&`
  - Tradução literal: and
  - Retorna se a combinação de dois valores é true or false
  - Só retorna `true` quando os dois valores são verdadeiros

```javascript
let x = 6;
let y = 3;

console.log(x === 6 && y === 3);
// true
```

### `||`
  - Tradução literal: ou
  - Retorna `true` se um dos valores é verdadeiro

```javascript
let x = 6;
let y = 3;

console.log(x === 3 || y === 3);
// true
```

### `!`
  - Not
  - Tradução literal: não
  - Inverte um valor

## Operadores unários
São operadores usados à frente de um valor.

### `+`
  - Quando usado apenas à frente de um valor, tenta converter este valor em  
  número ou em `NaN`
  - Se este valor já for um número, ele não irá alterar o valor em questão
  - Pode também concatenar strings
  - Ao tentar concatenar uma string com um número, o resultado será uma string

```javascript
console.log(+'3');
// 3 (number)

console.log(+'roger');
// NaN

console.log('ro' + 'ger');
// roger

console.log('8' + 8);
// '88'
```

### `-`
  - Quando usado apenas à frente de um valor, tenta converter este valor em  
  número ou em `NaN`
  - Tenta inverter o sinal de um número
  - Não causa efeito colateral, ou seja, se o número estiver guardado em uma  
  variável, o valor dela não será alterado. Não atribui um novo valor à uma  
  variável
  - Ao ser usado antes de uma string, irá convertê-la para número e inverter o  
  sinal dele

```javascript
let x = 8;

console.log(-x);
// -8

console.log(-'96');
// -96
```

Parei em 05:30 de  https://www.udemy.com/curso-javascript-ninja/learn/v4/t/lecture/7041082?start=0
