# Sourcemaps  

## O que é o Sourcemaps  
O Sourcemaps é uma forma de enviar um código minificado para o usuário sendo que,  
ao mesmo tempo em que ele está minificado, é possível debugá-lo de uma forma em que  
aquele arquivo fique exatamente como foi escrito.  

Ele é uma feature dos browsers. É um mapa do arquivo fonte. Ele informa ao browser  
qual linha foi removida, quais são os nomes das variáveis que foram removidas na  
minificação, etc.  

**É importante ressaltar que 1 arquivo a mais será carregado no browser, porém, apenas  
para fins de debug**. Não é necessário colocar esse arquivo em produção. Ele pode ser  
colocado, por exemplo, no servidor de teste, para que esses bugs sejam consertados.  

## Uglifyjs - O uso do `--mangle` 
Ao minificar um código, foi visto que essa propriedade substitui os nomes das variáveis  
e funções.  

É importante destacar que **não faz sentido não utilizar o `--mangle` ao minificar um  
código**, a não ser em casos excepcionais onde o framework utilizado não aceita essa  
propriedade, por exemplo.  

## Adicionando o `--source-map caminhoDoArquivoMapASerGerado` ao minificar um arquivo 
![image](https://user-images.githubusercontent.com/29297788/33807164-8776e2bc-ddb9-11e7-89a1-02472feec0a3.png)

Esse parâmetro fará com que um novo arquivo seja gerado. Posso então exibir o conteúdo  
desse arquivo no console com o comando `cat nomeDoArquivoASerExibido` (`type`, no  
windows):  

![image](https://user-images.githubusercontent.com/29297788/33807181-d4a525e4-ddb9-11e7-8de0-4dad0c1c174b.png)

O arquivo gerado é, basicamente, um `.json` dizendo o que foi mapeado e modificado por  
ele. Com essas informações, o browser irá saber o que utilizar.  

Quando o arquivo minificado foi usado em produção (ele é o src do script do index.html),  
ele é mostrado no console:  

![image](https://user-images.githubusercontent.com/29297788/33807213-42cbc424-ddba-11e7-89cf-d8a8c949c32a.png)

Porém, ao utilizar o `source-map`, ao levantar o servidor e executar o `index.html` no  
browser, o arquivo chamado pelo browser é o `main.js`:  

![image](https://user-images.githubusercontent.com/29297788/33807230-90566082-ddba-11e7-8674-f3ab9da8bbb5.png)

Ou seja, ele agora exibe o nome  do arquivo real e, ao clicar no nome do arquivo para  
debugá-lo, o browser me mostra todo o código fonte:  

![image](https://user-images.githubusercontent.com/29297788/33807260-d7b2b174-ddba-11e7-9c0f-475ac308f275.png)

Ele mostra o nome do meu código minificado ao lado e, ao clicar nele, é exibida uma  
mensagem que o `source-map` foi detectado:  

![image](https://user-images.githubusercontent.com/29297788/33807265-0f90de86-ddbb-11e7-9b4d-171efd4546e3.png)

Isso significa que, o browser consegue carregar um outro arquivo desminificado em memória  
(main.js). Pode ser afirmado então que, o `source-map` faz um `beautify` do código,  
removendo tudo o que foi minificado. Assim, fica mais fácil debugar o código utilizando  
breakpoints, por exemplo.  

Resumindo, escrevo o código de forma organizada, utilizo o `uglifyjs` para minificá-lo,  
utilizo o `source-map` para que o browser leia esse arquivo sem minificá-lo. O `source-map`  
irá deixar o arquivo menor do que ele realmente é, criando um mapa para o arquivo principal  
e o browser irá conseguir voltar o arquivo como era quando foi escrito. Ou seja, **a ideia  
do `source-map` é facilitar o debug do código minificado**.  
