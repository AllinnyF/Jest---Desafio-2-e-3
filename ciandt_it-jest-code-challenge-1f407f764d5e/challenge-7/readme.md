# DESAFIO 7 - MUTANTES

# Dependências
$ npm i

# Executar testes
$ npm test

# Executar testes de um único arquivo
$ npm test nomeDoArquivo.spec.js

# O que é teste de mutação?
Bugs, ou mutantes , são inseridos automaticamente em seu código. Seus testes são executados para cada mutante. Se seus testes falharem , o mutante será morto . Se seus testes passaram, o mutante sobreviveu . Quanto maior a porcentagem de mutantes mortos, mais eficazes são seus testes.

# Mas espere, e a cobertura de código
Bem... a cobertura de código não diz tudo sobre a eficácia de seus testes. Pense nisso, quando foi a última vez que você viu um teste sem uma assertion, puramente para aumentar a cobertura do código? Imagine um sanduíche coberto com pasta. A cobertura do código diria que o pão está 80% coberto com pasta. O teste de mutação, por outro lado, diria que na verdade a pasta de chocolate não é bem aquilo.

1. Configure em cada desafio anterior o stryker mutator, após a configuração caso haja mutantes vivo realizar
correção deles. 
```js
module.exports = {
  mutate: [], // FILE LIST TO SCAN OR IGNORE
  testRunner: 'jest', // EXECUTION MODE
  jest: {
    config: "", //CONFIG FILE LOCATION
  },
  reporters: [] //TYPE OF REPORTS
};
```
2. Escreva um arquivo de testes unitários para o arquivo "index.js" e configure stryker mutator para validar a qualidade dos testes. (atenção pode ser necessário mudar codigo do arquivo)
