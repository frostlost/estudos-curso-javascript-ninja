# Ajax - POST - Parte 02 

## Exemplo prático de envio do método `POST`  

No front-end, irei criar um método `POST` para o servidor para que ele cadastre  
um novo usuário. 

![image](https://user-images.githubusercontent.com/29297788/33298476-badb6d6c-d3cd-11e7-8179-445018201324.png) 

## `ajax.setRequestHeader()`

Lembrando que a ordem ao criar uma chamada ajax importa. No caso do post, após  
abrir a requisição o header deve ser setado e, depois, o `ajax.send()`:  

![image](https://user-images.githubusercontent.com/29297788/33298631-8c5c122e-d3ce-11e7-8c4e-d89fb44f72a3.png)

## Enviando os dados do usuário 

![image](https://user-images.githubusercontent.com/29297788/33298678-cd44b624-d3ce-11e7-812d-be39db60d8c0.png)

Ou seja, até aqui, uma conexão para enviar um `POST` para a url `/user` está  
sendo aberta. Depois, o header está sendo setado dizendo que o tipo de  
conteúdo é uma query string de formulário. E os dados que estão sendo enviados  
são: nome de usuário e idade.  

Feito isso, irei assistir o evento `onreadystatechange` e, se tudo estiver ok na  
requisição, `'usuário cadastrado'` será mostrado no console. Dpois de fazer o  
`send()`, vou acrescentar outro `console.log()` indicando que o usuárioo está  
sendo cadastrado:  

![image](https://user-images.githubusercontent.com/29297788/33298883-0e046eba-d3d0-11e7-92e8-4870bea4da69.png)

Como apenas o front-end foi modificado, ao tentar fazer a requisição, será mostrada  
uma mensagem dizendo que não há um `/user` para o método `POST`.  

## Padronizando as propriedades do objeto  
Para a padronização, as propriedades do objeto serão renomeadas para `username`  
e `age`:  

![image](https://user-images.githubusercontent.com/29297788/33298710-0aca5ddc-d3cf-11e7-815e-e8e894e2b62d.png)

## Testando essa requisição com o método `GET`

No servidor atual há apenas métodos get para o `/user` e o método get para  
o `/user`, passando o `:username`, que é onde o username será obtido do  
objeto users:  

![image](https://user-images.githubusercontent.com/29297788/33298542-1cb0fba6-d3ce-11e7-8991-e6b8e7279006.png)

![image](https://user-images.githubusercontent.com/29297788/33298546-2173d8ca-d3ce-11e7-92eb-b44477961fad.png)

Se o `GET` for utilizado, incluindo o `responseText no console`, o erro `404`  
já não será mais exibido e 'user' também será mostrado no console:  

![image](https://user-images.githubusercontent.com/29297788/33299035-db9be43e-d3d0-11e7-8a1c-8b22cefc0866.png)

![image](https://user-images.githubusercontent.com/29297788/33299042-e2042f0c-d3d0-11e7-96b7-e0744f17e60d.png)

Mas, como eu estou enviando um `POST`, é exibido no console que ele não pode  
enviar um `POST` para `/user`, pois ainda não especifiquei o método `POST` no  
back-end:  

![image](https://user-images.githubusercontent.com/29297788/33299119-4f721dba-d3d1-11e7-9784-be546dd0a9a0.png)

![image](https://user-images.githubusercontent.com/29297788/33299132-6384e850-d3d1-11e7-8d95-c59582b064f2.png)

## O padrão de resposta de uma REST Api  
Uma das premissas de uma REST Api é que ela sempre irá retornar um `json`.  
Vou então alterar as respostas dos métodos http `GET` já criados:  

![image](https://user-images.githubusercontent.com/29297788/33299277-02afe4f2-d3d2-11e7-8c11-2359a1795205.png)

## `app.post()` - Criando o método Http `POST` no servidor back-end 
A diferença em relação ao `GET` é que, os dados, na requisição ajax no front-end  
estão sendo enviados no `send()`, e não na `url` ao abrir a requisição:  

![image](https://user-images.githubusercontent.com/29297788/33299366-618efc4c-d3d2-11e7-9538-6744d4d6a25f.png)

## Instalando o módulo `body-parser`

Para enviar esses dados pelo `send()`, vou precisar pegar esses dados no corpo da  
requisição. No Node, o corpo da requisição é o `req.body`. Só que o `req.body`  
precisa de um parser para parsear esses dados para objeto. Assim, serão criados  
`req.body.username` e `req.body.age`.  

Para fazer isso, irei parar o servidor e  instalar o módulo `body-parser` com o  
comando `npm install --save body-parser`:  

![image](https://user-images.githubusercontent.com/29297788/33299513-1e0a3044-d3d3-11e7-8e5a-3ca712f5c68c.png)

Fazendo isso, já posso utilizá-lo no Node, chamando com o require e o atribuindo  
à uma variável:  

![image](https://user-images.githubusercontent.com/29297788/33299560-56f4eb42-d3d3-11e7-8267-fede36fa6ddb.png)

Também irei especificar um `app.use()` antes do use do cors passando o  
`bodyParser.urlencoded({extended: false})` como parâmetro. O `urlencoded` especifica  
que o tipo de aplicação a ser parseada será a que foi passada no `setRequestHeader`.  
O `{extended: false}` não deixa que o objeto seja extendido para outros tipos de  
formatos, ou seja, só irá aceitar texto e `.json`:  

![image](https://user-images.githubusercontent.com/29297788/33299743-3feede8e-d3d4-11e7-8ba0-7be493266d8d.png)

Feito isso, irei apenas retornar para frente o `username` e o `age`, testando o  
`responseText`:  

![image](https://user-images.githubusercontent.com/29297788/33299826-8a6521b2-d3d4-11e7-902a-06f724fa13e7.png)

![image](https://user-images.githubusercontent.com/29297788/33299842-9b372b98-d3d4-11e7-8d33-808f6cffa485.png)

## Cadastrando temporariamente novos usuários no objeto `users`
O objeto `users` está funcionando enquanto a aplicação estiver de pé.  

Para o cadastro, irei fazer com que esse objeto seja um array de objetos. Dessa,  
forma, é possível passar as propriedades `username`, `name` e `age` para o objeto.  
Ou seja, cada pessoa é um objeto:  

![image](https://user-images.githubusercontent.com/29297788/33300015-52f21ac2-d3d5-11e7-8b73-7f7f6a254798.png)

## Utilizando o método `some` para pegar o nome de um usuário

Agora, para pegar o `username` é necessário modificar a sintaxe, tanto no `GET`  
como no `POST`.  

No `GET`, irei verificar se o nome de usuário existe. Para isso, irei criar uma  
variável `hasUser` que receberá o `users.some()`. Esse método irá retornar se  
o `user.username` de algum objeto do array é igual ao `req.params.username`:  

![33300288 a425733e d3d6 11e7 8a78 1e29af1d644c png 1920x1080](https://user-images.githubusercontent.com/29297788/33300316-c542c698-d3d6-11e7-8655-69e70abaecfa.png)

Então, se `hasUser` for `true`, o nome do usuário será retornado. Para isso,  
posso filtrar o resultado e retornar apenas o `user.username` que for igual  
ao `username`:  

![image](https://user-images.githubusercontent.com/29297788/33300468-9ec4de56-d3d7-11e7-9ad4-2f21026ac0ee.png)

## Testanto uma requisição `GET` 
Vou criar então uma requisição `GET` no front-end, passando um usuário que existe  
(`joao`), apenas para ver se o usuário foi cadastrado corretamente:  

![image](https://user-images.githubusercontent.com/29297788/33300526-fcd9431a-d3d7-11e7-9fa6-a0eda7688301.png)

![image](https://user-images.githubusercontent.com/29297788/33300548-2aa949d4-d3d8-11e7-96fa-89a61dd1dc7a.png)

