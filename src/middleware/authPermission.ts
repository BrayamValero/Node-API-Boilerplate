import { NextFunction, Request, Response } from "express";

const Model = require("../database/models");

const authPermission = (permission: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // [User ID] => Obtaining from authUser middleware
      const { id: userId } = res.locals.user;

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
      });

      if (result.length === 0) {
        res.status(401);
        res.send("ERROR_DENIED_PERMISSION");
      } else {
        next();
      }
    } catch (error) {
      res.status(400);
      res.send("QUERY_ERROR");
    }
  };
};

export { authPermission };
