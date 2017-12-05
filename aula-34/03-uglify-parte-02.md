# Uglify.js - parte 2 

Atualmente, `main.min.js` está minificado dessa forma:  

![image](https://user-images.githubusercontent.com/29297788/33606368-6386bb70-d9a4-11e7-932f-64fb178f454c.png)

## Executando o Atom através do terminal  
Com o comando `atom nomeOuNomeECaminhoDoArquivo`, ele irá abrir o atom já com o arquivo ou projeto  
especificado aberto:  

![image](https://user-images.githubusercontent.com/29297788/33608301-4b6bc2f4-d9ab-11e7-8504-e1c3559ef3a0.png)

![image](https://user-images.githubusercontent.com/29297788/33608313-5089d780-d9ab-11e7-8b54-a96dd80c90d2.png)

![image](https://user-images.githubusercontent.com/29297788/33608397-8e3a083e-d9ab-11e7-9080-f5d712e8443b.png)

![image](https://user-images.githubusercontent.com/29297788/33608407-9148c02e-d9ab-11e7-8b40-4de513b4ae02.png)

## `uglifyjs --mangle` - Minificando ainda mais o código  
Em alguns momentos, a única coisa que preciso manter em uma função nomeada é que o nome  
dela seja o mesmo nome ao ser invocada. Então o `--mangle` irá substituir os nomes das variáveis:  

![image](https://user-images.githubusercontent.com/29297788/33606539-f254bfbe-d9a4-11e7-92cf-a07d816d7fd6.png)

Ou seja, ele substituiu o nome dos elementos que podem ser substituídos, como a função  
`init`, por exemplo, que foi renomeada para `n`.  

Ao usar o `--output`, para gerar o arquivo minificado, e listar os arquivos e pastas,  
posso ver que o tamanho do arquivo foi reduzido ainda mais (estava com 70):  

![image](https://user-images.githubusercontent.com/29297788/33606693-7a7459f4-d9a5-11e7-830b-0f5eb875cab0.png)

![image](https://user-images.githubusercontent.com/29297788/33606715-89bae89c-d9a5-11e7-98a3-2830e08d2a19.png)

Ou seja, agora o browser tem um arquivo menor a ser baixado.  

## `uglifyjs --mangle --compress` - Minificando ainda mais o código ao combinar o mangle e o compress  
Ao utilizá-los juntos, ele diminuiu mais um caractere, que é o caractere removido da `IIFE`:  

![image](https://user-images.githubusercontent.com/29297788/33606829-0de67730-d9a6-11e7-9abe-f8cfefbf4662.png)

![image](https://user-images.githubusercontent.com/29297788/33606878-369e18c2-d9a6-11e7-9004-3fbb31e36b30.png)

Ou seja, além de diminuir o tamanho da função, o ponto de exclamação da `IIFE` foi incluso.  

## Sobre o acesso via mobile  
Ao executar a minificação, levantando o servidor, o código minificado é executado normalmente:  

![image](https://user-images.githubusercontent.com/29297788/33606982-87b501bc-d9a6-11e7-8baa-598fd65aebc1.png)

Várias pessoas podem acessar a aplicação via mobile, por exemplo, e normalmente com uma banda  
reduzida, que tem um limite de banda para baixar.  

**Quanto mais o arquivo é reduzido, melhor para o usuário, pois, além do browser baixar o arquivo  
mais rápido, ele também será executado mais rápido, pois o arquivo está menor.**  

Ou seja, o arquivo indentável e legível é mantido mas, no final do desenvolvimento, esse  
bundle minificado é gerado, para que o browser tenha menos trabalho ao baixá-lo e o usuário  
consiga, sem problemas, acessar a aplicação econimozando banda.  

## Pretty print - Melhorando a exibição de um código minificado  
O problema da minificação é que, em grandes códigos minificados, não há como debugá-los  
com breakpoints, pois estão em apenas uma linha.  

O Pretty print irá melhorar a visualização do código, mantendo o código monificado:  

![image](https://user-images.githubusercontent.com/29297788/33607270-b0a43dd0-d9a7-11e7-946b-7c3e601b571f.png)

![image](https://user-images.githubusercontent.com/29297788/33607315-dd5e7886-d9a7-11e7-898f-adfc0955a9c0.png)

Ou seja, ao dar erro em um nome de uma variável ou uma função, não será possível saber  
quem é essa variável ou função, pois o nome delas ainda estão modificados.  

## Minificando o `window` 
Ao passar variáveis globais como variáveis locais para o código, como a `window`, foi  
explicado que essas variáveis irão funcionar bem mais rápido devido a serem locais  
agora.  

Digamos que eu queira, então exportar a função `init` usando `window` como referência.  
**O uglifyjs não irá minificar o `window`**:  

![image](https://user-images.githubusercontent.com/29297788/33607501-78b43280-d9a8-11e7-9ffa-50df8d4e58e3.png)

![image](https://user-images.githubusercontent.com/29297788/33607544-a72fa234-d9a8-11e7-9c4d-6f83e685a41c.png)

Ou seja, o `win` passado por parâmetro foi minificado, mas o `window.init`, não,  
exatamente por que o chamei como `window`. Ele não pode minificar uma variável sem saber  
se ela foi criada por mim ou se ela é global (vem de outro lugar). Agora, se o global  
é passado como local, ele pode minificar o local.  

Ou seja, o melhor é sempre referenciar o `window` como `win` (variável local), para que  
ele seja minificado:  

![image](https://user-images.githubusercontent.com/29297788/33607633-f07403cc-d9a8-11e7-8731-026891341cb2.png)

![image](https://user-images.githubusercontent.com/29297788/33607730-29998276-d9a9-11e7-83d1-d97dd0b83492.png)

O `win` foi substituído por `n`.  

## Drop ao usar variáveis não utilizadas 
Se uma variável declarada não é usada no código, ao minificar o código, ele dá um aviso dizendo que  
ele dropou (removeu) a variável que não está sendo utilizada antes de ter minificado o código:  

![image](https://user-images.githubusercontent.com/29297788/33607937-d6200f24-d9a9-11e7-8da1-92e56abe1fc4.png)

![image](https://user-images.githubusercontent.com/29297788/33608040-496166d6-d9aa-11e7-8ccc-209da2cfa202.png)

## Minificando um código que usa variáveis sem o `var` globais) 
Ao usar uma variável sem a declaração da palavra `var` (variável global) e minificar o código,  
a variável global será mantida no código minificado e, ao subir o servidor e checkar o console  
ao tentar executar o código, o erro dizendo que a variável não está definida:  

![image](https://user-images.githubusercontent.com/29297788/33608492-d1a32e0c-d9ab-11e7-83b0-32ec3f5485a9.png)

![image](https://user-images.githubusercontent.com/29297788/33608552-08790c62-d9ac-11e7-85f7-1db56c1a4e22.png)

![image](https://user-images.githubusercontent.com/29297788/33608601-319a9f84-d9ac-11e7-9b6b-0bc135e32500.png)

Ao ir em sources e tentar debugar, ele sublinha a variável mas, em um código maior, é bem mais  
complicado debugar esse tipo de erro. Para tentar debugar, posso tentar usar o Pretty print (que  
nem sempre pode resolver) ou usar o Sourcemaps, que será mostrado na próxima aula.
