# TDD Style 

## Escrevendo um teste no formato TDD 
Abaixo dos testes BDD já criados, irei criar um novo teste com um novo `it()`.  

## O método `assert` 
O título desse teste será `'Assert'`. Irei, então, invocar o assert, e atribuí-lo  
à uma variável `assert`.  

## O método `assert.equal(value, result, message)`
O método `assert` é padrão do Node. O `assert` possui alguns métodos como o  
`assert.equal()`, que irá testar valores. O **primeiro parâmetro** passado será o  
valor (nesse caso, a função sum executada), o **segundo parâmetro** é o resultado  
esperado da asserção, ou seja, se a asserção for verdadeira, ela deve trazer esse  
segundo parâmetro. O **terceiro parâmetro** é a mensagem:  

![image](https://user-images.githubusercontent.com/29297788/33520516-a7f75740-d7a3-11e7-9107-7b6d908dd3a3.png)

Feito isso, ao executar o `mocha`, é exibido que o módulo passou no teste `assert`:  

![image](https://user-images.githubusercontent.com/29297788/33520544-0c67edc0-d7a4-11e7-9578-cc2e95718813.png)

Se `60` for utilizado como segundo parâmetro, isso irá quebrar o teste, pois 20 + 30  
serão somados e o resultado será 60, ao invés do esperado (50):  

![image](https://user-images.githubusercontent.com/29297788/33520551-3a9d15a8-d7a4-11e7-8542-23ea403dd931.png)

![image](https://user-images.githubusercontent.com/29297788/33520555-54ad8a2c-d7a4-11e7-8869-22e6e12eb457.png)

Neste caso, então, o erro está no teste, e não no módulo. A quebra foi feita  
intencionalmente, para propósitos didáticos. 

## O método `asset.strictEqual(value, result, message)`
Se o `50` for passado como string, o teste não irá quebrar:  

![image](https://user-images.githubusercontent.com/29297788/33520584-1894d3be-d7a5-11e7-994e-cb6332d89548.png)

![image](https://user-images.githubusercontent.com/29297788/33520587-1e0a1124-d7a5-11e7-8eae-2f4473ff8b8e.png)

Isso acontece por que ele testa a igualdade usando o `==`, ou seja, ele não testa o  
tipo.  

Se eu passar o método `assert.strictEqual(value, result, message)`, ele irá testar a  
igualdade com o `===`. Ou seja, testa o valor e o tipo do resultado. Isso irá quebrar  
o teste, pois estou especificando que 20 + 30 deveria resultar no **número** 50 mas  
estou testando o resultado da minha asserção como uma **string** 50:  

![image](https://user-images.githubusercontent.com/29297788/33520613-a51189cc-d7a5-11e7-97ff-bc0e75cec746.png)

![image](https://user-images.githubusercontent.com/29297788/33520626-f3ba8da8-d7a5-11e7-8c3e-c3665723f1ad.png)

Posso, então, remover este último teste usado como amostra de como funciona o formato  
TDD.  

## Sobre testes em BDD 
O BDD é, basicamente, uma evolução do TDD. É um formato que facilita a leitura do  
código.  

## Documentações - Assert e Chai
- [Documentação do `assert`](https://nodejs.org/dist/latest-v9.x/docs/api/assert.html)
- [Documentação do `chai`](http://chaijs.com/)
