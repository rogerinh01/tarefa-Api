import { Router } from "express";
import { listarTarefas, inserir, tarefasFinalizadas, alterar, apagar } from "../repository/tarefaRepository.js";

let server = Router();

server.post('/tarefa/inserir', async (req, resp) => {
    let tarefa = req.body;

    let dados = await inserir(tarefa) 
    resp.send(dados) 
})

server.put('/tarefa/alterar', async (req, resp) => {
    let id = req.query.id;

    let tarefa = req.query.tarefa;

    let dados = await alterar(tarefa, id);
    resp.send('Tarefa Alterada!!');
})

server.get('/tarefas/finalizada', async(req,resp) =>{
    let dados = await tarefasFinalizadas()
    resp.send(dados)
    
    
})



server.get('/tarefas', async(req,resp) =>{
    let dados = await listarTarefas()
    resp.send(dados)
    
    
})

server.delete('/tarefa', async (req,resp) =>{
    let id = req.query.id;

    let dados = await apagar(id);

    resp.send('Tarefa Apagada!!')
});



export default server;