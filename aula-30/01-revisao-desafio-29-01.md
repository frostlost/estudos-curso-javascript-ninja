# Revisão do Desafio 29 - Parte 01

```JAVASCRIPT 
/*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, que deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */
```

```JSON 
{
  "name": "Melo's Cars",
  "phone": "(62) 8483-6920"
}
```

## Criando o `index.html` do app 

```JAVASCRIPT 
/*
- No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.
*/
```

```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Melo's Cars</title>
</head>
<body>

  <header>
    <h1>
      <span>Melo's Cars</span> -
      <span>(62) 9-8483-6920</span>
    </h1>
  </header>

  <form action="/" data-js="form-register">
    <ul>
      <li>
        <label>Imagem do carro</label>
        <input type="url" autofocus>
      </li>
      <li>
        <label>Marca / Modelo</label>
        <input type="text">
      </li>
      <li>
        <label>Ano</label>
        <input type="text">
      </li>
      <li>
        <label>Placa</label>
        <input type="text">
      </li>
      <li>
        <label>Cor</label>
        <input type="text">
      </li>
      <li>
        <button data-js="btn-submit" type="submit">Cadastrar</button>
      </li>
    </ul>
  </form>

  <table>
    <thead>
      <tr>
        <th>Imagem do carro</th>
        <th>Marca / Modelo</th>
        <th>Ano</th>
        <th>Placa</th>
        <th>Cor</th>
      </tr>
    </thead>

    <tbody>

    </tbody>
  </table>

</body>
</html>
```

`<form action="/">` - indica que a action desse formulário é a página principal  
dele mesmo.  

`<h1><span></span></h1>` - os dados do cabeçalho estão sendo colocados dentro de  
spans por que isso irá facilitar a edição, busca ou inserção desses dados via ajax.  
Vale lembrar que esses dados estão sendo adicionados manualmente apenas para a  
visualização.  

`<input type="url">` é um type do HTML5.  

