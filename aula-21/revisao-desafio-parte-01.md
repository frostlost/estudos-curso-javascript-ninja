# Revisão do desafio da semana #20

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

> Selecione o input de "Email", atribuindo-o à uma variável chamada
`$inputEmail`.

```JAVASCRIPT
var $inputEmail = doc.querySelector('input[type="email"]');
```

> Selecione o campo de "Mensagem", atribuindo-o à uma variável chamada
`$message`.

```JAVASCRIPT
var $message = doc.querySelector('textarea');
```

> Selecione o botão de envio do formulário, atribuindo-o à uma variável
chamada `$button`.

```JAVASCRIPT
var $button = doc.querySelector('button');
```

> Preencha os campos de "Nome" e "Email" que estão no documento com os valores
entrados pelo usuário.

```JAVASCRIPT
$inputUsername.value = username;
$inputEmail.value = email;
```

Ou seja, o `value` do input, será preenchido com o valor que  
o usuário entrou no prompt.

```JAVASCRIPT
/*
Adicione um listener de evento de click ao botão que faça o seguinte:
1. Verificar se todos os campos estão preenchidos:
- Mostrar um alert para cada campo não preenchido, como abaixo:
- Se o campo de "Nome" não estiver preenchido, mostrar:
    - "Preencha o nome do usuário!"
- Se o campo de "Email" não estiver preenchido, mostrar:
    - "Preencha o e-mail!"
- Se o campo de "Mensagem" não estiver preenchido, mostrar:
    - "Preencha a mensagem!"
- Se o campo de "Email" for inválido, mostrar:
    - "Entre com um e-mail válido!"

2. Para verificar se o e-mail é válido use a função `isValidEmail`, passando
o e-mail que foi entrado no campo de "Email" por parâmetro. (A função
`isValidEmail` será criada logo abaixo).

3. Se tudo estiver OK, pergunte ao usuário:
    - "Tem certeza que deseja enviar o formulário?"
Se for confirmado, mostre um alerta com a mensagem:
    - "Enviado com sucesso!"
Caso contrário, mostre um alerta com a mensagem:
    - "Não enviado."
*/
```

O primeiro passo é, sempre, começar do começo e ir fazendo aos poucos:

```JAVASCRIPT
$button.addEventListener('click', function() {

    // código a ser inserido

}, false);
```

Quando eu clicar no botão, ele deve verificar se todos os campos  
estão preenchidos (1).

```JAVASCRIPT
$button.addEventListener('click', function() {

    if(!$inputUsername.value)
        return alert('Preencha o nome do usuário!');
    if(!$inputEmail.value)
        return alert('Preencha o e-mail!');
    if(!$message)
        return alert('Preencha a mensagem!');
    if(!isValidEmail($inputEmail.value))
        return alert('Entre com um e-mail válido!');

}, false);
```

Não estou colocando `else`, pois ele dificulta a leitura do código.  
Então, quando eu coloco um `if` e coloco o `return`, o JS irá  
ignorar o próximo código abaixo ao encontrar o `return`.  

Posso exibir uma mensagem de confirmação para perguntar ao usuário  
se ele realmente quer enviar o email (3).

```JAVASCRIPT
$button.addEventListener('click', function() {

    if(!$inputUsername.value)
        return alert('Preencha o nome do usuário!');
    if(!$inputEmail.value)
        return alert('Preencha o e-mail!');
    if(!$message)
        return alert('Preencha a mensagem!');
    if(!isValidEmail($inputEmail.value))
        return alert('Entre com um e-mail válido!');
    if(confirm('Tem certeza que deseja enviar o formulário?'))
        return alert('Enviado com sucesso!');

    alert('Não enviado.');

}, false);
```

O `confirm()` irá disponibilizar ao usuário um botão de 'ok' ou  
'cancelar', para que eu continue a validação do input.
Se o `confirm` retornar true, ele retornará um `alert` com com  
a mensagem de confirmação do envio.

Se nenhum dos 5 `if` for verdadeiro, o `alert('Não enviado.');`  
será retornado.

Ou eu posso fazer com que o `alert('Enviado com sucesso!')` seja  
padrão e retornar o `alert('Não enviado.');` simplesmente negando  
o `confirm` do `if`:

