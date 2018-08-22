# `arr.reduce(function(acc, act, index, array) {}, acc)` - Método de array
- Reduz um array 
- Itera sobre o array com itens de qualquer tipo, mas não retorna  
um array 
  - Pode retornar: 
    - Object
    - String
    - Number
    - Etc
- Reduz os itens do array à um único valor, e o retorna 
- Possui os seguintes parâmetros: 
  - 1º: Uma função anônima (de redução) 
    - Essa função de redução possui os seguintes parâmetros: 
      - 1º: Valor acumulado 
        - É todo o valor que foi acumulado à cada final de iteração 
          - Na 1ª iteração, o valor acumulado corresponde ao valor  
          passado no segundo parâmetro do reduce 
            - Caso esse valor não tenha sido especificado, o valor  
            acumulado corresponte ao primeiro item do array 
      - 2º: item atual 
      - 3º: index 
      - 4º: array 
  - 2º: Um valor inicial [2]
    - É sempre importante passar esse parâmetro, pois ele representa  
    **o tipo de dado que o reduce vai retornar no final**  
- Pode ser utilizado para: 
  - Somar todos os números do array [3]
  - Reduzir uma fórmula matemática 
  - Concatenar strings 
- Não modifica o array original 
- Com o reduce, é possível abstrair qualquer método citado nas aulas  
passadas [1] 

[1]

```javascript
const arr = [1, 2, 3, 4, 5];

const filter = function(arr, func) {
  return arr.reduce(function(acc, act) {
    return func(act) ? acc.concat(act) : acc;
  }, []);
};

arr.filter(act => act < 3);
// [1, 2]
```

[2]

```javascript
arr.reduce(function(valorAcumulado, itemAtual, index, array) {
  
}, 0);
```

[3]

```javascript
const arr = [1, 2, 3, 4, 5];

arr.reduce(function(valorAcumulado, itemAtual) {
  return valorAcumulado + itemAtual;
}, 0);
// 15

/* 
1ª iteração:
  - valorAcumulado = 0
  - itemAtual = 1
  - Resultado / valorAcumulado = 1

2ª iteração:
  - valorAcumulado = 1
  - itemAtual = 2
  - Resultado / valorAcumulado = 3

3ª iteração:
  - valorAcumulado = 3
  - itemAtual = 3
  - Resultado / valorAcumulado = 6

E assim, sucessivamente, até chegar no valorAcumulado, 15. 
*/
```

# `arr.reduceRight(function() {}, acc)` - Método de array 
- Faz o mesmo que o `reduce()`, porém, da direita para a esquerda  
  - Começa com o último item do array e vai até o primeiro [1]
  - No caso de um array de números, a ordem da iteração gera um valor  
  diferente apenas em casos de exponenciação 

[1]

```javascript
const nameArr = ['R', 'o' , 'g', 'e', 'r'];

nameArr.reduceRight((acc, act) => acc + act, '');
// regoR
```

# `arr.indexOf(value, index)` - Método de array 
- Procura se um valor existe no array 
- Se apenas **um parâmetro** é especificado: 
  - Verifica se o valor especificado por parâmetro é um item do array  
    - Se é um item do array, retorna o índice do item no array [1]
    - Se não é um item do array, retorna `-1` 
  - Ao contrário dos métodos vistos anteriormente, **não recebe uma função por parâmetro**
- Se o **segundo parâmetro** é especificado: 
  - Indica à partir de qual índice o valor do primeiro parâmetro será  
  buscado no array [2]
- Ideal para casos em que é necessário verificar se um valor foi encontrado  
no array e, se confirmado, fazer algo 
  - Ou seja, é possível verificar se o retorno de `indexOf(value)` é maior  
  que -1 (true) [3]
- Uma técnica interessante é **armazenar o retorno do `indexOf()`** (index  
do item) em uma variável e, através dessa variável, pegar o item através do  
index, invocando o array com a notação `arr[indexOf(value)]` [4]
  - É o mesmo que fazer `arr[3]`
- Lembrando que, um objeto passado como parâmetro em um `indexOf()`, por  
exemplo, é um novo objeto criado na memória. Ou seja, o indexOf não irá  
comparar o mesmo objeto [challenge-14]

[1]

```javascript
const numbers = [1, 2, 3];

numbers.indexOf(3);
// 2
```

[2]

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.indexOf(4, 2); // iniciou a busca pelo valor 4 à partir do índice 2
// 3
```

[3]

```javascript
const numbers = [1, 2, 3, 4, 5];

console.log(
  numbers.indexOf(4) > -1 
  ? `item encontrado!` 
  : `valor não encontrado no array`
);
```

[4]

```javascript
const numbers = [1, 2, 3, 4, 5];

const index = numbers.indexOf(3);

numbers[index];
// 3
```

# `arr.lastIndexOf()` - Método de array 
- Faz o mesmo que o `indexOf()`, mas, **inicia a busca do final**  
para o início do array [1]
  - Lembrando que a contagem de índices do array continua a padrão  
  (da esquerda para a direita)
- Assim como o `indexOf()`, aceita receber um segundo parâmetro 

[1]

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.lastIndexOf(1);
// 0
```

# `Array.isArray(arr)` - Método de array 
- Método do construtor do array 
- Recebe um array por parâmetro e verifica se esse valor é, de fato,  
um array [1]
- Retorna `true` or `false`
- **Deve ser utilizado ao invés do `typeof`**
  - Ao utilizar o `typeof` para verificar se um valor é um array, o  
  retorno é 'object'
    - O retorno de `typeof arr === 'array'` é `false`

[1]

```javascript
const numbers = [1, 2, 3, 4, 5];

Array.isArray(numbers);
// true
```
