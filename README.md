# Cypress Test Suite - Automation Exercise

Projeto de testes automatizados em Cypress para três desafios de automação no site automationexercise.com.

## Desafios Implementados

### Desafio 01: Registro E2E

Fluxo completo de registro de novo usuário:
- Preenchimento de formulário com dados dinâmicos via Faker
- Data de nascimento, país e informações pessoais aleatórias
- Validação de sucesso do registro com mensagem de confirmação

**Arquivo:** `cypress/e2e/register/register.cy.js`

### Desafio 02: Manipulação de Inventário

Validação de carrinho de compras:
- Navegação até página de produtos
- Seleção do primeiro produto
- Adição de 4 unidades ao carrinho
- Validações de carrinho: carregamento, quantidade exata, produto correto, cálculo de preço total

**Arquivo:** `cypress/e2e/cart/cart.cy.js`

### Desafio 03: API

Validação de endpoint de produtos:
- Requisição GET para `/api/productsList`
- Validação de status HTTP 200
- Validação de resposta e estrutura de dados
- Verificação de campos obrigatórios em cada produto (id, name, price, category)

**Arquivo:** `cypress/e2e/api/products.cy.js`

## Arquitetura

### Page Object Model

- **HomePage:** Navegação e validações da página inicial
- **SignupPage:** Interações com formulário de registro
- **AccountInformationPage:** Preenchimento de informações da conta
- **ProductsPage:** Navegação de produtos e adição ao carrinho
- **CartPage:** Validações do carrinho com parsing de preços

### Helpers

**parsePrice():** Função reutilizável para parsing de preços no formato "Rs. XXX"

## Como Executar

### Instalação

```bash
npm install
```

### Rodar todos os testes

```bash
npm test
```

### Abrir Cypress em modo interativo

```bash
npx cypress open
```

### Rodar teste específico

```bash
npx cypress run --spec "cypress/e2e/register/register.cy.js"
```

## Dependências

| Dependência | Versão |
|---|---|
| cypress | 15.15.0 |
| @faker-js/faker | 10.4.0 |

## Configuração

### cypress.config.js

| Configuração | Valor |
|---|---|
| baseUrl | https://automationexercise.com |
| viewport | 1440x900 |
| defaultCommandTimeout | 10000 ms |
| retries | 1 (headless mode) |
| video | true (em caso de falha) |
| screenshotOnFailure | true |

## Estrutura de Arquivos

```
cypress/
├── e2e/
│   ├── register/
│   │   └── register.cy.js
│   ├── cart/
│   │   └── cart.cy.js
│   └── api/
│       └── products.cy.js
├── pages/
│   ├── HomePage.js
│   ├── SignupPage.js
│   ├── AccountInformationPage.js
│   ├── ProductsPage.js
│   └── CartPage.js
├── support/
│   ├── e2e.js
│   └── helpers.js
└── fixtures/
    └── example.json

cypress.config.js
.gitignore
package.json
README.md
```

## Validações Implementadas

### Register

- Signup form preenchido com dados aleatórios
- Dados dinâmicos via Faker: email, nome, senha
- Data de nascimento aleatória (dia 1-28, mês, ano 1980-2005)
- País selecionado aleatoriamente de lista predefinida
- Validação de mensagem "Account Created!"

### Cart

- Página de carrinho carregada com tabela visível
- Quantidade exata (4 unidades) validada com `.to.equal()`
- Produto correto listado e não vazio
- Preço unitário validado (maior que zero)
- Total calculado corretamente (unitário × quantidade)

### API

- Status HTTP 200 retornado
- Response body existe e não é nulo
- Array de produtos retornado na resposta
- Cada produto contém campos obrigatórios: id, name, price, category

## Artifacts

**Videos:** Gravações de testes salvos em `cypress/videos/` quando ocorrem falhas

**Screenshots:** Capturas de tela salvas em `cypress/screenshots/` quando ocorrem falhas

## Troubleshooting

Se os testes falharem, verifique:

1. Conexão com internet (testes usam site externo)
2. Acessibilidade do site automationexercise.com
3. Compatibilidade com viewport de 1440x900
4. Vídeos e screenshots em `cypress/videos/` e `cypress/screenshots/`

## Notas Técnicas

- Testes seguem padrão **Page Object Model** para separação de concerns
- **Faker** utilizado para dados dinâmicos, sem hardcoding de valores
- **Helpers** centraliza lógica reutilizável (parsePrice)
- Configuração minimalista com apenas elementos necessários
- Sem custom commands: Page Objects suficientes para todas as interações
