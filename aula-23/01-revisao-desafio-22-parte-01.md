# Revisão do desafio da semana #22 - Parte 1

## Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.

```JAVASCRIPT
var roger = {
    name: 'Roger',
    lastName: 'Melo'
};

var fernando = {
    name: 'Fernando',
    lastName: 'Daciuk'
};
```

## Agora crie uma função chamada `getFullName` que retorne as propriedades `name` e `lastName` dos objetos acima, formando um nome completo. A função não deve receber nenhum parâmetro, mas as propriedades `name` e `lastName` devem ser dinâmicas. A mesma função deve servir para as duas pessoas (ou qualquer outra que for criada). Depois disso, invoque essa função, mostrando no console o nome completo das pessoas que foram criadas anteriormente, passando as pessoas acima como contexto da função. Use um console.log por pessoa.

>passando as pessoas acima como contexto da função

O contexto da função é o objeto que representa o `this` naquela função.

```JAVASCRIPT
function getFullName() {
    return this.name + ' ' + this.lastName;
}
```

Até esse ponto, eu não sei quem é o `this` dessa função. Mas, a partir do  
momento em que eu invoco essa função com o `call`, posso passar objetos como  
contexto da função. Então irei dizer que o 'objeto x' será o contexto da função:  

```JAVASCRIPT
console.log(getFullName.call(roger));
console.log(getFullName.call(fernando));
```

## Crie uma função chamada `sum`. Essa função pode receber uma lista de parâmetros variável, e deverá retornar a soma de todos eles. Não use estruturas de repetição para somar os argumentos. Na primeira linha, dentro da função, deixe um console.log para mostrar todos os parâmetros passados para essa função.

Nesse caso não será necessário passar parâmetros pois vou conseguir pegar os  
argumentos com o objeto `arguments`:  

```JAVASCRIPT
function sum() {
    console.log(arguments);

}
```

### Como somar os arguments de uma função

A primeira coisa que eu preciso saber é como somar os valores de um `array` ou  
de um `array-like`.  

Não posso especificar `arguments.reduce` pois o `arguments` não é um `array` de  
verdade. Então, posso utilizar o `Array.prototype.reduce.call()`, **passando o  
arguments como contexto do `reduce`**. Ou seja, o `reduce` irá iterar sobre o  
objeto `arguments`:

```JAVASCRIPT
function sum() {
    console.log(arguments);

    Array.prototype.reduce.call(arguments, function() {

    });
}
```

Então, vou passar por parâmetro da função do `reduce` os itens do `arguments` e  
retornar a soma desses itens:

```JAVASCRIPT
function sum() {
    console.log(arguments);

    return Array.prototype.reduce.call(arguments, function(accumulated, actual) {
        return accumulated + actual;
    });
}
```

Feito isso, quando eu chamar esse método `sum()` e passar os argumentos, ele irá  
iterar por todos os argumentos e irá somar todos os valores dos argumentos.  

## Mostre no console que a função acima funciona, invocando-a em 3 `console.log` diferentes, com quantidades variáveis de parâmetros passados.

```JAVASCRIPT
console.log(sum(8, 6, 5, 2, 4));
console.log(sum(1, 0, 2));
console.log(sum(9, 9, 9, 6, 5));
```
