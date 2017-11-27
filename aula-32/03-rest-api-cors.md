# REST Api - Cors

## Instalando o módulo Cors 
Na pasta rest api, irei especificar o comando `npm install --save cors`:  

![image](https://user-images.githubusercontent.com/29297788/33246385-fb544a04-d2fa-11e7-968a-c62b92a9e006.png)

## O que é o módulo `cors` 
É um módulo que irá permitir que uma requisição seja feita para o servidor,  
sem bloqueios.  

## `require('cors')` - Importando o módulo `cors` 
No `index.js` do servidor back-end, irei dar um `require('cors')` e atribuí-lo  
à uma variável `cors`. 

## `app.use(cors())` - Liberando o acesso à REST Api 
Antes de usar o método `get`, irei especificar para que  
o app use o cors: `app.use(cors())`.  

Isso irá dizer que todo request feito para a aplicação está liberado. Qualquer  
outra origem pode fazer request nessa app.  

Problemas de cors são problemas de cross-origin, ou seja, uma origem diferente  
está fazendo um request no meu servidor. Obviamente, por questões de segurança  
esses requests (via ajax, por exemplo) de qualquer origem são bloqueados.  

![image](https://user-images.githubusercontent.com/29297788/33246519-6d940b76-d2fc-11e7-8ae2-82843403a924.png)

Feito isso, posso subir o servidor novamente com o `nodemon index.js` e, ver que  
o `localhost:9001` já está acessando a url `localhost:3000` e mostrando a resposta  
do REST Api:  

![image](https://user-images.githubusercontent.com/29297788/33246546-d24dac3e-d2fc-11e7-973a-7e33b628ffe2.png)

## Pegando um usuário específico com o `GET` do ajax  
Como o `GET` passa informações pela url, é possível, por exemplo, pegar um usuário  
específico.  

Irei criar uma nova rota com o nome do usuário após o `/user`. Assim, se eu acessar  
essa rota no back-end, ele me traz a resposta para aquele usuário:  

![image](https://user-images.githubusercontent.com/29297788/33246600-9fa2c1f6-d2fd-11e7-8cb7-ffbf3e7720f4.png)

![image](https://user-images.githubusercontent.com/29297788/33246605-b519f144-d2fd-11e7-8579-3bfbfa318804.png)

Se o mesmo for feito na url do front-end, a resposta será mostrada no console:  

![image](https://user-images.githubusercontent.com/29297788/33246633-ef2798aa-d2fd-11e7-851b-a124ae16bfd5.png)

![image](https://user-images.githubusercontent.com/29297788/33246644-10601b50-d2fe-11e7-88d0-fa9a749d9ef4.png)

Ou seja, a resposta mostrada no corpo do documento back-end é a resposta mostrada no  
console do front-end.  

## Passando um usuário inexistente com o `GET` do ajax  
Se for passado, por exemplo, um usuário maria, via ajax, será mostrado no console que  
o usuário não foi encontrado:  

![image](https://user-images.githubusercontent.com/29297788/33246675-6e28f77a-d2fe-11e7-8a3a-5306c4210f95.png)

![image](https://user-images.githubusercontent.com/29297788/33246677-771056d0-d2fe-11e7-8370-68aaf8cdbe32.png)

Ou seja, no back-end, seria necessário ficar criando uma rota para cada usuário, para que  
a aplicação funcione de forma correta:  

![image](https://user-images.githubusercontent.com/29297788/33246691-b96c0d26-d2fe-11e7-92db-7b6454d458c4.png)

## Deixando as rotas de usuário dinâmicas no back-end  
No back-end, é possível colocar dois pontos seguido do nome de uma variável (`username`):  

![image](https://user-images.githubusercontent.com/29297788/33246709-f865a582-d2fe-11e7-89b5-2307a9c3e326.png)

Quando o método get é utilizado, o request possui o objeto `params` e, nesse objeto  
`params`, posso passar o parâmetro `username`, que será entendido como a variável  
`:username`:  

![image](https://user-images.githubusercontent.com/29297788/33246725-5b6ad3dc-d2ff-11e7-9b93-42de36266235.png)

O `req.params` são parâmetros quem vem através da url. Então, por exemplo, se eu acessar  
`localhost:3000/user/maria`, ele irá trazer o `:username`, que é `'maria'`:  

![image](https://user-images.githubusercontent.com/29297788/33246761-cf35614c-d2ff-11e7-977b-d72ad660df26.png)

![image](https://user-images.githubusercontent.com/29297788/33246768-de751f62-d2ff-11e7-8edc-a0d10a5be642.png)

Se o `username` for `jose`, ele irá trazer `jose`:  

![image](https://user-images.githubusercontent.com/29297788/33246782-043ce220-d300-11e7-86af-21e3df42c994.png)

![image](https://user-images.githubusercontent.com/29297788/33246793-14ceba96-d300-11e7-9d7b-1b6a7c901aa3.png)

## Passando informações específicas de um usuário na REST Api 
Posso criar um objeto `users`, onde cada propriedade será uma pessoa e o valor  
de cada propriedade será um objeto com as propriedades nome e idade:  

![image](https://user-images.githubusercontent.com/29297788/33246854-cf12142a-d300-11e7-9862-85c6e8e73a34.png)

Agora, quando eu acessar a url `/user` 
