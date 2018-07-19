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
  - Converte para boolean e 
  - Inverte um valor

## Operadores unários
São operadores usados à frente de um valor.

### `+`
  - Quando usado apenas à frente de um valor, tenta converter este valor em  
  número ou em `NaN`
  - Se este valor já for um número, ele não irá alterar o valor em questão
  - Não causa efeito colateral, ou seja, se o número estiver guardado em uma  
  variável, o valor dela não será alterado. Não atribui um novo valor à uma  
  variável
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

## Estrutura léxica
É um conjunto de regras que irá definir qual será o modo de escrita desta  
linguagem.

Exemplos:
- Especifica detalhes de como variáveis podem ser nomeadas
- Como nomear funções
- Tipos de caracteres que podem ser utilizados, etc
- Como separar uma instrução de outra

## Case sensitive
O JS diferencia letras maiúsculas de minúsculas.

```javascript
let animal = 'cachorro';
let Animal = 'periquito';

console.log(Animal !== animal);
// true
```

## Comentários
Não são interpretados pelo JS.

- `//` comentário de linha
- `/*  */` comentário de bloco

## Literais
- Valores que aparecem diretamente no programa
- Valores que não mudam
- Valores que, ao serem colocados no terminal, irão retornar eles mesmos
- Valor que já existe dentro da linguagem

Exemplos:
- 12
- 'uma string'
- false ou true
- null
- {a: 1, b: 2}
- [1 , 2]

## Identificadores
- Nada mais são do que nomes
- São usados para nomear variáveis ou funções

Podem **iniciar** com:
- `_` ou `$`
- letras de `a` a `z`
- letras de `A` a `Z`

Podem **conter**:
- `_` ou `$`
- letras de `a` a `z`
- letras de `A` a `Z`
- dígitos de `0` a `9`
- qualquer caractere unicode

## Palavras reservadas
São identificadores de palavras-chave da própria linguagem. Não podem ser usadas  
para nomear variáveis e/ou funções

![lexical grammar javascript mdn](https://user-images.githubusercontent.com/29297788/42241666-ba620714-7ee1-11e8-825a-8bdf1ad4dea8.png)

## `if` Instruções condicionais
- Sempre irá retornar um valor booleano  
- Testa se uma condição ou valor é verdadeiro
- if's sem else ficam mais legíveis 

```javascript
let x = 7;
let y = 7;

if(x === y && x === 7) {
  x = 4;
  y = 8;
}

console.log(x, y);
// 4 8
```

## `else`
- 'se não'
- Entra em uma instrução caso o valor seja o contrário do valor de `if`
- É executado caso `if` e `if else` sejam falsos
- if's sem else ficam mais legíveis 

```javascript
let x = 1;
let y = 1;

if(x === 2) {
  y = 2;
} else {
  y = 10;
}

console.log(y);
// 10
```

## `else if`
- Testa mais de duas condições
- Pode ser usado quantas vezes forem necessárias

```javascript
let x = 1;
let y = 10;

if(x === 2) {
  y = 2;
} else if(x === 10) {
  y = 10;
} else if(y === 9) {
  y = 1;
}
else {
  y = 'caiu no else';
}

console.log(y);
// 'caiu no else'
```
