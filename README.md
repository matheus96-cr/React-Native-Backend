# ⚙️ README: Backend CRUD de Tarefas (Desafio III)

Este repositório contém o servidor Backend RESTful desenvolvido em **Node.js** e **Express**, que implementa as operações **CRUD (Create, Read, Update, Delete)** para a entidade "Tarefa" (`/tasks`).

**Este Backend foi desenvolvido para cumprir a exigência de ter um servidor próprio no Desafio Individual III**.

### 🛠️ Tecnologias e Setup

* **Tecnologia:** Node.js + Express
* **Dados:** Array em memória (sem banco de dados externo). Os dados persistem apenas enquanto o servidor estiver rodando.
* **Porta:** `3000`

### 🚀 Como Iniciar (Rodar a API)

1.  **Clone o Repositório:**
    ```bash
    git clone [Insira a URL do seu Repositório Backend aqui]
    cd [Nome da sua pasta Backend]
    ```
2.  **Instalar dependências:**
    ```bash
    npm install
    ```
3.  **Rodar o servidor:**
    ```bash
    node server.js
    ```
    O servidor estará acessível em `http://localhost:3000`.

---

### 🌐 Endpoints da API (CRUD de Tarefas)

A entidade principal é `/tasks`. Para testar, use ferramentas como o Postman ou seu navegador (para o método `GET`).

| Operação | Método | Endpoint | Body (Exemplo JSON) | Descrição |
| :--- | :--- | :--- | :--- | :--- |
| **READ** | `GET` | `/tasks` | N/A | Lista todas as tarefas (incluindo as duas iniciais). |
| **CREATE** | `POST` | `/tasks` | `{ "title": "Nova Tarefa" }` | Cria e adiciona uma nova tarefa. |
| **UPDATE** | `PUT` | `/tasks/:id` | `{ "title": "Novo Título", "completed": true }` | Edita o título e/ou o status da tarefa pelo ID. |
| **DELETE** | `DELETE` | `/tasks/:id` | N/A | Remove uma tarefa pelo ID. |

---

### 🔗 Repositório Frontend (Aplicação Mobile)

Esta API deve ser consumida pelo App React Native desenvolvido no repositório:

* **App-React-Native-Aplicao**: https://github.com/matheus96-cr/App-React-Native-Aplicao
