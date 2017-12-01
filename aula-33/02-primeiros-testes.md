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
É um módulo para realizar testes. Ele será usado para garantir que o que está sendo  
escrito no teste é verdadeiro.  

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
