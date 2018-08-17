# `toString()`
- Método que possui implementações diferentes em cada tipo de  
objeto JS

# Introdução ao `obj.toString()` - Método de objeto 
- Método que converte o objeto para uma string 
- Retorna '[object Object]'

# `arr.toString()` - Método de array 
- Pega todos os itens do array, converte-os para string e separa  
cada item utilizando vírgula (exemplo 1). É exatamente como acontece  
com o `join()`. 
  - A diferença é que no `join()` é possível passar um parâmetro  
  especificando qual tipo de separador cada item terá 
- Não modifica o array original 

exemplo 1:

```javascript
const arr = [5, 7, 9];

arr.toString(); 
// '5,7,9'
```

# `arr.concat(param)` - Método de array 
- Une o array ao que foi especificado no parâmetro 
- Não modifica o array original (ao contrário do método `push()`)
- Pode concatenar: 
  - Números - exemplo 1
  - Outro Array (une os itens dos dois arrays) - exemplo 2
  - Múltiplos arrays, separador por vírgula - exemplo 3
  - Objetos - exemplo 5
- **Não** quebra um array multidimensional e o une em um só  
array - exemplo 4
  - Ele faz com que o array seja um item do novo array gerado 

exemplo 1: 

```javascript
const arr = [5, 7, 9];

arr.concat(99);
// [5, 7, 9, 99]
```

exemplo 2: 

```javascript
const arr = [5, 7, 9];

arr.concat([55, 77, 99]);
// [ 5, 7, 9, 55, 77, 99 ]
```

exemplo 3: 

```javascript
const arr = [5, 7, 9];

arr.concat([5, 2], [99, 8539]);
// [ 5, 7, 9, 5, 2, 99, 8539 ]
```

exemplo 4: 

```javascript
const arr = [5, 7, 9];

arr.concat([5], [99, [100, 101]]);
// [ 5, 7, 9, 5, 99, [ 100, 101 ] ]
```

exemplo 5: 

```javascript
const arr = [5, 7, 9];

arr.concat({prop1: 'value1', prop2: 'value2'});
// [ 5, 7, 9, { prop1: 'value1', prop2: 'value2' } ]
```

# `arr.unshift(item1, item2...)` - Método de array
- Adiciona um ou mais itens **no início** do array 
- Retorna o length do Array 
- Modifica o array original 

# `arr.shift()` - Método de array
- Remove o primeiro item do array 
- Retorna o item removido 
- Modifica o array original 

# `arr.slice(firstItemIndex, +1indexFinalItem)` - Método de array 
- Retorna uma parte do array 
- Retorna um novo array à partir do item especificado por parâmetro  
- **Não modifica** o array original 
- `firstItemIndex`: índice do primeiro item
- Se especificado apenas um parâmetro, retorna, à partir  
do índice especificado, todos os itens do array (exemplo 1)
- Se especificado sem parâmetro, ou com o parâmetro `0` retorna  
todos os itens do array  
- `+1indexFinalItem`: especificação do índice posterior ao índice do  
último item a ser retornado (exemplo 2)
- É possível também especificar **valores negativos** por parâmetro  
  - Um parâmetro com valor negativo pega os últimos itens do array  
  (exemplo 3)
- É retornado um array vazio, caso os parâmetros sejam inválidos

exemplo 1: 

```javascript
const numbers = [9, 523, 939, 44, 293];

numbers.slice(2);
// [939, 44, 293]
```

exemplo 2: 

```javascript
const numbers = [9, 523, 939, 44, 293];

numbers.slice(1, 4);
// [523, 939, 44]
```

exemplo 3: 

```javascript
const numbers = [9, 523, 939, 44, 293];

numbers.slice(-2);
// [44, 293] 
// pegou os dois últimos itens do array
```

# `arr.splice()` - Método de array
- Muito diferente do método `slice`  
- Pode tanto adicionar como remover itens do array  
- Parâmetro 1 **removendo itens do array**: 
  - Se apenas o parâmetro 1 for passado, irá retornar um novo  
  array com os itens removidos à partir do índice especificado  
  (exemplo 1)
