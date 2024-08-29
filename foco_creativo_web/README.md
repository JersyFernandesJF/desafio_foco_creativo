# Foco Criativo Web

**Foco Criativo Web** é uma aplicação desenvolvida com Next.js como parte de um teste para a empresa Foco Criativo. A aplicação permite que os usuários façam login com o Google e armazena informações no PocketBase, que atua como o backend da aplicação.

## Tecnologias Utilizadas

- **Next.js**: Framework utilizado para o desenvolvimento da aplicação web.
- **PocketBase**: Backend utilizado para autenticação e armazenamento dos dados.

## Pré-requisitos

Antes de executar o projeto, é necessário que o backend esteja configurado e rodando. Certifique-se de seguir os passos abaixo corretamente.

### Link do Backend

O backend da aplicação utiliza o PocketBase. Antes de executar a aplicação, acesse o backend neste link:

[Backend do PocketBase](#) <!-- Insira o link real aqui -->

> **Nota**: O backend precisa estar em execução antes de iniciar a aplicação.

## Configuração do Ambiente

Antes de rodar a aplicação, é necessário configurar o arquivo `.env` com as variáveis de ambiente corretas.

### Criação do Arquivo `.env`

Crie um arquivo `.env.local` na raiz do projeto Next.js e adicione as seguintes variáveis de ambiente:

env
AUTH_GOOGLE_ID=755410845988-p7lmpgc57q12g2st5q28s2fbfer0bhoc.apps.googleusercontent.com
AUTH_GOOGLE_SECRET=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
NEXT_PUBLIC_API_URL=http://127.0.0.1:8090
NEXT_PUBLIC_API_REDIRECT=http://localhost:3000/api/auth/callback/google
NEXT_PUBLIC_API_REDIRECT_APPLE=http://127.0.0.1:8090/auth/callback/
AUTH_POCKETDB_USER_NAME=jersysilvafernandes@gmail.com
AUTH_POCKETDB_PASSWORRD=Ii13a2019!


Certifique-se de substituir `your_google_client_id`, `your_google_client_secret` e `your_pocketbase_url` pelos valores corretos das suas credenciais.

## Instalação e Execução

### Passo 1: Instalar Dependências

Utilize o gerenciador de pacotes de sua preferência para instalar as dependências do projeto. Execute um dos comandos abaixo:

bash
# Com Yarn
yarn install

# Com NPM
npm install


### Passo 2: Inicializar o Backend

Certifique-se de que o backend está rodando e acessível antes de iniciar a aplicação.

### Passo 3: Executar a Aplicação

Para rodar a aplicação Next.js, utilize o comando abaixo:

bash
# Com Yarn
yarn dev

# Com NPM
npm run dev


> **Nota**: Certifique-se de que as variáveis de ambiente estão corretamente configuradas no arquivo `.env.local` para que a aplicação funcione corretamente.

## Screenshots da Aplicação

Adicione aqui screenshots mostrando a aplicação em execução para ajudar na visualização do sistema.

- **Screenshot 1**:  
  ![Screenshot 1](path_to_screenshot_1) <!-- Insira o caminho da imagem -->

- **Screenshot 2**:  
  ![Screenshot 2](path_to_screenshot_2) <!-- Insira o caminho da imagem -->