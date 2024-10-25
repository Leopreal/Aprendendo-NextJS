import { GetStaticProps } from "next";

interface EstaticoProps {
  numero: number;
}

export const getStaticProps: GetStaticProps<EstaticoProps> = async () => {
  return {
    props: {
      numero: Math.random(), // Usando `numero` para corresponder à interface
    },
  };
};

const Estatico: React.FC<EstaticoProps> = ({ numero }) => {
  return (
    <div>
      <span>Aleatório: {numero}</span>
    </div>
  );
};

export default Estatico;
