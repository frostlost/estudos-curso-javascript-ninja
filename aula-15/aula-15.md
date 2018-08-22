# Introdução à JavaScript no browser 

# `<script>` dentro de `<head>`
- Perde performance
- O browser irá ler todo o script primeiro 
  - Só irá carregar a página depois de ler o script 
- Sempre utilizar o script no fim do body 

# Por que utilizar script externo 
- `<script src="url...">`
- Por que possibilita que o navegador faça cache 
  - Na próxima vez que a página for acessada, o script será pego  
  da memória, não será necessário carregá-lo novamente 
- Caso o script apenas seja escrito dentro das tags script,  
toda vez que o navegador baixar o index.html, o script também  
será baixado (`<script>...</script>`)
