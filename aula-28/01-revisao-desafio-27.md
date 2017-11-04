# Revisão desafio da semana #27 - Parte 1

```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Challenge 27</title>
</head>
<body>

  <a data-js="link" href="">1</a>
  <a data-js="link" href="">2</a>

  <script src="challenge-27.js"></script>

</body>
</html>
```

```JAVASCRIPT
(function(win, doc) {
  'use strict';
  /*
  Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
  métodos semelhantes aos que existem no array, mas que sirvam para os
  elementos do DOM selecionados.
  Crie os seguintes métodos:
  - forEach, map, filter, reduce, reduceRight, every e some.

  Crie também métodos que verificam o tipo do objeto passado por parâmetro.
  Esses métodos não precisam depender de criar um novo elemento do DOM, podem
  ser métodos estáticos.

  Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
  no objeto, como nos exemplos abaixo:
  DOM.isArray([1, 2, 3]); // true
  DOM.isFunction(function() {}); // true
  DOM.isNumber('numero'); // false

  Crie os seguintes métodos para verificação de tipo:
  - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  O método isNull deve retornar `true` se o valor for null ou undefined.
  */
  
  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventName, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function off(eventName, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };
  
  var $a = new DOM('[data-js="link"]');
  
})(window, document);
```

## Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela métodos semelhantes aos que existem no array, mas que sirvam para os elementos do DOM selecionados. Crie os seguintes métodos: - forEach, map, filter, reduce, reduceRight, every e some.

## Criando um método `forEach` para os elementos do DOM selecionados 
Esse método precisa receber os mesmos argumentos que o método `forEach`  
do array recebe.  

Vou então pegar o método `forEach` do protótipo do `Array` passando o  
`apply` para invocar esse método, pois o `this` do `apply` será o  
array-like de elementos do DOM (`this.element`). Também vou passar o  
`arguments`, que representa os argumentos que foram passados para a  
função `forEach`.  

Assim, terei o método `forEach` pronto para receber esses elementos  
do DOM e fazer o `forEach`, como se fosse um array normal.  

Para testar esse método, vou fazer com que ao clicar em cada link, o  
console logue o valor do nó desse elemento:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';
  
  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventName, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.off = function off(eventName, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventName, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    Array.prototype.forEach.apply(this.element, arguments);
  };
  
  var $a = new DOM('[data-js="link"]');
  
  $a.forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      console.log(element.firstChild.nodeValue);
    });
  });
  
})(window, document);

```
