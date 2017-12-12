# Objetos e encerramento 

## Ponteiros de objetos  
Relembrando o conceito de ponteiros: Objetos ficam em memória. Ao criar uma variável  
e atribuir uma segunda variável ao valor da primeira, que aponta para um objeto, as  
duas variáveis agora passam a apontar para o mesmo objeto. Ou seja, passam a ser  
ponteiros desse objeto.  

Suponhamos que eu crie um objeto com apenas uma propriedade e exiba esse objeto no  
console:  

![image](https://user-images.githubusercontent.com/29297788/33837337-25e930d0-de73-11e7-8399-0fdeb9a98615.png)

Agora, vou criar uma segunda variável e atribuir o valor da primeira variável a ela, e  
e mostrarei as duas no console:  

![image](https://user-images.githubusercontent.com/29297788/33837423-68efc3ee-de73-11e7-846a-8e026c659f2f.png)

![image](https://user-images.githubusercontent.com/29297788/33837456-82e98abe-de73-11e7-81b1-40bfc12234ab.png)

Dois objetos foram exibidos. Para verificar se esses dois objetos são objetos diferentes,  
posso verificar se a primeira variável é igual a segunda:  

![image](https://user-images.githubusercontent.com/29297788/33837506-b0799c9e-de73-11e7-966c-0aaeae7a2a67.png)

`true` será exibido. Mas, então, a primeira variável é igual a segunda por que é um outro  
objeto ou por que são o mesmo objeto?  

Agora vou adicionar uma propriedade ao objeto da segunda variável e mostrá-las no console:  

![image](https://user-images.githubusercontent.com/29297788/33837632-1f46cbe2-de74-11e7-84c1-9415f330731a.png)

![image](https://user-images.githubusercontent.com/29297788/33837655-2d394ee6-de74-11e7-85bc-9f2d6ff7930c.png)

Agora o primeiro e segundo objeto tem as mesmas propriedades. Eles são o mesmo objeto. Sempre  
que esse tipo de atribuição por variáveis é feita, o mesmo objeto está sendo atribuído.  

Agora, se eu atribuir à segunda variável um objeto com as mesmas propriedades do objeto  
anterior e compará-los no console, é exibido que dois objetos diferentes foram criados na  
memória. Ou seja, `obj1 === obj2` is `false`: 

![image](https://user-images.githubusercontent.com/29297788/33838013-5224a7f4-de75-11e7-98dc-b651b20c6bf3.png)

Apesar de eles terem as mesmas propriedades, sempre que o brackets `{}` é utilizado, um novo  
objeto está sendo criado (`new Object()` está sendo utilizado pelo JS). Então, se uma  
propriedade for adicionada no objeto 2, por exemplo, apenas ele terá essa propriedade:  

![image](https://user-images.githubusercontent.com/29297788/33838253-17365d12-de76-11e7-8625-c2da1a21adfe.png)

![image](https://user-images.githubusercontent.com/29297788/33838259-1cca9c66-de76-11e7-918f-4a71edbf9175.png)

## Garbage Collection  
Ao criar um objeto de qualquer tipo (tudo o que não é valor primitivo) ele fica salvo em um  
espaço na memória.  

O JavaScript faz uma limpeza de um objeto na memória quando ele não está mais sendo utilizado.  
Ou seja, o JS verifica se o objeto criado em um código está em escopo local. Se estiver, ele  
sabe que, a partir do momento em que esse escopo for executado e não for mais chamado, aquele  
objeto não precisa mais estar na memória. Então, entra o Garbage Collection, que é o coletor  
de lixo que irá remover esse objeto não utilizado da memória, limpar a parte da memória em  
que o objeto estava salvo e devolvê-la para o sistema operacional.  

## Por que é necessário entender o Garbage Collection  
Quando um objeto é atribuído a um objeto global `window`, por exemplo, o Garbage Collection  
não consegue agir:  

![image](https://user-images.githubusercontent.com/29297788/33838627-33e061fa-de77-11e7-91df-b72cc6e19de8.png)

Ou seja, ainda que eu não precise mais desse objeto, o Garbage Collection não consegue  
limpá-lo da memória, devido ao fato de ele estar pendurado no objeto global `window`, que  
nunca pode ser limpado da memória enquanto o browser estiver sendo executado, exatamente  
por que ele é a representação da janela.

Se eu criar um objeto fora da `IIFE`, ou seja, como uma propriedade global, isso é o mesmo  
que fazer `window.a = {...obj...}`:  

![image](https://user-images.githubusercontent.com/29297788/33839160-ac929054-de78-11e7-995d-a4170a43a922.png)

Ou seja, essa variável está sendo criada em escopo global, ela irá ficar lá e o Garbage  
Collection não irá conseguiur atuar. Isso irá gerar o **Memory Leak**.  

## Memory Leak  
É basicamente um espaço de memória que não precisaria estar sendo ocupado mas, que está  
sendo ocupado por um objeto que não pode ser limpado da memória. Se muitos objetos forem  
colocados em memória e o Garbage Collection não conseguiur atuar, devido a esses objetos  
estarem sendo pendurados em objetos globais, a memória pode aumentar até o ponto em que  
o computador trave. Portanto, esse é o motivo pelo qual variáveis globais nunca devem  
ser utilizadas. Só o que realmente for necessário usar globalmente deve ser pendurado  
no objeto `window`.  

## O uso do ponto e vírgula  
O uso do `;` não é obrigatório, pois o JS possui o Automatic Semicolon Insert.  

Isso significa que, se o ponto e vírgula não for utilizado no final das linhas, não há  
problema algum, desde que algumas pequenas regras sejam seguidas:  

- Uma linha não deve começar com caracteres especiais `[]`, `()`, `!`, `{}`. No caso  
dos parênteses, por exemplo, o `;` deve ser declarado antes de sua abertura, como na  
abertura de uma `IIFE`:  

![image](https://user-images.githubusercontent.com/29297788/33839937-a911c060-de7a-11e7-8e48-0c74293c7458.png)

Porém, enquanto o JavaScript está sendo aprendido, é importante escrever a linguagem  
corretamente e não há a necessidade de gerar uma preocupação a mais (uso ou não do `;`).  
Mas após o aprendizado e bom entendimento da linguagem, não há problema em não  
utilizar `;`.  

## Code Style - Definindo padrões para um projeto  
Em caso de dúvidas como o uso ou não do espaço entre a palavra-chave `function` e `()`  
e outros detalhes que são irrelevantes para o JS, mas que são detalhes de code style,  
há várias formas de definir um code style a ser usado. Algumas ferramentas são:  

- [jscs](http://jscs.info) - Permite que algumas regras de estilosejam criadas para um  
projeto.  

- [jshint](http://jshint.com)

- [eslint](https://eslint.org)

- [standardjs](https://standardjs.com/) - Usado pelo professor. É basicamente um  
estilo de código que já possui um padrão pré-definido e não se faz necessário ficar  
definindo para cada novo projeto um jscs, jshint, eslint ou qualquer outra  
ferramenta de definição de estilo de código. O standard, basicamente, define um  
padrão a ser utilizado. Isso elimina a necessidade de, a cada novo projeto, copiar  
um jscs do projeto anterior e colá-lo no projeto atual.  

Com o standard, é necessário apenas instalar uma lib no projeto e ele já estará  
funcionando.  

- [semistandard](https://github.com/Flet/semistandard) - Mesmas regras do  
standardjs, mas com a permissão do uso de `;`. 

## Linters  
As ferramentas citadas acima são `linters`, ou seja, foram criadas para garantir a  
qualidade do código.  

Devem ser usadas sempre, para que o código escrito se mantenha com qualidade. 

## Espaços em branco / Pulo de linha no código  
O código não deve conter pulos de linha aleatórios. Pulos de linha falam muito  
sobre o código e devem ser feitos em casos onde um conjunto do código deve ser  
separado do outro:  

![image](https://user-images.githubusercontent.com/29297788/33841096-df6970ba-de7d-11e7-911f-9a0c2425860b.png)

## Dicas de Livros 
- [Código limpo](https://www.google.com.br/search?q=c%C3%B3digo+limpo+livro&oq=c%C3%B3digo+limpo+livro&aqs=chrome..69i57j69i60l2j69i61j69i60l2.2399j0j7&sourceid=chrome&ie=UTF-8) - Essencial. Todo programador deveria ler. Traz uma qualidade de codificação muito grande.  
- [JavaScript: O Guia Definitivo](https://www.google.com.br/search?ei=uq8uWp-uKsbE_Qbul6WwDA&q=javascript+guia+definitivo+livro&oq=javascript+guia+definitivo+livro&gs_l=psy-ab.3...114697.118565.0.118680.26.16.0.0.0.0.322.1603.2-5j1.6.0....0...1c.1.64.psy-ab..25.1.289...0j0i7i30k1j0i5i30k1.0.4t866ih_mXQ)
- [JavaScript de Alto Desempenho](https://www.google.com.br/search?ei=MrAuWvToGYiX_Qb4oY7gAQ&q=javascript+de+alto+desempenho+livro&oq=javascript+de+alto+desempenho+livro&gs_l=psy-ab.3...48026.50104.0.50251.18.9.0.0.0.0.352.1323.3-4.4.0....0...1c.1.64.psy-ab..18.0.0....0.KYMo7iGXXB4)
- [Segredos do Ninja JavaScript](https://www.google.com.br/search?ei=ZrAuWqi6CcTF_QbinZFY&q=segredos+do+ninja+javascript+livro&oq=segredos+do+ninja+javascript+livro&gs_l=psy-ab.3...39349.43795.0.43871.28.17.0.0.0.0.655.2455.2-1j2j2j1.6.0....0...1c.1.64.psy-ab..25.3.1028...0j0i7i30k1j0i8i30k1.0.84_T8pM6DSI)
- [Functional JavaScript](https://www.google.com.br/search?ei=k7AuWqmZCISa_QbMnZn4Cg&q=functional+javascript+livro&oq=functional+javascript+livro&gs_l=psy-ab.3...64283.67478.0.67556.21.13.0.0.0.0.386.1081.2-3j1.4.0....0...1c.1.64.psy-ab..20.1.386...0i8i30k1.0.bB8eOSEIWuM)
