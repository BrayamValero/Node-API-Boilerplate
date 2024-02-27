import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle"
import { handleHttpError } from "../utils/error.handle"

const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userJWT = req.headers.authorization || ""
    const JWT = userJWT?.split(" ").pop()
    const isUser = verifyToken(`${JWT}`)
    if (isUser) {
      res.locals.user = isUser
      next()
    }
  } catch (error) {
    handleHttpError(res, error)
  }
}

export { authUser }
