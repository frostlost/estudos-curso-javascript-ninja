# Ajax - parte 02 

## O evento `readystatechange` 
Esse evento irá responder quando o estado da requisição mudou.  

Quando a requisição é concluída, o evento será disparado:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', '/');
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    console.log('terminou requisição');
  }, false);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32421178-dd393e46-c27c-11e7-94ce-f772ecb6a869.png)

Ele entrou 3x na requisição, fez 3 chamadas do 'terminou a requisição'.  
Isso aconteceu por que o evento `readystatechange` verifica **quando**  
o estado da requisição mudou.  

## A propriedade `readyState` 
É uma propriedade usada para verificar o estado atual da requisição.  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', '/');
  ajax.send();

  ajax.addEventListener('readystatechange', function() {
    console.log('terminou a requisição', ajax.readyState);
  }, false);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32421245-860e086c-c27d-11e7-92b4-8c188a7bab35.png)

## Os números de estado das requisições 
Cada número, de 0 a 4, significa um estado diferente da requisição.  

0. Não enviado. Indica que a requisição não foi feita. Isso acontece  
quando o `ajax.open('GET', '/');` não é chamado.  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  console.log(ajax.readyState);

  ajax.open('GET', '/');

  console.log(ajax.readyState);
  
  ajax.send();

    ajax.addEventListener('readystatechange', function() {
    console.log('terminou a requisição', ajax.readyState);
  }, false);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32421310-39c11bec-c27e-11e7-8891-b2ff05b45524.png)

1. Conexão aberta. A conexão foi iniciada.  
2. Headers recebidos. A primeira coisa que é recebida de uma conexão  
são os cabeçalhos, que dizem qual é o tipo de arquivo e disponibiliza  
algumas informações iniciais básicas:  

![image](https://user-images.githubusercontent.com/29297788/32421339-a9688dfe-c27e-11e7-84a4-3c09c675025a.png)

Ou seja, esse header, por exemplo, tem 1991 bytes e o tipo de conteúdo é `html`.  

3. Carregando corpo do request.  
4. Requisição Concluída com sucesso. 

Mesmo que um caminho com erro seja requisitado, e o erro 404 mostrado,  
ele continua tentando fazer as requisições (tentando buscar os headers,  
carregando o arquivo e finalizando a requisição), mostrando os números.  

Ou seja, ele consegue chegar até o final:  

![image](https://user-images.githubusercontent.com/29297788/32421418-904c3c3e-c27f-11e7-8e97-430af793d9a8.png)

## `ajax.status` - Verificando os status da requisição
Com essa propriedade, é possível verificar os status da requisição.  

![image](https://user-images.githubusercontent.com/29297788/32421472-28e7cf4e-c280-11e7-8b7a-9a4d29ccb1b9.png)

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  console.log(ajax.readyState);

  ajax.open('GET', '/');

  console.log(ajax.readyState);

  ajax.send();

    ajax.addEventListener('readystatechange', function() {
    console.log('terminou a requisição', ajax.readyState, ajax.status);
  }, false);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32421490-566a2016-c280-11e7-9bd1-739834553c29.png)

