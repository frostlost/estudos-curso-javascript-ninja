# Eventos

Primeiro, vou criar um html com uma div que é pai de um link, que é pai de um  
span.  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <div data-js="div">
        <a href="#" data-js="link">
            Link
            <span data-js="span">span</span>
        </a>
    </div>

    <script src="js/main.js"></script>

</body>

</html>
```

Vou capturar o link e atrelar um evento de click a ele, que previne que a página  
seja direcionada e exibe um alerta.  

Também vou atrelar eventos de click à div e ao span, fazendo com que um alert  
seja exibido ao clique deles:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $div = doc.querySelector('[data-js="div"]');
    var $a = doc.querySelector('[data-js="link"]');
    var $span = doc.querySelector('[data-js="span"]');

    $div.addEventListener('click', handleClickDiv, false);
    $a.addEventListener('click', handleClickLink, false);
    $span.addEventListener('click', handleClickSpan, false);

    function handleClickDiv() {
        alert('clicou na div');
    }

    function handleClickLink(event) {
        event.preventDefault();
        alert('clicou no a');
    }

    function handleClickSpan() {
        alert('clicou no span');
    }

})(window, document);
```

## Refatorando o código que pega o elemento html e atrela um evento à ele  
Vou criar uma função que irá receber como parâmetro o elemento a ser capturado,  
o tipo do evento e a função de callback. Ela irá pegar o elemento, atrelá-lo ao  
listener do evento passando por parâmetro o tipo / nome do evento, a função de  
callback e o use capture:  

```JAVASCRIPT
function on(element, eventName, callback) {
    doc.querySelector(element).addEventListener(eventName, callback, false);
}
```

Ou seja, essa função elimina os códigos repetidos para pegar cada elemento e  
atrelá-lo à um evento:  
`var $elemento = doc.querySelector('[elemento]');`  
`$elemento.addEventListener('nomeDoEvento', callback, use-capture);`.  

É semelhante à abstração que o Jquery faz. Código completo:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    on('[data-js="div"]', 'click', handleClickDiv);
    on('[data-js="link"]', 'click', handleClickLink);
    on('[data-js="span"]', 'click', handleClickSpan);

    function handleClickDiv() {
        alert('clicou na div');
    }

    function handleClickLink(event) {
        event.preventDefault();
        alert('clicou no a');
    }

    function handleClickSpan() {
        alert('clicou no span');
    }

})(window, document);
```

## Sobre abstração de código
O ponto principal a se observar é que, se há um código que deve ser repetido  
várias vezes, posso extraí-lo para uma função e passar os valores como  
parâmetros dessa função. No caso acima, além de valores, a função literal de  
callback foi passada como parâmetro, sem ser executada, para que, quando o  
evento no elemento ocorra, essa função seja executada.  

## Propagação de eventos
Se eu clico no `span`, o evento dele é executado, o evento do `a` é executado  
e em seguida o evento da `div` e executado. Ou seja, o evento do `span`  
propagou-se para o `a` e o evento do `a` propagou-se para a `div`.  

Se eu clico apenas na div, apenas o evento dela é disparado.  

## O parâmetro use capture - `false` ou `true` como terceiro parâmetro em eventos
Esse parâmetro irá dizer a forma como o evento será capturado.  

Em eventos, os 3 parâmetros são:  
1. O tipo do evento  
2. A função de callback  
3. Use capture  

Se eu especificar o `false` no parâmetro use capture (que é o valor padrão), irá  
executar os eventos a partir do elemento clicado e propagar os eventos até o  
elemento Pai que tem o listener de evento atrelado.  

Se o use capture for `true`, os eventos serão executados à partir do Pai que tem  
o listener de evento, até chegar no elemento clicado. Ou seja, no caso do código  
acima, eu clicar no `span`, o primeiro evento a ser executado será o da `div`,  
em seguida o do `a` e em seguida o do `span`.  

**Na maioria dos casos, o parâmetro use-capture é usado como false**.  