- Parâmetros 1 e 2 **removendo uma parte limitada do array**: 
  - Parâmetro 1: índice do item inicial a ser removido 
  - Parâmetro 2: quantos elementos devem ser removidos, à partir  
  do índice do item inicial a ser removido (que é contado) -  
  exemplo 2 
- Parâmetros 1, 2 e 3 **adicionando um item à partir de um índice**:  
  - Parâmetro 1 - índice do novo item a ser adicionado 
  - Parâmetro 2 - não remove item, caso seja `0`
  - Parâmetro 3 - item a ser adicionado (exemplo 3)
- Parâmetros 1, 2, 3, 4 e mais... **adicionando vários itens à partir de um índice**:  
  - Parâmetro 1 - índice do novo item a ser adicionado 
  - Parâmetro 2 - não remove item, caso seja `0`
  - Parâmetro 3 - **itens** a serem adicionados (exemplo 4)
- Parâmetros 1, 2, 3, 4 e mais... **substituindo e excluindo vários itens à partir de um índice**: 
  - Parâmetro 1 - índice do novo item a ser adicionado 
  - Parâmetro 2 - quantidade de itens a serem removidos, contando  
  com o item do parâmetro 1
  - Parâmetro 3 - **itens** a serem adicionados (exemplo 5)
- Aceita, no parâmetro 3, um **array de itens a serem adicionados** 
- **Modifica o array original** 
- Pode ser poderoso ao ser usado em aplicações web 

exemplo 1: 

```javascript
const numbers = [9, 523, 939, 44, 293];

numbers.splice(2);
// [939, 44, 293]
```

exemplo 2: 

```javascript
const numbers = [9, 523, 939, 44, 293];

numbers.splice(1, 3);
// [ 523, 939, 44 ]
// à partir do índice 1, removeu 3 itens
```

exemplo 3: 

```javascript
const numbers = [9, 523, 939, 44, 293];

numbers.splice(1, 0, 'adicionado');

console.log(numbers);
// [ 9, 'adicionado', 523, 939, 44, 293 ]
```

exemplo 4: 

```javascript
const numbers = [9, 523, 939, 44, 293];

numbers.splice(1, 0, 'add1', 'add2', 'add3');

console.log(numbers);
// [ 9, 'add1', 'add2', 'add3', 523, 939, 44, 293 ]
```

exemplo 5: 

```javascript
const arr = [1, 'a', 'b', 'c', 5];

arr.splice(1, 3, 2, 3, 4);

console.log(arr);
// [ 1, 2, 3, 4, 5 ]
```

# `arr.forEach(function(item) {})` - Método de array 
- **Pode substituir o `for`**
- Funciona como o `for`, mas de uma forma mais elegante / funcional  
- Recebe uma `function` por parâmetro  
  - Recebe 3 parâmetros, no qual os 2 últimos podem ser omitidos: 
    - `item` - item do array
    - `index` - índice do item do array
    - `array` - o próprio array
  - Irá iterar por cada item do array (exemplo 1)
- É mais rápido que o `for`
- Essa função de callback passada pode ser reutilizada em outro  
local
- Possibilita fazer coisas que só são possíveis com funções 
- Pode ser utilizado para somar todos os itens de um array (exemplo 2)
- Deve ser usado em casos onde é necessário apenas iterar pelo array  
e fazer qualquer outra ação com esse array 

exemplo 1: 

```javascript
const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((item, index, array) => 
  console.log(item, index, array));
/* 
1 0 [ 1, 2, 3, 4, 5, 6, 7 ]
2 1 [ 1, 2, 3, 4, 5, 6, 7 ]
3 2 [ 1, 2, 3, 4, 5, 6, 7 ]
4 3 [ 1, 2, 3, 4, 5, 6, 7 ]
5 4 [ 1, 2, 3, 4, 5, 6, 7 ]
6 5 [ 1, 2, 3, 4, 5, 6, 7 ]
7 6 [ 1, 2, 3, 4, 5, 6, 7 ]
*/
```

