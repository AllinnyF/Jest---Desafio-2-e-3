# DESAFIO 5 e 6 - EXTENDS 

# Dependências
$ npm i

# Executar testes
$ npm test

# Executar testes de um único arquivo
$ npm test nomeDoArquivo.spec.js

Você pode usar expect.extend para adicionar seus próprios "matchers" em Jest. Por exemplo, vamos dizer que você esta testando uma biblioteca de números e você esta frequentemente afirmando que os números aparecem em intervalos específicos de outros números. You could abstract that into a toBeWithinRange matcher:

1. Usando testSetup.js crie um matchers especifico para o arquivo "core.js" e "calculadora.js". Atenção: Não mexa no código do arquivo, ele não é foco do exercício.

2. Usando testSetup.js crie um matchers especifico para o arquivo "mongo-client.js, repositorio.js, final.js e factory.js". Atenção: Não mexa no código do arquivo, ele não é foco do exercício.
