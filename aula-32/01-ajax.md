# Ajax

## AJAX - Aprendendo como tudo isso funciona no servidor 

## Listagem inicial dos diretórios e arquivos 

![initial_folders](https://user-images.githubusercontent.com/29297788/33237133-d344a2ba-d251-11e7-820c-61fc4f36effa.png)

A pasta `front` irá conter a aplicação front-end e a `rest-api`, a aplicação back-end.  
Elas ficarão separadas e irão ser subidas em portas separadas, como se a aplicação  
estivesse sendo utilizada, de fato, em 2 servidores diferentes.  

## `package.json`  
Como o node precisa desse arquivo para guardar informações dos pacotes dele, vou criá-lo  
na pasta `rest-api`:  

![initial_folders](https://user-images.githubusercontent.com/29297788/33237158-b50602fc-d252-11e7-9f29-dfc3c7d2915c.png)

## O que é uma rest-api  
É uma API, uma aplicação de servidor, onde ele responde através de url's, através de rotas  
e através de tipos de requisições `HTTP`. 

Dependendo da url utilizada a resposta é uma, e, dependendo do tipo de requisição `HTTP`,  
a resposta é outra. Ou seja, uma requisição `HTTP` `GET` e a url traz uma resposta e, uma  
requisição `HTTP` `POST` com a mesma url traz outra.  

Ao fazer [uma requisição get de um cep](https://github.com/Roger-Melo/estudos-curso-javascript-ninja/blob/master/aula-29/01-revisao-desafio-28-01.md), por exemplo, onde era acessada uma url com  
`/[CEP]/json/`, a requisição era feita pedindo o número do cep, o servidor pegava  
aquela informação (nº do cep) e retornava o endereço completo daquele cep. Esse é um  
exemplo de como funciona uma API rest.  

## Utilizando o Node para testar códigos 
Se apenas o comando `node` for utilizado, é possível executar alguns comandos em Js, e  
ele trará o retorno desses comandos:  

![image](https://user-images.githubusercontent.com/29297788/33237236-25208ed4-d255-11e7-9e90-70911c3b6559.png)

## Subindo o servidor com o Node
Com o Node instalado, posso usar o comando `node nomeDoArquivo.js` para que o servidor  
execute o código desse arquivo:  

![image](https://user-images.githubusercontent.com/29297788/33237217-71fb8df4-d254-11e7-9247-f4532ce8bdfd.png)

![image](https://user-images.githubusercontent.com/29297788/33237219-80a11e3c-d254-11e7-87ba-9b26f0a80c54.png)

