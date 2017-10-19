# Revisão do desafio da semana #24 (modularização da calculadora) - Parte 03

## Refatorando os operadores (cont.)

```JAVASCRIPT
function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
        return lastItem === operator;
    });
}
```

Nesta variável `operations`, por exemplo, se eu extrair esse array de operadores  
para uma função que retorna um array com os operadores atuais, a calculadora  
continua funcionando normalmente:  

```JAVASCRIPT
function isLastItemAnOperation(number) {
    var operations = getOperations();
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
        return lastItem === operator;
    });
}

function getOperations() {
    return ['+', '-', 'x', '÷'];
}
```

Agora, preciso fazer com que esse array venha do  
`var $operationButtons = doc.querySelectorAll('[data-js="button-operation"]');`.  
Só que isso é um `NodeList` (array-like), e para fazer com que os valores desses  
botões sejam items de um array, vou utilizar o `hack` com o método `map`,  
`Array.prototype.map.call`, passando `$operationButtons` como `this` do `call` e  
fazendo com que o retorno do `map` seja um array com os valores dos botões do  
array-like:  

```JAVASCRIPT
function isLastItemAnOperation(number) {
    var operations = getOperations();
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
        return lastItem === operator;
    });
}

function getOperations() {
    return Array.prototype.map.call($operationButtons, function(button) {
        return button.value;
    });
}
```
