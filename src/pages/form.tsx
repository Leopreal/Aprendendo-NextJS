import { useState } from "react";

interface Usuario {
  nome: string;
  idade: string;
}

const Form = () => {
  const [nome, setNome] = useState<string>("");
  const [idade, setIdade] = useState<number>(0);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const handleEnviar = async () => {
    fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ nome, idade }),
    });

    const resp = await fetch("/api/form");
    const usuarios = await resp.json();
    setUsuarios(usuarios);
  };

  const renderizaUsuario = () => {
    return usuarios.map((user, i) => {
      return (
        <li key={i}>
          {user.nome} tem {user.idade}
        </li>
      );
    });
  };

  return (
    <div>
      <h1>integrando com API</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(+e.target.value)}
      />
      <button onClick={handleEnviar}>Enviar</button>
      <ul>{renderizaUsuario()}</ul>
    </div>
  );
};

export default Form;
