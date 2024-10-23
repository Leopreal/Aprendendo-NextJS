import type { NextApiRequest, NextApiResponse } from "next";



export default function questao(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const id = req.query.id;
    res.status(200).json({
      id,
      enunciado: "qual sua cor favorita",
      respostas: ["branca", "preta", "vermelha"],
    });
  } else {
    res.status(405).send;
  }
}
