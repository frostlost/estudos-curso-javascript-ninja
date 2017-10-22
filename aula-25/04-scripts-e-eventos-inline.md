# Scripts e eventos inline

## Scripts inline

Ao invés de colocar uma url no `href`, vou inserir um JavaScript inline que irá  
fazer alguma ação. Isso vale para qualquer tag onde tenho uma ação:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a href="javascript:boom()">Boom!</a>

    <script>
        function boom() {
            alert('boom!');
        }
    </script>

</body>

</html>
```

Tudo o que vem após o `javascript:` é um código JavaScript válido.

**Scripts inline não devem ser usados em projetos. Essa demonstração é apenas  
para que eu esteja ciente que é possível fazer isso.**

## `void(0)`, `void 0` ou `void0`
O `void` é uma palavra reservada que significa 'nada'.    

[![void.jpg](https://s1.postimg.org/49v2uhv9nj/void.jpg)](https://postimg.org/image/1wsgdahggr/)

Em linguagens fortemente tipadas, quando é necessário que uma função retorne  
nada, por exemplo, um `void` é passado para o seu retorno.  

`href="javascript:void(0)"` isso significa que nada será retornado quando esse  
link for clicado.  

## `javascript:` ao invés do `javascript:void(0)`
Como o JavaScript não é tipado, não preciso especificar o `void` para dizer que  
nada será retornado:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a href="javascript:">Boom!</a>

    <script>
        function boom() {
            alert('boom!');
        }
    </script>

</body>

</html>
```

## `void(0)` e `javascript:` em códigos legados
A intensão do `void` ou do `javascript:` dos códigos acima é impedir que o link  
redirecione para outra página, ao ser clicado. Mas a forma ideal para fazer isso  
é:  

## `event.preventDefault()` em links
Quando atrelo um evento à um link, posso utilizar o `event.preventDefault()`  
para que o `href` do link não execute sua ação padrão (redirecionar para a url  
do link):  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a href="https://www.google.com.br">Boom!</a>

    <script>
        var $a = document.querySelector('a');
        $a.addEventListener('click', handleClickLink, false);

        function handleClickLink(event) {
            event.preventDefault();
            console.log('não direcionou');
        }
    </script>

</body>

</html>
```

## Lista de Eventos
Existem vários tipos de eventos em JavaScript:  
https://developer.mozilla.org/en-US/docs/Web/Events

## Eventos inline
São eventos colocados diretamente em um elemento html.
É outra prática que não devo adotar, mas devo saber.  

## `onclick="boom()"`

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a href="javascript:" onclick="boom()">Boom!</a>

    <script>
        function boom() {
            alert('boom!');
        }
    </script>

</body>

</html>
```

Ou seja, a ação padrão (`href="..."`) irá fazer nada e no clicar do link, a  
função `boom()` será executada.  

Se eu colocar uma `#` no href, ela será mostrada após o alert. Ou seja, o alert  
será disparado e depois a ação do `href` acontecerá (direcionamento do link):  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a href="#" onclick="boom()">Boom!</a>

    <script>
        function boom() {
            alert('boom!');
        }
    </script>

</body>

</html>
```

Isso é o mesmo que capturar o `a` e atrelar um evento a ele:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a href="#">Boom!</a>

    <script>
    var $a = document.querySelector('a');
    $a.addEventListener('click', boom, false);

    function boom() {
        alert('boom!');
    }
    </script>

</body>

</html>
```

Se eu adicionar o `event` como parâmetro da função e especificar um  
`preventDefault();` atrelado a ele, o `href` não irá executar sua ação padrão de  
e redirecionamento para url e o alert será disparado:  

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>

<body>

    <a href="#">Boom!</a>

    <script>
    var $a = document.querySelector('a');
    $a.addEventListener('click', boom, false);

    function boom(event) {
        event.preventDefault();
        alert('boom!');
    }
    </script>

</body>

</html>
```

>Embora existam, eventos ou Scripts inline não devem ser usados.  
