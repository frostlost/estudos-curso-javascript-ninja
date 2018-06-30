## Expressões
Expressões em JS são uma frase que pode ser avaliada e produzir um certo valor:

```javascript
var x = 0;
x;

// 0
```

Espaços em branco não fazem diferença em js. Posso usar ou não. Por convenção, é  
usado um espaço entre os números e operadores aritméticos, para que o código  
fique mais legível.

```javascript
856965 * 6965856 + 85;
```

## Operadores aritméticos
- + adição
- - subtração
- * multiplicação
- / divisão

## Operadores aritméticos abreviados
- `++`
  - Soma mais um ao valor em questão
  - ++ depois do valor
  ```javascript
  let soma = 10 + 10;
  soma++;
  soma;

  // 21
  // É o mesmo que fazer soma = soma + 1;
  // Ou seja, ele faz o **pós incremento**. Ele avaliou o valor da variável e  
  // depois adicionou + 1
  ```
  - ++ antes do valor
  ```javascript
  let soma = 10 + 10;
  ++soma;

  // 21
  // **Pré incremento**. Ou seja, adicionou + 1 e depois interpretou o valor da  
  // variável
  ```

- `--`
Funciona exatamente igual ao `++`

- `+=` Pega todo o valor que uma variável já tem e soma pelo valor que eu  
especifiquei
```javascript
let soma = 20;
soma += 20;

// 40
// É o mesmo que soma = soma + 20;
```

- `-=` Pega todo o valor que uma variável já tem e diminui pelo valor que eu  
especifiquei
```javascript
let soma = 20;
soma -= 10;

// 10
// É o mesmo que soma = soma - 10;
```

- `*=` Pega todo o valor que uma variável já tem e multiplica pelo valor que eu  
especifiquei

- `/=` Pega todo o valor que uma variável já tem e divide pelo valor que eu  
especifiquei
