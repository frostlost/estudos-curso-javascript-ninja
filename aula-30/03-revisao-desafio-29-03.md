# Revisão do Desafio 29 - Parte 03  

## Código atual 

```JAVASCRIPT 
(function(win, doc, DOM) {
  'use strict';

  function app() {
    return {
      init: function init() {
        console.log('app init');
      },
    };
  }

  app().init();

})(window, document, window.DOM);
```

Sempre haverá um `init` nos projetos e ele irá basicamente iniciar os esses projetos.  
Não haverá nenhum código específico no `init`, ele irá apenas invocar outros métodos.  

## Relembrando o `this` 
Relembrando que, consigo usar o `this` dentro de um objeto JavaScript e esse `this` irá  
se referir àquele objeto específico. Exemplo: 

```JAVASCRIPT 
  var obj = {
    lala: 'olá',
    init: function init() {
      return this.lala;
    }
  };

  console.log(obj.init());
```

`this.lala` está referenciando o próprio objeto.  

Isso também funciona para a função app. Como a função `app` está retornando um objeto,  
se o `this` for utilizado, ele irá representar esse objeto que está sendo retornado:  

```JAVASCRIPT 
  function app() {
    return {
      init: function init() {
        this.initEvents();
      },

      initEvents: function initEvents() {
        console.log('init events');
      }
    };
  }

  app().init();
```

O método `initEvents()` foi criado e será invocado ao chamar o `init()` do `app()`.  

![image](https://user-images.githubusercontent.com/29297788/32853439-75c40338-ca22-11e7-86ef-993ce4c336cb.png)

## O this dentro de module patterns 
Como visto até aqui, é possível utilizar o `this` dentro de module patterns, porém,  
em breve serão vistos os problemas de se utilizar o `this` nesse formato.  

## Inserindo dados da empresa usando `AJAX` 

```JAVASCRIPT 
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
      }
    };
  }

  app().init();
```

`true` no método `ajax.open()` especifica que o ajax será chamado de forma assincrona.  

`this.getCompanyInfo` especifica que a função de callback desse evento é a função  
`getCompanyInfo`, que é um método deste objeto.  

`ajax.addEventListener('readystatechange', this.getCompanyInfo, false);` - quando o  
'readystatechange' estiver pronto, ou seja, quando esse evento for disparado,  
`this.getCompanyInfo` será invocado.  

Vou então criar o método `getCompanyInfo`, que irá trazer o resultado para mim:  

```JAVASCRIPT 
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
        if(this.readyState === 4 && this.status === 200) {
          console.log(this.responseText);
        }
      }
    };
  }

  app().init();
```

**É importante notar que o `this` de `this.getCompanyInfo` está se referindo ao objeto,  
enquanto que o `this` dentro da função `getCompanyInfo()` representa o objeto ajax.**  
Ou seja, quando tenho um evento e chamo um método, dentro desse método, o `this` é o  
próprio elemento atrelado ao evento.  

![image](https://user-images.githubusercontent.com/29297788/32854625-58559ee8-ca26-11e7-980c-13e01b31f939.png)

Vou então criar um método `isReady()`, que irá verificar se a requisição `ajax` foi feita com  
sucesso:  

```JAVASCRIPT 
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
        if(isReady()) {
          console.log(this.responseText);
        }
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  }

  app().init();
```

Só que, como irei saber quem é o `this` de `return this.readyState === 4 && this.status === 200;`  
e quem é o `this` de `console.log(this.responseText);` e como fazer isso funcionar? Como fazer  
com que o `this` de `isReady: function isReady()` seja o ajax?  

## Relembrando o `call` 
Por enquanto, vou usar o `call(this)`. O `this` nesse caso é o ajax. O `call` irá possibilitar  
que eu passe um `this` para o método `isReady`:  

```JAVASCRIPT 
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
        if(app().isReady.call(this)) {
          console.log(this.responseText);
        }
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    };
  }

  app().init();
```

`app().isReady.call(this)` - Estou usando o método `isReady` do `app` mas, o  
`this` dentro do método `isReady` será o `ajax` que, dentro do método `getCompanyInfo`,  
como o `this` já é o ajax, posso passá-lo direto com o call.  

![image](https://user-images.githubusercontent.com/29297788/32855565-34a933e4-ca29-11e7-9ca8-0aaeb5c008d9.png)

Desta forma, é muito fácil confundir o que this está fazendo. Por enquanto o código  
ficará assim mas, em breve será melhorado.  

## Código final

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

Aqui, especifiquei que, se o request não foi feito com sucesso, um return vazio será  
executado.  

Caso tudo ocorra bem, o nome e telefone da empresa serão inseridos nos span.  

![image](https://user-images.githubusercontent.com/29297788/32855963-84a21e14-ca2a-11e7-9c4e-00bfec85ac0e.png)
