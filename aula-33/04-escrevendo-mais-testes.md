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

## `Object.prototype.toString.call(arg) === '[object Number]'` - Refatorando o `if` da função que irá validar se o tipo do argumento num1 ou num2 é um número  
Para isso, posso criar uma função `isNumber(arg)`, que irá retornar se o argumento  
passado é um número.  

Dentro dela, irei utilizar o método de Object `toString`, que irá testar pelo retorno  
do objeto e verificar a string retornada. Ele irá trazer exatamente o tipo do objeto.  

Esse método será utilizado devido ao `typeof` não ser seguro. Se eu criar um número utilizando  
o `new Number(num)`. Quando o `new Number(num)` é utilizado, ele irá pegar o parâmetro  
passado e transformá-lo em um objeto do tipo número. Se isso é testado com o `typeof`,  
os testes serão quebrados, pois, na verdade, esse argumento `num` já não é mais um  
número puro, e sim um objeto, e o `typeof` não consegue diferenciar o `'number'` de  
um objeto. Ele irá dizer que o número é um objeto, ao invés de número.  

![image](https://user-images.githubusercontent.com/29297788/33517079-be85c800-d764-11e7-8111-b628bf8f0ed1.png)

![image](https://user-images.githubusercontent.com/29297788/33517116-38e16d16-d765-11e7-9c0f-11511af65141.png)

Por isso, ao invés de utilizar o `typeof`, a função `isNumber(arg)` será criada.  
Ela irá retornar se o argumento é um número independente se ele for um número puro  
ou um número criado a partir do objeto Number.  

Ao executar o mocha, é exibido que os testes continuam passando:  

![image](https://user-images.githubusercontent.com/29297788/33517160-38baa932-d766-11e7-8ba2-569f81a30666.png)

![image](https://user-images.githubusercontent.com/29297788/33517164-4850dcc2-d766-11e7-9810-482853b13701.png)

Se `new Number(num1)` for utilizado no número 1, por exemplo, os testes não quebram,  
pois ele sabe que, ainda que `new Number(num1)` foi utilizado e transformou o número  
em objeto, ele poderá ser utilizado como um número.  

![image](https://user-images.githubusercontent.com/29297788/33517174-784660fa-d766-11e7-8d5a-974d84790801.png)

![image](https://user-images.githubusercontent.com/29297788/33517181-910a6762-d766-11e7-8ee7-27729357c732.png)

## A função `isNaN(num)` 
Ela irá verificar se o número é um `'Not a number'`. Ela também pode ser utilizada  
ao invés da função criada acima: 

![image](https://user-images.githubusercontent.com/29297788/33517211-f9e179a6-d766-11e7-935a-1d60a0c89f54.png)

![image](https://user-images.githubusercontent.com/29297788/33517222-433b3b28-d767-11e7-982b-c5dc34a0f847.png)

Só que ela só retornará `false` se o argumento `NaN` for passado. Então, ele será  
`'Not a number'`, mas irá quebrar os testes:  

![image](https://user-images.githubusercontent.com/29297788/33517227-568faa4c-d767-11e7-89e4-7261c70fcc7c.png)

![image](https://user-images.githubusercontent.com/29297788/33517236-7a20899a-d767-11e7-8141-b201d12594b7.png)

Por isso, é interessante utilizar a função `!isNumber(num)` ao invés do `isNaN(num)`.  
Com isso, a implementação do módulo de soma está feita.  

## Estabelecendo a quantidade de testes a serem escritos  
Isso pode variar. No exemplo acima, era necessário um módulo que fizesse a soma de  
dois números, e que retornassem erro se esses caras não fossem números, ou se  
estivessem em branco. E o código foi refatorado também, para que estivesse escrito  
de uma maneira mais legível.  

Se eu quisesse escrever mais uma validação no módulo, por exemplo, seria necessário  
escrever mais testes para testar essa validação. Se esse módulo pudesse somar apenas  
números entre 1 e 10, por exemplo, os testes feitos até aqui não irão quebrar. Se for  
necessário remover algum teste que não irá funcionar devido ao módulo ter sido  
modificado, então eu removo o teste, pois os asserts do teste devem refletir exatamente  
o que o módulo faz.  

## Por que testar 
Ao testar, estou garantindo que tudo irá funcionar. Outro fator importante é que,  
depois um tempo após o módulo ser escrito, o modo como ele funciona é esquecido (em  
casos de módulos grandes). Para lembrar o que o módulo está fazendo, ou para criar  
uma nova implementação, sabendo o que o módulo já tem ou não, é necessário fazer  
testes manuais para ir lembrando o que o módulo faz. Ou seja, os testes também  
servem como uma documentação:  

![image](https://user-images.githubusercontent.com/29297788/33517321-75232b9e-d769-11e7-828a-b4d7b847cf82.png)

A ideia de usar o TDD / BDD é, escrever o mínimo de código possível ao invés de  
escrever muito código para depois testar. Primeiro eu testo o que preciso, depois  
começo a implementar. 
