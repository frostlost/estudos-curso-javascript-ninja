# Revisão do desafio da semana #23 e Modularização de código

## JavaScript da Calculadora
Vou então declarar a `IIFE`, passando o `window` e o `document` e declarar o
`use strict`:

```JAVASCRIPT
(function(win, doc) {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

})(window, document);
```

### A cada número pressionado, o input deve atualizar concatenando cada valor digitado, como em uma calculadora real

Primeiro, vou pegar o visor e os botões, através do `data-js` deles.  

Vou capturar todos botões de números, como um HTMLCollection (`array-like`).  

Se eu der um `console.log()` nos botões, será mostrado que todos os botões dos  
números foram capturados:

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $numberButtons = doc.querySelectorAll('[data-js="button-number"]');

    console.log($numberButtons);

})(window, document);
```

[![buttons.jpg](https://s1.postimg.org/1rx9rmdmkv/buttons.jpg)](https://postimg.org/image/67fowvq0sr/)
