import { useRouter } from "next/router";
import Link from "next/link";

const Params = () => {
  const router = useRouter();
  const nome = router.query.nome;
  const id = router.query.id;

  return (
    <div>
      <h1>
        Rota Params: {nome} e {id}
      </h1>
      <Link href={"/router"}>
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default Params;
