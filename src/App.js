import { useState, useEffect } from 'react';



function App() {

  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'vender coca-cola',
    'praticar escuta'

  ]);



  useEffect(() => {
    const tarefasStorage = localStorage.getItem('@tarefa');
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))}

  },[]);

  useEffect(() => {
    
    localStorage.setItem('@tarefa', JSON.stringify(tarefas));


  }, [tarefas]);

  function handleRegister(e) {
    e.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');


  }



  return (
    <div>
      <h1>Seja bem vindo!!!</h1>
      <br />
      <h1>Cadastro</h1>
      <form onSubmit={handleRegister}>
        <br />
        <input placeholder="Digite uma Tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <br />
        <button type="submit"> Registrar</button>

      </form>

      <div>
        <ul>
          {tarefas.map(tarefa => (<li key={tarefa}>{tarefa}</li>))}
        </ul>

      </div>







    </div>
  );
}

export default App;

