import { NextFunction, Request, Response } from "express"
import { handleHttpError } from "../utils/error.handle"

const Model = require("../database/models")

const authPermission = (permission: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // [User ID] => Obtaining from authUser middleware
      const { id: userId } = res.locals.user

      // Match permission with allowed permissions
      const result = await Model.Permission.findAll({
        where: {
          name: permission,
        },
        include: [
          {
            model: Model.User_Role,
            where: { userId },
            attributes: [],
          },
        ],
      })

      if (result.length <= 0) {
        throw { status: 401, message: "Denied permission" }
      } else {
        next()
      }
    } catch (error) {
      handleHttpError(res, error)
    }
  }
}

export { authPermission }
