# Revisão do Desafio 29 - Parte 02 

## CSS do app 
Vou adicionar um estilo no app para facilitar a visualização:  

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
      <span>Melo's Cars</span> -
      <span>(62) 9-8483-6920</span>
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

    <table class="car-table">
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

</body>
</html>
```

```CSS 
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

ul {
  list-style-type: none;
}

input {
  display: block;
  margin-bottom: 10px;
  width: 40%;
  padding: 5px;
}

.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
}

.header {
  text-align: center;
}

.form-register,
.car-table {
  width: 50%;
}

.car-table {
  border-spacing: 0;
  border-collapse: collapse;
}

.thead-info {
  border: 1px solid lightgray;
  padding: 5px;
}

.btn-submit {
  padding: 10px 30px;
  color: white;
  background-color: green;
  border: none;
  cursor: pointer;
}
```

![image](https://user-images.githubusercontent.com/29297788/32816069-2668589a-c99e-11e7-9d42-c29ad8d4c770.png)

Vou remover as informações colocadas manualmente sobre a empresa e inserir data-js  
nesses elementos para manipulá-los. As informações da empresa dentro do `head` foram  
separadas em dois `<span>` para que seja fácil jogar o conteúdo dentro deles, para que  
não seja necessário criar marcações html desnecessárias no javascript:  

```HTML 
  <header class="header">
    <h1>
      <span data-js="company-name"></span> -
      <span data-js="company-phone"></span>
    </h1>
  </header>
```

![image](https://user-images.githubusercontent.com/29297788/32816284-147f6e42-c99f-11e7-9de3-3bd7494a40ec.png)

## Separe o nosso módulo de DOM criado nas últimas aulas em um arquivo DOM.js  

### Alterando os métodos da lib DOM para que sejam estáticos 
Após pegar o arquivo `dom.js` e adicioná-lo como `script` no html, para fazer com que  
os métodos `isNull`, `isArray`, etc, sejam estáticos, vou substituir o `DOM.prototype`  
apenas para `DOM.`:  

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

Feito isso, eu consigo testar esses métodos no console:  

![image](https://user-images.githubusercontent.com/29297788/32817265-ec5426b0-c9a3-11e7-8f87-eacaa18dac90.png)

## E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo que será nomeado de "app"  
O método `init` será o principal método do app. Vou então retornar tudo o que está dentro do  
módulo que deve ser público.  

## Código final 

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {
    return {
      init: function() {
        console.log('app init');
      }
    };
  }

  app().init();

})(window, document, window.DOM);
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

    <table class="car-table">
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

![image](https://user-images.githubusercontent.com/29297788/32817705-64e12e50-c9a6-11e7-98ba-668d204eefa4.png)
