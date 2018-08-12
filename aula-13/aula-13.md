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

# `arr.unshift(item)` - Método de array
- Adiciona um item **no início** do array 
- Retorna o length do Array 
- Modifica o array original 

# `arr.shift()` - Método de array
- Remove o primeiro item do array 
- Retorna o item removido 
- Modifica o array original 

# `arr.slice(firstItemIndex, +1indexFinalItem)` - Método de array 
- Retorna um novo array à partir do item especificado por parâmetro  
- **Não modifica** o array original 
- `firstItemIndex`: índice do primeiro item
- Se especificado apenas um parâmetro, retorna, à partir  
do índice especificado, todos os itens do array (exemplo 1)
- Se especificado sem parâmetro, ou com o parâmetro `0` retorna  
todos os itens do array  
- `+1indexFinalItem`: especificação do índice posterior ao índice do  
item a ser retornado (exemplo 2)
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
- Modifica o array principal 
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