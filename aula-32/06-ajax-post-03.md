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

## Evitando o recadastro de usuários repetidos  
Com o código atual, ao atualizar a página, o usuário está sendo cadastrado várias  
vezes, pois o servidor está de pé e, ele irá manter esse valor em memória:  

![image](https://user-images.githubusercontent.com/29297788/33325133-9cada68c-d438-11e7-96af-898ab25816bb.png)
