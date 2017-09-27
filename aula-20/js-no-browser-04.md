# JS no browser - parte 4 - Formulários e Eventos

## Formulários
Na aula passada foi visto que consigo pegar elementos ou valores do DOM.

### .value
É um método que irá me trazer os valores de inputs de formulários.

Suponhamos que eu tenha meus inputs em branco:

```HTML
<form action="/" method="get">
    <input type="text" name="username" class="input" id="username">
    <input type="password" name="password" class="input" id="password">
    <button type="submit" class="button">Enviar</button>
</form>
```

>Relembrando: Não devo usar os métodos getElement/s. Posso usar o `querySelector` para selecionar um input pelo seu `name`, por exemplo: `document.querySelector('[name="nome-do-campo"]')`.

Posso especificar um `value` para os inputs e se eu recarregar a página, ele irá trazer esses valores já carregados nos inputs para mim:

```HTML
<input type="text" name="username" class="input" id="username" value="roger">
<input type="password" name="password" class="input" id="password" value="536">
```

Vou selecionar os inputs através de seu id, obter esses `values` passados nos inputs e mostrá-los no console:

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputUserName = doc.querySelector('#username');

    var $inputPassword = doc.querySelector('#password');

    console.log($inputUserName.value, $inputPassword.value);

}(window, document));

// roger 536
```

O parâmetro `value` pode ser um getter ou um setter.

- Getter
  - É um valor que eu irei obter. `get` em inglês significa 'pegar'. Portanto, todas as vezes em que uso o `get` significa que eu estou obtendo algum dado.

- Setter
  - Significa 'setar'. Estou atribuindo alguma coisa. Portanto, quando eu inicio o nome de uma função com `set`, estou atribuindo / setando um valor.

Então eu posso atribuir um valor à um input:

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputUserName = doc.querySelector('#username');

    var $inputPassword = doc.querySelector('#password');

    $inputUserName.value = 'roger melo';
    $inputPassword.value = 'minhaSenha';

    console.log($inputUserName.value, $inputPassword.value);

}(window, document));

// roger melo minhaSenha
```

Isso irá trazer os `values` setados no console.

Então, **sempre que eu utilizo somente o `.value`**, como no `$inputUserName.value`, eu **estou utilizando um 'getter'**. Ou seja, estou pegando o valor.

Quando eu uso a atribuição, como no `$inputUserName.value = 'roger melo';`, eu **estou utilizando um 'setter'**. Ou seja, estou setando / especificando o valor para um input.

Se eu carregar a página, os valores iniciais dos inputs são trocados.

Se eu remover o `<script>` do html, os `value` especificados no html irão permanecer. Mas, como o `<script>` está carregando outros `value` no fim do document, os `value` vem com os valores do documento mas são alterados. Os `value` padrão do documento html são alterados.

É assim, portanto que eu consigo obter o valor de um campo ou modificar o valor de um campo.

### O método get
Posso notar que, no `<form action="/" method="get">` estou usando o método 'get'. Isso significa que os parâmetros que serão enviados quando eu fizer o submit do formulário serão passados através da URL.

#### Query String

Esses parâmetros serão passados em um formato chamado **Query String**. Exemplo: `?username=roger+melo&password=minhaSenha`.

`?` A query string sempre é iniciada com uma interrogação (após a URL).
`username` Nome do campo.
`roger+melo` O valor do campo.
`password` Nome do campo.
`minhaSenha` O valor do campo.


### Introdução à Eventos
#### .addEventListener()
É um método que adiciona eventos às minhas propriedades. Posso colocá-los em qualquer elemento.

##### .addEventListener('click')
Primeiro, irei remover o `value` padrão dos inputs pois, quero que eles venham, inicialmente, em branco. Também inseri um id no 'button' (para que só esse button exista na tela):

```HTML
<form action="/" method="get">
    <input type="text" name="username" class="input" id="username">
    <input type="password" name="password" class="input" id="password">
    <button type="submit" class="button" id="button">Enviar</button>
</form>
```

Irei capturar o `<button type="submit" class="button" id="button">Enviar</button>` e adicionar um evento a ele. Quero que, à partir do momento em que eu clicar no button, ele faça alguma ação.

Essa ação é o que é chamado de evento. Existem vários eventos como clique, rolar a página com o mouse, duplo clique, clique com o botão direito, pressionar uma tecla, e outros.

O `addEventListener` é um escutador de eventos. Ele irá ficar ouvindo o evento e quando ele acontecer, ele irá executar a função de callback (que é um dos parâmetros dele).

O `addEventListener` recebe 3 parâmetros:
1. O evento que eu vou passar
2. Uma função de callback que será executada quando o evento especificado no parâmetro 1 ocorrer
3. Um valor booleano

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function() {


    }, false);

}(window, document));
```

Por padrão, as funções de callback de eventos recebem um objeto chamado `event`, que eu posso nomear como eu quiser. O `event` é um objeto relacionado ao evento do elemento em questão (button, no caso).

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function(event) {


    }, false);

}(window, document));
```

Quando utilizo o 'click', eu faço alguma ação antes de ele submeter o formulário.

##### Prevenindo o comportamento padrão do button
O comportamento padrão de um botão de envio de formulário é: quando eu clico, ele submete as informações. Ou seja, ele dá um reload na tela e envia as informações dos inputs via query string.

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function(event) {

        event.preventDefault();

    }, false);

}(window, document));
```

O método `event.preventDefault();` evita que o botão execute sua ação default. Ou seja, se o botão submete o formulário, quando eu uso esse método, o botão não faz nada, ele para de enviar o formulário.

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('click', function(event) {

        event.preventDefault();

        console.log('o botão foi clicado');

    }, false);

}(window, document));
```
O que eu fiz acima foi: adicionei um escutador de evento no botão. Esse listener de evento faz com que, ao clicar no botão (parâmetro 1), o botão execute a função (parâmetro 2). E a função está dizendo para o botão não fazer o envio padrão dele e mostrar uma mensagem no console.

Portanto, ao clicar no botão, ele não enviou o formulário e mostrou a msg no console.

##### .addEventListener('submit')
O evento submit é quando eu submeto o formulário. Quando ele faz a submissão do formulário.

```JAVASCRIPT
(function(win, doc) {

    'use strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $button = doc.querySelector('#button');

    $button.addEventListener('submit', function(event) {

        event.preventDefault();

        console.log('o botão foi clicado');

    }, false);

}(window, document));
```

Ou seja, quando eu clico no botão enviar, ele faz o envio do formulário. Logo após o envio do formulário, eu digo o que ele irá fazer.

O submit funciona depois do envio.

##### Inserindo um addEventListener() em um input

soon...
