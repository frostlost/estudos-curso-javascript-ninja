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

