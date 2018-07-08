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

- number

- string
  - Sequência de caracteres

- boolean
  - true or false

- null
  - Sem valor
  - Precisa ser **explicitamente** especificado / atribuído
  - Geralmente representa o valor de uma variável quando ela não tem valor
```javascript
let myLet = null;

myLet;
// null
```

- undefined
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

- {} Object
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

- [] Array
  - É uma lista de valores
  - Os itens de um array são acessados por números, iniciados à partir do `0`
  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  numbers[0];

  // 1
  ```
