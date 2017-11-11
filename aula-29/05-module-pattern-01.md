# Module Pattern - Parte 01 

Na aula passada, a lib `DOM` foi utilizada no mesmo arquivo que o código principal:  

![image](https://user-images.githubusercontent.com/29297788/32693331-5d4cd506-c710-11e7-87a2-38c855799b25.png)

Isso fez com que o número de linhas do arquivo fosse muito grande. O ideal seria importar  
a lib `DOM` de outro arquivo e chamá-la quando for preciso.  

## Separando o código em módulos 
A modularização de código faz com que o código seja reutilizável e legível (evitando  
arquivos com muitas linhas).  

**Vou criar um arquivo `dom.js` que irá conter a lib `DOM`** e adicioná-lo ao html.  

Lembrando que, todas as vezes em que uma lib for usada, ela deve ser adicionada antes do  
código que irei escrever:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Ninja</title>
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

  <script src="js/dom.js"></script>
  <script src="js/main.js"></script>

</body>

</html>
```

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

## Exportando a lib/módulo `DOM` 
Se eu simplesmente mover o código da lib `DOM` para outro arquivo,  
ao tentar executá-lo, o console me mostrará que `DOM` não está definido:  

![image](https://user-images.githubusercontent.com/29297788/32693451-38f7734e-c712-11e7-8664-ae5505db1910.png)

Ou seja, ele procurou `DOM` no arquivo e não encontrou. Isso acontece  
pois o escopo do código da lib `DOM` está dentro da `IIFE` do arquivo  
dele. Ou seja, a função `DOM` pertence ao escopo dessa `IIFE`.  

Para fazer com que a lib `DOM` seja acessada em outro arquivo, é necessário  
exportá-la, ou seja, colocá-la no escopo global.  

**Posso exportar essa biblioteca como um método do objeto window**. Primeiro,  
vou fazer com que `window.DOM` receba a referência da função `DOM`:  

```JAVASCRIPT 
win.DOM = DOM;
```

Ou seja, estou criando uma propriedade `.DOM` no objeto `window`, que está  
recebendo a lib `DOM`.  

Feito isso, para utilizar essa lib em outro arquivo, como ela agora é um objeto  
global, posso importá-la passando-a por parâmetro para a `IIFE` do arquivo. Vou  
chamá-la, localmente, de DOM. Portanto, sempre que eu chamar `DOM`, o objeto DOM  
de window estará sendo referenciado:  

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  var $formCep = new DOM('[data-js="form-cep"]');
  var $inputCep = new DOM('[data-js="input-cep"]');
  var $status = new DOM('[data-js="status-msg"]');
  var $logradouro = new DOM('[data-js="logradouro"]');
  var $bairro = new DOM('[data-js="bairro"]');
  var $estado = new DOM('[data-js="estado"]');
  var $cidade = new DOM('[data-js="cidade"]');
  var $cep = new DOM('[data-js="cep"]');
  var ajax = new XMLHttpRequest();
  $formCep.on('submit', handleFormSubmit);

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
    ajax.send();
    getMsg('loading');
    ajax.addEventListener('readystatechange', handleStateChange);
  }

  function handleStateChange() {
    if(isRequestOk()) {
      getMsg('ok');
      fillCepFields();
    }
  }

  function fillCepFields() {
    var data = parseData();
    if(!data) {
      getMsg('error');
      data = clearData();
      console.log('data error', data);
    }
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function clearData() {
    return {
      logradouro: '*',
      bairro: '*',
      uf: '*',
      localidade: '*',
      cep: '*'
    };
  }

  function getMsg(type) {
    var messages = {
      error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
      ok: replaceCep('Endereço referente ao CEP [CEP]:'),
      loading: replaceCep('Buscando informações para o CEP [CEP]...')
    };
    $status.get()[0].textContent = messages[type];
  }

  function replaceCep(str) {
    return str.replace('[CEP]', clearCep());
  }

  function clearCep() {
    return $inputCep.get()[0].value.replace(/\D+/g, '');
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

})(window, document, window.DOM);
```

Após isso, ao executar o código, ele funciona como esperado:  

![image](https://user-images.githubusercontent.com/29297788/32693562-3c7a8428-c714-11e7-8867-3f0271aaa844.png)

Agora tenho acesso ao `DOM` porque ele é uma propriedade do window. Ou seja, consigo  
acessá-lo por que coloquei-o em escopo global:  

![image](https://user-images.githubusercontent.com/29297788/32693604-ed8e5550-c714-11e7-943d-5341392b1351.png)

## Module patterns 
É um padrão usado para melhorar um código, fazendo com que ele seja também um módulo que  
possa ser exportado, caso necessário.  

O module pattern é basicamente uma função que irá retornar os métodos que forem necessários.  

Ela irá retornar um objeto, que retornará um método `init` que possui um código dentro de  
sua função que será exportado. Assim, todos os métodos retornados no objeto serão globais.  
Ou seja, esses métodos serão retornados e acessados através da invocação dessa função `app`.  

Vou fazer com que o método `init` retorne as declarações das variáveis:  

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {
    return {
      init: function() {
        var $formCep = new DOM('[data-js="form-cep"]');
        var $inputCep = new DOM('[data-js="input-cep"]');
        var $status = new DOM('[data-js="status-msg"]');
        var $logradouro = new DOM('[data-js="logradouro"]');
        var $bairro = new DOM('[data-js="bairro"]');
        var $estado = new DOM('[data-js="estado"]');
        var $cidade = new DOM('[data-js="cidade"]');
        var $cep = new DOM('[data-js="cep"]');
        var ajax = new XMLHttpRequest();
        $formCep.on('submit', handleFormSubmit);
      };
    };
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
    ajax.send();
    getMsg('loading');
    ajax.addEventListener('readystatechange', handleStateChange);
  }

  function handleStateChange() {
    if(isRequestOk()) {
      getMsg('ok');
      fillCepFields();
    }
  }

  function fillCepFields() {
    var data = parseData();
    if(!data) {
      getMsg('error');
      data = clearData();
      console.log('data error', data);
    }
    $logradouro.get()[0].textContent = data.logradouro;
    $bairro.get()[0].textContent = data.bairro;
    $estado.get()[0].textContent = data.uf;
    $cidade.get()[0].textContent = data.localidade;
    $cep.get()[0].textContent = data.cep;
  }

  function clearData() {
    return {
      logradouro: '*',
      bairro: '*',
      uf: '*',
      localidade: '*',
      cep: '*'
    };
  }

  function getMsg(type) {
    var messages = {
      error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
      ok: replaceCep('Endereço referente ao CEP [CEP]:'),
      loading: replaceCep('Buscando informações para o CEP [CEP]...')
    };
    $status.get()[0].textContent = messages[type];
  }

  function replaceCep(str) {
    return str.replace('[CEP]', clearCep());
  }

  function clearCep() {
    return $inputCep.get()[0].value.replace(/\D+/g, '');
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

})(window, document, window.DOM);
``` 

Agora, para acessar esse método `init`, posso especificar  

```JAVASCRIPT 
app().init();
```

Irei também colocar todas as funções dentro do módulo, antes do return:  

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {

    function handleFormSubmit(e) {
      e.preventDefault();
      ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
      ajax.send();
      getMsg('loading');
      ajax.addEventListener('readystatechange', handleStateChange);
    }

    function handleStateChange() {
      if(isRequestOk()) {
        getMsg('ok');
        fillCepFields();
      }
    }

    function fillCepFields() {
      var data = parseData();
      if(!data) {
        getMsg('error');
        data = clearData();
        console.log('data error', data);
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData() {
      return {
        logradouro: '*',
        bairro: '*',
        uf: '*',
        localidade: '*',
        cep: '*'
      };
    }

    function getMsg(type) {
      var messages = {
        error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
        ok: replaceCep('Endereço referente ao CEP [CEP]:'),
        loading: replaceCep('Buscando informações para o CEP [CEP]...')
      };
      $status.get()[0].textContent = messages[type];
    }

    function replaceCep(str) {
      return str.replace('[CEP]', clearCep());
    }

    function clearCep() {
      return $inputCep.get()[0].value.replace(/\D+/g, '');
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

    return {
      init: function() {
        var $formCep = new DOM('[data-js="form-cep"]');
        var $inputCep = new DOM('[data-js="input-cep"]');
        var $status = new DOM('[data-js="status-msg"]');
        var $logradouro = new DOM('[data-js="logradouro"]');
        var $bairro = new DOM('[data-js="bairro"]');
        var $estado = new DOM('[data-js="estado"]');
        var $cidade = new DOM('[data-js="cidade"]');
        var $cep = new DOM('[data-js="cep"]');
        var ajax = new XMLHttpRequest();
        $formCep.on('submit', handleFormSubmit);
      }
    };
  }

  app().init();

})(window, document, window.DOM);
```

Ou seja, peguei as funções e as coloquei no escopo de uma outra função (`app()`).  
Isso fará com que o que faz parte do módulo fique centralizado na função `app()`.  
Ou seja, tudo o que faz parte do módulo fica em `app()`, tudo fica dividido em  
funções e no final, o método principal `init` será retornado, fazendo o `init` das  
variáveis.  

**O problema deste caso** é que ao atualizar e executar a aplicação, será mostrado  
que alguma variável não está definida:  

![image](https://user-images.githubusercontent.com/29297788/32693804-ea1120c6-c717-11e7-8840-fbc7597d76a0.png)

Isso está acontecendo porque estou chamando essa variável em um escopo local, no  
caso, o escopo da função/método `init`:  

```JAVASCRIPT 
    return {
      init: function() {
        var $formCep = new DOM('[data-js="form-cep"]');
        var $inputCep = new DOM('[data-js="input-cep"]');
        var $status = new DOM('[data-js="status-msg"]');
        var $logradouro = new DOM('[data-js="logradouro"]');
        var $bairro = new DOM('[data-js="bairro"]');
        var $estado = new DOM('[data-js="estado"]');
        var $cidade = new DOM('[data-js="cidade"]');
        var $cep = new DOM('[data-js="cep"]');
        var ajax = new XMLHttpRequest();
        $formCep.on('submit', handleFormSubmit);
      }
    };
  }
```

Ou seja, as variáveis que foram criadas só são acessíveis lá dentro.  

Então, **é preciso reposicionar essas variáveis para o escopo da função `app()`**  
e excluir a chamada do método `init` ao invocar `app()`:  

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    var $status = new DOM('[data-js="status-msg"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var ajax = new XMLHttpRequest();
    $formCep.on('submit', handleFormSubmit);

    function handleFormSubmit(e) {
      e.preventDefault();
      ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
      ajax.send();
      getMsg('loading');
      ajax.addEventListener('readystatechange', handleStateChange);
    }

    function handleStateChange() {
      if(isRequestOk()) {
        getMsg('ok');
        fillCepFields();
      }
    }

    function fillCepFields() {
      var data = parseData();
      if(!data) {
        getMsg('error');
        data = clearData();
        console.log('data error', data);
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData() {
      return {
        logradouro: '*',
        bairro: '*',
        uf: '*',
        localidade: '*',
        cep: '*'
      };
    }

    function getMsg(type) {
      var messages = {
        error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
        ok: replaceCep('Endereço referente ao CEP [CEP]:'),
        loading: replaceCep('Buscando informações para o CEP [CEP]...')
      };
      $status.get()[0].textContent = messages[type];
    }

    function replaceCep(str) {
      return str.replace('[CEP]', clearCep());
    }

    function clearCep() {
      return $inputCep.get()[0].value.replace(/\D+/g, '');
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

  }

  app();

})(window, document, window.DOM);
```

Se eu quisesse exportar esse módulo `app` para que ele fosse usado em outro  
lugar, poderia pendurá-lo no window, da mesma forma feita com a lib `DOM`:  

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    var $status = new DOM('[data-js="status-msg"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var ajax = new XMLHttpRequest();
    $formCep.on('submit', handleFormSubmit);

    function handleFormSubmit(e) {
      e.preventDefault();
      ajax.open('GET', replaceCep('https://viacep.com.br/ws/[CEP]/json/'));
      ajax.send();
      getMsg('loading');
      ajax.addEventListener('readystatechange', handleStateChange);
    }

    function handleStateChange() {
      if(isRequestOk()) {
        getMsg('ok');
        fillCepFields();
      }
    }

    function fillCepFields() {
      var data = parseData();
      if(!data) {
        getMsg('error');
        data = clearData();
        console.log('data error', data);
      }
      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData() {
      return {
        logradouro: '*',
        bairro: '*',
        uf: '*',
        localidade: '*',
        cep: '*'
      };
    }

    function getMsg(type) {
      var messages = {
        error: replaceCep('Não encontramos o endereço para o CEP [CEP].'),
        ok: replaceCep('Endereço referente ao CEP [CEP]:'),
        loading: replaceCep('Buscando informações para o CEP [CEP]...')
      };
      $status.get()[0].textContent = messages[type];
    }

    function replaceCep(str) {
      return str.replace('[CEP]', clearCep());
    }

    function clearCep() {
      return $inputCep.get()[0].value.replace(/\D+/g, '');
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

  }

  win.app = app;
  app();

})(window, document, window.DOM);
```
