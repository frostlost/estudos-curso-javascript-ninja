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
