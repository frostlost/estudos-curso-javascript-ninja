# Revisão desafio da semana #27 - Parte 2

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
  
})(window, document);

```

## (cont...) Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela métodos semelhantes aos que existem no array, mas que sirvam para os elementos do DOM selecionados. Crie os seguintes métodos: - forEach, map, filter, reduce, reduceRight, every e some.
Todos os métodos seguintes serão, basicamente uma cópia do método `forEach` já criado.  

Nesses métodos, o caminho alternativo usado  
`return Array.prototype.[NomeDoMetodo].apply(this.element, arguments);`  
permite que o método seja utilizado diretamente no objeto da biblioteca  
DOM. OU seja, com uma linha é possível criar o método necessário e que  
faz exatamente a mesma coisa que o array faz. Isso deve funcionar não  
apenas para elementos do DOM, mas para qualquer array-like ou até arrays  
de verdade, pois o `this.element` que está sendo selecionado será o  
próprio array.  


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
  
  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };
  
  var $a = new DOM('[data-js="link"]');
  
})(window, document);

```

Nesses métodos, os parâmetros não foram passados para as funções que  
os estão criando. Não foram passados parâmetros em, por exemplo:  

```JAVASCRIPT 
  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };
```

Os valores da função de callback ao invocar o método não estão sendo  
passados para a função, e eles não são o `arguments`. O `arguments` na  
verdade é a própria função que está sendo passada por parâmetro ao  
invocar o método. Exemplo: 

```JAVASCRIPT 
  var $aDataJs = $a.map(function(item) {
    return item.getAttribute('data-js');
  });
```

Então, a chamada abaixo, por exemplo, 

```JAVASCRIPT 
return Array.prototype.map.apply(this.element, arguments);
```

nada mais é do que simular o próprio `map` passando apenas o `this`  
e passando os argumentos que foram passados para esse método `map`  
para frente.  

## Testando os métodos de arrays criados  

### map()
Vou fazer com que o `map` crie um novo array com apenas os elementos  
do DOM que possuem o atributo `data-js`. Isso irá gerar um array com  
os valores dos `data-js` de cada elemento:  

```JAVASCRIPT 
  var $a = new DOM('[data-js="link"]');

  var $aDataJs = $a.map(function(item) {
    return item.getAttribute('data-js');
  });

  console.log($aDataJs);
  
  // ["link", "link"]
```

### reduce() 
Vou fazer com que o `reduce` retorne o valor acumulado, mais o valor do  
atributo do valor atual, mais o index.  

```JAVASCRIPT 
  var $a = new DOM('[data-js="link"]');

  var $aReduce = $a.reduce(function(accumulated, actual, index) {
    return accumulated + ' ' + actual.getAttribute('data-js') + ' ' + index;
  });

  console.log($aReduce);
```

![image](https://user-images.githubusercontent.com/29297788/32408318-37d38f10-c17d-11e7-98cb-2eff34286443.png)

## Crie os seguintes métodos para verificação de tipo: - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.   

```JAVASCRIPT 
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
```

Primeiro, vou criar uma função que retorna o tipo do objeto passado por parâmetro:  

```JAVASCRIPT 
  function getObjType(obj) {
    return Object.prototype.toString.call(obj);
  }
```

Isso irá retornar se é um `[object Object]`, `[object Array]`, etc.  

Vou então criar os métodos que verificam se o retorno dessa função  
`getObjType(obj)` equivalem à objetos do tipo array, função, etc:  

```JAVASCRIPT 
  DOM.prototype.isArray = function isArray(obj) {
    return getObjType(obj) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(obj) {
    return getObjType(obj) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(obj) {
    return getObjType(obj) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(obj) {
    return getObjType(obj) === '[object Number]';
  };

  DOM.prototype.isString = function isString(obj) {
    return getObjType(obj) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(obj) {
    return getObjType(obj) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(obj) {
    return getObjType(obj) === '[object Null]'
    || getObjType(obj) === '[object Undefined]';
  };
```

### Devidos cuidados ao invocar os métodos de verificação de tipo  
Ao utilizar o prototype, ele é ativado quando o método é invocado utilizando  
a palavra-chave `new`.  

Se for especificado, por exemplo, `console.log(DOM.isArray([])`, o `prototype`,  
em que o método está pendurado, não irá existir. Com essa sintaxe, não estou criando  
um novo elemento e sim chamando o `DOM` como um objeto normal.  

```JAVASCRIPT 
console.log(DOM.isArray({}));
```

![image](https://user-images.githubusercontent.com/29297788/32411944-e8fca5ea-c1cf-11e7-8cc8-ab856ba5331a.png)

É necessário instanciar esse objet. Preciso então ou especificar um `new DOM`, atribuindo-o  
à uma variável, por exemplo, e chamá-la especificando o método necessário:  

```JAVASCRIPT 
  var DOM = new DOM();

  console.log(DOM.isArray({}));
```

Dessa forma, a biblioteca principal foi sobrescrita. Para que isso não ocorra, posso utilizar  
o próprio `prototype` na chamada do método do `DOM`. Ou seja, não estou instanciando o objeto  
mas posso chamá-lo especificando diretamente o `prototype`:  

```JAVASCRIPT 
  console.log(DOM.prototype.isArray({}));
```

![image](https://user-images.githubusercontent.com/29297788/32411978-d19b3f1e-c1d0-11e7-9724-253f0dbed823.png)

## Uma observação sobre o `undefined` 
O método invocado abaixo retorna `true` pois, o espaço vazio corresponde a `undefined`.  
Se `undefined` fosse especificado, também retornaria `true`:  

```JAVASCRIPT 
  DOM.prototype.isNull = function isNull(obj) {
    return getObjType(obj) === '[object Null]'
    || getObjType(obj) === '[object Undefined]';
  };
  
  console.log(DOM.prototype.isNull());
  
  // true
```

Caso eu modifique a verificação do método para verificar apenas o valor `null` e passe  
`undefined` ou nada como objeto, ele retorna false:  

```JAVASCRIPT
  DOM.prototype.isNull = function isNull(obj) {
    return getObjType(obj) === '[object Null]';
  };

  console.log(DOM.prototype.isNull(undefined));
  
  // false
```
  
Ou seja, `undefined` e `null` são valores diferentes.  
  
## Uma observação sobre o `number` 
`NaN` é um tipo de número que representa 'não é número' em JavaScript.  
  
Se eu passar `NaN` como parâmetro para o método de verificação de número,  
`true` será retornado:  
  
```JAVASCRIPT 
  DOM.prototype.isNumber = function isNumber(obj) {
    return getObjType(obj) === '[object Number]';
  };
    
  console.log(DOM.prototype.isNumber(NaN));
  
  // true
```

## Código final:  

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

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  function getObjType(obj) {
    return Object.prototype.toString.call(obj);
  }

  DOM.prototype.isArray = function isArray(obj) {
    return getObjType(obj) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(obj) {
    return getObjType(obj) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(obj) {
    return getObjType(obj) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(obj) {
    return getObjType(obj) === '[object Number]';
  };

  DOM.prototype.isString = function isString(obj) {
    return getObjType(obj) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(obj) {
    return getObjType(obj) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(obj) {
    return getObjType(obj) === '[object Null]'
    || getObjType(obj) === '[object Undefined]';
  };

  console.log(DOM.prototype.isNumber(NaN));

})(window, document);
```

É possível melhorar muito esse código, tanto dos métodos de verificação  
de objetos quanto os métodos de array, chamando-os de uma forma menos  
repetitiva.  
