# REST Api 

## Instalando o [nodemon](https://github.com/remy/nodemon) 
Na pasta do servidor back-end, com o comando `npm install -g nodemon`  
e o nodemon instalado, já posso começar a criar a aplicação. Com o  
comando `nodemon index.js`, ele irá ouvir o arquivo e, a cada alteração  
feita no arquivo, o servidor será executado novamente.  

Ou seja, ele limpa, derruba e sobe novamente o servidor após as alterações  
no arquivo:  

![image](https://user-images.githubusercontent.com/29297788/33241021-2b1aa66a-d2a7-11e7-9832-6d655610d160.png)

## Derrubando o servidor  
Com o `ctrl+c` é possível derrubar o servidor para que outro pacote do  
node seja instalado, como o express, por exemplo.  

## Exemplo de REST Api com Express 

## Instalando o [Express Js](https://github.com/expressjs/express/) localmente 
Posso instalar o express localmente com o comando `npm install --save express`. 

O `--save` é necessário para que o node salve no `package.json` as informações das  
dependências automaticamente:  

![image](https://user-images.githubusercontent.com/29297788/33241142-a8955878-d2a8-11e7-84e6-86f4ce709aac.png)

![image](https://user-images.githubusercontent.com/29297788/33241148-b3a16360-d2a8-11e7-8a66-9187867e3eae.png)

## A pasta `node_modules` 
Após instalar o Express, o node cria automaticamente esta pasta. Ela irá conter  
todos os módulos instalados através do `npm`:  

![image](https://user-images.githubusercontent.com/29297788/33241176-003a5100-d2a9-11e7-960d-02962a69af4b.png)

## Requisitando o `express` de `node_modules`
Com o servidor de pé novamente, posso declarar o 'use strict' no arquivo `index.js`.  

**Sobre o use strict**: é importante utilizá-la também no node.  

**Sobre IIFE's no node**: o node não tem o efeito colateral de criar variáveis globais,  
então não é necessário a utilização de IIFE's no node. Para que algo fique em escopo  
global no node, é perciso forçar. Isso vale apenas para o node (back-end).  

Posso então criar uma variável `express` e atribuir o método `require()` a ela:  

## O método `require()`  
É um método do node que irá requisitar um arquivo. Quando a string `'express'` é passada  
por parâmetro, o node irá procurar na pasta `node_modules` o diretório `express` e, dentro  
da pasta `express`, o `index.js`. Esse arquivo `index.js` é o que está sendo incluído ao  
chamar o `'express'`:  

![image](https://user-images.githubusercontent.com/29297788/33241307-a8ffabfe-d2aa-11e7-8347-6693a6f39d9f.png)

## Executando o express 
Posso então atribuir o express executado à uma variável `app`:  

![image](https://user-images.githubusercontent.com/29297788/33241331-f6bdb1ce-d2aa-11e7-8a9f-f57a3dd9fe92.png)

## O método `get('url', callback)` 
Esse método faz com que, quando for recebida uma requisição `GET` na url que for passada como  
parâmetro para ele, ele execute uma função de callback. '/' como primeiro parâmetro quer dizer  
que a url / rota é a raiz do projeto.  

Essa função de callback recebe dois parâmetros:  

1. req: dados que vem do front-end ao requisitar essa url.  
2. resp: resposta que será devolvida para o servidor.  

![image](https://user-images.githubusercontent.com/29297788/33241385-a7642f58-d2ab-11e7-9971-bc92a7c959f0.png)

Ou seja, a rota '/', sempre irá ter um request e um response. 

## O verbo `get` 
Para tudo o que é acessado através de uma url, é enviada uma requisição `get` para  
o servidor. Ao acessar, por exemplo, `google.com.br`, o google está recebendo uma  
requisição `get.` Então, todas as vezes em que acesso uma url no browser, eu estou  
enviando uma requisição `get`. 

## `res.send('response')` - Enviando uma resposta para o front-end 
Com esse método, cada vez que a url `/` for acessada, através do método `get`, uma  
resposta será enviada. Nesse caso, um html será carregado:  

![image](https://user-images.githubusercontent.com/29297788/33241457-abad5282-d2ac-11e7-8791-0bd6a3d95d72.png)

## `app.listen(numeroDaPorta)` - Selecionando a porta em que a resposta será ouvida  
Vou então ouvir esse servidor na porta `3000`. Sempre que `localhost:3000`, a porta `3000`  
será acessada e ela irá acessar este servidor `index.js`. Quando a raiz desse localhost  
for acessada, a resposta será o `<h1>Home</h1>`:  

![image](https://user-images.githubusercontent.com/29297788/33241474-f862b202-d2ac-11e7-9e5d-2191157b92c5.png)

![image](https://user-images.githubusercontent.com/29297788/33241483-1fdf3ed6-d2ad-11e7-8773-bf083ce44771.png)

## Testando o servidor 
Se eu acessar a url `localhost:3000` no browser, o `<h1>Home</h1>` é exibido na tela.  

Na aba network, posso verificar que é feita uma requisição `get` no document e o status da requisição  
é 200:  

![image](https://user-images.githubusercontent.com/29297788/33241501-73428736-d2ad-11e7-84a8-e937f453fa57.png)

![image](https://user-images.githubusercontent.com/29297788/33241512-9a713bf4-d2ad-11e7-906d-915e0028d5f6.png)

## Criando novas rotas / url's 
Posso criar outra rota e outra resposta quando a url `/user` for acessada, por exemplo:  

![image](https://user-images.githubusercontent.com/29297788/33241578-b7c8bb04-d2ae-11e7-8c0a-32a4795aaec0.png)

![image](https://user-images.githubusercontent.com/29297788/33241581-c66eb884-d2ae-11e7-87b0-22214eab87a4.png)

## Acessando uma rota inexistente 
Ao tentar acessar `localhost:3000/arroz`, por exemplo, será mostrado na tela que essa  
rota não existe e será retornado o status `404`, na aba network:  

![image](https://user-images.githubusercontent.com/29297788/33241609-2284d5d6-d2af-11e7-8135-d62b0b693dc2.png)

## Criando uma nova rota, antes inexistente 
Posso criar então a rota arroz e a resposta quando a url `/arroz` for acessada:  

![image](https://user-images.githubusercontent.com/29297788/33241634-6de50640-d2af-11e7-94ec-eafe031b104e.png)

Basicamente, é assim que funciona uma requisição get em um servidor.  

## Atualizando o servidor manualmente em casos de bug no nodemon 
O comando `rs` (restart) pode ser usado nesses casos. Caso isso não seja suficiente,  
o servidor pode ser derrubado com o comando `ctrl+c` e iniciado novamente  
com o comando `nodemon index.js`:  

![image](https://user-images.githubusercontent.com/29297788/33241666-c916416e-d2af-11e7-9848-ebd067453835.png)

![image](https://user-images.githubusercontent.com/29297788/33241694-410c087a-d2b0-11e7-95d7-aafab6e98c9c.png)

## Fazendo uma requisição AJAX no front-end 
Antes, irei adicionar um `<h1>` e o script no documento html:  

![image](https://user-images.githubusercontent.com/29297788/33241717-cd911d1c-d2b0-11e7-9148-3ec40f9cd7ad.png)

No `main.js`, será feita uma requisição ajax com o verbo `GET` para o `localhost:3000/user`  
(isso deve retornar a string 'user'). Então, criarei o evento que escuta se a requisição foi  
feita com sucesso. Se a requisição estiver ok, a resposta será exibido no console:  

![image](https://user-images.githubusercontent.com/29297788/33246234-45ab7016-d2f9-11e7-8a4b-c48d4592bfae.png)

## Subindo um servidor front-end com o `python`
Na pasta da aplicação front-end, irei subir o servidor `localhost:9001`.  

Isso pode ser feito com o comando `python -m http.server 9001`:  

![image](https://user-images.githubusercontent.com/29297788/33242448-6051d910-d2bc-11e7-9ab8-cbb50737db3e.png)

## Testando o servidor front-end 
Ao acessar `localhost:9001` no browser, o `<h1>` do arquivo `index.html` é mostrado  
na tela:  

![image](https://user-images.githubusercontent.com/29297788/33241810-5202a9e8-d2b2-11e7-97be-7a6e8de9c57d.png)

## O problema de CORS
Ao abrir o console, é exibido um erro dizendo que o XMLHttpRequest da  
url requisitada não pode ser carregado . Na próxima aula será mostrado como  
esse erro pode ser resolvido, no back-end. 

![image](https://user-images.githubusercontent.com/29297788/33246315-404143ca-d2fa-11e7-9f32-dfe46c8963b8.png)
