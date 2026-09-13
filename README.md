# Cypress Web Automation

Projeto de automação de testes end-to-end para o fluxo de cadastro do site Automation Practice.

## Tecnologias

- Node.js e npm
- Cypress
- JavaScript
- Faker.js para geração de dados aleatórios
- Cypress Mochawesome Reporter para relatórios HTML
- GitHub Actions para execução automatizada

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/andrediasgustavo/cypress-web-automation.git
cd cypress-web-automation
npm install
```

Para uma instalação reproduzível, como no GitHub Actions, use:

```bash
npm ci
```

## Executar os testes

Para executar os testes de cadastro em modo headless:

```bash
npm test
```

Ou execute o script específico:

```bash
npm run test:signup
```

Para abrir o Cypress no modo interativo:

```bash
npx cypress open
```

## Relatório HTML

Após a execução, o relatório HTML é gerado em:

```text
cypress/reports
```

No GitHub Actions, o relatório é enviado como artifact com o nome `cypress-signup-report` e fica disponível por 2 dias.

## GitHub Actions

O workflow em `.github/workflows/cypress-signup.yml` executa automaticamente os testes em cada `push` e `pull_request`. O relatório é preservado como artifact mesmo quando algum teste falha.