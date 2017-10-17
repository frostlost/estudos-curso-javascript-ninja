# Revisão do desafio da semana #23 e Modularização de código - Parte 03

## Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no input
Vou selecionar o botão de igual e atrelar um evento de clique a ele.  

`$visor.value = removeLastItemIfItIsAnOperation($visor.value);` - É necessário  
que qualquer sinal de operação seja removido do final do valor. Ex.: se o botão  
`=` for clicado e o valor atual for `'15+1+1+'`, o último item dessa expressão  
será removido e a expressão sem ele será atribuída ao valor em questão  
`($visor.value)`.

A operação deve seguir um padrão. Então vou criar uma regex que faz matches com  
um número, seguido de outro número uma ou mais vezes, seguido ou não de um dos  
sinais de operação: `var regex = $visor.value.match(/\d+[+x÷-]?/g);`. Isso me  
retorna um array de matches. Por exemplo, para a expressão '15+1+1' será  
retornado `['15+', '1+', '1']`:

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
        console.log(regex);
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
[![expression.jpg](https://s1.postimg.org/8gnqu2qg3z/expression.jpg)](https://postimg.org/image/29cctwuozv/)
