## Acessando o console do Node JS
Ao digitar o comando `node`, o console do nodejs estará disponível.
Ou seja, posso digitar os comandos javascript neste terminal para testar os
códigos

## Variáveis e tipos de dados
Variável é um nome simbólico que é dado para um tipo de valor.

Se eu fizer

```javascript
var x
```
e teclar enter, o resultado será `undefined`, pois não foi atribuído valor para  
esta variável.

Se eu atribuo um valor e chamo a variável, ela me **retorna** um valor.

## Atribuindo números `float` à variáveis
`1.2` é um número decimal. No JS, é nomeado como `float`. O padrão de números JS  
é decimal.

## Tipos de Dados
Os tipos de dados mais conhecidos em JS são:

### number

### string
- Sequência de caracteres

### boolean
- true or false

### null
- Sem valor
- Precisa ser **explicitamente** especificado / atribuído
- Geralmente representa o valor de uma variável quando ela não tem valor

```javascript
let myLet = null;

myLet;
// null
```

### undefined
- Ausência de valor, não foi especificado valor
- Na maior parte das vezes, `null` e `undefined` são tratados como sendo a  
mesma coisa
- Uma função que não recebe um argumento, trata a falta desse argumento como  
  `undefined`

```javascript
let myLet;

myLet;
// undefined
```

### `{}` Object
- Na maior parte das coisas, estarei lidando com este tipo
- {} é a representação literal de um objeto
- Um objeto é um dado que possui propriedades e métodos
- Propriedades são propriedades do objeto

```javascript
  person = {
    altura: 1.87,
    peso: 90
};

person;
// { altura: 1.87, peso: 90 }
```

### Acessando propriedades de objetos 
- Para acessar o valor de uma propriedade é usado o `.`:

```javascript
pessoa.altura;

// 1.87
```

- É possível criar o objeto e atribuir as propriedades e métodos de uma só vez.  
Mas também é possível atribuir e sobrescrever valores de propriedades e  
métodos usando a própria notação de acesso da propriedade, atribuindo à ela um  
valor:

```javascript
person.altura = 1.88;
person;
// { altura: 1.88, peso: 90 } - Sobrescreveu o valor da propriedade "altura"
```

- Em JS, na verdade, não existem arrays. Arrays nada mais são do que objetos.  
Se eu tentar acessar a altura da pessoa usando a notação de string dentro de  
colchetes, também consigo acessar a altura da pessoa:

```javascript
person['altura'];
// 1.88
```

- Ou seja, posso usar tanto a notação de objeto quanto a de array. A notação  
de objeto é mais rápida.

### [] Array
- É uma lista de valores
- Os itens de um array são acessados por números, iniciados à partir do `0`

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers[0];

// 1
```

## Expressões
Expressões em JS são uma frase que pode ser avaliada e produzir um certo valor:

```javascript
var x = 0;
x;

// 0
```

Espaços em branco não fazem diferença em js. Posso usar ou não. Por convenção, é  
usado um espaço entre os números e operadores aritméticos, para que o código  
fique mais legível.

```javascript
856965 * 6965856 + 85;
```

## Operadores aritméticos
- `+` adição
- `-` subtração
- `*` multiplicação
- `/` divisão

## Operadores aritméticos abreviados
- Causam efeito colateral, ou seja, atribuem um novo valor à uma variável. 

### `++`
- Soma mais um ao valor em questão
- ++ depois do valor

```javascript
let soma = 10 + 10;
soma++;
soma;

// 21
/* É o mesmo que fazer soma = soma + 1;
Ou seja, ele faz o **pós incremento**. Ele avaliou o valor da variável e  
depois adicionou + 1 */
```
- ++ antes do valor

```javascript
let soma = 10 + 10;
++soma;

// 21
/* Pré incremento. Ou seja, adicionou + 1 e depois interpretou o valor da  
variável */
```

### `--`
Funciona exatamente igual ao `++`

### `+=` Pega todo o valor que uma variável já tem e soma pelo valor que eu especifiquei

```javascript
let soma = 20;
soma += 20;

// 40
// É o mesmo que soma = soma + 20;
```

### `-=` Pega todo o valor que uma variável já tem e diminui pelo valor que eu especifiquei

```javascript
let soma = 20;
soma -= 10;

// 10
// É o mesmo que soma = soma - 10;
```

### `*=` Pega todo o valor que uma variável já tem e multiplica pelo valor que eu especifiquei

### `/=` Pega todo o valor que uma variável já tem e divide pelo valor que eu especifiquei

## Operadores de igualdade
Irão testar se um valor é igual ou diferente de outro.

### `==` igual a
- sempre retorna `true` or `false`
- É problemático pois o JS faz conversão de tipos. Ou seja, ele irá tentar  
converter um valor para verificar se ele é igual ao outro valor que está sendo  
testado:

```javascript
let stringUm = '1';
let numberUm = 1;

stringUm == numberUm;
// true

'1' == 1;
/* true  - converteu a string '1' para 1 (number)*/
```

### `!=` diferente de
- sempre retorna `true` or `false`

### `===` igual a, e do mesmo tipo
- Irá testar também o tipo do dado
- sempre usar essa notação

### `!==` diferente, mas do mesmo tipo
- sempre usar essa notação

```javascript
1 !== '1';
// true
```

## Operadores relacionais
Fazem relação entre valores.

### `>` maior que

### `<` menor que

### `>=` maior ou igual a

```javascript
1000 >= 1000;
// true
```

### `<=` menor ou igual a
```javascript
500 <= 501;
// true
```

## Funções
- São blocos de código nomeados que podem ser invocados com o operador `()`.
- Podem ser reutilizadas.
- Podem retornar valores.
- Podem receber argumentos ou parâmetros.
  - Parâmetros são valores que eu posso passar para uma função ao invocá-la.
  - Parâmetros são válidos apenas dentro da função.
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

## Criando uma nova branch
`git checkout -b nomeDaBranch`

## Mudando a branch atual
`git checkout nomeDaBranch`

## Visualizando todas as branches criadas
`git branch`

## Atualizando uma branch quando o repositório original foi alterado
`git fetch nomeDaBranch`

## Dando um push em uma nova branch
`git push origin nomeDaBranch`

- **Sempre fazer as alterações na branch criada**.
- Após a conclusão, commitar as alterações
- Aprovar a branch criada, através do botão de pull request (precisa ser  
  aprovado apenas na primeira solicitação)
- Se após a revisão do exercício uma resposta estiver errada, alterar e enviar  
novamente
