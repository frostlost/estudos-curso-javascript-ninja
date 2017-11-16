# Revisão do Desafio 29 - Parte 04 

## Código atual 

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {
    return {
      init: function init() {
        this.companyInfo();
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', '/curso-javascript-ninja/challenge-29/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo() {
        if(!app().isReady.call(this)) {
          return;
        }

        var data = JSON.parse(this.responseText);
        var $companyName = new DOM('[data-js="company-name"]');
        var $companyPhone = new DOM('[data-js="company-phone"]');

        $companyName.get()[0].textContent = data.name;
        $companyPhone.get()[0].textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  }

  app().init();

})(window, document, window.DOM);
```

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.isArray = function isArray(obj) {
    return getObjType(obj) === '[object Array]';
  };

  DOM.isObject = function isObject(obj) {
    return getObjType(obj) === '[object Object]';
  };

  DOM.isFunction = function isFunction(obj) {
    return getObjType(obj) === '[object Function]';
  };

  DOM.isNumber = function isNumber(obj) {
    return getObjType(obj) === '[object Number]';
  };

  DOM.isString = function isString(obj) {
    return getObjType(obj) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(obj) {
    return getObjType(obj) === '[object Boolean]';
  };

  DOM.isNull = function isNull(obj) {
    return getObjType(obj) === '[object Null]'
    || getObjType(obj) === '[object Undefined]';
  };

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

  win.DOM = DOM;

})(window, document);
``` 

```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Melo's Cars</title>
  <link rel="stylesheet" href="challenge-29.css">
</head>
<body>

  <header class="header">
    <h1>
      <span data-js="company-name"></span> -
      <span data-js="company-phone"></span>
    </h1>
  </header>

  <div class="container">
    <form action="/" data-js="form-register" class="form-register">
      <ul>
        <li>
          <label>Imagem do carro</label>
          <input type="url" autofocus>
        </li>
        <li>
          <label>Marca / Modelo</label>
          <input type="text">
        </li>
        <li>
          <label>Ano</label>
          <input type="text">
        </li>
        <li>
          <label>Placa</label>
          <input type="text">
        </li>
        <li>
          <label>Cor</label>
          <input type="text">
        </li>
        <li>
          <button class="btn-submit" type="submit">Cadastrar</button>
        </li>
      </ul>
    </form>

    <table>
      <thead>
        <tr>
          <th class="thead-info">Imagem do carro</th>
          <th class="thead-info">Marca / Modelo</th>
          <th class="thead-info">Ano</th>
          <th class="thead-info">Placa</th>
          <th class="thead-info">Cor</th>
        </tr>
      </thead>

      <tbody>

      </tbody>
    </table>
  </div>

  <script src="dom.js"></script>
  <script src="challenge-29.js"></script>

</body>
</html>
``` 

## Iniciando o cadastro de carros na tabela 
Vou começar especificando os `data-js` nos elementos html necessários:  

```HTML 
<div class="container">
    <form action="/" data-js="form-register" class="form-register">
      <ul>
        <li>
          <label>Imagem do carro</label>
          <input data-js="image" type="url" autofocus>
        </li>
        <li>
          <label>Marca / Modelo</label>
          <input data-js="brand-model" type="text">
        </li>
        <li>
          <label>Ano</label>
          <input data-js="year" type="text">
        </li>
        <li>
          <label>Placa</label>
          <input data-js="plate" type="text">
        </li>
        <li>
          <label>Cor</label>
          <input data-js="color" type="text">
        </li>
        <li>
          <button class="btn-submit" type="submit">Cadastrar</button>
        </li>
      </ul>
    </form>
```

Lembrando que não foi necessário especificar um `data-js` no botão de  
submit pois o evento a ser adicionado será no `submit` do formulário.  

## Melhorando a `DOM` lib 
A biblioteca, até então, possui alguns gaps. 

## Melhorando o método `get()` da `DOM` lib 
Um desses gaps é que, quando é necessário usar o `get` e tenho apenas 1  
item, é preciso especificar que quero selecionar o item 0 (`get()[0]`).  

Isso pode ser melhorado, fazendo com que o valor do index seja passado por  
argumento.  

```JAVASCRIPT 
DOM.prototype.get = function get(index) {
    if(!index)
      return this.element[0];
    return this.element[index];
  };
```

Agora o método `get` recebe um `index`. **Se esse index não for passado** por  
argumento, o método retornará apenas o primeiro elemento. **Se o argumento  
for passado**, o elemento com o index passado por argumento será retornado.  

Ou seja, agora posso usar o `get()` sem parâmetro, para pegar apenas um  
elemento html. E tudo continua funcionando corretamente: 

```JAVASCRIPT 
$companyName.get().textContent = data.name;
$companyPhone.get().textContent = data.phone;
``` 

![image](https://user-images.githubusercontent.com/29297788/32872258-ea20ca3c-ca6c-11e7-9cd3-dfd30232299b.png)

## Melhorando a função construtora principal da `DOM` lib 
Outro gap da `DOM` lib é que toda vez preciso utilizar o `get` quando quero  
pegar apenas um único item.  

O que pode ser feito é, fazer com que a própria função construtora retorne o  
`this.get()`.  
