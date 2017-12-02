# Escrevendo mais testes 

## Escrevendo um teste especificando que os dois parâmetros passados para uma função sejam números, de fato (cont.) 
Com o mínimo de implementação possível, irei fazer o módulo passar no teste (escopo green).  

Como as duas entradas devem ser exatamente iguais a números, irei declarar que, se o tipo do  
parâmetro num1 ou num2 for diferente de number, um erro deve ser retornado, dizendo que os  
parâmetros devem ser números. Agora, ao executar o mocha, é mostrado que o módulo passou no  
teste:  

![image](https://user-images.githubusercontent.com/29297788/33516938-09464d5e-d762-11e7-9a23-f00dde33367c.png)

![image](https://user-images.githubusercontent.com/29297788/33516943-123d9f70-d762-11e7-887c-aa98a43afb5f.png)

## Refatorando 
O módulo atual está passando em 5 testes. Para a refatoração, é possível criar algumas  
outras funções.  

Agora é o momento de escrever o código limpo, de forma legível, mas sem escrever novas  
implementações. As implementações devem continuar as mesmas, os testes que passam, devem  
continuar passando. Nenhum teste deve quebrar após o refactory.  

## Refatorando o `if` da função que irá validar se dois argumentos estão sendo passados ao invocar `sum` 
Posso então criar uma função `isEmpty`, que irá retornar se o argumento estiver em branco.  

Ou seja, `isEmpty(arg)` será usada para verificar se num1 ou num2 estiver em branco.  

Ao executar o mocha, é mostrado que todos os testes continuam passando:  

![image](https://user-images.githubusercontent.com/29297788/33516990-dfafc406-d762-11e7-96aa-e1caf721a19e.png)

![image](https://user-images.githubusercontent.com/29297788/33517000-108cf9fe-d763-11e7-8ae3-e23923d0423c.png)

![image](https://user-images.githubusercontent.com/29297788/33517009-3c4e7522-d763-11e7-80b9-8673cc4353c2.png)

## `Object.prototype.toString.call(num)` - Refatorando o `if` da função que irá validar se o tipo do argumento num1 ou num2 é um número  
Para isso, posso criar uma função `isNumber(arg)`, que irá retornar se o argumento  
passado é um número.  

Dentro dela, irei utilizar o método de Object `toString`, que irá testar pelo retorno  
do objeto e verificar a string retornada. Ele irá trazer exatamente o tipo do objeto.  

Esse método será utilizado devido ao `typeOf` não ser seguro. Se eu criar um número utilizando  
o `new Number(num)`. Quando o `new Number(num)` é utilizado, ele irá pegar o parâmetro  
passado e transformá-lo em um objeto do tipo número. Se isso é testado com o `typeOf`,  

![image](https://user-images.githubusercontent.com/29297788/33517079-be85c800-d764-11e7-8111-b628bf8f0ed1.png)

