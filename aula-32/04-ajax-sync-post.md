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

## `ajax.abort()` 
Ele irá abortar a requisição ajax. Isso é interessante em casos onde faço uma requisição e  
quero buscar apenas os headers que o servidor irá enviar. Quando o servidor mandar os  
headers, a requisição deve ser parada.  

Obs.: O nº `4` do `ajax.readyState === 4` é o corpo da requisição:  

![image](https://user-images.githubusercontent.com/29297788/33272605-ca9aad32-d371-11e7-9002-0092925d3fa1.png)

Existem casos onde o corpo da resposta pode ser algo gigantesco (não é o caso, pois o que está sendo  
enviado é apenas um nome de usuário ou um objeto com erro): 

![image](https://user-images.githubusercontent.com/29297788/33272683-0621011c-d372-11e7-9842-7a017913412d.png)

Mas, em minha aplicação, em casos onde aja uma requisição em que a resposta é grande, talvez  
eu não queira pegar o corpo da requisição, apenas os `headers`. Quando os `headers` estiverem 
prontos, irei pegá-los (`ajax.readyState === 2`). Isso é útil em casos onde é necessário saber  
apenas o tipo da requisição ou só pegar uma informação da requisição.  

Quando os `headers` forem recebidos, `headers ok` será mostrado no console e o ajax será  
abortado:  

![image](https://user-images.githubusercontent.com/29297788/33272861-ac1c9928-d372-11e7-93cf-e18aa13e119f.png)

Com o `ajax.abort()`, o JS não irá chegar no segundo if com o `4`, por que a requisição  
será abortada no `2`:  

![image](https://user-images.githubusercontent.com/29297788/33272948-f1101f64-d372-11e7-8a0d-b4becb1f8ca4.png)

Ou seja, ele mostrou o `0` por que ele não trouxe o `ajax.responseText`. Ele trouxe o  
status somente como `0` por que a requisição não foi concluída. 

## O verbo `POST` 

![image](https://user-images.githubusercontent.com/29297788/33273046-3fd0eec6-d373-11e7-9a5e-95e8f60560e2.png)

É utilizado da mesmo forma que o `GET`, passando `POST`.  

Para esse verbo, é preciso ter um `header` setado. Para isso, deve ser utilizado o método  
`setRequestHeader()`:  

![image](https://user-images.githubusercontent.com/29297788/33273106-6eb00808-d373-11e7-8842-9c06a4d49ea9.png)

Esse método irá requisitar um header e, normalmente, quando o header for utilizado, é necessário  
especificar o tipo de conteúdo que está sendo enviado para o servidor:  

![image](https://user-images.githubusercontent.com/29297788/33273186-afb97c26-d373-11e7-8bc6-5894270d926c.png)

Ou seja, preciso mandar um header dizendo que o tipo do meu conteúdo é `aplication...`.  
Isso significa que estou enviando um conteúdo de um formulário, que esses dados estão sendo  
enviados para o servidor em formato de query string. Existem outros tipos de content type,  
como o `textHTML`, por exemplo, mas, basicamente, esse formato será o utilizado, pois  
funciona em todos os browsers e qualquer servidor consegue receber esse formato em texto  
e convertê-lo para o formato que ele precisa.  

O método `setRequestHeader()` precisa ser especificado em casos de qualquer outro tipo  
de requisição que não seja `GET`. 

Após isso, o `ajax.send()` será feito com os valores a serem enviados para o servidor  
especificados por parâmetro:  

![image](https://user-images.githubusercontent.com/29297788/33273470-88fb3c7c-d374-11e7-871b-267cbebe0252.png)

![image](https://user-images.githubusercontent.com/29297788/33273571-d6dc9a08-d374-11e7-900c-7fe6d219505c.png)

Ou seja, a ideia do post é, enviar dados para o servidor para que o servidor faça  
algo com esses dados. Salvá-los, por exemplo. O máximo que o servidor deve fazer é  
enviar uma resposta dizendo que conseguiu salvar esses dados.  

Informações importantes como nome de usuário e senha devem ser passados como query  
string, através do verbo `POST`, ao invés de serem enviados na url com o verbo `GET`.  

Além das questões de segurança, o verbo `GET` é limitado. Podem ser enviados no máximo  
246 caracteres através dele. O método post envia uma quantidade bem maior de dados.  

Na próxima aula haverá exemplos práticos com o `POST`.
