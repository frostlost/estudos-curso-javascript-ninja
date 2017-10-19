# Revisão do desafio da semana #24 (modularização da calculadora)

```JAVASCRIPT
(function(win, doc) {
    'use strict';
    /*
    Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
    o código, conforme vimos na aula anterior. Quebrar as responsabilidades
    em funções, onde cada função faça somente uma única coisa, e faça bem feito.

    - Remova as duplicações de código;
    - agrupe os códigos que estão soltos em funções (declarações de variáveis,
    listeners de eventos, etc);
    - faça refactories para melhorar esse código, mas de forma que o mantenha com a
    mesma funcionalidade.
    */

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
        var allValues = $visor.value.match(/\d+[+x÷-]?/g);
        var result = allValues.reduce(function(accumulated, actual) {
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
            return number.slice(0, -1);
        return number;
    }

    function handleClickCe() {
        $visor.value = 0;
    }

})(window, document);
```

## Organizando o código dentro de funções (initialize)
Para modularizar o código, posso usar funções que iniciam a aplicação e agrupam  
partes do código. Se eu criar uma função `initialize`, por exemplo, posso  
especificar para que ela inicie a calculadora, ou partes dela. Ou seja, ela  
será a primeira função a ser chamada quando a calculadora for carregada.  

Dentro da função `initialize`, vou invocar a função `initEvents`, que irá  
iniciar todos os eventos do código:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    //vars here...

    function initialize() {
        initEvents();
    }

    //more code here...

    function initEvents() {
        $numberButtons.forEach(function(button) {
            button.addEventListener('click', handleClickNumber, false);
        });
        $operationButtons.forEach(function(button) {
            button.addEventListener('click', handleClickOperation, false);
        });
        $equalButton.addEventListener('click', handleClickEqual, false);
        $ceButton.addEventListener('click', handleClickCe, false);
    }

    //more code here...

    initialize();

})(window, document);
```

## Sobre duplicação de código
Em alguns momentos, códigos 'duplicados' irão ter ações diferentes que irão ser  
aplicadas de formas diferentes.

## Sobre a quantidade de linhas de uma função

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    var result = allValues.reduce(function(accumulated, actual) {
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
```

Essa função contém 21 linhas de código. Uma função deve ser totalmente  
visualizada na tela.  

Funções devem ser pequenas. Funções que chegam a 10, 15 linhas, normalmente  
estão fazendo mais ações do que deveriam. O ideal é que funções tenham em torno  
de 5 linhas.  

No caso da função acima, a ideia é quebrá-la em funções menores, que façam ações  
menores e fazer invocações dessas funções menores dentro dessa função principal.
