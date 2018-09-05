# Regex - Expressões Regulares
Existem em várias outras linguagens. Será visto o básico. 

**Expressões regulares servem para manipular strings**. Evitam  
a utilização de loops e deixam o código menor e, caso o  
desenvolvedor conheça expressões regulares, o código fica  
mais legível. 

São um tipo primitivo em JS. 

- Sintaxe: `/expression/`.

Uma boa ferramenta para testes online é o [regex101](https://regex101.com/). Ao  
utilizá-lo, é importante marcar a opção JavaScript como linguagem,  
em 'flavor.

Para pegar todas as letras 'M' de um texto, basta utilizar a expressão  
`/M/`. A regex irá fazer um match da expressão regular com o texto em  
questão. 

![image](https://user-images.githubusercontent.com/29297788/45066912-0083fb80-b097-11e8-825e-3005a0b07d85.png)

> Apenas a primeira letra maiúscula do texto foi capturada, pois a expressão  
regular faz match com apenas um único caractere. 

Até aqui, a regex está sendo testada apenas com caracteres literais; letras  
e números que representam a si próprios. 

## Flags
### flag `g` - global
A flag `g` (global) faz com que a expressão regular busque todos os  
resultados possíveis na string. 

![image](https://user-images.githubusercontent.com/29297788/45067091-de3ead80-b097-11e8-9e8b-0ea033b333aa.png)

> É importante perceber que, no exemplo acima, o que está sendo passado  
dentro da expressão regular é: **faça um match de um caractere 'd'**  
**seguido de um caractere 'e'**. 

### flag `i` - insensitive
Expressões regulares são case sensitive. Para que essa diferenciação  
seja ignorada, é possível passar a flag `i`.

Fazendo um match com todos os 'c' da string, maiúsculos e minúsculos: 

![image](https://user-images.githubusercontent.com/29297788/45067381-55c10c80-b099-11e8-91df-c267fadae0fd.png)

`//gi` é uma combinação comumente utilizada ao se criar expressões  
regulares. 

### Atribuindo regexp à variáveis
Como a expressão regular é um tipo em JS, é possível atribuí-la à  
uma variável. 

```javascript
const regex = /m/

regex
// /m/
```

## `.match()` - Método de string 
Tenta fazer o match de uma string com uma expressão regular. Retorna  
os valores como itens de um array. 

Exemplo do método `match()` retornando todos os `'de'` maiúsculos e  
minúsculos de uma string: 

```javascript
const myText = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai'

myText.match(/de/gi)

[ 'de', 'de', 'de', 'de', 'de', 'de'...]
```

# `RegExp()` - Objeto
Da mesma forma que é utilizado o tipo primitivo `//g`, é possível  
utilizar o objeto `RegExp()`.
