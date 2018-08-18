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
        - É todo o valor que foi acumulado à cada iteração 
          - Na 1ª iteração, o valor acumulado corresponde ao valor  
          passado no segundo parâmetro do reduce 
            - Caso esse valor não tenha sido especificado, o valor  
            acumulado corresponte ao primeiro item do array 
      - 2º: Item atual 
      - 3º: index 
      - 4º: array 
  - 2º: Um valor inicial [2]
    - É sempre importante passar esse parâmetro, pois ele representa  
    **o tipo de dado que o reduce vai retornar no final**  
- Pode ser utilizado para: 
  - Somar todos os números do array [3]
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