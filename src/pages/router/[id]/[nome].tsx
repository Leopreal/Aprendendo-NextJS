import { useRouter } from "next/router";

const Nome = () => {
  const router = useRouter();
  const numId = router.query.id;
  const nomeCode = router.query.nome;
  return (
    <div>
      <h1>
        Router / {numId} / {nomeCode}
      </h1>
    </div>
  );
};

export default Nome;
