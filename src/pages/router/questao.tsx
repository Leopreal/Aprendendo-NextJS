import { useEffect, useState } from "react";

interface Questoes {
  id: string;
  enunciado: string;
  respostas: string[];
}

const Questao = () => {
  const [questao, setQuestao] = useState<Questoes | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((resp) => resp.json())
      .then((json) => setQuestao(json));
  }, []);

  function renderResposta(): JSX.Element[] {
    if (questao?.respostas) {
      return questao.respostas.map((resp) => {
        return <li key={resp}>{resp}</li>;
      });
    }
    return [];
  }

  return (
    <div>
      <h1>questao</h1>
      {questao ? (
        <div>
          <span>{questao.enunciado}</span>
          <ul>{renderResposta()}</ul>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Questao;
