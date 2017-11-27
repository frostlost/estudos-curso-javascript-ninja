# Ajax - sync - POST 

## `<async>` 
![image](https://user-images.githubusercontent.com/29297788/33270832-82e4015a-d36c-11e7-8877-d931ebb87488.png)

Esse parâmetro pode ser passado, porém, não deve ser utilizado em requisições  
normais do browser. Porém, é interessante conhecê-lo e saber como ele funciona.  

Esse exemplo mostra que é possível fazer uma requisição síncrona utilizando  
workers. Porém, no front-end, a requisição ajax é, sempre, assíncrona. Ou seja,  
a thread principal nunca deve ser bloqueada e a resposta sempre deve ser pega  
no evento `readystatechange`.  

## Fazendo uma requisição síncrona 
O problema dessa requisição é que ela bloqueia a thread principal.  

Se `false` for passado como 3º parâmetro do método `open`, a requisição não  
será assíncrona. Quando isso é feito, o uso do evento `readystatechange` não é  
necessário. Posso então apenas mostrar a resposta do ajax e o status dele no  
console:  

![image](https://user-images.githubusercontent.com/29297788/33271320-1013eb5c-d36e-11e7-86e1-8d9942fc1c8c.png)

![image](https://user-images.githubusercontent.com/29297788/33271356-261f0440-d36e-11e7-87e6-7e31a4076ae5.png)

Ele mostrou a resposta de forma normal mas, até o chrome exibe um alerta dizendo  
que a requisição síncrona na thread principal já foi depreciada devido aos seus  
efeitos na experiência do usuário. Ou seja, esse formato não deve ser utilizado.  

Neste formato, a resposta será aguardada e, quando o servidor responder, o  
`console.log` será executado. O problema disso é que, se a requisição demorar muito  
tempo, a interface do usuário irá ficar travada.  

Se o terceiro parâmetro for retirado ou passado como `true`, ou seja, estou dizendo  
que a requisição deve ser assíncrona, ao tentar executar, o `0` será mostrado no  
console, por que não há nenhum status, nem response text. O status é `0` por que nada  
foi enviado para mim:  

![image](https://user-images.githubusercontent.com/29297788/33271512-9ac34dd8-d36e-11e7-9fc1-8601f25882d8.png)

## O outro formato de requisição ajax 
Além da maneira tradicional vista até aqui, com o `addEventListener` no ajax, é possível  
também fazer com que `ajax.onreadystatechange` receba uma única função:  

![image](https://user-images.githubusercontent.com/29297788/33271901-aedfdf38-d36f-11e7-856b-918b4bbee4d6.png)

Geralmente, apenas uma única função de callback é utilizada, então, esse formato também é  
válido.  

> Lembrando de sempre incluir o `on` caso esse formato de propriedade do objeto ajax seja  
utilizado. 
