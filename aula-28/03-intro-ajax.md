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

