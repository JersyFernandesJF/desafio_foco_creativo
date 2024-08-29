markdown

# Foco Criativo Mobile

**Foco Criativo Mobile** é um aplicativo desenvolvido com React Native como parte de um teste para a empresa Foco Criativo. O aplicativo permite que os usuários façam login com o Google e armazena informações no PocketBase, que atua como o backend da aplicação.

## Tecnologias Utilizadas

- **React Native**: Framework utilizado para o desenvolvimento mobile.
- **PocketBase**: Backend utilizado para autenticação e armazenamento dos dados.

## Pré-requisitos

Antes de executar o projeto, é necessário que o backend esteja configurado e rodando. Certifique-se de seguir os passos abaixo corretamente.

### Link do Backend

O backend da aplicação utiliza o PocketBase. Antes de executar o aplicativo, acesse o backend neste link:

[Backend do PocketBase](#) <!-- Insira o link real aqui -->

> **Nota**: O backend precisa estar em execução antes de iniciar o aplicativo.

## Configuração do Ambiente

Antes de rodar o aplicativo, é necessário configurar o arquivo `.env` com as variáveis de ambiente corretas.

### Criação do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto mobile e adicione as seguintes variáveis de ambiente:

env
POCKET_BASE_URL= http://127.0.0.1:8080

GOOGLE_CLIENT_IOS = 942364776611-nvvrm0dqrocnj8n4am2ltbpt472ik16u.apps.googleusercontent.com

GOOGLE_CLIENT_ANDROID = 942364776611-t5jmpapflei7bgk0ghkt9psd0092dui6.apps.googleusercontent.com

GOOGLE_CLIENT_WEB = 942364776611-skusp7bsbfphdhjlh4e8hlrq3e7jl677.apps.googleusercontent.com

POCKET_BASE_USERNAME= jersysilvafernandes@gmail.com

POCKET_BASE_PASSWORD= Ii13a2019!

GOOGLE_BASE_URL= https://www.googleapis.com/userinfo/v2/me

Certifique-se de substituir `your_google_client_id` e `your_pocketbase_url` pelos valores corretos das suas credenciais.

## Instalação e Execução

### Passo 1: Instalar Dependências

Utilize o gerenciador de pacotes de sua preferência para instalar as dependências do projeto. Execute um dos comandos abaixo:

bash

# Com Yarn

yarn install

# Com NPM

npm install

### Passo 2: Inicializar o Backend

Certifique-se de que o backend está rodando e acessível antes de iniciar o aplicativo.

### Passo 3: Executar a Aplicação

Para rodar a aplicação mobile, utilize um dos comandos abaixo dependendo da plataforma desejada:

#### iOS

bash

# Com Yarn

yarn ios

# Com NPM

npx react-native run-ios

#### Android

bash

# Com Yarn

yarn android

# Com NPM

npx react-native run-android

> **Nota**: No caso de erros ao executar no iOS, certifique-se de que todas as dependências específicas para o iOS estão corretamente configuradas (como Xcode, CocoaPods, etc.).

## Screenshots da Aplicação

Adicione aqui screenshots mostrando a aplicação em execução para ajudar na visualização do sistema.

- **Screenshot 1**:  
  ![Screenshot 1](path_to_screenshot_1) <!-- Insira o caminho da imagem -->

- **Screenshot 2**:  
  ![Screenshot 2](path_to_screenshot_2) <!-- Insira o caminho da imagem -->
