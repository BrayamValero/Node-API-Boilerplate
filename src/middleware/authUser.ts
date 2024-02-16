import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userJWT = req.headers.authorization || "";
    const JWT = userJWT?.split(" ").pop();
    const isUser = verifyToken(`${JWT}`);
    if (!isUser) {
      res.status(401);
      res.send("ERROR_JWT_INVALID");
    } else {
      res.locals.user = isUser;
      next();
    }
  } catch (error) {
    res.status(400);
    res.send("ERROR_USERS_ONLY");
  }
};

export { authUser };
