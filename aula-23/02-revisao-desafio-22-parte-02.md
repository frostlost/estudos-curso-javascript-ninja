# Revisão do desafio da semana #22 - Parte 2

## Declare uma variável chamada `userEntry`, que irá receber alguns valores entrados pelo usuário. Mostre para o usuário a seguinte frase: "Entre com alguns números que serão somados:"

```JAVASCRIPT
var userEntry = prompt('Entre com alguns números que serão somados');
```

## Mostre no console o valor entrado pelo usuário
```JAVASCRIPT
console.log(userEntry);
```

## Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string e remove tudo o que não for número, retornando um array somente com os números da string. Mostre a representação em string dessa função no console.

>Toda entrada do usuário, tanto no `prompt` como no `input` virá como string

```JAVASCRIPT
function justNumbers(entry) {

}
```

Agora preciso fazer com que essa função retorne um `array` de números.  

Primeiro, vou fazer com que **tudo o que não for número seja substituído por  
vírgula**:

```JAVASCRIPT
function justNumbers(entry) {
    return entry.replace(/\D+/g, ',');
}

console.log(justNumbers(userEntry));

// 9,045,9,34,
```

Após isso, vou fazer com que as vírgulas sejam removidas da string e  
transformá-la em um `array`:

```JAVASCRIPT
function justNumbers(entry) {
    return entry.replace(/\D+/g, ',').split(',');
}

console.log(justNumbers(userEntry));

// ["9", "045", "9", "34", ""]
```

## Usando a função acima, faça a limpeza dos valores entrados pelo usuário, atribuindo o resultado à uma variável `numbers`.

```JAVASCRIPT
var numbers = justNumbers(userEntry);
console.log(numbers);

// ["9", "045", "9", "34", ""]
```

## Agora com o array de números, utilize a função `sum` para somar todos os números desse array e mostre o resultado no console.

Lembrando que a função `sum()` recebe o `arguments` e o passa para o reduce como  
um array-like para que a soma dos itens seja feita.  

Então, para passar para o a função `sum()` um array de argumentos, irei utilizar  
o método `apply`. E como eu não tenho `this` neste caso, irei passar o próprio  
`sum`:

```JAVASCRIPT
console.log(sum.apply(sum, numbers));

// 9045934
```

Foi retornada uma concatenação pois a entrada do usuário está como `array`.  
Então, preciso garantir que esses items serão `number`.  

**Para garantir que esses itens serão apenas números, posso especificar dentro da  
função `sum()` que os valores dos parâmetros `accumulated` e `actual` serão  
convertidos em `number`, utilizando o sinal `+` como unário**:

```JAVASCRIPT
function sum() {
    console.log(arguments);

    return Array.prototype.reduce.call(arguments, function(accumulated, actual) {
        return +accumulated + +actual;
    });
}
```

Ou seja, se o valor de `accumulated` ou `actual` é uma **string numérica**, essa  
string **será convertida para número**.  

Se eu quiser deixar essa conversão mais legível, posso converter os valores de  
`accumulated` e `actual` utilizando o construtor de números `Number()`:

```JAVASCRIPT
function sum() {
    console.log(arguments);

    return Array.prototype.reduce.call(arguments, function(accumulated, actual) {
        return Number(accumulated) + Number(actual);
    });
}
```

O `new` não foi utilizado antes do `Number()` pois só quero utilizar o `Number()`  
para converter as strings numéricas para números.  

Com o `Number()`, deixo a conversão mais explícita.
