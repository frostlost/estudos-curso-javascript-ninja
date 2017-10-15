# Revisão do desafio da semana #23 (mini-calculadora)
```JAVASCRIPT
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
```

## HTML básico da calculadora
### Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input diretamente
Neste caso, posso utilizar a propriedade `readonly`, que faz com que o input  
seja apenas de leitura, impossibilitando que haja entrada de dados:

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 23</title>
</head>
<body>

    <input type="text" readonly>

    <script src="challenge-23.js"></script>
</body>
</html>
```

### O input deve iniciar com valor zero
Posso especificar que o valor inicial do input seja `0`, com a propriedade  
`value="0"`:

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 23</title>
</head>
<body>

    <input type="text" readonly value="0">

    <script src="challenge-23.js"></script>
</body>
</html>
```

### Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número
Primeiro, vou fazer uma div que irá envolver todos os botões com números:
```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 23</title>
</head>
<body>

    <input type="text" readonly value="0">

    <div class="number-buttons">
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
    </div>

    <script src="challenge-23.js"></script>
</body>
</html>
```

### Deve haver 4 botões para as operações principais: soma (+), subtração(-), multiplicação(x) e divisão(÷)
Vou envolver os botões das operações em uma div também:

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 23</title>
</head>
<body>

    <input type="text" readonly value="0">

    <div class="number-buttons">
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
    </div>

    <div class="operation-buttons">
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>÷</button>
    </div>

    <script src="challenge-23.js"></script>
</body>
</html>
```

### Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE" que irá limpar o input, deixando-o com valor 0
Botão `=` e `ce` incluídos:

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 23</title>
</head>
<body>

    <input type="text" readonly value="0">

    <div class="number-buttons">
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
    </div>

    <div class="operation-buttons">
        <button>+</button>
        <button>-</button>
        <button>x</button>
        <button>÷</button>
        <button>=</button>
        <button>ce</button>
    </div>

    <script src="challenge-23.js"></script>
</body>
</html>
```

## Especificando atributos no HTML para acessar seus elementos com JavaScript

### A cada número pressionado, o input deve atualizar concatenando cada valor digitado, como em uma calculadora real
Vou acrescentar então atributos `data-js` no `input`, e nos `buttons`. Lembrando  
que o `data-js` deve ser usado ao invés do `id` e `class`, que podem trazer  
efeitos colaterais.  

Uma grande sacada é que o `button` também pode ter um atributo `value`. Isso irá  
me ajudar mais tarde, quando for preciso passar os valores dos botões para o  
input:

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Challenge 23</title>
</head>
<body>

    <input type="text" readonly value="0" data-js="visor">

    <div class="number-buttons">
        <button data-js="button-number" value="0">0</button>
        <button data-js="button-number" value="1">1</button>
        <button data-js="button-number" value="2">2</button>
        <button data-js="button-number" value="3">3</button>
        <button data-js="button-number" value="4">4</button>
        <button data-js="button-number" value="5">5</button>
        <button data-js="button-number" value="6">6</button>
        <button data-js="button-number" value="7">7</button>
        <button data-js="button-number" value="8">8</button>
        <button data-js="button-number" value="9">9</button>
    </div>

    <div class="operation-buttons">
        <button data-js="button-operation" value="+">+</button>
        <button data-js="button-operation" value="-">-</button>
        <button data-js="button-operation" value="x">x</button>
        <button data-js="button-operation" value="÷">÷</button>
        <button data-js="button-equal" value="=">=</button>
        <button data-js="button-ce" value="ce">ce</button>
    </div>

    <script src="challenge-23.js"></script>
</body>
</html>
```

Obs.: Os botões `=` e `ce` não possuem o atributo `data-js="button-operation"`  
por que não precisam ser mostrados no visor. 
