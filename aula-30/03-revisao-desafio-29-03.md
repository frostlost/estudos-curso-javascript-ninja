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

```

**É importante notar que o `this` de `this.getCompanyInfo` está se referindo ao objeto,  
enquanto que o `this` dentro da função `getCompanyInfo()` representa o objeto ajax.**  
Ou seja, quando tenho um evento e chamo um método, dentro desse método, o `this` é o  
próprio elemento atrelado ao evento.  
