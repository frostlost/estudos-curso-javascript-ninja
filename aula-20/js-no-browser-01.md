# JS no browser - Selecionar elementos do DOM

## IIFE - Passando parâmetros
Relembrando: uma IIFE é uma função auto executável. 
Agora será mostrado como eu posso passar parâmetros para ela 
e por quê eu deveria passar parâmetros para ela.

```javascript

(function() {

    'use strict';



}());

```

Aqui tenho, basicamente, a minha IIFE (inclusa em um arquivo 
index.html para que o script seja testado no browser).

Em aulas passadas foi mostrado que, no browser, tenho o objeto 
window:

```javascript
window; // retorna o objeto window
```

O objeto window é referência à janela do navegador e possui 
várias propriedades e métodos pendurados nele. Ele é um objeto 
global.

Quando eu preciso utilizar um objeto global ou algo que está 
fora do meu alcance local, que não está dentro da minha 
estrutura local (IIFE acima), eu posso passá-lo como parâmetro 
para a minha IIFE. Da mesma forma que eu executo a IIFE 
utilizando os parânteses no final dela, 

```javascript
();
```
eu posso passar parâmetros para a IIFE que são globais na minha 
aplicação, para acessá-los de forma local, dentro da IIFE. Já 
vimos que, em Javascript, o escopo é a função em que o código 
está inserido.

Sempre eu crio uma variável fora de uma função, é possível 
acessá-la dentro de qualquer função que esteja no mesmo escopo. 
O mesmo não acontece para variáveis criadas dentro de funções. 

Sempre que eu crio uma variável dentro de uma função, essa 
variável não está acessível fora dela. E qualquer variável 
criada dentro de uma função, que tenha o mesmo nome de uma 
variável criada fora dessa função (em escopo global), a 
variável mais interna terá precedência sobre a variável externa.

Um exemplo seria o seguinte:

```javascript

var name = 'daciuk';

function myFunction() {

    var name = 'arroz';
    console.log( name ); // 'arroz'
}

console.log( name ); // 'daciuk'

```

No código acima, temos duas variáveis "name": uma criada dentro 
da função, e outra criada fora da função. Quando eu uso o 
console.log dentro da função, é mostrado o valor da variável 
interna. E quando eu chamo o console.log fora da função, o valor 
é da variável externa. Ou seja: dentro da função, ainda que eu 
crie uma variável com o mesmo nome da variável de fora, essa 
terá precedência.

Agora, sobre a IIFE: quando tenho objetos globais, posso 
passá-los por parâmetro para a IIFE, para que esses parâmetros 
sejam uma representação do objeto externo (global), mas usados 
de forma local. Isso tem várias vantagens que serão mostradas 
em uma aula futura, como minificação de código, por exemplo :)

Mas a ideia é: sempre que eu tiver objetos globais, e precisar 
usá-los dentro da IIFE, não usar diretamente o objeto global. 
Devo passá-lo por parâmetro, e usá-lo como uma referência local:

```javascript

(function(win) {

    'use strict';

    console.log(win === window);

}(window));

```

O código acima mostra uma mensagem "true" no console, pois "win" 
é uma referência local ao objeto window global.

## if / while / for com uma linha não precisam das chaves

Outro assunto falado nesses 5 minutos foi sobre como posso utilizar 
if's de uma única linha sem a necessidade das chaves. Nos meus 
códigos, devo procurar evitar ao máximo utilizar if's. E, sempre 
que necessário, devo ao máximo evitar else, pois isso deixa o 
código mais complexo e difícil de entender.

E sempre que eu utilizar if, devo tentar manter o código dentro 
do if pequeno, com no máximo uma única linha (em breve será mostrado 
como posso fazer isso na maior parte dos casos) :smile:

E para esses casos, sempre que eu usar if's de uma única linha, posso 
simplificar o seu uso, removendo as chaves. O mesmo vale para "while" e 
"for". Alguns exemplos:

```javascript
(function(win) {

    'use strict';

    if(win === window)

        console.log('win é uma referência local à window');

}(window));
```

Executando o código acima, posso ver que a mensagem "win é uma referência 
local à window" é mostrada no console, pois a condição é válida 
(é avaliada como true).

Para garantir que está realmente funcionando, posso inverter a condição:

```javascript
(function(win) {

    'use strict';

    if(win !== window)

        console.log('win é uma referência local à window');

}(window));
```
Agora nada é logado no console!

