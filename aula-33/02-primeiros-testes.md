# Escrevendo os primeiros testes

## Sobre a estrutura de diretórios 
A estrutura de diretórios criada não é obrigatória. Como o `mocha` será utilizado para  
rodar os testes, é necessário que os testes estejam dentro de um diretório `test`. Isso  
também não é obrigatório, mas sim uma boa prática.  

## `it(desc)` - Escrevendo a descrição de um teste 
Descrições, geralmente, são escritas em inglês. Nesta descrição, será escrito que o  
módulo `sum` deve ser uma função:  

![image](https://user-images.githubusercontent.com/29297788/33466895-0bbba1fe-d638-11e7-8283-bebd1f51548f.png)

## Importando um módulo para o teste  
Para importar um módulo, posso declarar uma variável com o nome do módulo e atribuir  
um `require()`, especificando o caminho do módulo por parâmetro. Isso fará com que  
essa nova variável tenha que exportar uma função para mim:  

![image](https://user-images.githubusercontent.com/29297788/33466971-990b158a-d638-11e7-8fcc-c1d6eff5f44b.png)

## `it(desc, callback)` - Escrevendo a função de callback de um teste 
Como segundo parâmetro do método `it`, a função de callback que será executada deve ser  
especificada:  

![image](https://user-images.githubusercontent.com/29297788/33467009-c381ffd6-d638-11e7-972f-6a098181d3a3.png)

## Instalando o `chai`
É um módulo para realizar testes. Ele será usado para fazer as asserções, ou seja, garantir  
que o que está sendo escrito no teste é verdadeiro.  

Para instalá-lo, é necessário criar um `package.json` com um objeto vazio dentro.  
Após isso, posso especificar o comando `npm install --save-dev chai`:  

![image](https://user-images.githubusercontent.com/29297788/33467142-803125e4-d639-11e7-8213-c34a6b953632.png)

## O comando `--save-dev` 
Esse comando irá salvar o módulo no `package.json` como "devDependencie". Isso fará com  
que o módulo seja usado apenas durante o desenvolvimento, pois testes não são usados em  
produção:  

![image](https://user-images.githubusercontent.com/29297788/33467224-1585e0d0-d63a-11e7-82dd-903ddb034f19.png)

## Importando o `chai` para o teste 
O `chai` será atribuído à variável `expect`:  

![image](https://user-images.githubusercontent.com/29297788/33467257-5c9cce7a-d63a-11e7-900b-7e7be7f85f22.png)

## BDD - Behaviour Driven Development 
É um modo de desenvolvimento guiado por comportamento. Ele é basicamente o TDD  
escrito de uma forma mais legível. 

## `expect()` - Escrevendo a asserção que irá garantir que o teste funcione  
Lembrando que o `it()` é a função que irá executar o teste. Dentro dele, a asserção será  
escrita.  

Para isso, o `expect()` será declarado (lembrando que o expect exporta uma função para  
mim). Vou declarar então que o esperado é que o `sum` (módulo atribuído à variável sum)  
seja uma função:  

![image](https://user-images.githubusercontent.com/29297788/33488303-6113d3c4-d697-11e7-8c07-d3d7c10b6dc5.png)

## Executando um teste falho com o mocha 
Após declarar o `expect()`, irei executar o mocha. Como tenho a pasta `test` no projeto,  
ele automaticamente irá executar o teste que está dentro deste diretório. Como esse módulo  
foi atribuído à variável `sum`, o esperado é que `expect(sum).to.be.a('function');`  
seja verdadeiro:  

![image](https://user-images.githubusercontent.com/29297788/33488476-da8dcc14-d697-11e7-9ebd-8ab401f046e1.png)

Como o módulo ainda não foi escrito, o teste falhou. Nenhum teste passou e um teste falhou,  
e o teste que falhou foi o teste 1, que contém um erro de asserção, ou seja, é esperado que  
o objeto seja uma função. 

## O conceito baby steps / a base dos testes
Este conceito consiste em fazer com que um teste passe com o mínimo de código possível.  

A base dos testes é, escrever um teste que falhe, para uma funcionalidade que eu preciso.  
Preciso que o `sum` seja uma função, então, irei escrever um teste esperando que o `sum`  
retorne uma função, ou seja, o teste é escrito antes do módulo. Após isso, irei escrever  
o mínimo de código possível para que o `sum` me retorne uma função.  

## `module.exports = moduleName` - Exportando um módulo no Node 
Lembrando de sempre utilizar o `'use strict;'` no início dos arquivos:  

![image](https://user-images.githubusercontent.com/29297788/33488968-9ddaa7b8-d699-11e7-8463-c89341d3232e.png)

Ou seja, por enquanto, a função não está fazendo nada. 

## Executando um teste correto com o mocha 
Após isso, ao executar o mocha novamente, é exibido que o teste passou. Ou seja, escrevi  
um teste esperando que o `sum` retornasse uma função. Inicialmente o teste falhou por  
que o módulo ainda não havia sido escrito. 

![image](https://user-images.githubusercontent.com/29297788/33489131-2eea6130-d69a-11e7-999f-6ff1b73f56f9.png)

## RED, GREEN, BLUE - As três etapas de um teste 
