# Debug - parte 02
Se eu clico na seta azul, vou para o próximo ponto do debuger:  
[![next-debbug.jpg](https://s1.postimg.org/24a3q35wxr/next-debbug.jpg)](https://postimg.org/image/5d97mqtekb/)

Como neste caso eu não tenho mais nenhum ponto de debug (breakpoint), ele  
simplesmente sai da aplicação.

Quando eu coloco um debug na linha `11`, ele irá passar pela linha `11` antes de  
passar pela linha `5`:

[![image.jpg](https://s1.postimg.org/8cb0ildtq7/image.jpg)](https://postimg.org/image/8fumgb6wfv/)

**A partir daqui, modifiquei as linhas para que ficassem similares às do código  
do professor**:

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

Quando o debugger para em uma linha, significa que ele executou a linha anterior.

[![execucao.jpg](https://s1.postimg.org/80n6gqn9of/execucao.jpg)](https://postimg.org/image/6u3v84yd2z/)

Ou seja, ele executou a linha **4** e parou na linha **5** sem executá-la. Não  
consigo colocar um breakpoint na linha da função `function sum()` por que ele  
irá sempre executar uma linha antes. Também não consigo colocar debbuger em uma  
linha em branco.  

Clicando na seta azul, quando ele executar a função na linha **9**, ele irá cair  
dentro da função (breakpoint da linha **5**).  

Quando eu coloco um breakpoint na linha 6 e ele cair nela, eu posso ver os  
valores exatos a cada momento que ele entrar na função:

[![valores.jpg](https://s1.postimg.org/9n4qf2j5nj/valores.jpg)](https://postimg.org/image/6osgbkaw63/)

Ou seja, ele me mostrou os valores de `accumulated` e `item` (2 primeiros items  
do array).  

Se eu clicar na seta, os valores `accumulated` e `item` serão atualizados para  
que eu visualize:

[![valores.jpg](https://s1.postimg.org/2ezhevh66n/valores.jpg)](https://postimg.org/image/4dvo57moi3/)

Após eu clicar na seta até o fim da execução, o valor é mostrado na aba  
`console`.  

>É interessante entender que com os breakpoints eu posso parar em partes  
específicas do código para entender o que está acontecendo nelas.

## Console no debbuger

Um outro ponto interessante é que, quando eu estou parado no debbuger, quando  
aperto `esc`, a aba do console é aberta para mim:

[![console.jpg](https://s1.postimg.org/60r9fisc73/console.jpg)](https://postimg.org/image/1sc25p23ej/)

E quando ele abre o console, tenho acesso à todas as variáveis globais e locais.  

Se eu sair do debug, e tentar pegar o valor de `accumulated` na aba console:  

[![accumulated.jpg](https://s1.postimg.org/6bqumunpu7/accumulated.jpg)](https://postimg.org/image/427u3d2zd7/)

Ele diz que acumulated is not defined, por que essa variável está dentro do  
método `reduce`.  

Mas, se eu ativar o modo debug, quando eu chegar na linha do  
`return accumulated + item;`, ele terá executado a linha de cima (onde  
`accumulated`) foi declarada. Neste segundo `return`, já tenho disponível o  
valor de `acumulated` e de `item`:

[![values.jpg](https://s1.postimg.org/9sip7ah8cv/values.jpg)](https://postimg.org/image/3e43bozbt7/)

E eu vou ter acesso a todas as variáveis locais no console. Se eu chamar as  
variáveis `accumulated` e `item`, já vou ter acesso aos valores delas,  
temporariamente, até que eu saia desse breakpoint:

[![values.jpg](https://s1.postimg.org/7uc19amdpb/values.jpg)](https://postimg.org/image/56mkyxtcd7/)

E esses valores são mutáveis de acordo com que eu clico na seta:  

[![mutable-vars.jpg](https://s1.postimg.org/9mhridfw1b/mutable-vars.jpg)](https://postimg.org/image/1qx0l0tuqz/)

Se eu tentar verificar o `accumulated` fora do breakpoint da linha `6`, um erro  
será mostrado pois, como `accumulated` é local, ele só existe dentro da função  
na linha do `reduce`:

[![not-defined.jpg](https://s1.postimg.org/2y5ulyrwzz/not-defined.jpg)](https://postimg.org/image/6e86e21k23/)

Ou seja, o valor de `accumulated` só está disponível enquanto eu estiver parado  
no breakpoint local.  

Atalhos do console: `ctrl + l` limpa o console e `ctrl + u` limpa a linha.  
