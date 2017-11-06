# Ajax - Parte 03 

## Manipulando respostas de requisições ajax 

Como foi visto, quando a requisição é finalizada com sucesso, o `ajax.readyState` é  
igual a `4` e o `ajax.status` é igual a `200`.  

Posso então fazer uma condição com o if, verificando se a requisição foi finalizada  
com sucesso:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', '/');
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk()) 
      console.log('Requisição ok');
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);

// 'Requisição ok'
```

## `ajax.responseText` 
Essa propriedade me traz a resposta da requisição em `string`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', '/');
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk())
      console.log(ajax.responseText);
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32422544-1ac583fe-c288-11e7-9cd8-5a8578165c47.png)

## Manipulando dados `JSON` 
Vou criar um documento `.json` na pasta do projeto e abrir uma requisição  
do tipo `GET` para este documento:  

```JSON
{
  "message": "opa! requisição feita com sucesso!"
}
```

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open(
    'GET',
    '/curso-javascript-ninja/javascript-ninja-exemplos/data/data.json'
  );
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    if(isRequestOk())
      console.log(ajax.responseText);
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32422638-9590e768-c288-11e7-9c71-93e1fd686783.png)

Como ele é um `JSON`, posso manipulá-lo, por exemplo, para pegar apenas o  
valor da propriedade `message`:  
