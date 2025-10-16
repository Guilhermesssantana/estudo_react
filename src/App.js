import { useState } from 'react';



function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();

    alert('cadastrado com sucesso')
    setUser({
      nome: nome,
      idade: idade,
      email: email,
    })
  }



  return (
    <div>
      <h1>Seja bem vindo!!!</h1>
      <br />
      <h1>Cadastro</h1>
      <form onSubmit={handleRegister}>
        <br />
        <label>Nome:</label>
        <br />
        <input placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <br />
        <br />
        <label>Email:</label><br />
        <input placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <br />
        <br />
        <label>Idade:</label><br />
        <input placeholder="Digite sua Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)} />

        <br />
        <br />

        <button type="submit"> Registrar</button>

      </form>

      <div>
        <span> Bem vindo:{user.nome}</span><br />
        <span> Idade:{user.idade} </span><br />
        <span>Email:{user.email} </span>

      </div>







    </div>
  );
}

export default App;