```JAVASCRIPT
$button.addEventListener('click', function() {

    if(!$inputUsername.value)
        return alert('Preencha o nome do usuário!');
    if(!$inputEmail.value)
        return alert('Preencha o e-mail!');
    if(!$message)
        return alert('Preencha a mensagem!');
    if(!isValidEmail($inputEmail.value))
        return alert('Entre com um e-mail válido!');
    if(!confirm('Tem certeza que deseja enviar o formulário?'))
        return alert('Não enviado.');

    alert('Enviado com sucesso!');

}, false);
```

Ou seja, se o `confirm` for false, ele retorna o alerta de  
não-enviado. Caso contrário, ele retorna 'Enviado com sucesso!'.

Se eu testar com o código atual, ele está submetendo o formulário,  
não mostrou nenhuma mensagem de erro para mim e perguntou meu  
nome de novo.

Ele fez isso por que o `event` não foi utilizado, até esse ponto:

```JAVASCRIPT
$button.addEventListener('click', function(event) {

    event.preventDefault();

    if(!$inputUsername.value)
        return alert('Preencha o nome do usuário!');
    if(!$inputEmail.value)
        return alert('Preencha o e-mail!');
    if(!$message)
        return alert('Preencha a mensagem!');
    if(!isValidEmail($inputEmail.value))
        return alert('Entre com um e-mail válido!');
    if(!confirm('Tem certeza que deseja enviar o formulário?'))
        return alert('Não enviado.');

    alert('Enviado com sucesso!');

}, false);
```
Se eu tentar enviar o formulário até esse ponto, o console me  
mostra um erro dizendo que `isValidEmail` não está definida.

```JAVASCRIPT
/*
Crie uma função chamada `isValidEmail`, que será usada na validação do
envio do formulário.
Essa função deve receber o e-mail por parâmetro e verificar se é um e-mail
válido.
As regras para validação são:
    - O nome do usuário (antes do arroba), pode ser qualquer caractere
    alfanumérico, incluindo o underscore, sinal de "+" e o ponto;
    - Após o arroba, o domínio pode conter somente caracteres alfanuméricos
    e o underscore;
    - Para a extensão, o domínio deve vir seguido de um ponto, e no mínimo
    2 caracteres alfanuméricos;
    - O final do domínio é opcional, mas se existir, deve começar com um
    ponto, seguido de no máximo 2 caracteres alfanuméricos.

Alguns e-mails válidos que podem ser usados para testar:
    - "meu.email+categoria@gmail.com"
    - "juca_malandro@bol.com.br"
    - "pedrobala@hotmail.uy"
    - "sandro@culinaria.dahora"

Alguns e-mails inválidos:
    - "walter-da-silva@maraca.br"
    - "rita-marica@titica.a.b"
    - "agua_@evida.br.com"
*/
```

```JAVASCRIPT
function isValidEmail(email) {

    // ...
}
```

Agora, eu preciso testar se o email é válido. Como o email irá  
entrar como `string`, posso usar `regex ` para fazer esse tipo  
de validação.

## 'is' e 'has', no início de funções
Normalmente, quando eu preciso retornar um valor `true` or `false`  
através de uma função, ela irá começar com *'is'*. Assim, ela irá  
dizer: 'é um email **válido**'.

O **'has'** será utilizado quando preciso verificar **se algo existe**.

Não devo usar 'has' ou 'is' nas funções que não retornem valor booleano  
na validação.

'isValidEmail' não pode retornar uma string, por exemplo. Ela deve  
retornar `true` or `false`.

## Validando emails com RegExp()
### test()
Na Regex eu tenho o método **test()**, em que eu posso testar o valor  
do email:

```JAVASCRIPT
function isValidEmail(email) {

    return /...regexAqui.../.test(email);
}
```

Minha regex terá um início e um fim. Se eu utilizar os caracteres de  
início e de fim de regex, o código fica mais performático, pois estou  
dizendo que ela tem que iniciar com alguma coisa e finalizar com  
alguma coisa. Assim, a regex irá especificadamente na string.

```JAVASCRIPT
function isValidEmail(email) {

    return /^$/gi.test(email);
}
```

Para não ter que testar manualmente a regex, posso usar o regex101:
[![regex101.png](https://s26.postimg.org/7c09sr3dl/regex101.png)](https://postimg.org/image/6mhhge2tx/)
