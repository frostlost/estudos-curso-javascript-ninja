## Funções
- São blocos de código nomeados que podem ser invocados com o operador `()`.
- Podem ser reutilizadas.
- Podem retornar valores.
- Podem receber argumentos ou parâmetros.
  - Parâmetros são valores que eu posso passar para uma função ao invocá-la.
- Não é necessário `;` ao declará-las.

```javascript
function name() {

}

name;
/* [Function: name] - retornou apenas a Function, pois a função não foi invocada */
```

```javascript
let x = 1;

function soma() {
  x += 1;
}

soma();
x;
/* 2 - Ou seja, a função, ao ser invocada, está pegando todo o valor da variável  
x e incrementando + 1*/
```

## Escopo de funções
Uma variável **criada** dentro de uma função não pode ser acessada fora dela. Uma  
variável criada dentro de uma função vale apenas dentro da própria função.

```javascript
function myName() {
  var roger = 'roger';
}

roger;
// undefined
```

Para acessar/obter o valor desta variável, é possível usar o `return`:

```javascript
function myName() {
  var roger = 'roger';
  return roger;
}

myName();
// 'roger'
```

Somando o valor invocado por uma função ao valor de uma variável:

```javascript
let aNumber = 9;

function sumTen() {
  return 10;
}

sumTen() + aNumber;
// 19
```

Especificando parâmetros em uma função:

```javascript
function sum(x, y) {
  return x + y;
}

sum(8, 9);
/* 17 - Ou seja, retornou a soma dos dois valores que passei por argumento */
```

# `NaN`
Not a number.
- É um valor que indica que uma expressão deveria estar sendo feita com números,  
mas ele não retorna um número.
- Em JS, ele é avaliado como um tipo `number`
