# Introdução à AJAX

## O que é AJAX 
**A**synchronous **J**avascript **A**nd **X**ML. Ou seja, Javascript assíncrono e XML.  

**JavaScript assíncrono** é uma das formas de trabalhar com o Javascript em que uma operação  
que demanda muito consumo de recurso não bloqueie a thread principal. Essa ação é efetuada  
em uma thread secundária para que a thread principal se mantenha liberada para o usuário.  
Isso é possível através da utilização de eventos, temporizadores (setInterval, setTimeOut).  

**XML** foi o tipo de conteúdo em que a ideia do AJAX começou a ser executada. Porém, é  
possível utilizar qualquer tipo de conteúdo com AJAX.  

## Qual é a função do AJAX 
O AJAX serve para que requisições sejam feitas na mesma url atual, e **essas requisições  
irão trazer informações sem a necessidade de recarregar a página**. Ou seja, informações  
que não estão na página atual serão trazidas para ela.  

Então, o AJAX faz uma requisição assíncrona no meu servidor ou em outro servidor que  
permita que a requisção seja feita e me traga uma resposta. Essa resposta pode ser um  
XML, um documento de texto, um HTML, um JSON, etc.  

## O objeto `window.XMLHttpRequest()` 
É um objeto do window que precisa ser instanciado para que a requisição AJAX seja feita.  

## Os três passos básicos para que uma requisição AJAX funcione 
1. Instanciar o objeto com a palavra-chave `new`. Exemplo: `var ajax = new XMLHttpRequest();`  
Como ele é um objeto de `window`, não é necessário especificar o `window.`, pois ele é um  
objeto global.  

2. Abrir uma conexão, especificando o tipo de protocolo e a url a ser acessada. Exemplo:  
`ajax.open(<protocol>, <url>);` Os protocolos usados podem ser `GET`, `POST`, `PUT`,  
`DELETE`, `OPTIONS`, `HEAD`, enfim, qualquer protocolo http válido desde que o navegador  
em uso e o servidor para onde eu esteja enviando essa requisição suportem-a.  
Preferencialmente, os protocolos de requisições que irão funcionar para qualquer navegador,  
sistema ou servidor serão `GET` e `POST`.  

**O protocolo GET** serve para obter informações. Ou seja, ao enviar um GET, informações  
serão recebidas através da url a ser acessada.  

3. Enviar os dados necessários para o servidor (se houverem). Exemplo: `ajax.send(<data>);`.  

## Como funciona uma requisição AJAX 
Suponhamos que eu tenha o seguinte html:  

```HTML 
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <title>JS Ninja</title>
</head>

<body>

  <script src="js/main.js"></script>

</body>

</html>
```

Ao carregar o `index.html`, a aba network do console me mostrará as requisições que  
o browser fez para baixar a página, especificando os métodos usados, o status code  
e outras informações:  

![image](https://user-images.githubusercontent.com/29297788/32417077-ed2b38aa-c23a-11e7-825d-368647d910fe.png)

![image](https://user-images.githubusercontent.com/29297788/32417113-6333dfb6-c23b-11e7-8a40-f9afd001f583.png)

Ou seja, foi feita uma requisição para o localhost com o GEt, ou seja, quero obter  
informações do localhost. Normalmente, dados passados pela url são enviados por GET.  
Ou seja, se eu quero acessar o localhost, devo acessar a url e ele me trará o  
resultado. Neste caso, o resultado é o meu documento html disponível ao acessar a  
url `http://localhost/curso-javascript-ninja/javascript-ninja-exemplos/`:  

![image](https://user-images.githubusercontent.com/29297788/32417151-3464e2b0-c23c-11e7-803f-75185654f2aa.png)

O `main.js` também foi recebido pois, dentro do localhost, meu arquivo index.html chama  
o main.js. `<script src="js/main.js"></script>` também cria uma requisição GET que vai  
no meu servidor para tentar buscar esse arquivo e fazer com que o `main.js` seja incluído,  
e para ele ser incluído, ele precisa ser baixado na página:  

![image](https://user-images.githubusercontent.com/29297788/32417176-9bd45b42-c23c-11e7-8dea-58c30a8661c7.png)

![image](https://user-images.githubusercontent.com/29297788/32417163-650e8eac-c23c-11e7-89c1-89e703d2aa15.png)

Se um arquivo inexistente for chamado pelo script, por exemplo, ao carregar a página é  
retornado um status 404, que indica que o arquivo não foi encontrado.  

![image](https://user-images.githubusercontent.com/29297788/32417208-18f539d4-c23d-11e7-92c0-4bad387f4e2d.png)

Vou fazer uma requisição AJAX para a própria raiz do localhost, sem enviar dados:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', '/');
  ajax.send(null);

})(window, document);
```

Isso irá fazer com que, ao carregar a página, uma nova requisição que foi feita seja  
mostrada na aba `network`, mostrando que o tipo dela é `xhr`:  

![image](https://user-images.githubusercontent.com/29297788/32417278-0f2c2f74-c23e-11e7-9b39-f8ad6ab44c82.png)

Segundo a imagem acima, o tipo da primeira requisição feita no localhost foi `document`.  
OU seja, o documento que foi baixado.  

A segunda requisição foi do tipo `script`, que chamou o `main.js`. Ou seja, o `main.js`  
veio através de um `script`.  

Já a terceira requisição (localhost) foi feita por `xhr`, que significa `XMLhttpRequest`.  
Então, essa chamada veio à partir de um objeto `XMLHttpRequest()`.  

Se eu quisesse chamar, por exemplo, o arquivo `main.js`, isso faria uma requisição  
`xhr` para esse arquivo. Ou seja, ele baixou o `main.js` 2x. A primeira através de um  
`script` e a segunda através de um objeto `xhr`:  

```JAVASCRIPT 
(function(win, doc) {
  'use strict';

  var ajax = new XMLHttpRequest();

  ajax.open('GET', '/curso-javascript-ninja/javascript-ninja-exemplos/js/main.js');
  ajax.send(null);

})(window, document);
```

![image](https://user-images.githubusercontent.com/29297788/32417342-3983d6b8-c23f-11e7-8db1-9647993dac4c.png)

