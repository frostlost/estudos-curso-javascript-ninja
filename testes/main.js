let pessoa = {
  name: 'roger',
  age: 29,
  height: 1.69,
  weight: 70
};

pessoa.cor = 'caucasiano';
// atribuiu uma nova propriedade ao objeto pessoa

pessoa.aniversario = function() {
  pessoa.age++;
};
// atribuiu um novo método ao objeto pessoa

pessoa.aniversario();

pessoa.sobrenome = 'melo';

pessoa.fullName = function() {
  return `${pessoa.name} ${pessoa.sobrenome}`;
};

console.log(pessoa);
