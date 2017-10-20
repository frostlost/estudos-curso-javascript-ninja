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
array-like `$operationButtons`:  

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

Então, se eu incluir um operador `%` no html, por exemplo, ele será capturado  
automaticamente com essa função.  

### Refatorando uma regex literal
`var allValues = $visor.value.match(/\d+[+x÷-]?/g);` - Agora preciso passar os  
operadores (`[+x÷-]`) como uma string, para que eles sejam atualizados  
automaticamente caso mais um operador for incluído. Para fazer isso, preciso que  
essa regex não seja literal. Se essa regex for uma string, posso invocar e  
concatenar a função `getOperations()` nela. Assim, terei acesso a todos os  
operadores atualizados:

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var regexOperators = new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
    var allValues = $visor.value.match(regexOperators);
    $visor.value = allValues.reduce(calculateAllValues);
}
```

Posso extrair a regex não-literal para uma outra função e passar o retorno dela  
para o `match` com o `$visor.value`:  

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var allValues = $visor.value.match(getRegexOperations());
    $visor.value = allValues.reduce(calculateAllValues);
}

function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
}
```

## Sobre duplicação de código
Em alguns momentos, códigos 'duplicados' irão ter ações diferentes que irão ser  
aplicadas de formas diferentes. No caso abaixo, por exemplo, as ações são  
específicas para cada sinal de operação. Considerando o que foi ensinado até  
agora, isso não configura necessariamente uma duplicação de código:  

```JAVASCRIPT
function makeOperation(firstValue, operator, lastValue) {
    switch(operator) {
        case '+':
            return Number(firstValue) + Number(lastValue);
        case '-':
            return Number(firstValue) - Number(lastValue);
        case 'x':
            return Number(firstValue) * Number(lastValue);
        case '÷':
            return Number(firstValue) / Number(lastValue);
    }
}
```

## Melhorando a legibilidade de uma regra

```JAVASCRIPT
function calculateAllValues(accumulated, actual) {
    var firstValue = removeLastItemIfItIsAnOperation(accumulated);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperation(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return makeOperation(firstValue, operator, lastValue) + lastOperator;
}
```

Se uma regra não estiver muito clara, posso extraí-la para uma função. A regra  
`var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';`  
por exemplo, pode ser extraída para uma função cujo o nome deixa o código mais  
legível:  

```JAVASCRIPT
function calculateAllValues(accumulated, actual) {
    var firstValue = removeLastItemIfItIsAnOperation(accumulated);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperation(actual);
    var lastOperator = getLastOperator(actual);
    return makeOperation(firstValue, operator, lastValue) + lastOperator;
}

function getLastOperator(value) {
    return isLastItemAnOperation(value) ? value.split('').pop() : '';
}
```

## Sobre números de linhas por arquivo
O ideal é que os arquivos com os scripts sejam pequenos. Esse arquivo da  
calculadora possui em torno de 90 linhas. É um número interessante para essa  
aplicação.  

Arquivos com no máximo 100 linhas facilitam a manutenção do código.  

## Sobre comentários em código
O ideal é não colocar, pois comentários podem mentir. Ou seja, posso atualizar  
uma função e esquecer de atualizar o comentário.  

Geralmente, a necessidade de um comentário indica que o código não está claro o  
bastante. Para estes casos, posso usar a estratégia de extrair um pedaço de  
código para uma função e fazer com que o nome dessa função deixe o código mais  
legível. Exemplo:  

```JAVASCRIPT
function getRegexOperations() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
}
```

O nome dessa função está indicando que ela cria uma regex pegando as operações.  

**Código do exercício finalizado**:

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

    function initialize() {
        initEvents();
    }

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

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickOperation() {
        $visor.value = removeLastItemIfItIsAnOperation($visor.value);
        $visor.value += this.value;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperation($visor.value);
        var allValues = $visor.value.match(getRegexOperations());
        $visor.value = allValues.reduce(calculateAllValues);
    }

    function getRegexOperations() {
        return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
    }

    function getOperations() {
        return Array.prototype.map.call($operationButtons, function(button) {
            return button.value;
        });
    }

    function calculateAllValues(accumulated, actual) {
        var firstValue = removeLastItemIfItIsAnOperation(accumulated);
        var operator = accumulated.split('').pop();
        var lastValue = removeLastItemIfItIsAnOperation(actual);
        var lastOperator = getLastOperator(actual);
        return makeOperation(firstValue, operator, lastValue) + lastOperator;
    }

    function getLastOperator(value) {
        return isLastItemAnOperation(value) ? value.split('').pop() : '';
    }

    function makeOperation(firstValue, operator, lastValue) {
        switch(operator) {
            case '+':
                return Number(firstValue) + Number(lastValue);
            case '-':
                return Number(firstValue) - Number(lastValue);
            case 'x':
                return Number(firstValue) * Number(lastValue);
            case '÷':
                return Number(firstValue) / Number(lastValue);
        }
    }

    function isLastItemAnOperation(number) {
        var operations = getOperations();
        var lastItem = number.split('').pop();
        return operations.some(function(operator) {
            return lastItem === operator;
        });
    }

    function removeLastItemIfItIsAnOperation(string) {
        if(isLastItemAnOperation(string))
            return string.slice(0, -1);
        return string;
    }

    function handleClickCe() {
        $visor.value = 0;
    }

    initialize();

})(window, document);
```
