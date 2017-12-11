# Diferenças entre console.log e return  

Em resumo, sempre em uma função, o `return` deve ser utilizado em casos onde a  
função deve retornar um valor, nunca o `console.log()`.  

Suponhamos que eu tenha uma função que irá verificar se o valor passado por  
argumento é um número (com o `'[object Number]'`).  

Lembrando que com o `call` estou "hackeando" o método `toString`, passando  
um outro valor como `this` dele:  

![image](https://user-images.githubusercontent.com/29297788/33812366-0c11fcce-de04-11e7-844c-0e3eaec3414f.png)

![image](https://user-images.githubusercontent.com/29297788/33812372-1999950a-de04-11e7-9e25-d8feb7e61213.png)

Só que, se eu atribuir a invocação dessa função a uma variável, passando um número  
como argumento, e der um `console.log()` nessa variável, será exibido que o retorno  
dela é `undefined`: 

![image](https://user-images.githubusercontent.com/29297788/33812454-a4b83024-de04-11e7-986c-755c63133487.png)

![image](https://user-images.githubusercontent.com/29297788/33812467-c9a8f418-de04-11e7-85fc-00d81f04c03f.png)

Aqui vem a grande sacada: funções devem sempre retornar valores, utilizando a palavra  
chave `return`. Como essa função tem o `console.log()` ao invés do `return`, ela não  
retorna nada, e devido a não retornar nada, seu valor é `undefined`. Ou seja, **todas  
as vezes em que a invocação de uma função sem `return` é atribuída a uma variável, por  
exemplo, o valor dela é `undefined`**.  

Suponhamos que, ao invés de dar um `console.log()` na variável que recebe a invocação  
da função, eu queira passar essa variável como argumento de um `alert`:  

![image](https://user-images.githubusercontent.com/29297788/33812537-548ea4a6-de05-11e7-9855-3720e78d6c28.png)

![image](https://user-images.githubusercontent.com/29297788/33812544-5dc1fd0c-de05-11e7-92c9-96f4541c56fa.png)

Ou seja, o `undefined` é devido ao fato de a função não estar retornando nada. Ao invés  
disso, ela só está mostrando a verificação no console.  

**Portanto, o `console.log()` serve apenas para debugar um código e não deve ser  
colocado em produção, pois o usuário não terá acesso a ele.**  

O `return` sempre deve ser usado, ao invés do `console.log()`. Para que eu visualize  
o valor que a função está retornando, aí sim posso usar o `console.log()` com a invocação  
da função passada por argumento:  

![image](https://user-images.githubusercontent.com/29297788/33812679-2957ca3c-de06-11e7-987c-454fcb9fe730.png)

![image](https://user-images.githubusercontent.com/29297788/33812709-72858bc2-de06-11e7-8151-870b90a3c9ce.png)
