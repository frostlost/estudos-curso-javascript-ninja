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

## `JSON.parse(ajax.responseText)` - Manipulando dados `JSON` 
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
valor da propriedade `message`. Mas, antes, preciso parsear os dados que vieram  
como string através do `ajax.responseText` para objetos em Javascript:  

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
    if(isRequestOk()) {
      var data = JSON.parse(ajax.responseText);
      console.log(data.message);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32422818-ccc2cd18-c289-11e7-8578-193a999b5cb8.png)

## `ajax.responseXML` - Manipulando dados `XML` 
Essa propriedade converte a resposta de um documento XML em um documento.  

Vou então criar um arquivo `.xml` e fazer uma requisição para ele:  

```XML 
<?xml version="1.0" encoding="UTF-8"?>
<myXML>
  <tag>Content</tag>
</myXML>
```

![image](https://user-images.githubusercontent.com/29297788/32422989-eb857006-c28a-11e7-819a-3fa099e2aef9.png)

Ou seja, ele trouxe esse `XML` como um document, já parseado.  

Se eu logar apenas o objeto ajax, posso observar vários eventos dentro dele  
e ver que o response.XML está como `document`, que é o arquivo `.xml` que  
eu criei:  

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
      console.log(ajax);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32423064-734b29cc-c28b-11e7-9487-55eba022eaa8.png)

Se eu chamo o arquivo `.json`, ao invés do `.xml`, o `response.XML`  
é `null`. Ou seja, não é um `XML`:  

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
    if(isRequestOk()) {
      console.log(ajax);
    }
  }, false);

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32423126-cbc36f42-c28b-11e7-9bf1-b5b13494f48a.png)

Então, sempre que eu tiver uma resposta como `XML`, ele já irá trazer  
esse `XML` parseado como um documento para que eu possa manipulá-lo. 
