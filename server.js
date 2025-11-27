// server.js

const express = require('express');
const cors = require('cors');
const app = express();
// A API rodará na porta 3000
const PORT = 3000; 

// Variável para simular o banco de dados (BD na memória)
let tasks = [
    { id: 1, title: 'Concluir setup do Backend', completed: false },
    { id: 2, title: 'Criar o repositório de entrega', completed: true },
];
let nextId = 3; // Contador para novos IDs

// Middlewares
app.use(cors()); // Permite que o App React Native acesse a API
app.use(express.json()); // Permite ler JSON enviado pelo App

// ------------------------------------------------------------------
// ROTAS CRUD para a entidade /tasks
// ------------------------------------------------------------------

// 1. READ (GET) - Listar todas as tarefas
app.get('/tasks', (req, res) => {
    return res.json(tasks); 
});

// 2. CREATE (POST) - Adicionar uma nova tarefa
app.post('/tasks', (req, res) => {
    const { title } = req.body;
    
    if (!title) {
        return res.status(400).json({ error: 'O título da tarefa é obrigatório.' });
    }
    
    const newTask = {
        id: nextId++,
        title,
        completed: false, // Tarefa nova começa como incompleta
    };
    
    tasks.push(newTask);
    return res.status(201).json(newTask); // 201 Created
});

// 3. UPDATE (PUT/PATCH) - Editar uma tarefa existente (por ID)
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    
    const taskIndex = tasks.findIndex(t => t.id === id);
    
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    
    // Atualiza apenas os campos que vieram
    tasks[taskIndex].title = title !== undefined ? title : tasks[taskIndex].title;
    tasks[taskIndex].completed = completed !== undefined ? completed : tasks[taskIndex].completed;
    
    return res.json(tasks[taskIndex]);
});

// 4. DELETE (DELETE) - Deletar uma tarefa (por ID)
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = tasks.length;
    
    // Remove a tarefa
    tasks = tasks.filter(t => t.id !== id);
    
    if (tasks.length === initialLength) {
        return res.status(404).json({ error: 'Tarefa não encontrada.' });
    }
    
    return res.status(204).send(); // 204 No Content (sucesso)
});


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});