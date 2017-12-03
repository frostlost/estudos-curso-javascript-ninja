# Testes

## Aviso
Testes não serão abordados a fundo neste curso.  

## TDD - O que é
Sigla para Test Driven Development, ou seja, Desenvolvimento Guiado por Testes.  

Isso significa que, tudo o que será desenvolvido será guiado por um tipo de  
teste. Para todo código escrito haverá um teste por trás. **A ideia do TDD é que,  
antes de escrever o código, o teste seja escrito**.  

## Testando uma calculadora simples 
Esta é a estrutura de pastas e arquivos para o exemplo:  

![image](https://user-images.githubusercontent.com/29297788/33411153-18ff9028-d56b-11e7-8df2-1a062109ab15.png)

Inicialmente, os testes serão feitos em Node, para que sejam rodados na linha  
de comando. Após isso, serão feitos testes de interface front-end.  

## Instalando o `Mocha` 
O mocha é a ferramenta que irá executar os testes.  

Posso instalá-lo com o comando `npm install -g mocha`:  

![image](https://user-images.githubusercontent.com/29297788/33411280-d4f4d630-d56b-11e7-815c-959c3b7f65a6.png)

## `describe()` - Começando a escrever o primeiro teste  
O mocha possui uma função chamada `describe()`. Ela recebe 2 parâmetros:  

1. Descrição do teste / método que será criado 
2. Função de callback que será executada quando o teste for executado 

![image](https://user-images.githubusercontent.com/29297788/33411356-54cb6d6a-d56c-11e7-8292-7d0860e00f61.png)

## `it()` 
Cada teste será feito dentro da função `it()`, que estará dentro da função de callback.  

Cada `it` será um teste diferente, baseado em um módulo. Ou seja, todos os testes  
baseados em #SUM ficarão dentro dessa função de callback:  

![image](https://user-images.githubusercontent.com/29297788/33411377-79c1dcda-d56c-11e7-890d-d17f8fbb87b4.png)

## Sobre testes em geral  
Um teste consiste em, basicamente, testar a funcionalidade de um código, ver como o código  
funciona.  

## O que ter em mente antes de escrever um teste  
Testes não irão ser escritos aleatoriamente. Para criar um teste, é necessário ter definido  
qual será o módulo, como ele vai ser, como ele deve ser escrito.  

A função de soma irá receber 2 parâmetros e irá retornar a soma desses 2 parâmetros.  

A função de soma possui regras básicas:  

1. Os dois parâmetros da função precisam ser números.  
2. O resultado precisa ser o resultado da soma dos dois números.  
3. Se um desses argumentos não for número, uma mensagem de erro deve ser retornada, ao invés da  
soma desses dois argumentos em que um ou mais não são números. A mensagem deverá dizer que  
um ou os dois parâmetros não são números e não puderam ser somados corretamente.  

Portanto, ao iniciar um teste, é preciso saber exatamente o que o módulo irá fazer. Talvez  
não seja necessário saber o que todo o módulo irá fazer, mas é necessário ter, pelo-menos,  
uma ideia base dele. 
