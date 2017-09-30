# Revisão do desafio da semana #20 - parte 01

>1. Envolva todo o conteúdo desse desafio em uma IIFE.
>2. Adicione a diretiva 'use strict';
>3. Passe por parâmetro para a IIFE os objetos window e document.
>4. Dessa vez não é necessário criar um HTML. Ele já existe, e vamos utilizar
>a marcação criada nele para fazer nosso desafio ;)
>O HTML NÃO PODE ser alterado!

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Challenge 20</title>
    <style>
        body { font-family: sans-serif }
        label { display: block }
        input { margin-bottom: 10px }
    </style>
</head>
<body>
    <form action="." method="get">
        <div>
            <label>Nome:</label>
            <input type="text" />
        </div>

        <div>
            <label>E-mail:</label>
            <input type="email" />
        </div>

        <div>
            <label>Mensagem</label>
            <textarea cols="30" rows="10"></textarea>
        </div>

        <div>
            <button type="submit">Enviar</button>
        </div>
    </form>

    <script src="challenge-20.js"></script>
</body>
</html>

```

```JAVASCRIPT

(function(win, doc) {

    'use strict';

    // ...código do desafio indentado...

})(window, document);

```

>Ao carregar a página, pergunte ao usuário "Qual o seu nome?". Atribua o  
resultado à uma variável chamada 'username'. Se o usuário não digitar um  
nome, 'username' deve receber "Desconhecido".  
Com a resposta, mostre um alert com a mensagem "Bem vindo [USERNAME]!"  

```JAVASCRIPT

var username = prompt('Qual o seu nome?');

if(!username)
    username = 'Desconhecido';
alert('Bem vindo ' + username + '!');

```

No código acima, se o usuário não entrar com o nome,  
ou cancelá-la, `username` irá receber 'Desconhecido'.

## Relembrando if's de apenas uma linha
Posso usar o `if` de uma só linha sem as chaves. A  
próxima linha: `alert('Bem vindo ' + username + '!');`  
estará fora do `if`.  

Ou seja, ele sempre irá fazer o alert, seja com o  
nome do usuário, seja com a string 'Desconhecido'.

## Introdução à curto-circuito
É basicamente eu utilizar o `||` ou o `&&` para fazer  
uma relação de algo.

Posso usar bastante os Curto-circuitos para a **diminuir  
a quantidade de `if` no meu código**. Os `if` acabam  
deixando o código ruim para ler.

### Curto-circuito com o ||
```JAVASCRIPT

var username = prompt('Qual o seu nome?') || 'Desconhecido';

alert('Bem vindo ' + username + '!');

```

Estou dizendo que se o valor do prompt for `true`,  
`username` irá recebê-lo. Como eu estou utilizando  
o `||`, ele verifica somente do lado esquerdo da  
expressão. Ou seja, se a expressão à esquerda do  
`||` for verdadeira, `true` já é atribuído para  
a variável `username`.

Se a expressão à esquerda do `||` for `false`,  
ele verifica e atribui a expressão à sua direita.

### Curto-circuito com o &&
```JAVASCRIPT

var username = prompt('Qual o seu nome?') && 'Desconhecido';

alert('Bem vindo ' + username + '!');

```

O JavaScript irá verificar se a expressão à esquerda  
do `&&` é verdadeira e se a expressão à direita do `&&`  
é verdadeira e irá atribuir para a variável `username`  
a expressão à direita do `&&`.

A variável `username` irá sempre receber `Desconhecido`.  
Mas, ela iria receber `false` se algum dos dois não fosse  
verdadeiro.

## Número de caracteres por linha
O ideal é que cada linha, tanto de comentário, quando de código,  
tenha no máximo **80** caracteres.

>Agora, pergunte ao usuário "Qual o seu e-mail?", atribuindo o resultado  
à uma variável chamada `email`.

```JAVASCRIPT
var email = prompt('Qual o seu e-mail?');
```

> Selecione o input de "Nome", atribuindo-o à uma variável chamada  
`$inputUsername`.

## Pegando inputs através do type
A única forma de eu pegar os inputs de nome e email do DOM, neste caso,  
é pelo `type` deles.

```JAVASCRIPT
var $inputUsername = doc.querySelector('input[type="text"]');
```

No código acima, o `querySelector` irá procurar todos os `input` com  
`type="text"`. Quando incluo o `input` antes do `type`, estou deixando  
o código mais específico.

```JAVASCRIPT
var $inputUsername = doc.querySelector('[type="text"]');
```

Já aqui, o `querySelector` irá trazer o primeiro elemento com  
`type="text"` que ele encontrar.

Mas, no fim das contas, **neste caso**, tanto faz incluir ou não o  
`input` antes do `type`. De qualquer forma, ele irá pegar o primeiro  
elemento que ele encontrar com o `[type="text"]`.

## Pegar inputs através do type não é uma boa prática
A não ser que eu queira pegar vários inputs como mesmo `type`, o  
ideal é que eu coloque um `id`, `class` ou qualquer atributo que  
fique específico para aquele elemento. Assim, o código fica coeso  
e de fácil manutenção.
