<h1 align="center">Automação de teste API com cucumber e cypress</h1>

O projeto realizado tem como objetivo manipular cadastro de usuários utilizando Cypress (ferramenta de automação de testes que utiliza JavaScript).

### Funcionalidades

- [x] Cadastro de usuário
- [x] Alteração de usuário
- [x] Exclusão de usuário

### Pré-requisitos, instalação e rodar os testes:

Antes de começar, é necessário ter instalado em sua máquina as seguintes ferramentas:
    [Node.js](https://nodejs.org/en/download/package-manager/)
    [NPM](https://www.npmjs.com/get-npm)
    [Editor de texto](https://code.visualstudio.com/)

* **Instalação Cypress**
    ***Cypress- <i>npm install cypress</i>***

* **Sobre o projeto:**
    ***Na pasta cypress > integration - Está a feature de teste***
    ***Na pasta cypress > support > steps - Está o arquivo responsável por interpretar os steps da feature***

* **Como rodar o projeto:**
    **Pelo terminal:**
        ***<i>npx cypress run</i>***
    **Pelo loader do Cypress**
        ***<i>npx cypress open</i>***
        ***Clicar em user.feature***

![alt text](image/success-test.png)