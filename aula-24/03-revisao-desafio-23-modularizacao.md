# Revisão do desafio da semana #23 e Modularização de código

## Ao pressionar o botão "CE", o input deve ficar zerado
Então vou pegar o botão `ce` e atribuir um evento a ele, fazendo com que, ao ser  
clicado, o visor seja zerado:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $numberButtons = doc.querySelectorAll('[data-js="button-number"]');
    var $ceButton = doc.querySelector('[data-js="button-ce"]');

    $numberButtons.forEach(function(button) {
        button.addEventListener('click', handleClickNumber, false);
    });
    $ceButton.addEventListener('click', handleClickCe, false);

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickCe() {
        $visor.value = 0;
    }

})(window, document);
```

## Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da operação no input
Vou pegar os botões com as operações (+, -, x e /). Agora, cada item do array  
que o `document.querySelectorAll()` me trouxe é um botão de operação. Vou  
atrelar um evento de click a cada item do array (botão), fazendo que o valor  
atual do visor seja concatenado com o valor do botão, que é uma operação:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $numberButtons = doc.querySelectorAll('[data-js="button-number"]');
    var $operationButtons = doc.querySelectorAll('[data-js="button-operation"]');
    var $ceButton = doc.querySelector('[data-js="button-ce"]');

    $numberButtons.forEach(function(button) {
        button.addEventListener('click', handleClickNumber, false);
    });
    $operationButtons.forEach(function(button) {
        button.addEventListener('click', handleClickOperation, false);
    });
    $ceButton.addEventListener('click', handleClickCe, false);

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickOperation() {
        $visor.value += this.value;
    }

    function handleClickCe() {
        $visor.value = 0;
    }

})(window, document);
```

## Se o último caractere no input já for um símbolo de alguma operação, esse caractere deve ser substituído pelo último pressionado

>Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".

Então, antes de adicionar o valor, preciso verificar se o último item é um dos  
símbolos de operação. Vou criar uma função separada para isso.  

Essa função irá quebrar o valor (`number`) em um array e guardar o último item  
desse array em uma variável. Então, será verificado se algum item do array  
`operations` é igual a esse último item do array `number`. A função irá retornar  
`true` or `false`:

```JAVASCRIPT
function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
        return lastItem === operator;
    });
}
```

Caso essa função retorne `true`, o último item desse valor deve ser excluído.  
Caso retorne `false`, o valor deve ser retornado sem modificações. Também posso  
fazer isso em uma função separada:

```JAVASCRIPT
function removeLastItemIfItIsAnOperation(number) {
    if(isLastItemAnOperation(number))
        number = number.slice(0, -1);
    return number;
}
```

Agora vou fazer com que, no clique do botão de alguma operação, o valor do visor  
sempre receba a função acima `removeLastItemIfItIsAnOperation(number)`, que  
retorna, ou o valor sem o último item caso ele seja uma operação, ou o valor  
intacto caso ele não tenha um símbolo de operação no final.  

Após isso, também vou especificar que o valor do visor deve receber tudo o que  
ele já tem mais o valor do botão pressionado:

```JAVASCRIPT
function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    $visor.value += this.value;
}
```

### Sobre nomes de funções
>Cada função deve ter uma responsabilidade única e, seu nome deve ser exatamente  
o que ela faz. Mesmo que ela apenas englobe outras ações de outras funções, por  
exemplo. 
