import React, { useEffect, useState } from 'react'
import '../css/estilo.css'

const Tarefas = () => {
  const [tarefas, setTarefas] = useState(() => {
    const salvarTarefa = localStorage.getItem("item-tarefa");
    return salvarTarefa ? JSON.parse(salvarTarefa):[];
  });

  const [campo, setCampo] = useState("");

  // HOOK useEffect - realiza o efeito colateral, no exemplo ao cadastrar
  useEffect(() => {
    localStorage.setItem("item-tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  // Função adicionar tarefa
  const AdicionarTarefa = (e) => {
    e.preventDefault();
    if (!campo.trim()) return;

    const novaTarefa = {
      id: Date.now(),
      text: campo,
    };
    setTarefas([...tarefas, novaTarefa]);
    setCampo('');
  };

  // Função Remover Tarefa
  const removerTarefa = (id) => {
    const apagarTarefa = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(apagarTarefa);
  };

  return (
    <>
      <h1>Minha lista de tarefas</h1>
      <form onSubmit={AdicionarTarefa}>
        <input
          type='text'
          value={campo}
          onChange={(e) => setCampo(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type='submit'>Adicionar</button>
      </form>

      <ul>
        {tarefas.map ((tarefa)=> (

          <li key={tarefa.id}>
            <span>{tarefa.text}</span>
          <button onClick = {()=> removerTarefa(tarefa.id)}>Deletar</button>
          </li>
        ))} 
          
      </ul>
      {/* {Compara se não tiver tarefas deixar a nenhuma tarefa salva} */}
      {tarefas.length === 0 && <p>Nenhuma tarefa salva</p>}
    </>
  )
}

export default Tarefas