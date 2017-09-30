# Revisão do desafio da semana #20 - parte 03
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

    return /...regexAqui.../g.test(email);
}
```

Minha regex terá um início e um fim. Se eu utilizar os caracteres de  
início e de fim de regex, o código fica mais performático, pois estou  
dizendo que ela tem que iniciar com alguma coisa e finalizar com  
alguma coisa. Assim, a regex irá especificadamente na string.

```JAVASCRIPT
function isValidEmail(email) {

    return /^$/g.test(email);
}
```

Para não ter que testar manualmente a regex, posso usar o regex101:
[![regex101.png](https://s26.postimg.org/7c09sr3dl/regex101.png)](https://postimg.org/image/6mhhge2tx/)

Neste caso, não preciso usar o formato global, pois só vou casar com  
um email por vez.

```JAVASCRIPT
function isValidEmail(email) {

    return /^[\w.+]+@\w+\.\w{2,}(?:\.\w{1,2})?$/g.test(email);
}
```

Com o `^` estou dizendo que a string testada deve começar com os valores  
da lista (caractere alfanumérico, '+' ou '.').

O `\w` irá pegar os caracteres alfanuméricos, maiúsculos e minúsculos,  
e o underline. O `.` dentro da lista pega o ponto literal e o `+` também
pega o '+' literal.

Com o `+` fora da lista, estou dizendo que quero pegar ou um ou outro  
desses caracteres, quantas vezes for necessário.

Todos esses caracteres acima são seguidos de um `@`.

O domínio, após o @, pode ter quantos caracteres alfanuméricos forem  
necessários: `\w+`.

Para a extensão (.com, .org, .us, etc), vou precisar de um ponto literal,  
então, devo escapá-lo: `\.`. E também preciso de, no mínimo, 2 caracteres  
alfanuméricos: `\w{2,}`.

Para o final do domínio, que é opcional, uso um grupo opcional e sem  
captura: `(?:\.\w{1,2})?`.

E eu devo dizer que o grupo opcional é o final da minha regex, usando o  
`$`.

Embora regex sejam complexas, é mais fácil validar strings com elas do  
que por `split()`, por exemplo.

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

Após validar o email, o código acima ainda não está validando a  
mensagem. O browser está me dando a opção de enviar o formulário  
com a mensagem vazia.

Ele não validou a mensagem por que o código acima está perguntando  
se o input message é falso. Ou seja, o messagem existe, ele está  
no DOM, dentro do formulário:

```HTML
<textarea cols="30" rows="10"></textarea>
```

```JAVASCRIPT
var $message = doc.querySelector('textarea');
```

Ou seja, ele não esntou no `if(!$message)` por que na verdade eu  
tenho que testar pelo value.

```JAVASCRIPT
$button.addEventListener('click', function(event) {

    event.preventDefault();

    if(!$inputUsername.value)
        return alert('Preencha o nome do usuário!');
    if(!$inputEmail.value)
        return alert('Preencha o e-mail!');
    if(!$message.value)
        return alert('Preencha a mensagem!');
    if(!isValidEmail($inputEmail.value))
        return alert('Entre com um e-mail válido!');
    if(!confirm('Tem certeza que deseja enviar o formulário?'))
        return alert('Não enviado.');

    alert('Enviado com sucesso!');

}, false);
```

Se eu tentar enviar agora com o nome preenchido, um email inválido  
e com o campo de mensagem em branco, ele irá me retornar o  
`alert('Preencha a mensagem!');`:

[![preencha_a_msg.jpg](https://s26.postimg.org/xycqhq7kp/preencha_a_msg.jpg)](https://postimg.org/image/ku7651fit/)

Se eu preencher a mensagem e tentar enviar, ele irá me retornar o  
alert da validação de email `alert('Entre com um e-mail válido!');`:  

[![email.jpg](https://s26.postimg.org/q6w0j63fd/email.jpg)](https://postimg.org/image/59zsei5ed/)

Ou seja, ele mostrou o `alert('Preencha a mensagem!');` primeiro por  
que o `if(!$message.value)` vem após o `if(!$inputEmail.value)`.

Para melhorar isso, posso colocar a validação da mensagem após a  
validação do email:

```JAVASCRIPT
$button.addEventListener('click', function(event) {

    event.preventDefault();

    if(!$inputUsername.value)
        return alert('Preencha o nome do usuário!');
    if(!$inputEmail.value)
        return alert('Preencha o e-mail!');
    if(!isValidEmail($inputEmail.value))
        return alert('Entre com um e-mail válido!');
    if(!$message.value)
        return alert('Preencha a mensagem!');
    if(!confirm('Tem certeza que deseja enviar o formulário?'))
        return alert('Não enviado.');

    alert('Enviado com sucesso!');

}, false);
```

Assim, ele **irá validar a mensagem só depois de garantir que o  
email é válido**.
