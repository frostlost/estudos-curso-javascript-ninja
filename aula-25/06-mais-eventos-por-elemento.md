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
Um evento pode ser removido da mesma forma que é adicionado. A diferença é que  
ao invés de usar o `add`, o `remove` é usado.  

A grande sacada é que eu posso criar uma função chamada `off`, passando  
exatamente o mesmo elemento e a mesma função de callback, substituindo o `add`  
pelo `remove`.  

```JAVASCRIPT
function off(element, eventName, callback) {
    doc.querySelector(element).removeEventListener(eventName, callback, false);
}
```

Só que se eu tento invocar essa função `off` com uma função anônima, o resultado  
não é o esperado pois as funções anônimas de `on` e `off` são diferentes, e não  
é possível remover um listener de evento se o mesmo objeto (função) não for  
passado:  

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

    off('[data-js="link"]', 'click', function(event) {
        event.preventDefault();
        alert('novo evento de clique no a');
    });

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);

// todos os alerts são exibidos
```

Então, para que a mesma função seja passada por argumento nas funções `on` e  
`off`, é necessário extrair o código dessa função anônima e colocá-lo dentro de  
uma nova função nomeada e passar essa nova função como referência.  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    on('[data-js="link"]', 'click', function(event) {
        event.preventDefault();
        alert('clicou no a');
    });

    on('[data-js="link"]', 'click', handleClick);
    off('[data-js="link"]', 'click', handleClick);

    function handleClick(event) {
        event.preventDefault();
        alert('novo evento de clique no a');
    }

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);
```

Ou seja, estou atrelando um evento de clique para a função `handleClick` e  
removendo-o. Eu posso colocar essa função de remoção em qualquer lugar do código  
(abaixo da função `on`) pois o `eventListener()` é um método assíncrono.  

## A importância de se usar funções nomeadas em eventos
Ao passar uma função nomeada em um `eventListener`, eu consigo remover um evento  
de um elemento:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    on('[data-js="link"]', 'click', handleClick);
    on('[data-js="link"]', 'click', handleClick2);
    off('[data-js="link"]', 'click', handleClick);

    function handleClick(event) {
        event.preventDefault();
        alert('novo evento de clique no a');
    }

    function handleClick2(event) {
        event.preventDefault();
        alert('clicou no a');
    }

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);
```

Isso pode ser importante em casos onde é necessário atrelar um evento à um  
elemento e retirar esse evento depois.  

Há outra forma de fazer isso porém, menos legível:  

```JAVASCRIPT
doc.querySelector('[data-js="link"]')
.removeEventListener('click', handleClick, false);
```

## Eventos em elementos de formulário  
Suponhamos que eu tenha um input:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <input type="text" data-js="input" autofocus>

    <script src="js/main.js"></script>

</body>

</html>
```  

### O evento `'input'`  
O evento input é disparado quando o valor de um input é alterado.  

Então, vou especificar o valor do input seja atualizado e mostrado no console.  

Lembrando que o `this`, dentro da função de callback, representa o próprio  
elemento em que o evento está atrelado:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    on('[data-js="input"]', 'input', handleInput);

    function handleInput(event) {
        console.log(this.value);
    }

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);
```

[![input-value.jpg](https://s1.postimg.org/6ptvcsxu0v/input-value.jpg)](https://postimg.org/image/3gurg5ace3/)

### O evento `'keyup'`  
Evento disparado ao soltar uma tecla pressionada.  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    on('[data-js="input"]', 'keyup', handleInput);

    function handleInput(event) {
        console.log(this.value);
    }

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);
```

[![input-value.jpg](https://s1.postimg.org/2e7tjfhdm7/input-value.jpg)](https://postimg.org/image/9ach3m0nqj/)

### O evento `'keydown'`  
Esse evento é disparado quando uma tecla é pressionada para baixo.  

Se eu segurar a tecla `j` sem soltá-la, por exemplo, esse caractere já será  
mostrado no console:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    on('[data-js="input"]', 'keydown', handleInput);

    function handleInput(event) {
        console.log(this.value);
    }

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);
```

[![keydown.jpg](https://s1.postimg.org/9i57rdn6gv/keydown.jpg)](https://postimg.org/image/7tvuu6wwaj/)

### O evento `'change'`  

Vou incluir um `select` no html, ao lado do input:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <input type="text" data-js="input" autofocus>
    <select data-js="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

    <script src="js/main.js"></script>

</body>

</html>
```

Se eu atrelar um evento `'change'` a esse select, posso especificar para que  
quando eu mudar o valor desse `select`, o visor receba esse valor atualizado:  

```JAVASCRIPT
(function(win, doc) {
    'use strict';

    on('[data-js="input"]', 'keydown', handleInput);
    on('[data-js="select"]', 'change', handleSelect);

    function handleSelect() {
        doc.querySelector('[data-js="input"]').value = this.value;
    }

    function handleInput(event) {
        console.log(this.value);
    }

    function on(element, eventName, callback) {
        doc.querySelector(element).addEventListener(eventName, callback, false);
    }

    function off(element, eventName, callback) {
        doc.querySelector(element).removeEventListener(eventName, callback, false);
    }

})(window, document);
```
