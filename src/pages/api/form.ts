import type { NextApiRequest, NextApiResponse } from "next";

const usuarios: string[] = [];

export default function form(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    post(req, res);
  } else {
    res.status(200).json(usuarios);
  }
  res.status(200).json({
    dados: JSON.parse(req.body),
  });
}

function post(req: NextApiRequest, res: NextApiResponse) {
  const usuario = JSON.parse(req.body);
  usuarios.push(usuario);
  res.status(200).json({ message: "adicionado" });
}