E para ver que, sem as chaves, só a primeira linha é avaliada, posso 
testar o seguinte:

```javascript
(function(win) {

    'use strict';

    if(win !== window)

        console.log('win é uma referência local à window');
        console.log('Essa mensagem sempre é mostrada');

}(window));
```

Olhando a indentação, parece que os dois console.log estão dentro do 
if, mas na verdade, como ele está sem as chaves, somente o primeiro 
será avaliado dentro do if. A outra mensagem sempre será mostrada!

Devo tomar muito cuidado ao utilizar if's de uma única linha, por 
conta da dificuldade de leitura que isso pode causar, mas mantendo 
minhas funções pequenas, isso dificilmente será um problema. Tudo 
depende do código onde irei aplicar essa regra. Se tenho uma função 
muito grande (mais de 8 linhas), então esse formato pode começar a 
se tornar um problema.

Em breve será falado sobre boas práticas de como aplicar tudo o 
que estou aprendendo em projetos reais!

## Métodos do Objeto window
### window.alert
Este objeto mostra uma mensagem na tela. 
```javascript
(function(win) {

    'use strict';

    window.alert('Mensagem');

}(window));
```
O alert é a caixinha que aparece mostrando a mensagem. Dificilmente é 
necessário usar o alert atualmente, devido ao poder do CSS, que me 
permite usar divs e customizar a mensagem. O alert bloqueia a 
navegação. Mas é interessante saber que ele existe e entendê-lo mas, 
não necessáriamente irei utilizá-lo. É o mesmo caso do with, que está 
sendo removido do JavaScript devido aos seus problemas.

#### window.alert('mensagem') ou apenas alert('mensagem')
Tudo o que estiver no window pode ser chamado sem eu chamar 'window':

```javascript
(function(win) {

    'use strict';

    alert('Mensagem');

}(window));
```

Posso chamar os métodos do window sem especificar que ele é um 
método  do window, chamando diretamente uma função, que são 
as funções globais: 

```javascript
alert('Mensagem');
```

O código acima funcionará da mesma forma, como se eu estivesse 
utilizando o window. antes da função. 

O window funciona desta forma por que eu não preciso referenciar 
os objetos globais. Se eu não referencio, o JavaScript irá 
entender que eu estou tentando puxar aquela propriedade de 
window. 

Portanto, não é obrigatório o uso do window antes das 
propriedades.

### window.prompt
Esse método faz uma pergunta ao usuário e espera uma resposta. 

```javascript

(function(win) {

    'use strict';

    prompt('Mensagem?');

}(window));

```

Daqui a pouco será visto para onde foi a resposta digitada 
pelo usuário.

Portanto, a ideia do prompt é que ele lança uma pergunta na tela 
que eu consiga responder, ou que eu cancele, ou que eu dê "ok".

#### Como posso utilizar essa mensagem? 
Posso colocá-la em um if, por exemplo, e fazer algo se a 
resposta for ok ou não: 

```javascript

(function(win) {

    'use strict';

    if(prompt('Pergunta?'))
        console.log('resposta ok!');
    else
        console.log('resposta não ok!');

}(window));


```

Se eu der uma resposta e clicar em ok, 'resposta ok!' será 
logado no console. Se eu clico em cancelar, 'resposta não ok!' 
será logado no console. Se eu não der nenhuma resposta e 
clicar em ok, 'resposta não ok!' será logado no console.

Observando que, da mesma forma que eu uso o if de uma linha, 
posso usar também o else de uma linha, que também não precisa 
das chaves.

Se eu adicionar um console.log() abaixo do else, ele sempre 
será mostrado no console, pois ele não está dentro do if nem 
do else:

```javascript

(function(win) {

    'use strict';

    if(prompt('Pergunta?'))
        console.log('resposta ok!');
    else
        console.log('resposta não ok!');
    console.log('sempre será mostrado');

}(window));

```

O código acima retorna 'resposta não ok!' e 'sempre será 
mostrado' pois o if e o else só entendem uma linha 
quando eu não utilizo as chaves. 

Posso utilizar as chaves por segurança. A ideia é que eu 
não precise utilizar else, que seja utilizado no máximo 
um if. Em alguns casos, talvez eu precise do else mas, 
devo evitá-lo ao máximo. E, caso eu precise utilizar 
if's, usar no máximo uma única linha.
