# Debug - parte 03
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
```

Utilizando o mesmo exemplo, com os breakpoints nas linhas 5, 6 e 9:

[![lines.jpg](https://s1.postimg.org/5qv8cjajbj/lines.jpg)](https://postimg.org/image/1pj8y56fyj/)

## Desativando breakpoints

Digamos que eu tenha vários breakpoints e quero pulá-los por um momento. Neste  
caso, posso utilizar o desativador de breakpoints:

[![deactivate-breakpoints.jpg](https://s1.postimg.org/1jib97yvvj/deactivate-breakpoints.jpg)](https://postimg.org/image/1cf3dscqfv/)

Ele esmaece os breakpoints e, quando eu passar para o próximo, clicando no  
`play`, ele ignora todos os breakpoints da aplicação.  

>Relembrando: o play button azul passa de breakpoint a breakpoint. Já a seta  
passa linha a linha do que o meu código está executando.  

## Acessando funções sem breakpoints específicos

Vou tirar os breakpoints das linhas 5 e 6:

[![lines.jpg](https://s1.postimg.org/732pvw5umn/lines.jpg)](https://postimg.org/image/6030l0a0qz/)

Então eu tenho o meu breakpoint na linha 9, que diz que eu tenho um `console.log`  
com uma função dentro dele. Digamos que eu queira entrar dentro dessa função  
mesmo não tendo um breakpoint nela. Posso fazer isso clicando na seta que aponta
para baixo com uma bolinha abaixo dela:  

[![next-function-call.jpg](https://s1.postimg.org/101qjlt3fz/next-function-call.jpg)](https://postimg.org/image/99sx7tnfl7/)

Caso eu queira ver de onde veio esse breakpoint (dentro da função), eu consigo  
voltar clicando na seta que aponta para cima com uma bolinha abaixo dela:

[![step-out.jpg](https://s1.postimg.org/8apl8tutvj/step-out.jpg)](https://postimg.org/image/2l48x90gcb/)

Como a função `sum()` possui outra função dentro dela, se eu clicar na seta para  
baixo, também consigo acessar o que está dentro desta segunda função:

[![down-arrow.jpg](https://s1.postimg.org/9ib6nxlwa7/down-arrow.jpg)](https://postimg.org/image/1qa1oasxpn/)

Ou seja, essa seta apontando para baixo irá entrar na próxima chamada de função  
conforme a linha em que estou parado com o breakpoint.  

## Debugando com o `console`
Também é uma forma de debugar. Ele só não irá parar a aplicação em algum  
momento.  

Se eu apenas invocar a função `sum()`, por exemplo, como saberei se ela está  
funcionando corretamente?  

[![void.jpg](https://s1.postimg.org/34yuyursvj/void.jpg)](https://postimg.org/image/162o8imajv/)

Por isso, utilizo o `console.log()` ao invocá-la.  

Lembrando que o console não pertence ao JavaScript, mas é uma `API` do browser.  
Essa `API` de console é um objeto do browser.  

Se eu chamar `console;` no console, posso ver que ele é um objeto que possui  
alguns métodos que consigo visualizar:

[![console.jpg](https://s1.postimg.org/29f4xl0uin/console.jpg)](https://postimg.org/image/1rp38zzgxn/)

Ou seja, o `console` não possui apenas o método `.log`.  

## Browsers e suas APIS de console
Cada browser possui uma `API` específica para o console.  

O DevTools é essa barra do navegador onde tenho as abas `elements`, `network`,  
etc:

[![devtools.jpg](https://s1.postimg.org/8oxaxieytr/devtools.jpg)](https://postimg.org/image/9rx08easp7/)

O Chrome, por exemplo, possui o https://developer.chrome.com/devtools que é a  
documentação dessa `API`.  

Quando eu clico em 'Using the console', algumas operações do console são  
mostradas:

[![using-the-console.jpg](https://s1.postimg.org/20le13x7jz/using-the-console.jpg)](https://postimg.org/image/690laxngcb/)

## `console.`
Se eu apenas digitar `console.`, consigo vizualizar todas as propriedades que o  
console possui:  

[![Untitled-1.jpg](https://s1.postimg.org/62mw7u713z/Untitled-1.jpg)](https://postimg.org/image/11utga06l7/)

## `console.clear();`
Limpa o histórico do console e avisa que o console foi limpo:

[![clear.jpg](https://s1.postimg.org/24hrczzskf/clear.jpg)](https://postimg.org/image/9esuo1rdjv/)

## `debugger;`
É uma propriedade de debug que posso utilizar. Ela cria um breakpoint no código.  

Funciona no `node` e no `chrome`.  

Também é específica do browser.

Meu código irá parar onde o `debugger;` foi declarado:  

```JAVASCRIPT
(function() {
    'use strict'

    function sum() {
        debugger;
        return Array.prototype.reduce.call(arguments, function(accumulated, item) {
            return accumulated + item;
        });
    }
    console.log(sum(1, 2, 3));
}());
```

[![debugger.jpg](https://s1.postimg.org/9np5g5gjj3/debugger.jpg)](https://postimg.org/image/1aecu7t4nv/)

Ou seja, ao invés de abrir a aba `sources` do console para colocar breakpoints,  
posso declará-los no próprio código.  

**Tomar cuidado para não esquecer o `debugger;` quando o código for para a  
produção**.
