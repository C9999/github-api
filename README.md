## POC testes de contrato e api Github ##

## **Dependências:**
```
Node.js
```

## **Atualizando o Projeto:**

Executar o comando na raiz do projeto:
```
sudo npm install --safe
```
O comando vai instalar ou atualizar todos os frameworks utilizados no projeto, caso falhe instale manualmente:

```
sudo npm install supertest -g
sudo npm install mocha -g
sudo npm install chai -g
sudo npm install joi -g
sudo npm install joi-assert -g
sudo npm install mochawesome -g
sudo npm install @faker-js/faker -g
```


## **Execução dos testes:**
Executar o comando na raiz do projeto:
```
npm run all
```

Cada Execução gera um relatório HTML, que pode ser acessado em:
```
/mochawesome-report/mochawesome.html
```
