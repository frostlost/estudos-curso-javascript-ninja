# Uglify.js - parte 1 

## Instalando o [UglifyJs](https://www.npmjs.com/package/uglifyjs) 
Ao entrar na página do pacote, no npm, posso executar o comando  
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
Para isso, posso usar o comando `uglifyjs --output caminhoEnomeDoArquivo.js -- nomeArquivoASerMinificado.js`.  
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
