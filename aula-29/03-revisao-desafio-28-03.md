# Revisão desafio da semana #28 - Parte 2 

## Limpando o cep entrado pelo usuário 

Vou então fazer uma função que irá substituir o '[CEP]' da url pelo  
valor entrado pelo usuário. Esse valor entrado pelo usuário também  
será limpo dentro da função. Tudo o que não dor número, será substituído  
por uma string vazia.  

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
  
  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var ajax = new XMLHttpRequest();
  
  $formCep.on('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', clearCep();
    ajax.send();
    ajax.addEventListener('readystatechange', handleStateChange);
  }
  
  function clearCep() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
      '[CEP]', 
      $inputCep.get()[0].value.replace(/\D+/g, '')
    );
  }
  
  function handleStateChange() {
    if(ajax.readyState === 4 && ajax.status === 200) {
      console.log('popular formulário', ajax.responseText);
    }
  }

})(window, document);
``` 

Vou refatorar a função handleStateChange, fazendo com que ela retorna  
`true` ou `false` de acordo com o sucesso da requisição:  

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
  
  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var ajax = new XMLHttpRequest();
  
  $formCep.on('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', clearCep();
    ajax.send();
    ajax.addEventListener('readystatechange', handleStateChange);
  }
  
  function clearCep() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
      '[CEP]', 
      $inputCep.get()[0].value.replace(/\D+/g, '')
    );
  }
  
  function handleStateChange() {
    if(isRequestOk()) {
      console.log('popular formulário', ajax.responseText);
    }
  }
  
  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
``` 

## Preenchendo os dados do cep com a propriedade `.textContent`

Vou criar uma função `fillCepFields` que irá preencher os dados do cep  
no html, caso o request for feito com sucesso.  

A propriedade `.textContent` irá receber o texto que for atribuído a  
ela.  

No início dessa nova função, devo parsear o `responseText` do ajax para  
`json`, para que eu consiga manipular esse objeto, que será atribuído à  
uma variável `data`:  

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
  
  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var ajax = new XMLHttpRequest();
  
  $formCep.on('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', clearCep();
    ajax.send();
    ajax.addEventListener('readystatechange', handleStateChange);
  }
  
  function clearCep() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
      '[CEP]', 
      $inputCep.get()[0].value.replace(/\D+/g, '')
    );
  }
  
  function handleStateChange() {
    if(isRequestOk()) {
      fillCepFields();
    }
  }
  
  function fillCepFields() {
    var data = JSON.parse(ajax.responseText);
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }
  
  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```  

## `try` / `catch` - Fazendo com que o o objeto json parseado seja `null` em casos de erros de requisição 
Vou criar uma função `parseData()` e fazer com que ela retorne ou o objeto parseado de text para `json`  
ou `null`.  

Dentro da função `fillCepFields()`, também vou fazer com que o que não foi parseado seja mostrado no console  
(caso o data for null):  

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
  
  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var ajax = new XMLHttpRequest();
  
  $formCep.on('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', clearCep();
    ajax.send();
    ajax.addEventListener('readystatechange', handleStateChange);
  }
  
  function clearCep() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
      '[CEP]', 
      $inputCep.get()[0].value.replace(/\D+/g, '')
    );
  }
  
  function handleStateChange() {
    if(isRequestOk()) {
      fillCepFields();
    }
  }
  
  function fillCepFields() {
    var data = parseData();
    if(!data) {
      return console.log('data error', data);
    }
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }
  
  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    }
    catch(e) {
      result = null;
    }
    return result;
  }
  
  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```  

Se eu inserir um cep qualquer:  

![image](https://user-images.githubusercontent.com/29297788/32685891-dbe7509c-c681-11e7-86de-0b10cf75922c.png)

Se eu inserir um cep correto:  

![image](https://user-images.githubusercontent.com/29297788/32685897-fd7d75ba-c681-11e7-97a8-194389b44a6e.png)

## Enquanto os dados são buscados, na área de mensagens de status, deve mostrar a mensagem: "Buscando informações para o CEP [CEP]..." Se não houver dados para o CEP entrado, mostrar a mensagem: "Não encontramos o endereço para o CEP [CEP]." Se houver endereço para o CEP digitado, mostre a mensagem: "Endereço referente ao CEP [CEP]:"

Vou então criar uma função `getMsg(type)`. Dentro dela, irei criar um objeto em que cada  
propriedade será um tipo de mensagem. No final dela, farei com que seu retorno seja a propriedade  
do objeto passada por parâmetro:  

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
  
  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var ajax = new XMLHttpRequest();
  
  $formCep.on('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', clearCep();
    ajax.send();
    ajax.addEventListener('readystatechange', handleStateChange);
  }
  
  function clearCep() {
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace(
      '[CEP]', 
      $inputCep.get()[0].value.replace(/\D+/g, '')
    );
  }
  
  function handleStateChange() {
    if(isRequestOk()) {
      fillCepFields();
    }
  }
  
  function fillCepFields() {
    var data = parseData();
    if(!data) {
      return console.log('data error', data);
    }
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }
  
  function parseData() {
    var result;
    try {
      result = JSON.parse(ajax.responseText);
    }
    catch(e) {
      result = null;
    }
    return result;
  }
  
  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
  
  function getMsg(type) {
    return {
      loading: "Buscando informações para o CEP [CEP]...", 
      error: "Não encontramos o endereço para o CEP [CEP]", 
      ok: "Endereço referente ao CEP [CEP]:", 
    }[type];
  }

})(window, document);
```  
