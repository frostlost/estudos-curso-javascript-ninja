# Revisão do desafio da semana #23 e Modularização de código - Parte 04

## Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no input (continuação)
Vou fazer então um `reduce` com os matches da regex, fazendo com que o valor  
acumulado seja o primeiro item do array regex e o valor atual seja o segundo  
item:

```JAVASCRIPT
function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperation($visor.value);
    var regex = $visor.value.match(/\d+[+x÷-]?/g);
    var result = regex.reduce(function(accumulated, actual) {

    });
}
```
