# Backend - Task Manager

Este é o backend de uma aplicação simples de gerenciamento de tarefas. Ele foi desenvolvido utilizando Node.js com Express e utiliza PostgreSQL como banco de dados. O banco de dados é executado em um contêiner Docker, e o projeto possui um arquivo `docker-compose.yml` para facilitar a configuração.

## Funcionalidades

- Listar tarefas (`GET /tasks`)
- Adicionar tarefas (`POST /tasks`)

## Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Docker

## Pré-requisitos

- Node.js instalado
- Docker instalado

## Configuração do Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/diogofernandoj/tasks-backend.git
   ```

2. Crie um arquivo `.env` no diretório raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```env
   POSTGRES_PASSWORD="password"
   POSTGRES_USER="postgres"
   POSTGRES_PORT="5432"
   POSTGRES_HOST="localhost"
   POSTGRES_DB="app"
   ```

3. Inicie o Docker para configurar o banco de dados:

   ```bash
   docker-compose up -d
   ```

4. Instale as dependências do projeto:

   ```bash
   npm install
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

## Endpoints da API

### Listar Tarefas

**GET** `/tasks`

Retorna todas as tarefas cadastradas no banco de dados.

Exemplo de Resposta:

```json
[
  {
    "id": 1,
    "title": "Fazer compras"
  },
  {
    "id": 2,
    "title": "Estudar Node.js"
  }
]
```

### Adicionar Tarefa

**POST** `/tasks`

Adiciona uma nova tarefa ao banco de dados.

Exemplo de Requisição:

```json
{
  "title": "Nova tarefa"
}
```
