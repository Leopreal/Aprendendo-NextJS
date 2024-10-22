import { useRouter } from "next/router";
import Link from "next/link";

const buscar = () => {
  const router = useRouter();
  const numid = router.query.id;

  return (
    <div>
      Rota / {numid} / buscar!!!
      <ul>
        <li>
          <Link href={"/router"}>
            <button>Voltar</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default buscar;
