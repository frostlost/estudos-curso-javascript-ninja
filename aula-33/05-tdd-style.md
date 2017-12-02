# TDD Style 

## Escrevendo um teste no formato TDD 
Abaixo dos testes BDD já criados, irei criar um novo teste com um novo `it()`.  

## O método `assert` 
O título desse teste será `''Assert`. Irei, então, invocar o assert, e atribuí-lo  
à uma variável `assert`.  

## O método `assert.equal(value, f
O método `assert` é padrão do Node. O `assert` possui alguns métodos como o  
`assert.equal()`, que irá testar valores. O **primeiro parâmetro** passado será o  
valor (nesse caso, a função sum executada), o **segundo parâmetro** é o resultado  
esperado da asserção, ou seja, se a asserção for verdadeira, ela deve trazer esse  
segundo parâmetro. O **terceiro parâmetro** é a mensagem:  

![image](https://user-images.githubusercontent.com/29297788/33520516-a7f75740-d7a3-11e7-9107-7b6d908dd3a3.png)

Feito isso, ao executar o `mocha`, é exibido que o módulo passou no teste
