## Revisão do desafio da semana 02

## `undefined` no console
Às vezes o console do navegador retorna `undefined` porque está tentando avaliar  
uma declaração que não retorna nada. Exemplos:

```javascript
let myLet = 5;
// undefined - é simplesmente a criação de uma variável, não há retorno

function myFunction(x, y) {
  return x + y;
}
// undefined
```

## Precedência de operadores de multiplicação e divisão
- O operadores `*` e `/` tem uma prioridade maior do que `+` e `-` [1]
- Caso seja necessário, em uma expressão, fazer primeiro uma soma e depois  
a multiplicação, ou divisão, é necessário envolver a operação a ser executada  
primeiro em parênteses [2]

[1]

```javascript
console.log(1 * 1 * 1 + 1);
// 2
/* Fez a multiplicação primeiro (1 * 1 * 1) e depois somou o resultado da multiplicação */
```

[2]

```javascript
const operation = (5 + 5) * 2; 
// parênteses envolvendo a operação que deve ser executada primeiro 

console.log(operation)
// 20
```

## `return`
- Só pode ser usado dentro de funções
- Todo o código que vier depois do return será ignorado
- Faz com que o `else` se torne desnecessário em estruturas condicionais dentro de funções

## Tipos
Podem ser divididos em duas categorias principais.

## Tipos Primitivos
- number
- string
- boolean
- null
- undefined

## Tipos de objeto
Todos os outros tipos de dados que não são primitivos são objetos.

- Um objeto é um conjunto de propriedades
- É usado para organizar dados
- Essas propriedades recebem um nome e um valor
- Propriedades são, em essência, variáveis. Mas, como estão dentro de um objeto,  
passam a se chamar propriedades
- As propriedades são separadas por vírgula
- Esse valor pode ser primitivo ou outro objeto (funções, por exemplo)
- O valor deve ser atribuído à propriedade com `:`

```javascript
console.log({propriedade: 'valor'});
// { propriedade: 'valor'}
```

```javascript
let objeto = {
  propriedade: 'valor',
  propriedade2: 10,
  propriedade3: true
};

console.log(objeto);
// { propriedade: 'valor', propriedade2: 10, propriedade3: true }
```

## Mais sobre funções
- São objetos de primeira classe em JS, pois podem ser atribuídos a variáveis ou  
a objetos.
- Podem ser anônimas.
- Caso seja atribuída à uma variável, pode ser referenciada ou invocada ao  
usar o próprio nome da variável que a armazena.

```javascript
let myLet = function() {
  return `let myLet`;
};

console.log(myLet());
// 'let myLet'
```

## Métodos
- Toda função atribuída à uma propriedade de um objeto faz com que a propriedade  
se torne um método, que pode ser invocado;
- São funções como valor de uma propriedade de um objeto;
- Podem ser representados como ações

```javascript
let pessoa = {
  name: 'roger',
  age: 29,
  height: 1.69,
  weight: 70
};

pessoa.cor = 'caucasiano';
// atribuiu uma nova propriedade ao objeto pessoa

pessoa.aniversario = function() {
  pessoa.age++;
};
// atribuiu um novo método ao objeto pessoa

pessoa.aniversario();
console.log(pessoa);
/*
{
  name: 'roger',
  age: 30,
  height: 1.69,
  weight: 70
};
*/
```
