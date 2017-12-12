# O objeto `this`
A tradução de `this` é `este`. Sua função é apontar para `este` objeto onde ele  
está dentro.  

## `this` em métodos de objetos  
O `this`, quando encontrado no método de um objeto, estará referenciando o  
próprio objeto:  

```JAVASCRIPT
(function() {

  var obj = {
    prop1: '1',
    init: function init() {
      return this;
    }
  };

  console.log(obj.init());

})();

// retorna o próprio obj
```

[![this.jpg](https://s1.postimg.org/4q3sb6dhgv/this.jpg)](https://postimg.org/image/3qnoy0aqaz/)

Ou seja, posso fazer com que este `this` retorne uma propriedade do objeto em  
que ele está dentro, pois agora consigo acessar essa propriedade:  

```JAVASCRIPT
(function() {

  var obj = {
    prop1: '1',
    init: function init() {
      return this.prop1;
    }
  };

  console.log(obj.init());

})();

// 1
```

Ou seja, `console.log(obj.init() === obj.prop1);` is `true`.   

## O Objeto global `window`  
[![window_Object.jpg](https://s1.postimg.org/78j3mrze0f/window_Object.jpg)](https://postimg.org/image/4dqfgzk78r/)

Esse objeto possui tudo aquilo que eu consigo acessar sem passar uma referência  
à qualquer tipo de objeto. Exemplos: `Array`, `Number`, `Object`.  

Tudo aquilo que pode ser acessado de qualquer lugar do código, tudo o que faz  
parte da base do JavaScript está pendurado no objeto global `window`.  

No browser, ele se chama `window`, no node, `global`.  

## `this` em funções literais  
O `this`, quando encontrado em uma **função literal não-construtora e que não  
seja método de um objeto**, estará referenciando o objeto global `window`.  

```JAVASCRIPT
(function() {

  function myFunction() {
    return this;
  }

  console.log(myFunction());

})();

// retorna o objeto global window
```

[![this_On_Literal_Functionr.jpg](https://s1.postimg.org/6ylslywqz3/this_On_Literal_Functionr.jpg)](https://postimg.org/image/8tydel96kr/)

Ou seja, `console.log(myFunction() === window);` is `true`.  

## Funções construtoras
Assim como posso criar um objeto com `new Object()`, é possível criar  
construtores próprios no JavaScript.  

Construtores, por convenção, começam com letras maiúsculas. Para usá-los, **é  
preciso usar a palavra-chave `new` ao invocar a função construtora**. Ao fazer  
isso, **é criado um novo objeto que possui as propriedades da função construtora**:  

```JAVASCRIPT
(function() {

  function MyConstructor() {
    this.prop1 = '1';
    this.prop2 = '2';
  }

  console.log(new MyConstructor());

})();
```

[![new_Constructor.jpg](https://s1.postimg.org/2rcpsn4i7j/new_Constructor.jpg)](https://postimg.org/image/2gpvzhpa23/)

Ou seja, se eu chamar `console.log(new MyConstructor().prop1);`, tenho acesso ao  
valor da propriedade (`// 1`).  

Posso então criar uma variável e atribuir esse novo objeto à ela.  

```JAVASCRIPT
(function() {

  function MyConstructor() {
    this.prop1 = '1';
    this.prop2 = '2';
  }

  var myConstructor = new MyConstructor();

  console.log(myConstructor);

})();
```

## `this` referenciando um objeto instanciado  
O `this` está referenciando esse novo objeto instanciado (`new MyConstructor()`)  
e atribuído-o à variável `myConstructor`. Todas as propriedades da função  
construtora serão penduradas em `myConstructor`.  

Ou seja, se eu chamar `myConstructor.prop1`, terei acesso ao valor dessa  
propriedade. `myConstructor` herdou propriedades da função construtora:  

```JAVASCRIPT
(function() {

  function MyConstructor() {
    this.prop1 = '1';
    this.prop2 = '2';
  }

  var myConstructor = new MyConstructor();

  console.log(myConstructor.prop1);

})();

// 1
```

## Invocando uma função construtora sem o `new`
Se essa função construtora for invocada sem o uso da palavra-chave `new`,  
o `this` irá representar o window. Seria o mesmo que especificar  
`window.prop1 = '1';`. Ou seja, todas as propriedades da função construtora  
ficarão penduradas no escopo global:  

```JAVASCRIPT
(function() {

  function MyConstructor() {
    this.prop1 = '1';
    this.prop2 = '2';
  }

  console.log(MyConstructor());
  console.log(prop1);

})();

// 1
```
