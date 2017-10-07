# Debug - parte 01

Agora será mostrado como eu posso debugar minha aplicação.  

Debug é, basicamente, entender o que está acontecendo em cada linha do meu  
código para poder saber quando acontece algum erro.

Para os exercícios, tenho o meu código html apenas com o script inserido no body:

```HTML
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS Ninja</title>
</head>

<body>

    <script src="js/main.js"></script>

</body>

</html>
```
Vou fazer o mesmo exemplo do desafio anterior: uma função de soma que irá  
retornar todos os argumentos somados.

```JAVASCRIPT
(function() {

    'use strict'

    function sum() {
        return Array.prototype.reduce.call(arguments, function(accumulated, item) {
            return accumulated + item;
        });
    }

    console.log(sum(1, 2, 3));

}());

// 6
```

O que faço para saber como essa função está realmente funcionando? O que está  
acontecendo a cada iteração? Como saber cada item entrado? Como saber o valor  
acumulado?  

Tudo o que acontece por trás da minha aplicação é mostrado através do console do  
navegador.  

Todas as vezes que eu mostro algo no console, ele também me mostra o arquivo  
onde aquela mensagem está. A linha onde aquele comando foi chamado:

[![log.jpg](https://s1.postimg.org/94c4wo48f3/log.jpg)](https://postimg.org/image/2th4ysfel7/)

Então, o `6` está vindo do arquivo `main.js`, linha `11`.  

Quando eu clico em `main.js:11`, sou direcionada para a aba `sources`, que vai  
abrir o meu arquivo `main.js` e dar um highlight na linha que está imprimindo  
o número `6` para mim:

[![sources.jpg](https://s1.postimg.org/5wfb6j0p1b/sources.jpg)](https://postimg.org/image/12qgaefzy3/)

`console.log(sum(1, 2, 3));` é essa linha que está imprimindo para mim o valor  
`6`.  

Como eu sei que esse valor que está sendo impresso para mim chegou ao `6`?  

[![arq.jpg](https://s1.postimg.org/5mja3jo927/arq.jpg)](https://postimg.org/image/8rys2hinyz/)

Acima, tenho uma lista mostrando todos os arquivos que foram baixados.  

A aba `Network` me mostra uma lista com tudo o que foi baixado:

[![network.jpg](https://s1.postimg.org/97x0s7isfz/network.jpg)](https://postimg.org/image/7jnnv0si9n/)

Ou seja, tudo o que utilizou banda da rede irá ser listado em `Network`. Neste  
caso, `javascript-ninja-exemplos/` e `main.js` foram baixados.  

O status `http` dos 2 é `200`, ou seja, status ok, o arquivo foi baixado.  

O método utilizado para baixar os arquivos foi o `GET`. Ou seja, uma requisição  
`GET` foi feita no servidor.  

O tipo do arquivo `main.js` é `script`.  

O arquivo `main.js` foi iniciado no arquivo `index`.  

O tamanho do arquivo `main.js` é `668 bytes`.  

O tempo que o arquivo `main.js` foi baixado é de `44` milisegundos.  

[![timeline.jpg](https://s1.postimg.org/7atwyjofvj/timeline.jpg)](https://postimg.org/image/2o89xupw7v/)

Acima, consigo ver uma `timeline` dos momentos específicos em que esses arquivos  
foram baixados.  

Se eu clicar na linha do arquivo, será mostrado um preview do conteúdo do  
arquivo:

[![preview.jpg](https://s1.postimg.org/59t5v66vun/preview.jpg)](https://postimg.org/image/2t6xg8zzy3/)

A aba `Headers` me mostra todos os `request` que foram feitos, o endereço remoto  
e várias outras coisas de rede:  

[![headers.jpg](https://s1.postimg.org/4dwofqdx9b/headers.jpg)](https://postimg.org/image/5ymff7b4pn/)

Basicamente, irei utilizar e visualizar os arquivos na aba `sources`:  

[![sources.jpg](https://s1.postimg.org/1n0dltrgkf/sources.jpg)](https://postimg.org/image/1fx5qe5b4r/)

## Usando a aba `sources` para debugar o código

## Breakpoint
Definição: um ponto de parada.  

Ele irá fazer com que, quando o JavaScript estiver fazendo a leitura do meu  
código, eu consiga parar exatamente nesse ponto.  

Eu crio um breakpoint clicando em cima do número da linha, na aba `sources`:

[![breakpoint.jpg](https://s1.postimg.org/1dftz74rb3/breakpoint.jpg)](https://postimg.org/image/8raj7ypf0b/)

No painel do lado direito consigo ver os breakpoints incluídos:

[![breakpoints_02.jpg](https://s1.postimg.org/4c65eotfpb/breakpoints_02.jpg)](https://postimg.org/image/1aa9dgs3i3/)

Ou seja, quando a minha aplicação chegar nesse ponto, ele irá parar. Se eu  
atualizar a página:

[![paused_debuger.jpg](https://s1.postimg.org/10ppqtybm7/paused_debuger.jpg)](https://postimg.org/image/6tuo04lruz/)

Ele chegou na linha `5` para fazer a leitura dela e pausou a minha aplicação  
exatamente nesse ponto.  

E naquele ponto eu consigo visualizar várias coisas que estão acontecendo no meu  
código. Basta passar o mouse por cima e ele me mostrará todos os métodos  
disponíveis para o `Array.prototype`, por exemplo:  

[![methods.jpg](https://s1.postimg.org/7upsxyzzf3/methods.jpg)](https://postimg.org/image/4wdiugrpxn/)

## Painel Call Stack

No painel `Call Stack` será mostrado a pilha de execuções que serão feitas ou  
que estão sendo feitas nesse momento:

[![call_stack.jpg](https://s1.postimg.org/77cuwh0m1r/call_stack.jpg)](https://postimg.org/image/6t6f5lsb6j/)

Ou seja, estou parado na linha `6`. Se eu clicar no próximo item, ele pula para  
a linha `11` e depois ele pula para a linha `13`.  

Ele pula da linha `6` para a linha `11` sem entrar na linha `7` por que a linha  
`7` faz parte de um `callback` e esse `callback` não é executado logo depois da  
linha `6`. A linha `6` executa as linhas `6`, `7` e `8`. É um comando só, porque  
tenho o `reduce` e a função de `callback`, juntando tudo em um só comando.  

O próximo comando é a linha `11`, que irá mostrar o `console.log()`. Ou seja,  
ele já saiu da função, que vai até a linha `9`.  

E na linha `13` ele irá finalizar a execução da `IIFE`.  

## Painel Scope
Neste painel, posso visualizar todas as variáveis que estão no meu escopo no  
momento em que eu parei o meu `Breakpoint`:

[![scope.jpg](https://s1.postimg.org/3amrmasm33/scope.jpg)](https://postimg.org/image/9hy5mgod6z/)

Neste caso, especifiquei um `breakpoint` na linha `5` e eu tenho um objeto  
`arguments`, que é um objeto da função. Ele me mostra os argumentos passados  
para a função:

[![arguments.jpg](https://s1.postimg.org/814ryvrdvj/arguments.jpg)](https://postimg.org/image/1fmy7unbwb/)

Ou seja, se ele entrou na função `sum()`, significa que ele passou pelo  
`console.log()` da linha `11`. Ele passou pelo `console.log()`, invocou a função  
`sum()` e só então caiu na linha `6`. Então se ele executou, ele já passou por  
parâmetro os argumentos da função invocada. Então, os parâmetros 0, 1 e 2  
equivalem aos argumentos `1`, `2` e `3` da função invocada.  

O `this` também está sendo mostrado como `undefined`, ou seja, ele não está  
representando a `window` por que estou usando o `'use strict'`.  

A aba `local` está me mostrando o está sendo usado dentro da função `sum()`. Ou  
seja, tudo que está dentro da função que eu possa acessar são `arguments` e o  
`this`, que eu não estou usando mas, ele está dentro da função como `undefined`.  

[![seta.jpg](https://s1.postimg.org/7yng7ol9fj/seta.jpg)](https://postimg.org/image/4t7y8qquij/)

Se eu clico nessa seta, ele irá passar para a próxima linha do meu código. Neste  
caso, a próxima linha é o fechamento da função.  

Quando clico novamente, ele passa pelo `console.log()`, clicando outra vez ele  
passa pelo fechamento da `IIFE`. Clicando mais uma vez ele entra na abertura da  
`IIFE`.  

Portanto, se eu quiser saber linha-a-linha o que está acontecendo na minha  
aplicação, um comando após o outro, devo ir clicando nessa seta.
