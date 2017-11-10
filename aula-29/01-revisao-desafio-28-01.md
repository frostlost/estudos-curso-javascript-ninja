# Revisão desafio da semana #28 - Parte 1

```JAVASCRIPT 
/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha os campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  ```
## Crie um formulário com um input de texto que receberá um CEP e um botão de submit 

```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Challenge 28</title>
</head>
<body>

  <form data-js="form-cep">
    <input type="text" data-js="input-cep" autofocus>
    <button data-js="btn-consulta-cep">Consultar CEP</button>
  </form>

  <script src="challenge-28.js"></script>

</body>
</html>
```

## Crie uma estrutura HTML para receber informações de endereço: "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão preenchidas com os dados da requisição feita no JS 

```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Challenge 28</title>
</head>
<body>

  <form data-js="form-cep">
    <input type="text" data-js="input-cep" autofocus>
    <button data-js="btn-consulta-cep">Consultar CEP</button>
  </form>

  <div data-js="cep-fields">
    <p><strong>Logradouro:</strong> <span data-js="logradouro">-</span></p>
    <p><strong>Bairro:</strong> <span data-js="bairro">-</span></p>
    <p><strong>Estado:</strong> <span data-js="estado">-</span></p>
    <p><strong>Cidade:</strong> <span data-js="cidade">-</span></p>
    <p><strong>CEP:</strong> <span data-js="cep">-</span></p>
  </div>

  <script src="challenge-28.js"></script>

</body>
</html>
```

## Crie uma área que receberá mensagens com o status da requisição: "Carregando, sucesso ou erro." 
```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Challenge 28</title>
</head>
<body>

  <form data-js="form-cep">
    <input type="text" data-js="input-cep" autofocus>
    <button data-js="btn-consulta-cep">Consultar CEP</button>
  </form>

  <div>
    <h2 data-js="status-msg"></h2>
  </div>

  <div data-js="cep-fields">
    <p><strong>Logradouro:</strong> <span data-js="logradouro">-</span></p>
    <p><strong>Bairro:</strong> <span data-js="bairro">-</span></p>
    <p><strong>Estado:</strong> <span data-js="estado">-</span></p>
    <p><strong>Cidade:</strong> <span data-js="cidade">-</span></p>
    <p><strong>CEP:</strong> <span data-js="cep">-</span></p>
  </div>

  <script src="challenge-28.js"></script>

</body>
</html>
```

## Utilize a lib DOM criada anteriormente para facilitar a manipulação e adicionar as informações em tela. 
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

})(window, document);
```
