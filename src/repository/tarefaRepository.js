import conexao from "./connection.js";

export async function listarTarefas(){
    let sql = 'select * from tb_tarefa;'

    let resp = await conexao.query(sql);
    let dados = resp[0];

    return dados;
}

export async function inserir(tarefa){
    let sql = 'insert into tb_tarefa(ds_tarefa,nr_ordem,bt_finalizado,dt_cadastro) values(?,?,?,?)';
    let resp = await conexao.query(sql, [tarefa.ds, tarefa.ordem, tarefa.finalizado, tarefa.data]);
    let dados = resp[0];

    tarefa.id = dados.inserirID
    return tarefa;
}

export async function tarefasFinalizadas(){
    let sql = 'select * from tb_tarefa where bt_finalizado =  1';
    let resp = await conexao.query(sql)

    let dados = resp[0]
    return dados
}

export async function alterar(tarefa,id){
    let sql = 'UPDATE tb_tarefa SET ds_tarefa = ? WHERE id_tarefa = ?';
    let resp = await conexao.query(sql, [tarefa, id]);

    let dados = resp[0];
    return dados;
}

export async function apagar(id){
    let sql = 'delete from tb_tarefa where id_tarefa = ?';
    let resp = await conexao.query(sql , [id]);

    let dados = resp[0];
    return dados
}


