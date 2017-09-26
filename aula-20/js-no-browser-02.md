# JS no browser - parte 2

## Revisando o método prompt

```javascript

(function(win) {

    'use strict';

    if(prompt('Pergunta?'))
        console.log('resposta ok!');

    console.log('sempre será mostrado');

}(window));

```
Na aula passada, foi falado sobre o método prompt. Foi 
visto que, quando eu respondo a pergunta no prompt, ele 
irá retornar true ou irá retornar a resposta que eu 
coloquei no prompt. Se eu não responder, irá retornar 
em branco e irá cair no else do prompt: 

```javascript
(function(win) {

    'use strict';

    if(prompt('Qual é o seu nome?'))
        console.log('resposta ok!');
    else
        console.log('não respondeu');

    console.log('sempre será mostrado');

}(window));

```

#### Como posso pegar a resposta do usuário?
Eu posso criar uma variável que irá receber o prompt e 
passá-la como parâmetro para o if. Ou seja, se 'name' for 
true, se a resposta for preenchida, o prompt retorna o 
valor do nome. Então, posso logar no console o nome 
obtido pela variável 'name':

```javascript
(function(win) {

    'use strict';

    var name = prompt('Qual é o seu nome?');

    if(name)
        console.log('Olá,', name);
    else
        console.log('não respondeu =(');

    console.log('sempre será mostrado');

}(window));

```

O que eu fiz, praticamente foi colocar o nome em uma 
variável e perguntar se o 'name' tem valor truthy: 

[![valores-falsy.jpg](https://s26.postimg.org/66qqb9321/valores-falsy.jpg)](https://postimg.org/image/790wtslv9/)

Se o name tiver valor, cairá no if. Caso contrário, cairá no else. 

### window.confirm

```javascript
(function(win) {

    'use strict';

    var del = confirm('Deseja realmente excluir?');

    if(del)
        console.log('Excluído com sucesso', del);
    else
        console.log('Ação cancelada!, del');

}(window));

```

É um método de confirmação que exibe uma pergunta 
para que o usuário confirme ou não uma ação. Se eu clicar em cancel, 
ele cairá no else e me retornará 'Ação cancelada! false'. Se eu clicar no ok, 
ele cairá no if e me retornará 'Excluído com sucesso! true'.

Então, basicamente, o confirm irá me retornar um booleano. 

A caixinha do confirm pode ser diferente para cada browser.

Então, basicamente são essas 3 caixinhas que eu posso usar para interagir com o usuário: 

#### 1. confirm()
Para confirmar alguma informação ou uma deleção, por exemplo, em que eu preciso que o usuário diga 'sim' ou 'não'.

#### 2. prompt()
Para que o usuário coloque uma entrada de dado.

#### 3. alert()
Para que uma mensagem seja mostrada para o usuário apenas como botão ok.

## window.document
Relembrando: O windows representa a janela do browser em si. 

O objeto/propriedade document representa o meu documento, meu html:

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <script src="js/main.js"></script>

</body>

</html>

```

Isso é a representação da árvore do meu documento.

## DOM - Document Object Model
[![dom.png](https://s26.postimg.org/c9c56yvnd/dom.png)](https://postimg.org/image/izsmgeit1/)

Essa é a forma como o JavaScript monta a estrutura do DOM para mim. 
Devo imaginar essa estrutura como uma árvore genealógica, pois o JS pega todos 
os elementos e pendura no 'Document'. Podem haver muitas outras tags além das 
mostradas na figura, que é apenas uma representação básica. O DOM, portanto, é esse objeto 
criado quando eu tenho uma estrutura HTML ou XML. 

### Document 
É o objeto, meu documento principal, ou todo o meu arquivo. Ele representa o index.html. 

### Root Element
Dentro do 'Document', tenho o 'Root Element', que o '<html>', o elemento principal, é a raiz do 'Document'. 
    
### head e body
Dentro do 'Root Element' '<html>', tenho apenas o '<head>' e o '<body>'.

### title
Dentro do '<head>', tenho o elemento 'title>'.
    
### text
Dentro do '<title>', tenho o meu título. No caso acima, 'JS Ninja'. 

### meta
Tenho tambémm uma '<meta charset="UTF-8">', que não está na figura. 

### body
No '<body>', tenho um elemento '<a>', com o texto 'my link', **que também é um nó**.
    
### h1
Elemento que é um título e possui o texto 'My header'.

## Nós do DOM 
Cada um desses elementos ou desses textos ('my link', 'My header') se chama **nó**.
Eles são um nó do meu documento inteiro. Cada um desses elementos é um nó que está amarrado à 
minha árvore do DOM. 
    
Quando o browser faz a leitura do meu documento HTML, ele monta essa árvore para mim. E a partir 
dessa estrutura, eu consigo ter acesso aos elementos dentro do DOM. Portanto, o termo DOM representa, 
nada mais, do que o meu documento representado em formato de objeto JS. 

À partir do **window.document** ou somente o document, sem o window, eu consigo ter acesso à esses 
elementos:

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a id="my-link">'My text'</a>

    <script src="js/main.js"></script>

</body>

</html>
```

Criei uma tag a no body com o texto 'My text' e um id 'my-link'. Então a minha árvore do Dom diz que eu 
tenho o 'html', o 'head' e o 'body'. Dentro do body tenho o 'a' e tenho o 'script'. Dentro do 'head'tenho 
o 'meta' e o 'title' 

## Como interagir com os elementos do DOM 
O DOM é uma **api** do JS que converte essa árvore (html acima) em objeto. Dessa forma, 
consigo ter acesso à esses elementos. 

```javascript
(function(win, doc) {

    'use strict';

    // ...código da função...

}(window, document));

```

Para diminuir a quantidade de chamadas ao document, posso colocá-lo como 2º parâmetro e argumento na IIFE. 
Assim, posso chamar o 'document' de 'doc', dentro da IIFE. 

### document.getElementById()
É um método usado quando eu quero selecionar um elemento do DOM à partir de seu id.
