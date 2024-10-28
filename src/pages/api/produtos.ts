// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  price: number;
  name: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json([
    { id: 1, name: "Caneta", price: 4.99 },
    { id: 2, name: "Lápis", price: 1.99 },
    { id: 3, name: "Caderno", price: 13.99 },
    { id: 4, name: "Borracha", price: 1.99 },
  ]);
}
