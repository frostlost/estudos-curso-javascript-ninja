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

      <tbody data-js="table-car">

      </tbody>
    </table>
  </div>

  <script src="dom.js"></script>
  <script src="challenge-29.js"></script>

</body>
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
`this.get()` se a quantidade de elementos capturados for 1. Assim, não preciso  
mais usar o `get()` quando houver apenas um elemento capturado:  

```JAVASCRIPT 
  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
    if(this.element.length === 1)
      return this.get(0);
  }
```

```JAVASCRIPT 
$companyName.textContent = data.name;
$companyPhone.textContent = data.phone;
```

Ou seja, Se houver apenas um elemento, ele retorna direto o `this.get()`, e  
no método `this.get()` estou especificando que se ao ser chamado ele não  
receber parâmetro, ele já irá retornar o primeiro elemento. 

## Fazendo com que o `new` seja desnecessário ao instanciar um objeto com a `DOM` lib  
Se eu simplesmente tirar o `new`, ao instanciar um objeto, um erro ocorrerá,  
pois estou utilizando o `this` dentro da `DOM` lib:  

```JAVASCRIPT 
console.log(DOM('input'));
```

![image](https://user-images.githubusercontent.com/29297788/32898911-9e6aaee6-cad0-11e7-8c61-89f39348bb7c.png)

```JAVASCRIPT 
console.log(new DOM('input'));
```

![image](https://user-images.githubusercontent.com/29297788/32899003-e03f71d0-cad0-11e7-82a5-74064d552126.png)

### O operador `instanceof` 
Ele irá dizer se o objeto faz parte da instância de outro objeto, retornando `true`  
or `false`.  

Posso verificar, por exemplo, se um objeto do é uma instância do construtor  
de objetos. Ou seja, se ele é um objeto que foi criado baseado no elemento Object:  

```JAVASCRIPT 
  console.log({} instanceof Object);
  
  // true
```

Posso fazer a mesma verificação com elementos do DOM. Vou verificar se esse objeto  
é uma instância do construtor DOM:  

```JAVASCRIPT 
  var $input = new DOM('input');

  console.log($input instanceof DOM);
  
  // true
```

Se eu der um `console.log()` no `this` do DOM, os objetos instanciados a partir dessa  
biblioteca serão mostrados:  

```JAVASCRIPT 
  function DOM(elements) {
    console.log(this);
    this.element = doc.querySelectorAll(elements);
    if(this.element.length === 1)
      return this.get();
  }
```

![image](https://user-images.githubusercontent.com/29297788/32899436-28f3227c-cad2-11e7-8037-4369f9402f2f.png)

Ou seja, o `this` é uma instância do DOM nos dois elementos que foram chamados.  

Se eu instanciar um novo objeto sem o `new`, o retorno será undefined:  

```JAVASCRIPT 
  DOM('input');
```

![image](https://user-images.githubusercontent.com/29297788/32899756-f2272ec2-cad2-11e7-8bdf-28479524c256.png)

Se eu instanciar com o `new`, o objeto é mostrado no console:  

```JAVASCRIPT 
  new DOM('input');
```

![image](https://user-images.githubusercontent.com/29297788/32899805-150b0030-cad3-11e7-937d-f0afb86f5564.png)

**Ou seja, o `this` é `undefined` quando o `new` não é utilizado.** A partir disso, posso fazer  
uma verificação no início da função construtora `DOM` se o `this` é uma instância do `DOM`. Se ele  
não for, `new DOM` + os elementos que foram passados por parâmetro serão retornados:  

```JAVASCRIPT 
  function DOM(elements) {
    if(!(this instanceof DOM))
      return new DOM(elements);

    this.element = doc.querySelectorAll(elements);
    if(this.element.length === 1)
      return this.get();
  }
```

Ou seja, estou criando o construtor `DOM` passando os elementos por parâmetro.  
Dentro da instância do `DOM`, o `this` será verificado. Se o `DOM` for chamado  
como uma função, o `this` será `undefined` e ele não será uma instância do `DOM`.  
Se ele não for uma instância do `DOM`, `new DOM(elements)` será retornado, ou  
seja, estou criando-o novamente sóque com o `new` agora, e passando o `elements`.  
Quando ele voltar na função construtora `DOM`, o `this` será uma instância do  
`DOM` e esse primeiro `if` agora será ignorado. 

Agora, posso chamar o `DOM` com ou sem o `new`. Se eu der um `console.log(this);`  
dentro do construtor `DOM` e instanciar um novo objeto `DOM` sem o new, será  
mostrado que o `DOM` foi instanciado corretamente. Primeiro para os `input`,  
depois para os `span`:  

```JAVASCRIPT 
  function DOM(elements) {
    if(!(this instanceof DOM))
      return new DOM(elements);

    console.log(this);

    this.element = doc.querySelectorAll(elements);
    if(this.element.length === 1)
      return this.get();
  }
```

```JAVASCRIPT 
    var data = JSON.parse(this.responseText);
    var $companyName = DOM('[data-js="company-name"]');
    var $companyPhone = DOM('[data-js="company-phone"]');

    $companyName.textContent = data.name;
    $companyPhone.textContent = data.phone;
```

![image](https://user-images.githubusercontent.com/29297788/32900828-84dd9c40-cad5-11e7-9ba3-fc664945caf1.png)

Ou seja, agora é possível instanciar o elemento do `DOM` ainda que,  
ao usar essa biblioteca, o `new` não seja utilizado.  

## Referenciando o `DOM` através do `$` 
Posso referenciar a lib `DOM` com o `$`, para funcionar semelhante à  
`jQuery` lib. Ou seja, ao exportar esse parâmetro `$`, ele será o  
`window.DOM` e, localmente, ele será o `$`:  

```JAVASCRIPT 
(function(win, doc, $) {
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
        var $companyName = $('[data-js="company-name"]');
        var $companyPhone = $('[data-js="company-phone"]');

        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  }

  app().init();

})(window, document, window.DOM);
```

Ou seja, cada vez que `$('[data-js="company-name"]');` é usado,  
é como se o `new DOM('[data-js="company-name"]')` estivesse sendo  
usado.  

## Preenchendo os dados da tabela a cada vez que o form é submetido  
Vou então criar um `initEvents` dentro do método `init`. `initEvents`  
servirá para iniciar todos os eventos:  

```JAVASCRIPT 
function app() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {

      }
      
      // código omitido 
    };
  }

  app().init();
```

Vou capturar o formulário já utilizando a nova sintaxe do `DOM` e adicionar  
um evento à esse form:  

```JAVASCRIPT 
function app() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
      }
      // código omitido
    };
  }

  app().init();
``` 

Lembrando que o `this`, dentro do método `handleSubmit` se refere ao formulário  
(`$('[data-js="form-register"]')`).  

![image](https://user-images.githubusercontent.com/29297788/32902395-6facd670-cad9-11e7-836d-68098cb2dce6.png)

## adofjidojsiosssssssssssssssssssssssssssssssssssssdfoisdjfosdjfosdjofdsoifosdfosdfsdffsdsdiofoisdjodfs
Como visto acima, está sendo mostrado um erro dizendo que o `get()` não está retornando  
o próprio elemento. Então, o  

```JAVASCRIPT 
    if(this.element.length === 1)
      return this.get(0);
```

será retirado da função construtora `DOM`, por enquanto. E o `get()` continuará a ser usado:  

```JAVASCRIPT 
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();
```

## Código final 

```JAVASCRIPT 
(function(win, doc, $) {
  'use strict';

  function app() {
    return {
      init: function init() {
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        $('[data-js="form-register"]').on('submit', this.handleSubmit);
      },

      handleSubmit: function handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
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
        var $companyName = $('[data-js="company-name"]').get();
        var $companyPhone = $('[data-js="company-phone"]').get();

        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
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
    if(!(this instanceof DOM))
      return new DOM(elements);
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

  DOM.prototype.get = function get(index) {
    if(!index)
      return this.element[0];
    return this.element[index];
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

      <tbody data-js="table-car">

      </tbody>
    </table>
  </div>

  <script src="dom.js"></script>
  <script src="challenge-29.js"></script>

</body>
</html>
```
