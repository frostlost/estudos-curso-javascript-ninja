# Revisão do desafio da semana #20 - parte 02

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

## Preenchendo um input com o valor entrado pelo usuário
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