exemplo 2:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

numbers.forEach(function(num) {
  sum += num;
});

console.log(sum);
// 28
```

# `arr.every(function(item) {})` - Método de array 
- Verifica se **todos os itens** do array atendem à uma condição 
- Aplica uma função na qual seu retorno, que será baseado no parâmetro,  
retorna `true` ou `false`
  - Verifica todos os itens 
  - Se pelo menos 1 item for false, já retorna false 
  - Só retorna `true` se todos os itens forem true
- A função passada recebe um parâmetro, que é o item do array e retorna  
um valor boolean baseado na condição especificada dentro da função 
- Verifica, por exemplo, se **todos os itens** do array são menores  
que 5 (exemplo 1)
- Verifica, por exemplo, se **todos os itens** do array são do tipo  
`number` (exemplo 2)
- Deve ser usado em casos onde é necessário iterar diretamente dentro  
do array, mas gerar um novo array 

exemplo 1:

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];

const every = numbers.every(item => item < 5);

console.log(every);
// false
```

exemplo 2: 

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];

const every = numbers.every(item => typeof item === 'number');

console.log(every);
// true 
```

# `arr.some(function(item) {})` - Método de array 
- Verifica se **qualquer item do array** atende à uma condição 
- Aplica uma função na qual seu retorno, que será baseado no parâmetro,  
retorna `true` ou `false`
  - Verifica todos os itens 
  - Se pelo menos 1 item for true, já retorna true 
- A função passada recebe um parâmetro, que é o item do array e retorna  
um valor boolean baseado na condição especificada dentro da função 
- Verifica, por exemplo, se **algum item** do array é igual a 7  
(exemplo 1)
- Verifica, por exemplo, se **algum item** do array é um número par  
(exemplo 2)

exemplo 1: 

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];

const some = numbers.some(function(item) {
  return item === 7;
});

console.log(some);
// true
```

exemplo 2: 

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];

const some = numbers.some(function(item) {
  return item % 2 === 0;
});

console.log(some);
// true
```

# `arr.map(function(item, index, array) {})` - Método de array 
- Transforma ou faz algo com todos os itens do array 
- Retorna um novo array, do mesmo tamanho do array original 
  - Exemplos: 
    - Novo array com cada item somado à 10 (exemplo 1)
    - Novo array com o índice de cada item (exemplo 2)
    - Novo array de objetos com itens do array original como valores  
    de propriedades (exemplo 3)
- Não altera o array original 
- Evita o uso do `for` ou o `forEach`
  - Nenhum dos dois retorna um array

exemplo 1: 

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.map(item => item + 10);
// [11, 12, 13, 14, 15]
```

exemplo 2: 

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.map((item, index) => index);
// [0, 1, 2, 3, 4]
```

exemplo 3: 

```javascript
const numbers = [1, 2, 3, 4, 5];

const objs = numbers.map((item, index) => ({'item': item, 'index': index}));

objs;
/*
[ 
  { item: 1, index: 0 },
  { item: 2, index: 1 },
  { item: 3, index: 2 },
  { item: 4, index: 3 },
  { item: 5, index: 4 } 
]
*/
```

# `arr.filter(function(item, index, array) {})` - Método de array 
- Retorna um novo array com apenas alguns itens do array original,  
baseados em alguma condição 
  - Exemplos: 
    - Novo array com itens maiores que 4 (exemplo 1)
- Não altera o array original 
- Evita o uso do `for` ou o `forEach`
  - Nenhum dos dois retorna um array

exemplo 1: 

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.filter(item => item > 4);
// [5]
```

# Encadeando os métodos `map()` e `filter()`
- Exemplos: 
  - Gerando, com o map, um array com cada item somado à 10 e encadeando  
  um filter que gera um array apenas com itens pares (exemplo 1)

exemplo 1: 

```javascript
const numbers = [1, 2, 3, 4, 5];
const finalArr = numbers.map(item => item + 10).filter(item => item % 2 === 0);

console.log(finalArr);
// [12, 14]
```