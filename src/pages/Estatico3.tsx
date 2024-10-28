import { GetStaticProps } from "next";

interface Produtcs {
  id: number;
  name: string;
  price: number;
}

interface EstaticoProps {
  products: Produtcs[];
}

export const getStaticProps: GetStaticProps<EstaticoProps> = async () => {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const products: Produtcs[] = await resp.json();
  return {
    props: {
      products,
    },
  };
};

const Estatico3: React.FC<EstaticoProps> = (props) => {
  function renderizarProdutos() {
    return props.products.map((prods) => (
      <li key={prods.id}>
        {prods.name} - {prods.price}
      </li>
    ));
  }
  return (
    <div>
      <h1>Lista de produtos</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
};

export default Estatico3;
