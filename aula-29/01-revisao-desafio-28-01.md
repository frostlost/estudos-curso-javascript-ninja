# Revisão desafio da semana #28 - Parte 1

```JAVASCRIPT 
/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha os campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */
  ```
## Crie um formulário com um input de texto que receberá um CEP e um botão de submit 

```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Challenge 28</title>
</head>
<body>

  <form data-js="form-cep">
    <input type="text" data-js="input-cep" autofocus>
    <button data-js="btn-consulta-cep">Consultar CEP</button>
  </form>

  <script src="challenge-28.js"></script>

</body>
</html>
```

## Crie uma estrutura HTML para receber informações de endereço: "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão preenchidas com os dados da requisição feita no JS 

```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Challenge 28</title>
</head>
<body>

  <form data-js="form-cep">
    <input type="text" data-js="input-cep" autofocus>
    <button data-js="btn-consulta-cep">Consultar CEP</button>
  </form>

  <div data-js="cep-fields">
    <p><strong>Logradouro:</strong> <span data-js="logradouro">-</span></p>
    <p><strong>Bairro:</strong> <span data-js="bairro">-</span></p>
    <p><strong>Estado:</strong> <span data-js="estado">-</span></p>
    <p><strong>Cidade:</strong> <span data-js="cidade">-</span></p>
    <p><strong>CEP:</strong> <span data-js="cep">-</span></p>
  </div>

  <script src="challenge-28.js"></script>

</body>
</html>
```

## Crie uma área que receberá mensagens com o status da requisição: "Carregando, sucesso ou erro." 
```HTML 
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Challenge 28</title>
</head>
<body>

  <form data-js="form-cep">
    <input type="text" data-js="input-cep" autofocus>
    <button data-js="btn-consulta-cep">Consultar CEP</button>
  </form>

  <div>
    <h2 data-js="status-msg"></h2>
  </div>

  <div data-js="cep-fields">
    <p><strong>Logradouro:</strong> <span data-js="logradouro">-</span></p>
    <p><strong>Bairro:</strong> <span data-js="bairro">-</span></p>
    <p><strong>Estado:</strong> <span data-js="estado">-</span></p>
    <p><strong>Cidade:</strong> <span data-js="cidade">-</span></p>
    <p><strong>CEP:</strong> <span data-js="cep">-</span></p>
  </div>

  <script src="challenge-28.js"></script>

</body>
</html>
```
