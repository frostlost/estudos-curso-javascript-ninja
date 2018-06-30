## Operadores de igualdade
Irão testar se um valor é igual ou diferente de outro.

- `==` igual a
  - sempre retorna `true` or `false`
  - É problemático pois o JS faz conversão de tipos. Ou seja, ele irá tentar  
  converter um valor para verificar se ele é igual ao outro valor que está sendo  
  testado:

```javascript
let stringUm = '1';
let numberUm = 1;

stringUm == numberUm;
// true

'1' == 1;
/* true  - converteu a string '1' para 1 (number)*/
```

- `!=` diferente de
  - sempre retorna `true` or `false`

- `===` igual a, e do mesmo tipo
  - Irá testar também o tipo do dado
  - sempre usar essa notação

- `!==` diferente, mas do mesmo tipo
  - sempre usar essa notação

```javascript
1 !== '1';
// true
```

## Operadores relacionais
Fazem relação entre valores.

- `>` maior que

- `<` menor que

- `>=` maior ou igual a
```javascript
1000 >= 1000;
// true
```

- `<=` menor ou igual a
```javascript
500 <= 501;
// true
```
