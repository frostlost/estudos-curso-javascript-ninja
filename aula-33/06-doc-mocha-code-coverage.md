# Documentação do Mocha e Code Coverage

## Documentações - Mocha 
- [Documentação do mocha](https://mochajs.org/)

O mocha é a interface usada para escrever testes até aqui.  

## [`hooks`](https://mochajs.org/#hooks) - Mocha 
O **hook before**, roda antes de todos os testes. Ou seja, tudo o que for  
especificado dentro da função de callback dele, será rodado antes dos `it()`.  

![image](https://user-images.githubusercontent.com/29297788/33521099-62b6eb6c-d7af-11e7-81a7-353e814ad303.png)

![image](https://user-images.githubusercontent.com/29297788/33521127-3c423d78-d7b0-11e7-94b7-3381e35acea8.png)

![image](https://user-images.githubusercontent.com/29297788/33521129-52fcfd6e-d7b0-11e7-9b29-82c4369fca14.png)

O **hook after**, roda depois de todos os testes. Ou seja, tudo o que for  
especificado dentro da função de callback dele, será rodado depois dos `it()`.  

O **hook beforeEach**, roda antes de cada teste. Ou seja, tudo o que for  
especificado dentro da função de callback dele, será rodado antes de cada `it()`.  

O **hook afterEach**, roda depois de cada teste. Ou seja, tudo o que for  
especificado dentro da função de callback dele, será rodado depois de cada `it()`.  
Pode ser útil em casos onde é necessário limpar uma variável após cada teste,  
por exemplo. 

![image](https://user-images.githubusercontent.com/29297788/33521136-8aea7260-d7b0-11e7-919c-7f1e1fa73f23.png)

![image](https://user-images.githubusercontent.com/29297788/33521137-901460ac-d7b0-11e7-92ad-cfcc018151c8.png)

Então, posso utilizar essas funções em casos onde seja necessário fazer algo antes  
de executar cada teste, ou depois, ou antes ou depois de executar todos os testes. 
