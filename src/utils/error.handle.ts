import { Response } from "express";

const handleHttp = (res: Response, error: string, rawError?: any) => {
  console.log(rawError);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
