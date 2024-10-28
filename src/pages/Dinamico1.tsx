import { GetServerSideProps } from "next";

interface DinamicProps {
  numero: number;
}

export const getServerSideProps: GetServerSideProps<
  DinamicProps
> = async () => {
  return {
    props: {
      numero: Math.random(),
    },
  };
};

const Dinamico1: React.FC<DinamicProps> = (props) => {
  return (
    <div>
      <h1>Dinamico 1</h1>
      <span>{props.numero}</span>
    </div>
  );
};

export default Dinamico1;
