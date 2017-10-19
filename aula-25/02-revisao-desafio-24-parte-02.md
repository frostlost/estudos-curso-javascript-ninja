# Revisão do desafio da semana #24 (modularização da calculadora) - Parte 02

## Sobre nomes de funções

>O nome de uma função ou variável deve dizer, exatamente, o que ela faz / o que  
ela é. Esse nome precisa ser explícito.  

A função `removeLastItemIfItIsAnOperation(number)`, por exemplo, irá receber uma  
`string`, e não um `number`. Então posso refatorar essa função especificando  
outro nome para o que a função irá receber:

```JAVASCRIPT
function removeLastItemIfItIsAnOperation(string) {
    if(isLastItemAnOperation(string))
        return string.slice(0, -1);
    return string;
}
```  

## Refatorando uma função com muitas linhas (`handleClickEqual()`)

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function(accumulated, actual) {
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
}
```

Ao clicar no botão `=`, o que essa função está fazendo é:

1. Atualizando o valor do visor da calculadora, removendo o último item, caso  
este seja um sinal de operador:  
`$visor.value = removeLastItemIfItIsAnOperation($visor.value);`

2. Armazenando um array com todos os valores do visor que casam com a regex:  
`var allValues = $visor.value.match(/\d+[+x÷-]?/g);`

3. O $visor.value será atualizado com o reduce desse array:  
`$visor.value = allValues.reduce(function(accumulated, actual) {...}`  

Essa função anônima do reduce é a maior função. Todos os valores dessa função  
estão dentro dela, não há nenhum valor que venha de fora. Então, eu posso  
extrair essa função, passando ela como valor de referência para o parâmetro do  
reduce com o nome `calculateAllValues`. `calculateAllValues` deve retornar um  
valor para o `reduce`.  

Lembrando que se eu fizesse `calculateAllValues()`, o valor dessa função seria  
o parâmetro do `reduce`. Como o `reduce` recebe uma função, posso simplesmente  
passá-la como referência para ele.  

Assim, a função `handleClickEqual()` fica mais legível e suas ações ficam  
explícitas:  

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(calculateAllValues);
}

function calculateAllValues(accumulated, actual) {
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
}
```

É necessário também refatorar a função `calculateAllValues(accumulated, actual)`,  
que continua com muitas linhas.  

O `switch` é o que está ocupando mais espaço nessa função. Então, posso extrair  
ele para uma função que irá verificar o tipo do operador e fazer o cálculo  
correto. Baseado nisso, posso nomear a função como `makeOperation`:  

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(calculateAllValues);
}

function calculateAllValues(accumulated, actual) {
    var firstValue = removeLastItemIfItIsAnOperation(accumulated);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperation(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return makeOperation(firstValue, operator, lastValue, lastOperator);
}

function makeOperation(firstValue, operator, lastValue, lastOperator) {
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
}
```

Com isso, a função `calculateAllValues(accumulated, actual)` que tinha 13 linhas,  
agora tem 5.  

## Sobre acoplamento de funções
O que foi feito acima, faz com que uma função dependa de outra. Isso é chamado  
de acoplamento.  

A função `handleClickEqual()` depende da  
`calculateAllValues(accumulated, actual)`, que depende da  
`makeOperation(firstValue, operator, lastValue, lastOperator)`.  


## Evitando a repetição de código dentro de funções
Dentro da função `makeOperation(firstValue, operator, lastValue, lastOperator)`,  
todos os return estão retornando a operação concatenada com o `lastValue`.  
Posso reduzir essa duplicação fazendo com que todos os return retornem a  
operação já feita e a concatenação com o `lastOperator` seja feita ao invocar a  
função:  

```JAVASCRIPT
function calculateAllValues(accumulated, actual) {
    var firstValue = removeLastItemIfItIsAnOperation(accumulated);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperation(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    return makeOperation(firstValue, operator, lastValue) + lastOperator;
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
```

## Refatorando os operadores
A refatoração dos operadores faz com que, caso mais um operador seja incluído,  
por exemplo, eu não necessite de incluí-lo em mais de um lugar no código.  

Locais onde especifico as operações no código atual:  

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(calculateAllValues);
}
```
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
```JAVASCRIPT
function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
        return lastItem === operator;
    });
}
```

Ou seja, se o operador `%` for incluído, por exemplo, vou ter que adicioná-lo  
em `3` lugares diferentes no código.  

Mas eu já recebo os operadores a partir dos values do  
`var $operationButtons = doc.querySelectorAll('[data-js="button-operation"]');`,  
e posso extrair esses operadores para uma função e chamá-los onde eu precisar  
utilizá-los.  
