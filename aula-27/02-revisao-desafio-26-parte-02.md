# Revisão desafio da semana #26 - Parte 2

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    this.name = 'DOM';
  }

  DOM.prototype.on = function on() {};
  DOM.prototype.off = function off() {};
  DOM.prototype.get = function get() {};

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

})(window, document);
```

## O método `get` deve retornar os elementos  
Para isso, vou aproveitar o `this.element` da função principal que já recebe um  
array com todos os elementos selecionados:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    this.name = 'DOM';
  }

  DOM.prototype.on = function on() {};
  DOM.prototype.off = function off() {};
  DOM.prototype.get = function get() {
      return this.element;
  };

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

})(window, document);
```

## O método `on` irá adicionar um listener de evento a todos os elementos selecionados.  
Vou aproveitar que já tenho um array-like de elementos, e fazer com que os  
eventos sejam atrelados à cada item do array. Com isso, quando clico no `$a`,  
consigo fazer com que a função de callback funcione e 'clicou' seja logado:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    this.name = 'DOM';
  }

  DOM.prototype.on = function on(eventName, callback) {
    this.element.forEach(function(element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function off() {};

  DOM.prototype.get = function get() {
      return this.element;
  };

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

})(window, document);
```

## O método `off` irá remover o listener de evento de todos os elementos selecionados.
Este método será basicamente igual ao método `on` mas, ao invés de adicionar o  
`eventListener`, irá removê-lo:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    this.name = 'DOM';
  }

  DOM.prototype.on = function on(eventName, callback) {
    this.element.forEach(function(element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function off(eventName, callback) {
    this.element.forEach(function(element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function get() {
      return this.element;
  };

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function(e) {
    e.preventDefault();
    console.log('clicou');
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

})(window, document);
```

Fazendo isso, eu posso nomear a função de callback do clique no `$a` e, inserir  
o método `off` no fim dela, passando o próprio `$a` que irá receber o `off` e  
removendo a função. Isso irá fazer com que o clique funcione apenas uma vez.  
Quando eu clico pela segunda vez, a página é recarregada:  

```JAVASCRIPT
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    this.name = 'DOM';
  }

  DOM.prototype.on = function on(eventName, callback) {
    this.element.forEach(function(element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function off(eventName, callback) {
    this.element.forEach(function(element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  var $a = new DOM('[data-js="link"]');

  $a.on('click', function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handleClick);
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === doc.body);

})(window, document);
```
