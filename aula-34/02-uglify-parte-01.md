# Uglify.js - parte 1 

## Instalando o [UglifyJs](https://www.npmjs.com/package/uglifyjs) 
Como visualizado na documentação do pacote, no npm, posso executar o comando  
`npm install uglify-js -g`:  

![image](https://user-images.githubusercontent.com/29297788/33563982-89ee7450-d900-11e7-83cd-8ba3ecae6760.png)

Após concluir a instalação, o comando `uglifyjs` está disponível para mim.  
Em alguns momentos, talvez seja necessário reiniciar o console, com o  
`ctrl + c`.  

## Estrutura de arquivos e pastas usadas para o exemplo 
Além do `.editorconfig`, irei criar um arquivo `main.js`.  

## Criando o script do exemplo  
Vou criar uma `IIFE`, e dentro dela, uma função `init` que irá exibir uma  
mensagem no console ao ser invocada:  

![image](https://user-images.githubusercontent.com/29297788/33564322-66822b46-d901-11e7-99c7-2cd477a29420.png)

## Criando o html do exemplo  
Irei criar também um `index.html` e adicionar o script `main.js`, para  
visualizá-lo no browser.  

![image](https://user-images.githubusercontent.com/29297788/33564445-a5da37b6-d901-11e7-9cac-17a9eaf4ad61.png)

![image](https://user-images.githubusercontent.com/29297788/33564544-e51cd7b2-d901-11e7-9d5a-c1395906c3de.png)

## Enfeiando um código  
Vou parar a execução do servidor e digitar o comando `uglifyjs nomeArquivo.js`.  

Essa é a forma mais simples de minificar um código js:  

![image](https://user-images.githubusercontent.com/29297788/33564631-209c443a-d902-11e7-9ebf-acdc92a912b3.png)

Ou seja, ele simplesmente removeu os espaços em branco do código e o diminuiu ao máximo.  

**Esse comando simplesmente mostra o código minificado no terminal e não cria  
nenhum arquivo novo**.  

## Criando um arquivo minificado com o uglifyjs 
Para isso, posso usar o comando `uglifyjs --output caminhoEnomeDoArquivoASerCriado.js -- nomeArquivoASerMinificado.js`.  
Sempre ao passar parâmetros para o uglifyjs, é necessário especificar dois traços  
antes do nome do arquivo a ser minificado (arquivo principal).  

Ao executar o comando, posso listar os arquivos na pasta raiz e, ao verificar o   
conteúdo do novo arquivo criado, é exibido que o arquivo possui o conteúdo minificado:

![image](https://user-images.githubusercontent.com/29297788/33564989-089ea57a-d903-11e7-9fe6-593c0d859911.png)

![image](https://user-images.githubusercontent.com/29297788/33565054-342dfd3a-d903-11e7-8622-79aa54641bbd.png)

Ao substituir o script importado no `index.html` pelo script minificado e subir o  
servidor, ele irá exibir o `hey` no console. Ao verificar quais arquivos estão sendo  
baixados, através da aba `sources`,  posso visualizar o arquivo minificado:  

![image](https://user-images.githubusercontent.com/29297788/33565234-b64e76be-d903-11e7-9166-8fccb2dc6bd6.png)

![image](https://user-images.githubusercontent.com/29297788/33565324-f09bb00c-d903-11e7-8a8f-af39ab0b2659.png)

## Comprimindo ainda mais um arquivo `.js`  
Com o comando `ls - lha`, posso verificar o tamanho dos arquivos, em bytes:  

![image](https://user-images.githubusercontent.com/29297788/33565408-27f54d4c-d904-11e7-910f-d3d916efaf67.png)

Ou seja, o arquivo principal pesa 99 bytes e o minificado, 71.  

Para diminuir ainda mais, posso usar o comando  
`uglifyjs --output caminhoEnomeDoArquivoASerCriado.js --compress -- nomeArquivoASerMinificado.js`.  
Isso irá comprimir ainda mais o arquivo:  

![image](https://user-images.githubusercontent.com/29297788/33565555-8f7c3dae-d904-11e7-8a07-94c9912de986.png)

![image](https://user-images.githubusercontent.com/29297788/33565573-a27c04c0-d904-11e7-9dd0-81ab05b1d9c4.png)

Ele diminuiu o arquivo para 70 bytes.  

## Como uma `IIFE` afeta a compressão dos arquivos  
A `IIFE` precisa dos parênteses por que não é possível executar uma função literal  
diretamente.  

![image](https://user-images.githubusercontent.com/29297788/33565683-f696f3ee-d904-11e7-8c3f-b54b29b8f65c.png)

Ou seja, é necessário transformar essa função em uma expressão. Isso pode ser feito  
ao atribuí-la a uma variável ou colocá-la entre parênteses para que ela ganhe prioridade  
na execução do JS. O parênteses fará com que o JS avalie essa função dentro do  
parênteses e dizer "dentro desse parênteses há uma função", e, por isso, posso usar os  
dois parênteses de fora para invocá-la:  

![image](https://user-images.githubusercontent.com/29297788/33565869-759110e4-d905-11e7-8a17-e97869c639da.png)

Porém, ao usar o `compress` na minificação, os parênteses que envolvem a função são  
removidos e substituídos por uma exclamação no início da função:  

![image](https://user-images.githubusercontent.com/29297788/33565948-b5455862-d905-11e7-80d7-37932a76fbb0.png)

Essa exclamação faz exatamente a mesma coisa que os parênteses.  

Em outros casos, a compressão pode reduzir um arquivo de 100k em até 20k.  
