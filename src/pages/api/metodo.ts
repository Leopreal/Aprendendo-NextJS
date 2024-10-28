import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({
    metodo: req.method,
  });
};

export default handler;
