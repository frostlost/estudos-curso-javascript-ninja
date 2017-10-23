# Mais eventos por elemento

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

## Acumulando eventos em um mesmo elemento  
Como o `addEventListener()` é um método, é possível atrelar mais de um evento ao  
mesmo elemento. Ele faz com que os eventos sejam colocados em uma fila.  

Vou fazer com que um link receba dois eventos:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    on('[data-js="link"]', 'click', function(event) {
        event.preventDefault();
        alert('clicou no a');
    });

    on('[data-js="link"]', 'click', function(event) {
        event.preventDefault();
        alert('novo evento de clique no a');
    });

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

})(window, document);
```
Ou seja, quando eu clico neste link, o `alert('clicou no a');` é disparado e em  
seguida o `alert('novo evento de clique no a');` é disparado.

## A desvantagem de atrelar eventos usando atribuições sem o `addEventListener()`  
Antigamente era possível atrelar eventos dessa forma, e ela também funciona:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $a = doc.querySelector('[data-js="link"]');

    $a.onclick = function(event) {
        event.preventDefault();
        alert('clicou no a de um jeito diferente');
    };

})(window, document);
```  

Mas, se eu precisar atrelar outro evento no `a`, o primeiro evento será  
sobrescrito:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    var $a = doc.querySelector('[data-js="link"]');

    $a.onclick = function(event) {
        event.preventDefault();
        alert('clicou no a de um jeito diferente');
    };

    $a.onclick = function(event) {
        event.preventDefault();
        alert('segundo evento de clique');
    };

})(window, document);
```

Isso acontece pois em `$a.onclick =` estou fazendo uma atribuição. Ou seja, não  
há como acumular eventos à um mesmo elemento utilizando esta forma de escrever.  

## Removendo um evento com o `removeEventListener()`  
Um evento pode ser removido da mesma forma que eu o adiciono. A diferença é que  
ao invés de usar o `add`, o `remove` é usado.  

A grande sacada é que eu posso criar uma função chamada `off`, exatamente com os  
mesmos parâmetros e argumentos da função `on`, substituindo o `add` pelo  
`remove`.  
