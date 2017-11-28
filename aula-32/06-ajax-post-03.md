# Ajax - POST - Parte 03 

Atualmente, ao fazer uma requisição `GET` buscando o usuário 'roberto',  
um erro é mostrado no console, dizendo que esse usuário não foi  
encontrado:  

![image](https://user-images.githubusercontent.com/29297788/33324447-cf28ecf4-d436-11e7-9d17-e75649e85a83.png)

![image](https://user-images.githubusercontent.com/29297788/33324463-d622e0aa-d436-11e7-9ac4-bd42bf99346e.png)

Por enquanto, irei comentar o `GET`.  

![image](https://user-images.githubusercontent.com/29297788/33324517-00bbfd1a-d437-11e7-9e11-45d3f67a8c38.png)

## Cadastrando um usuário na memória 
Para cadastrar o usuário roberto, um modo simples e básico é inserir direto no  
array `users` o próprio objeto enviado pelo front-end. Para isso, irei inserir  
`name=Roberto`, na query string que o front-end está enviando:  

![image](https://user-images.githubusercontent.com/29297788/33324649-5d37211e-d437-11e7-9fd4-f44e27bc679f.png)

Após isso, no método post do back-end, ao invés de apenas enviar direto um `json`  
com o usuário, irei dar um `push` no array de usuários com um objeto que será o  
novo usuário que foi recebido. Abaixo do `push`, irei retornar um json que é o  
próprio objeto `users` que já virá com o roberto preenchido.  

Então, o username será o `req.body.username`, o age será o `req.body.age` e o  
name será `req.body.name`. Lembrando que, essas propriedades estão baseadas no  
que está sendo enviado pela query string no `send()` do método `POST`:  

![image](https://user-images.githubusercontent.com/29297788/33324920-1bc0de0e-d438-11e7-801b-de5927e51f72.png)

![image](https://user-images.githubusercontent.com/29297788/33325014-46737daa-d438-11e7-8b97-1483cf4d3839.png)

![image](https://user-images.githubusercontent.com/29297788/33325048-6454847c-d438-11e7-8aef-1f35c4e447c0.png)

## Pegando um usuário cadastrado, com o método `GET`
Vou então comentar o código do post, para que ele não recadastre o mesmo usuário e,  
com o método `GET`, irei pegar os dados do roberto, que antes estava dando erro.  
Agora o usuário roberto é mostrado porque ele foi cadastrado através do post:  

![image](https://user-images.githubusercontent.com/29297788/33325308-07375200-d439-11e7-87ba-802e1ff21261.png)

![image](https://user-images.githubusercontent.com/29297788/33325375-39728190-d439-11e7-80ab-50c95e7dd93f.png)

## Criando uma verificação e evitando o recadastro de usuários repetidos  
Com o código atual, ao atualizar a página, o usuário está sendo cadastrado várias  
vezes, pois o servidor está de pé e, ele irá manter esse valor em memória:  

![image](https://user-images.githubusercontent.com/29297788/33325133-9cada68c-d438-11e7-96af-898ab25816bb.png)

Posso então fazer uma verificação no back-end em que, se o usuário já for cadastrado,  
ele não seja incluído no array de objetos.  

Para isso, posso criar uma variável `hasUser`, que irá receber um `some()` feito  
no array de usuários que retorna `true` se o nome de usuário de algum usuário for  
igual ao do `req.body.username`:  

![image](https://user-images.githubusercontent.com/29297788/33325600-dd878d52-d439-11e7-984b-74ab439a6eea.png)

Se o `hasUser` for false, ou seja, se esse usuário não existir, ele será adicionado  
no array. Se ele não existir, de qualquer forma, a resposta com um json com o array  
de usuários sempre será enviada:  

![image](https://user-images.githubusercontent.com/29297788/33325766-59e78fdc-d43a-11e7-9af8-96485c5dab28.png)

Ao reiniciar o servidor para que ele limpe a memória e atualizando a página várias  
vezes, o usuário não está sendo recadastrado:  

![image](https://user-images.githubusercontent.com/29297788/33325825-8332ce9c-d43a-11e7-9d0d-081e5b02bee1.png)

Agora, posso então cadastrar um novo usuário e atualizar a página várias vezes para  
conferir que o usuário não está sendo recadastrado:  

![image](https://user-images.githubusercontent.com/29297788/33325903-b879975c-d43a-11e7-95c5-db561890e321.png)

![image](https://user-images.githubusercontent.com/29297788/33325911-bff2e682-d43a-11e7-8cc9-61a5b893c50a.png)

E também posso pegar esse novo usuário através do `GET`:  

![image](https://user-images.githubusercontent.com/29297788/33325970-d52e9302-d43a-11e7-87ae-9b2321246202.png)

![image](https://user-images.githubusercontent.com/29297788/33325988-dcceb7fe-d43a-11e7-8381-3d88dc882208.png)

## `JSON.parse()` - Convertendo o usuário de string para JSON 
No `console.log()` do `GET`, quando parseio o `get.responseText` para `JSON`, um  
objeto (usuário) é retornado:  

![image](https://user-images.githubusercontent.com/29297788/33326072-0b56d854-d43b-11e7-9105-1b2ef13b4fbb.png)

![image](https://user-images.githubusercontent.com/29297788/33326127-2aee4aa8-d43b-11e7-8a95-d2e8b953f5bf.png)

## Vantagens da REST Api 
A ideia da REST é que, independente da linguagem back-end utilizada no projeto, é  
possível manter o mesmo front-end. Nos exemplos até aqui, o Node foi utilizado e a  
resposta sempre era via `JSON`. Então, no caso da utilização de qualquer outro  
back-end (php, python, por exemplo), se ele respeitar esse modelo de sempre  
responder uma rota e sempre responder um `JSON`, independente do back-end, o  
front-end não precisa ser mudado. 
