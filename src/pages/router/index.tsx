import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>Rota index</h1>
      <ul>
        <Link href={"/router/params?nome=leo&id=123"}>
          <li>Params</li>
        </Link>
        <Link href={"/router/123/buscar"}>
          <button>Buscar</button>
        </Link>
      </ul>
    </div>
  );
};

export default index;
