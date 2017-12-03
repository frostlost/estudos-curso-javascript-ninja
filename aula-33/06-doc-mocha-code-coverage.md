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

## Code Coverage 
É a verificação do quanto um código está coberto por testes.  

É interessante saber isso, por exemplo, ao ter um módulo em que não se sabe quanto  
dele está coberto por testes.  

No exemplo do módulo de soma, que é um módulo pequeno, foi testado se o módulo é  
uma função, se ele retorna 10 ao serem passados 1 e 9 como argumentos, se ele retorna  
5 ao serem passados 2 e 3 como argumentos, se ele retorna um erro ao ser passado  
apenas um argumento, se ele retorna um erro caso um argumento que não seja número  
seja passado.  

![image](https://user-images.githubusercontent.com/29297788/33521160-7ee04048-d7b1-11e7-9259-27e7fbc769a6.png)

## Istanbul
Então, embora tudo isso esteja sendo testado, como saber o quanto desse código está  
coberto por testes? 

O módulo `istanbul` irá fazer esse teste de cobertura.  

Para instalá-lo globalmente, posso especificar o comando `npm install -g istanbul`.  

## Problemas com o `_mocha` no windows 
Como irei utilizar o mocha, é necessário utilizar o `_mocha` que vem junto com o módulo  
do mocha. No windows, pode haver problemas caso o `mocha` não estiver instalado  
localmente. Para instalar o mocha localmente, basta entrar o comando  
`npm install --save-dev mocha`.  

![image](https://user-images.githubusercontent.com/29297788/33526532-272c8a68-d82a-11e7-82c2-b846c003051b.png)

Isso fará com que o `mocha` seja instalado localmente na minha aplicação, para que  
os testes sejam executados somente para o ambiente de desenvolvimento.   

## Executando um test coverage com o `istanbul`
Após isso, posso especificar o comando `istanbul cover caminho/do/_mocha`, passando o  
caminho do `_mocha` (`node_modules/mocha/bin/_mocha`). Isso irá trazer os testes. Esse  
comando do `_mocha` é como se ele estivesse sendo executado normalmente:  

![image](https://user-images.githubusercontent.com/29297788/33526618-189ec96a-d82b-11e7-8834-d1902a49c091.png)

Se o nome do diretório de testes não for `test` e não estiver na raiz, é necessário  
especificar o diretório de teste e o nome dos arquivos a serem testados  
(`node_modules/mocha/bin_mocha test/**/*.js`).  

![image](https://user-images.githubusercontent.com/29297788/33526647-67f3b804-d82b-11e7-8af5-abf63e46c859.png)

Ao executar o `istanbul`, ele irá executar os testes, exibir que escreveu um  
coverage do teste em um caminho, um report em outro caminho, e irá mostrar o  
resumo da cobertura do código:  

![image](https://user-images.githubusercontent.com/29297788/33526668-ae923bd2-d82b-11e7-9e4b-f5bfe6ee3084.png)

Ou seja, tenho 100% de cobertura para meus statements (minhas instruções), 100%  
de cobertura para as `branches` (instruções que não entram em statements, como if,  
while, for, loops, switch, etc), tenho 100% de cobertura para todas as funções  
declaradas e tenho 100% de cobertura para as linhas declaradas.  

## Visualizando o code coverage no browser 

Ao executar o `istanbul`, ele criou o diretório `coverage`, dentro do projeto:  

![image](https://user-images.githubusercontent.com/29297788/33526720-5fa6f0c0-d82c-11e7-8d01-17d5802cd853.png)

Ao acessar esse diretório, posso ver que dentro dele há um diretório `'lcov-report'`:  

![image](https://user-images.githubusercontent.com/29297788/33526741-a140da5a-d82c-11e7-8b9d-f59e4303f536.png)

Ao acessar o diretório `'lcov-report'` posso verificar que um `index.html` e outros documentos  
foram gerados:  

![image](https://user-images.githubusercontent.com/29297788/33526750-b9ebb37c-d82c-11e7-94d0-d4a39336b1ce.png)

Isso é uma interface `html` que ele criou para que o code coverage seja visualizado no browser.  
Para isso, basta subir um servidor e acessar a porta:  

![image](https://user-images.githubusercontent.com/29297788/33526778-12132d0a-d82d-11e7-9e0b-ff4b249d7102.png)

Com isso, ao acessar o arquivo `sum.js`, será mostrado o código coberto por testes:  

![image](https://user-images.githubusercontent.com/29297788/33526788-391bb1ba-d82d-11e7-9fec-d3a2af3fac4a.png)

É exibido também quantas vezes, os meus testes estão passando pelo código (1x pela  
`function sum(num1, num2)`, etc.  

Em casos de módulos que não estejam 100% cobertos, ele mostra, por exemplo, `if`'s que  
não estão sendo cobertos por teste, ou seja, ele não está entrando no `if`:  

![image](https://user-images.githubusercontent.com/29297788/33526845-e81acc78-d82d-11e7-8e4b-24ac7ab0b414.png)

## Observações sobre o test coverage 
O test coverage não irá garantir que o meu código esteja funcionando 100%, mas pode  
dar um bom caminho para isso.  

Ele não garante 100% pois, posso ter escrito um teste que não testa realmente o  
meu código. Eu poderia simplesmente testar, por exemplo, `expect true to be equal true`,  
ou seja, isso não irá testar nada no meu código, não irá dizer nada.  

Os testes precisam ser limpos e pequenos, testando uma parte específica do código.  

A ideia por trás dos testes é automatizar aquilo que seria feito manualmente e, de  
quebra, ainda ganhar uma pequena documentação dizendo o que aquele código faz.  

## Sobre testes unitários / testes de unidade  
Todos os testes feitos até aqui são testes de unidade. Eles testam uma única parte  
do meu código por vez. Cada teste irá testar uma parte do meu código.  

## O plugin [`Lcov info`](https://atom.io/packages/lcov-info) - Atom 
Após instalar o plugin, executar o comando `shift + ctrl + p`, e escolher  
`Lcov Info: Toogle`, ele irá exibir o quanto do projeto está coberto por testes.  

Ele também mostra a cobertura de teste no próprio arquivo:  

![image](https://user-images.githubusercontent.com/29297788/33526995-4bd473d4-d830-11e7-898a-8e4fdfb3cadf.png)

![image](https://user-images.githubusercontent.com/29297788/33527003-63d268f6-d830-11e7-9691-cf7502d808ca.png)

![image](https://user-images.githubusercontent.com/29297788/33527010-779640e2-d830-11e7-85f3-74cd03182cc5.png)

Se eu comentar algum teste, por exemplo, e executar o `istanbul` novamente, ele irá  
gerar a pasta `coverage` novamente e irá atualizar o arquivo com o código testado.  
No caso, apenas a linha marcada de vermelho não está coberta por testes:  

![image](https://user-images.githubusercontent.com/29297788/33527038-c5d63460-d830-11e7-964d-a2157deb4627.png)

> É necessário rodar o coverage por que ele pega informações da pasta `coverage` para  
então mostrar o code coverage direto no arquivo do código.  

Para excluir a visualização do code coverage no próprio arquivo, basta executar o comando  
`shift + ctrl + p` e escolher `Lcov Info: Toogle` novamente.  
