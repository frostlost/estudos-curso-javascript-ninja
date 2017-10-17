# Revisão do desafio da semana #23 e Modularização de código - Parte 05

## Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no input (continuação)

### `reduce()`

Dentro do reduce, vou declarar uma variável `firstValue` e uma `lastValue`.  
Ambas recebem os valores acumulado e atual (primeiro e segundo item do array  
regex) sem o sinal de operação no final. Na expressão `'15+1+1'`, por exemplo,  
`firstValue` receberia `'15'` e `lastValue` receberia `'1'`.  
`var firstValue = removeLastItemIfItIsAnOperation(accumulated);`  
`var lastValue = removeLastItemIfItIsAnOperation(actual);`

Vou declarar uma variável `operator`, que recebe o operador no fim do valor  
acumulado. `var operator = accumulated.split('').pop();`  

Também vou declarar uma variável `lastOperator`, que recebe ou o sinal de  
operador do valor atual ou uma string vazia. Isso vai fazer sentido para valores  
com 2 ou mais operações, como `'15+1+1'`, `'10+5x2'`, `'20x2+40'`, etc.  
`var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';`

Vou especificar um switch que verifica o valor da variável `operator`. Caso o  
valor dessa variável seja `'+'`, por exemplo, será retornado a soma da variável  
`firstValue` com a `lastValue`, ambas convertidas em número. Após a soma, se  
`lastOperator` for verdadeiro, ele será concatenado ao como uma string ao  
resultado de `firstValue` com `lastValue` e esse novo valor passa a ser o valor  
acumulado:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $numberButtons = doc.querySelectorAll('[data-js="button-number"]');
    var $operationButtons = doc.querySelectorAll('[data-js="button-operation"]');
    var $equalButton = doc.querySelector('[data-js="button-equal"]');
    var $ceButton = doc.querySelector('[data-js="button-ce"]');

    $numberButtons.forEach(function(button) {
        button.addEventListener('click', handleClickNumber, false);
    });
    $operationButtons.forEach(function(button) {
        button.addEventListener('click', handleClickOperation, false);
    });
    $equalButton.addEventListener('click', handleClickEqual, false);
    $ceButton.addEventListener('click', handleClickCe, false);

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickOperation() {
        $visor.value = removeLastItemIfItIsAnOperation($visor.value);
        $visor.value += this.value;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperation($visor.value);
        var regex = $visor.value.match(/\d+[+x÷-]?/g);
        var result = regex.reduce(function(accumulated, actual) {
            var firstValue = removeLastItemIfItIsAnOperation(accumulated);
            var operator = accumulated.split('').pop();
            var lastValue = removeLastItemIfItIsAnOperation(actual);
            var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
            switch(operator) {
                case '+':
                    return (Number(firstValue) + Number(lastValue)) + lastOperator;
                case '-':
                    return (Number(firstValue) - Number(lastValue)) + lastOperator;
                case 'x':
                    return (Number(firstValue) * Number(lastValue)) + lastOperator;
                case '÷':
                    return (Number(firstValue) / Number(lastValue)) + lastOperator;
            }
        });
        $visor.value = result;
    }

    function isLastItemAnOperation(number) {
        var operations = ['+', '-', 'x', '÷'];
        var lastItem = number.split('').pop();
        return operations.some(function(operator) {
            return lastItem === operator;
        });
    }

    function removeLastItemIfItIsAnOperation(number) {
        if(isLastItemAnOperation(number))
            number = number.slice(0, -1);
        return number;
    }

    function handleClickCe() {
        $visor.value = 0;
    }

})(window, document);
```

[![calculator-reduce.jpg](https://s1.postimg.org/7ar5ryjavz/calculator-reduce.jpg)](https://postimg.org/image/4cevogb1ej/)
