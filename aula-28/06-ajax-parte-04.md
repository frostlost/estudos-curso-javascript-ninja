# Ajax - Parte 4 

## Tratamento de erros 
Ao ocorrer um erro em uma aplicação JavaScript, o erro é disparado no console.  

Suponhamos que, ao invés de chamar um arquivo `.json`, eu chame um `.xml` e  
tente parsear o arquivo `.xml` para `.json`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.xml'
  );
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      console.log(JSON.parse(ajax.responseText));
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32449502-e03e6162-c2f8-11e7-8a44-fa5b2da058ef.png)

Esse erro está me dizendo que o `JSON.parse()` não conseguiu parsear o `responseText`.  

Ou seja, o arquivo não é um `.json` e ele está me indicando que não conseguiu  
reconhecer o `<` no início do arquivo `.xml`. O fato de ser um `SyntaxError` é uma  
dica do tipo de erro que ocorreu.  

## `throw new Error('error message')` e `throw new SyntaxError('error message')` - Como disparar erros em JavaScript 
É um objeto que age como um `return` que dispara o erro. Estou disparando um novo  
objeto de erro que irá mostrar no console 'Mensagem de erro':  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.xml'
  );
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      throw new Error('Mensagem de erro');
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32449846-cdf149e2-c2f9-11e7-8b88-9e706fd1df80.png)

Da mesma forma, se fosse um erro de sintaxe, eu poderia disparar o `SyntaxError`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.xml'
  );
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      throw new SyntaxError('Mensagem de erro');
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32449956-14054c8a-c2fa-11e7-91c5-d4a727474b01.png)

## `try` e `catch`  
São cláusulas usadas para capturar o erro e não deixá-lo àmostra para  
o usuário.  

O `try` irá tentar fazer algo, se ele não conseguir, ele irá cair na cláusula `catch`  
para resolver o problema do erro.  

Suponhamos que eu dispare um erro comum dentro da cláusula `try`. Como estou  
disparando um erro, um erro sempre será disparado. Após isso, ele irá cair na  
cláusula `catch` e dizer qual erro aconteceu, retornando-o como `string`, ao invés  
de erro. O parâmetro `(e)` no `catch` é o objeto de erro:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.xml'
  );
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      try {
        throw new Error('Mensagem de erro');
      }
      catch(e) {
        console.log(e);
      }
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32450571-b4db30ce-c2fb-11e7-8171-e31921b6da9f.png)

Ou seja, o `try` executou o código que está dentro dele. Se esse código dispara  
qualquer tipo de erro, ele manda esse erro como objeto para o parâmetro `(e)` do  
catch.
