# Ajax - Parte 04 

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
qualquer tipo de erro, ele manda esse objeto de erro para o parâmetro `(e)` do  
catch, para que o erro não seja disparado no browser (um erro comum pode parar  
a execução do código e não carregar a página por completo). Então, o `try` /  
`catch` é usado para não deixar que o código pare.  

Na imagem acima, o que foi disparado, ao invés de um erro, foi uma string, uma  
mensagem.  

Eu posso então criar uma variável `response` que irá receber o `responseText`  
dentro do `try`. Ou seja, se por acaso, a variável conseguir pegar o valor de  
`responseText`, tudo certo. Se não, vou fazer com que a variável receba o próprio  
`ajax.responseText` (que será uma string).  

Ou seja, se o request estiver ok, ele irá atribuir o Parseamento do json à essa  
variável. Se po acaso a resposta não for um json e ele for disparar um erro, ao invés  
de mostrar o erro para o usuário, ele irá cair na cláusula catch e, na cláusula catch  
o responseText está simplesmente sendo passado para a variável, que será mostrada no  
console:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.xml'
  );
  ajax.send();

  var response = '';
  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      try {
        response = JSON.parse(ajax.responseText);
      }
      catch(e) {
        response = ajax.responseText;
      }
      console.log(response);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32451865-22addd2e-c2ff-11e7-8f87-107bba8ee59d.png)

Ou seja, se eu não conseguir manipulá-lo como um `.json`, ele irá trazer para mim esse  
documento como uma string.  

Se eu chamo o `.json`, ele será parseado normalmente e trazer o objeto para mim, porque ele  
caiu no `try`, que **não deu nenhum erro, então ele não entra no `catch`**:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.json'
  );
  ajax.send();

  var response = '';
  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) {
      try {
        response = JSON.parse(ajax.responseText);
      }
      catch(e) {
        response = ajax.responseText;
      }
      console.log(response);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32451962-5b0b771c-c2ff-11e7-8d0d-d6ad09b596ff.png)
