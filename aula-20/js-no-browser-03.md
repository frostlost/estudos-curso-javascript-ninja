# JS no browser - parte 3 - Selecionando elementos do DOM

## document.getElementsByName()
Com esse método, eu obtenho um elemento à partir do nome dele. É similar ao `getElementsByTagName()`

```HTML
<form action="/" method="get">
    <input type="text" name="username">
    <input type="password" name="password">
    <button type="submit">Enviar</button>
</form>
```

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    console.log(doc.getElementsByName('username'));

}(window, document));
```
Estou pegando o campo `username`. Isso me retorna o campo `[input]`.

Suponhamos que eu queira pegar todos os inputs do html acima:

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    console.log(doc.getElementsByTagName('input'));

}(window, document));
```
Isso me trouxe os 2 inputs: username e password.

## $ no início de variáveis
**A partir de agora, quando eu for me referir a elementos do DOM, devo iniciar a variável com `$`:**

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputs = doc.getElementsByTagName('input');

    console.log($inputs);

}(window, document));
```

```JAVASCRIPT
// (2) [input, input, username: input, password: input]
```

Ele trouxe para mim os 2 inputs.

Quando coloco o elemento capturado em uma variável  fica mais fácil manipulá-lo.

Posso também usar o `length` para saber quantos elementos estou capturando:

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputs = doc.getElementsByTagName('input');

    console.log($inputs.length);

}(window, document));
```

```JAVASCRIPT
// 2
```

## Valores mutáveis nos métodos getElement/s
Quando eu uso os métodos `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `getElementsByName()` para obter a HTMLCollection, esses métodos são dinâmicos. Ou seja, quando eu atribuo um desses métodos à uma variável, o valor que esse método me retorna não é estático.

Se eu adicionar mais um input no form do HTML acima, por exemplo:
```HTML
<input type="text" name="username2">
```

quando eu invocar a `$inputs` novamente, fazendo um `length` nela,

```JAVASCRIPT
$inputs.length;
```

 ela já me trouxe 3 itens. Ou seja, esse valor que os métodos `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `getElementsByName()` me trazem são mutáveis. O valor muda automaticamente a cada vez que eu adiciono um novo `input`. Cada vez que eu adiciono um novo input, ele é colocado na variável `$inputs`. Então essa variável nunca terá um valor estático, sempre será dinâmico. Esse valor irá ser modificado conforme os inputs são adicionados na tela. Qualquer campo que for adicionado depois que eu atribuí um valor na variável, será adicionado nessa variável. 
 
Em alguns momentos isso pode ser interessante mas, em vários momentos ou em uma grande aplicação **isso pode ser muito ruim**, por que posso estar adicionando campos dinamicamente e acabar modificando valores de variáveis que eu não queria modificar. O nome disso é **efeito colateral**: eu modifico um valor sem eu saber ou modifico um valor um passo à frente da minha aplicação. Então, eu atribuí um valor à uma variável, aquela variável tem 2 itens e depois aquela variável é alterada automaticamente. Isso é um efeito colateral.

Se eu remover 1 input, a variável também será atualizada.

## querySelector() e querySelectorAll()
Esses métodos resolvem o problema de efeito colateral dos métodos getElement/s, pois são estáticos e fazem a seleção pelo seletor CSS.

O `querySelector()` irá selecionar apenas o 1 elemento que ele encontrar. Sempre retorna apenas um elemento.

```JAVASCRIPT
$inputs = document.querySelector('input');

// <input type="text" name="username">
```

Ele irá fazer a seleção exatamente como o seletor do CSS faz.

Já o `querySelectorAll()` irá selecionar todos os elementos que ele encontrar. Sempre retorna um array-like de elementos (HTMLCollection).

Então, se eu quero, por exemplo pegar todos os inputs:

```JAVASCRIPT
$inputs = document.querySelectorAll('input');

// (2) [input, input]
```

Ambos fazem a seleção de elementos à partir de uma estrutura CSS. Como se eu fosse chamá-los no CSS mesmo.

A diferença deles para os outros métodos é que **ambos não causam efeito colateral**.

Se eu for no console e adicionar um novo `<input>` e chamar o `$inputs.length`, ele continuará sendo `2`. Neste caso, para atualizar o número de inputs eu **preciso reatribuir** o document.querySelectorAll à variável, para que ela seja atualizada.

```JAVASCRIPT
$inputs = document.querySelectorAll('input');

// (3) [input, input, input]
```
A partir de agora, devo utilizar apenas `querySelector()` e `querySelectorAll()` para selecionar elementos, pois eles não irão causar efeito colateral.

Exemplo, quero pegar todos os inputs `type="text"`:

```JAVASCRIPT
$inputs = document.querySelectorAll('[type="text"]');

// (2) [input, input]
```
No código acima, estou selecionando exatamente como no CSS.

```HTML
<form action="/" method="get">
    <input type="text" name="username" class="input" id="username">
    <input type="password" name="password" class="input" id="password">
    <button type="submit" class="button">Enviar</button>
</form>
```

Exemplo, quero pegar todos os inputs que contenham a `class="input"`:

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputs = document.querySelectorAll(".input");

    console.log($inputs);

}(window, document));

// (2) [input#username.input, input#password.input]
```

Exemplo, quero pegar o input que contém o `id="username"`:

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $input = document.querySelector("#username");

    console.log($input);

}(window, document));

// <input type="text" name="username" class="input" id="username">
```

### Suporte para querySelector() e querySelectorAll()
A única restrição para o uso deles é que, como eles fazem seleção a partir de um seletor CSS, se o seletor CSS não estiver disponível para aquele navegador, `querySelector()` e `querySelectorAll()` não irão funcionar.
