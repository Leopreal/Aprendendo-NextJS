import type { NextApiRequest, NextApiResponse } from "next";

export default function parametros(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    parametro: req.query,   
  });
}
